import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a202c] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#3498db] to-[#2c3e50] flex items-center justify-center font-bold text-xl">
                PS
              </div>
              <div>
                <h3 className="font-bold text-xl">Veerbahadur Sen</h3>
                <p className="text-gray-400">Full Stack Developer</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <a 
              href="https://github.com/Veersen2001" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#3498db] transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/veerbahadur-sen-a70965221/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0A66C2] transition-colors"
            >
              <Linkedin size={20} />
            </a>
            {/* <a 
              href="https://twitter.com/gprspradeep" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1DA1F2] transition-colors"
            >
              <Twitter size={20} />
            </a> */}
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} veerbahadursen. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Designed with ❤️ by <a href="#" className="text-[#3498db] hover:underline">Veerbahadur Sen</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;