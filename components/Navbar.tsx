
import React, { useState, useEffect } from 'react';
import { Settings } from 'lucide-react';

interface NavbarProps {
  onDashboardClick?: () => void;
  isDashboard?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onDashboardClick, isDashboard }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isDashboard ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm border-b border-slate-100' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="text-xl font-bold tracking-tight text-blue-600">
          <img src="/assets/ramin.png" alt="Ramin Logo" className="h-8 w-auto" />
        </a>
        
        {!isDashboard && (
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}

        <div className="flex items-center gap-4">
          <button 
            onClick={onDashboardClick}
            className="p-2 text-slate-400 hover:text-blue-600 transition-colors rounded-lg hover:bg-slate-50"
            title={isDashboard ? "Exit Dashboard" : "Open Dashboard"}
          >
            <Settings size={20} />
          </button>
          
          {isDashboard ? (
            <button 
              onClick={onDashboardClick}
              className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              Back to Site
            </button>
          ) : (
            <a 
              href="#contact" 
              className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              Let's talk
            </a>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
