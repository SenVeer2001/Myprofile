import React, { useEffect, useRef } from 'react';
import { Eye, Send, Code, Download, ExternalLink, Github } from 'lucide-react';

export const Hero = () => {
  // Canvas animation logic for connect-the-dots
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = canvas.parentElement ? canvas.parentElement.offsetHeight : window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Responsive resize
    const handleResize = () => {
      width = window.innerWidth;
      height = canvas.parentElement ? canvas.parentElement.offsetHeight : window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);

    // Dot and line animation logic
    const DOTS = 30;
    const dots: { x: number; y: number; vx: number; vy: number; }[] = [];
    for (let i = 0; i < DOTS; i++) {
      dots.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      // Draw lines
      for (let i = 0; i < DOTS; i++) {
        for (let j = i + 1; j < DOTS; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            if (!ctx) continue;
            ctx.strokeStyle = 'rgba(52, 152, 219, 0.15)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      }
      // Draw dots
      for (let i = 0; i < DOTS; i++) {
        if (!ctx) continue;
        ctx.beginPath();
        ctx.arc(dots[i].x, dots[i].y, 3, 0, 2 * Math.PI);
        ctx.fillStyle = 'rgba(52, 152, 219, 0.7)';
        ctx.shadowColor = '#3498db';
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      // Move dots
      for (let i = 0; i < DOTS; i++) {
        dots[i].x += dots[i].vx;
        dots[i].y += dots[i].vy;
        if (dots[i].x < 0 || dots[i].x > width) dots[i].vx *= -1;
        if (dots[i].y < 0 || dots[i].y > height) dots[i].vy *= -1;
      }
      requestAnimationFrame(animate);
    }
    animate();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="home" className="pt-28 pb-16 px-4 min-h-screen flex items-center bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-800 relative overflow-hidden transition-colors duration-300">
      {/* Animated connect-the-dots background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      />
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-b from-[#3498db]/10 to-transparent rounded-full transform rotate-12 animate-float dark:from-[#3498db]/20"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-t from-[#2c3e50]/10 to-transparent rounded-full transform -rotate-12 animate-float-delayed dark:from-[#2c3e50]/20"></div>
      </div>
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 z-10">
        <div className="md:w-1/2">
          <div className="inline-block px-3 py-1 bg-[#3498db]/10 text-[#3498db] rounded-full text-sm font-medium mb-6 hover:scale-110 transition-transform dark:bg-[#3498db]/20 dark:text-[#8ec9f3]">
            &lt;/&gt; Web Developer
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text dark:text-white">
            Hi, I'm <span className="text-[#3498db]">Veerbahadur</span> <span className="text-black dark:text-gray-200">Sen</span>
          </h1>
          
          <p className="text-lg mb-8 text-gray-700 leading-relaxed animate-fade-in dark:text-gray-300">
            I create beautiful, responsive websites and web applications with modern technologies like React, TypeScript, and Tailwind CSS. Let's build something amazing together!
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <a 
              href="#portfolio" 
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#3498db] to-[#2c3e50] text-white rounded-lg shadow-md hover:shadow-xl transition-all hover:scale-105 transform"
            >
              <Eye size={18} className="animate-pulse" />
              View My Work
            </a>
            <a 
              href="#contact" 
              className="flex items-center gap-2 px-6 py-3 bg-white text-white border border-gray-300 rounded-lg shadow-sm hover:shadow-lg transition-all hover:scale-105 transform glass-morphism"
            >
              <Send size={18} className="animate-bounce" />
              Contact Me
            </a>
            <a 
              href="/Veerbahadur_Sen_Fronted_Developer_Resume.pdf" 
              download="Veerbahadur_Sen_Fronted_Developer_Resume.pdf"
              className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg shadow-md hover:shadow-xl transition-all hover:scale-105 transform"
            >
              <Download size={18} className="animate-bounce" />
              Download Resume
            </a>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full bg-[#61DAFB]/10 flex items-center justify-center hover:scale-110 transition-transform z-30">
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" className="w-6 h-6" />
              </div>
              <div className="w-10 h-10 rounded-full bg-[#3178C6]/10 flex items-center justify-center hover:scale-110 transition-transform z-20">
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-6 h-6" />
              </div>
              <div className="w-10 h-10 rounded-full bg-[#38B2AC]/10 flex items-center justify-center hover:scale-110 transition-transform z-10">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Tailwind" className="w-6 h-6" />
              </div>
            </div>
            <span className="text-gray-600 animate-fade-in">Modern web development stack</span>
          </div>
        </div>
        
        <div className="md:w-1/2 relative">
          <div className="relative transform hover:scale-105 transition-all duration-500 hover:rotate-0 rotate-2">
            {/* Laptop mockup */}
            <div className="w-full max-w-[500px] mx-auto">
              <div className="bg-gray-800 rounded-t-xl p-2 h-6 flex items-center">
                <div className="flex space-x-1 ml-1">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 rounded-b-xl shadow-2xl border border-gray-700">
                {/* Code editor content */}
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm overflow-hidden">
                  <div className="flex items-center text-gray-500 mb-2">
                    <div className="flex space-x-2">
                      <span className="hover:text-white transition-colors">index.tsx</span>
                      <span className="hover:text-white transition-colors">App.tsx</span>
                      <span className="text-white border-b-2 border-[#3498db]">Hero.tsx</span>
                    </div>
                  </div>
                  <div className="space-y-1 text-xs sm:text-sm">
                    <div><span className="text-pink-400">import</span> <span className="text-blue-300">React</span> <span className="text-pink-400">from</span> <span className="text-green-300">'react'</span>;</div>
                    <div><span className="text-pink-400">import</span> { <span className="text-yellow-300">motion</span> } <span className="text-pink-400">from</span> <span className="text-green-300">'framer-motion'</span>;</div>
                    <div></div>
                    <div><span className="text-pink-400">const</span> <span className="text-blue-300">Hero</span> = () <span className="text-yellow-300"></span> </div>
                    <div>&nbsp;&nbsp;<span className="text-pink-400">return</span> (</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-500">&lt;</span><span className="text-red-400">section</span> <span className="text-green-300">className</span><span className="text-gray-500">=</span><span className="text-blue-300">"min-h-screen flex items-center"</span><span className="text-gray-500"></span></div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-500">&lt;</span><span className="text-red-400">div</span> <span className="text-green-300">className</span><span className="text-gray-500">=</span><span className="text-blue-300">"container mx-auto"</span><span className="text-gray-500"></span></div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-500">&lt;</span><span className="text-red-400">h1</span> <span className="text-green-300">className</span><span className="text-gray-500">=</span><span className="text-blue-300">"text-5xl font-bold"</span><span className="text-gray-500"></span></div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hi, I'm <span className="text-[#3498db] animate-pulse">Veerbahadur Sen</span></div>
                    <div className="text-white animate-pulse">|</div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 h-3 rounded-b-xl mx-auto w-1/2"></div>
              <div className="bg-gray-800 h-2 rounded-b-xl mx-auto w-1/3"></div>
            </div>
            
            {/* Floating elements with enhanced animations */}
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center animate-float hover:scale-110 transition-transform glass-morphism">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" className="w-8 h-8" />
            </div>
            <div className="absolute top-1/2 -right-4 w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center animate-float-delayed hover:scale-110 transition-transform glass-morphism">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-8 h-8" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center animate-float-more-delayed hover:scale-110 transition-transform glass-morphism">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="HTML5" className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};