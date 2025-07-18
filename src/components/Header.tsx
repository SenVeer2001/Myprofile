import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Code, Briefcase, Award, Mail, Layout, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header = ({ darkMode, setDarkMode }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white dark:bg-gray-900 shadow-md dark:shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#3498db] to-[#2c3e50] p-[2px] hover:scale-110 transition-transform cursor-pointer">
            <img src="/profileImage.jpg" alt="Veerbahadur Sen" className="w-full h-full rounded-full object-cover ring-2 ring-white dark:ring-gray-900" />
          </div>
          <div>
            <div className="font-bold text-lg">
              <span className="text-[#3498db]">Veerbahadur</span>
              <span className="text-[#2c3e50] dark:text-gray-200">Sen</span>
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Full Stack Developer</div>
          </div>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {[
            { name: 'Home', icon: Home },
            { name: 'About', icon: User },
            { name: 'Skills', icon: Code },
            { name: 'Projects', icon: Briefcase },
            { name: 'Experience', icon: Award },
            { name: 'Portfolio', icon: Layout },
            { name: 'Contact', icon: Mail }
          ].map((item) => (
            <a 
              key={item.name}
              href={`#${item.name.toLowerCase()}`}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-gray-800 hover:text-[#3498db] hover:bg-[#3498db]/10 transition-all group dark:text-gray-200 dark:hover:text-[#8ec9f3] dark:hover:bg-[#3498db]/20"
            >
              <item.icon size={18} className="group-hover:scale-110 transition-transform" />
              {item.name}
            </a>
          ))}
        </nav>

        {/* Dark mode toggle button */}
        {/* <button
          onClick={() => setDarkMode((prev) => !prev)}
          className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 shadow-md hover:scale-110 transition-transform"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-700" />}
        </button> */}

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-800 dark:text-gray-200 ml-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg rounded-b-2xl">
          <div className="flex flex-col py-4 px-2 space-y-1">
            {[
              { name: 'Home', icon: Home },
              { name: 'About', icon: User },
              { name: 'Skills', icon: Code },
              { name: 'Projects', icon: Briefcase },
              { name: 'Experience', icon: Award },
              { name: 'Portfolio', icon: Layout },
              { name: 'Contact', icon: Mail }
            ].map((item) => (
              <a 
                key={item.name}
                href={`#${item.name.toLowerCase()}`}
                className="flex items-center gap-3 py-3 px-4 text-gray-800 hover:bg-[#3498db]/10 hover:text-[#3498db] rounded-xl transition-all dark:text-gray-200 dark:hover:bg-[#3498db]/20 dark:hover:text-[#8ec9f3]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <item.icon size={20} />
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};