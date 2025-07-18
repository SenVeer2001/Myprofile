import { useState, useEffect } from 'react';
import { ArrowUp, Contact, Moon, Sun } from 'lucide-react';

// Components
import { Header } from './components/Header';
import { Hero } from './components/Hero';


// Images
// Use URL import for public directory assets
import { Github, Instagram, Linkedin, Mail, Twitter, Youtube, Globe } from 'lucide-react';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import { Achievements } from './components/Achievements';
import Footer from './components/Footer';

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage for dark mode preference
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`min-h-screen bg-[#f9fafb] text-gray-900 dark:bg-[#111827] dark:text-white transition-colors duration-300`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      <Achievements />
      <Contact />
      <Footer />

      {/* Scroll to top button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-[#3498db] to-[#2c3e50] rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 animate-pulse z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="text-white" />
        </button>
      )}
    </div>
  );
}

const About = () => {
  return (
    <section id="about" className="py-16 px-4 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/3">
          <img 
            src="/profile.png" 
            alt="Veerbahadur Sen" 
            className="rounded-lg shadow-md w-full max-w-sm mx-auto object-cover aspect-square"
          />
          
          {/* Social Media Icons */}
          <div className="flex justify-center gap-4 mt-6">
            <a href="https://github.com/Veersen2001" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#3498db] text-white transition-all transform hover:scale-110">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/veerbahadur-sen-a70965221/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#0A66C2] text-white transition-all transform hover:scale-110">
              <Linkedin size={20} />
            </a>
            {/* <a href="https://twitter.com/gprspradeep" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1DA1F2] hover:text-white transition-all transform hover:scale-110">
              <Twitter size={20} />
            </a> */}
            {/* <a href="https://instagram.com/gprspradeep" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#E4405F] hover:text-white transition-all transform hover:scale-110">
              <Instagram size={20} />
            </a> */}
            {/* <a href="https://youtube.com/@gprspradeep" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#FF0000] hover:text-white transition-all transform hover:scale-110">
              <Youtube size={20} />
            </a> */}
          </div>
        </div>
        
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <div className="space-y-4">
            <p className="text-lg font-medium bg-gradient-to-r from-[#3498db] to-[#2c3e50] bg-clip-text text-transparent">
              Hi! My name is Veerbahadur Sen I'm a
            </p>
            <div className="space-y-2">
              <p className="text-lg flex items-center gap-2 hover:translate-x-2 transition-transform">
                👨‍💻 <span className="font-medium">Web Developer</span> at <span className="text-[#3498db]">Technopedia Software Pvt. Ltd.</span> (1 year)
              </p>
              {/* <p className="text-lg flex items-center gap-2 hover:translate-x-2 transition-transform">
                ⭐ <span className="font-medium">RedHat Student Brand Ambassador</span>
              </p> */}
              <p className="text-lg flex items-center gap-2 hover:translate-x-2 transition-transform">
                🏆 <span className="font-medium">Sprint Hacks 2k23 Winner @KIET</span>
              </p>
              <p className="text-lg flex items-center gap-2 hover:translate-x-2 transition-transform">
                🚀 <span className="font-medium">Open Source | Scaler |GSSoC|SSOC| ADSC Lead</span>
              </p>
            </div>
            <p className="text-lg hover:scale-[1.02] transition-transform">
              I love creating things that exists on the internet. My interest in
              web development started in 2022 when I thought to build my own portfolio website.
            </p>
            <p className="text-lg hover:scale-[1.02] transition-transform">
              Instead of just making a simple website, I started exploring modern web technologies at <span className="text-[#3498db] font-medium">Technopedia Software</span>. Creating responsive and interactive web applications
              taught me a lot about design & development!
            </p>
            <p className="text-lg hover:scale-[1.02] transition-transform">
              My main focus these days is building interesting & creative
              web applications with React, TypeScript, and modern CSS frameworks. I like to code things from scratch, and enjoy
              bringing ideas to life in the browser.
            </p>
            
            {/* Contact Links */}
            <div className="flex flex-wrap gap-4 mt-6">
              <a href="mailto:veerbahadursen@gmail.com" className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#3498db] hover:text-white transition-all">
                <Mail size={16} />
                <span>Email Me</span>
              </a>
              <a href="https://your-portfolio.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#2c3e50] hover:text-white transition-all">
                <Globe size={16} />
                <span>Portfolio</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;