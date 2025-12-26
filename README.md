# 🚀 Md. Ruhul Amin - Portfolio Website

A modern, interactive portfolio website showcasing my professional experience, skills, projects, and achievements as a Software Engineer. Built with cutting-edge web technologies and featuring stunning 3D visualizations powered by Three.js.

## 🌐 Live Demo

**[View Live Portfolio →](https://ruhulamin.eruditech.com)**

Experience the interactive 3D backgrounds, smooth animations, and responsive design in action!

## ✨ Features

### 🎨 Interactive 3D Backgrounds
- Multiple animated 3D backgrounds (Cube, Torus, Ring, Particles)
- Smooth transitions and responsive animations
- Built with React Three Fiber and Three.js

### 📱 Fully Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Modern UI with Tailwind CSS aesthetics

### 🔐 Admin Dashboard
- Secure authentication with Supabase
- Real-time content management
- Edit portfolio content, experiences, skills, and projects on the fly
- LocalStorage fallback for offline editing

### 📊 Dynamic Sections
- **Hero Section**: Eye-catching introduction with 3D effects
- **Skills**: Categorized technical and soft skills
- **Experience**: Detailed work history timeline
- **Achievements**: Competitive programming wins and accolades
- **Portfolio**: Project showcase with descriptions and technologies
- **Contact**: Easy-to-use contact form

## 🛠️ Tech Stack

### Frontend
- **React 19** - Latest React with modern hooks
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling

### 3D Graphics
- **Three.js** - 3D rendering engine
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for R3F

### Backend & Database
- **Supabase** - Backend as a Service
- **PostgreSQL** - Relational database
- **Supabase Auth** - Authentication system

### Icons & UI
- **Lucide React** - Beautiful icon library

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Supabase account (for backend features)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd ramin_portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Supabase** (Optional - for admin features)
   
   Create a `.env` file in the root directory:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

   Run the SQL setup script in your Supabase SQL editor:
   ```bash
   # See supabase_setup.sql for database schema
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 📦 Building for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` directory.

## 🎯 Key Components

| Component | Description |
|-----------|-------------|
| `Hero` | Landing section with name and title |
| `Skills` | Technical skills organized by category |
| `Experience` | Professional work history |
| `Achievements` | Awards and competitive programming wins |
| `Portfolio` | Project showcase |
| `Contact` | Contact information and form |
| `Dashboard` | Admin panel for content management |
| `Login` | Authentication interface |

## 🎨 3D Backgrounds

Choose from multiple animated backgrounds:
- **Cube Background**: Rotating 3D cubes
- **Torus Background**: Spinning torus shapes
- **Ring Background**: Floating rings
- **Particles Background**: Dynamic particle system

## 🔒 Admin Features

Access the dashboard by clicking the "Dashboard" button in the navigation. Login with your Supabase credentials to:
- ✏️ Edit personal information
- 🛠️ Update skills and technologies
- 💼 Manage work experiences
- 🏆 Add/edit achievements
- 📁 Showcase new projects
- 💾 Auto-save to Supabase
- 📱 LocalStorage backup

## 📂 Project Structure

```
ramin_portfolio/
├── components/           # React components
│   ├── Achievements.tsx
│   ├── Contact.tsx
│   ├── Dashboard.tsx
│   ├── Experience.tsx
│   ├── Hero.tsx
│   ├── Login.tsx
│   ├── Navbar.tsx
│   ├── Portfolio.tsx
│   ├── Skills.tsx
│   └── *Background.tsx  # 3D background components
├── lib/
│   └── supabase.ts      # Supabase client
├── App.tsx              # Main app component
├── constants.ts         # Initial portfolio data
├── types.ts             # TypeScript type definitions
└── vite.config.ts       # Vite configuration
```

## 🌐 Deployment

This app can be deployed to:
- **Vercel** (recommended for Vite apps)
- **Netlify**
- **GitHub Pages**
- **Any static hosting service**

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the MIT License.

## 📧 Contact

**Md. Ruhul Amin**
- Email: ruhul.amin.tnt@gmail.com
- GitHub: [ru1n00](https://github.com/ru1n00)
- Codeforces: [ru1n00](https://codeforces.com/profile/ru1n00)
- Location: Dhaka, Bangladesh

---

<div align="center">
  <p>Built with ❤️ using React, TypeScript, and Three.js</p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>
