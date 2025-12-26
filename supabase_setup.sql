-- Fix the existing portfolio_content table constraints
-- Handle existing primary key and data issues

-- First, drop any existing primary key constraint that's not on user_id
DO $$
DECLARE
    constraint_name TEXT;
BEGIN
    -- Find and drop primary key constraints that are not on user_id
    FOR constraint_name IN
        SELECT con.conname
        FROM pg_constraint con
        JOIN pg_class rel ON rel.oid = con.conrelid
        JOIN pg_attribute att ON att.attrelid = con.conrelid AND att.attnum = ANY(con.conkey)
        WHERE rel.relname = 'portfolio_content'
        AND con.contype = 'p'
        AND att.attname != 'user_id'
    LOOP
        EXECUTE 'ALTER TABLE portfolio_content DROP CONSTRAINT ' || constraint_name;
    END LOOP;
END $$;

-- If user_id is not already the primary key, make it so
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_constraint con
        JOIN pg_class rel ON rel.oid = con.conrelid
        JOIN pg_attribute att ON att.attrelid = con.conrelid AND att.attnum = ANY(con.conkey)
        WHERE rel.relname = 'portfolio_content'
        AND con.contype = 'p'
        AND att.attname = 'user_id'
    ) THEN
        -- Check for and remove duplicate user_id entries (keep the most recent)
        DELETE FROM portfolio_content
        WHERE user_id IN (
            SELECT user_id
            FROM portfolio_content
            GROUP BY user_id
            HAVING COUNT(*) > 1
        )
        AND updated_at NOT IN (
            SELECT MAX(updated_at)
            FROM portfolio_content
            GROUP BY user_id
        );

        -- Add primary key on user_id
        ALTER TABLE portfolio_content ADD CONSTRAINT portfolio_content_pkey PRIMARY KEY (user_id);
    END IF;
END $$;

-- Enable RLS if not already enabled
ALTER TABLE portfolio_content ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist and recreate them
DROP POLICY IF EXISTS "Users can view their own portfolio content" ON portfolio_content;
DROP POLICY IF EXISTS "Users can insert their own portfolio content" ON portfolio_content;
DROP POLICY IF EXISTS "Users can update their own portfolio content" ON portfolio_content;
DROP POLICY IF EXISTS "Users can delete their own portfolio content" ON portfolio_content;

-- Create policies
CREATE POLICY "Users can view their own portfolio content" ON portfolio_content
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own portfolio content" ON portfolio_content
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own portfolio content" ON portfolio_content
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own portfolio content" ON portfolio_content
  FOR DELETE USING (auth.uid() = user_id);