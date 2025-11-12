import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import bef from "../../public/BEF_image.png"
import tavel from "../../public/travel_wafers_image.png"
import cougar from "../../public/cougar_image.png"
import technopediasoft from "../../public/technopediasoft.png"


const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
      
      {
      title: "Technopedia Software Pvt. Ltd.",
      description: "At Technopedia, we transform ideas into powerful digital solutions. Our passion for innovation drives us to create cutting-edge applications that define the future of technology.",
      image: technopediasoft ,
      tags: ["Nextjs", "Node.js", "MongoDB", "Express", "NextAuth","Tailwind CSS","TypeScript"],
      liveLink: "https://technopediasoft.com/",
      githubLink: ""
    },
    {
      title: "BEF Models",
      description: "BEF helps models find the right opportunities to grow in the fashion and modeling industry.",
      image: bef,
      tags: ["Nextjs", "Node.js", "MongoDB", "Express", "NextAuth","Tailwind CSS","TypeScript"],
      liveLink: "https://www.befmodels.com/",
      githubLink: ""
    },
    {
      title: "Travel Wafer",
      description: "Developed Wafers Travel, a scalable travel booking platform capable of handling 10,000+ tours, allowing vendors to manage and users to inquire about tours. ",
      image: tavel,
      tags: ["React", "Tailwind CSS", "TypeScript", "Vite","Expressjs","Nodejs"],
      liveLink: "https://wafers.travel/",
      githubLink: ""
    },
    {
      title: "Cougar Motorsport",
      description: "Cougar Motorsport is a motorsport management platform that allows users to register, participate in events, and manage their motorsport team.",
      image: cougar,
      tags: ["Nextjs", "Node.js", "MongoDB", "Express", "NextAuth","Tailwind CSS","TypeScript"],
      liveLink: "https://cougar.technopediasoft.com/",
      githubLink: "https://cougar.technopediasoft.com/"
    },
    {
      title: "Weather Dashboard",
      description: "A weather application that provides current conditions and forecasts for any location. Features include search functionality, saved locations, and detailed weather data visualization.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["JavaScript", "OpenWeather API", "Chart.js", "CSS3"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/gprs1022/weatherapp"
    },
    // {
    //   title: "Blog Platform",
    //   description: "A content management system for creating and managing blog posts. Features include rich text editing, image uploads, commenting system, and user authentication.",
    //   image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    //   tags: ["Next.js", "MongoDB", "Tailwind CSS", "NextAuth.js"],
    //   liveLink: "https://example.com",
    //   githubLink: "https://github.com/gprs1022/blogplatform"
    // },
    // {
    //   title: "Real-time Chat Application",
    //   description: "A messaging platform that enables real-time communication between users. Features include private messaging, group chats, file sharing, and read receipts.",
    //   image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    //   tags: ["React", "Socket.io", "Node.js", "Express"],
    //   liveLink: "https://example.com",
    //   githubLink: "https://github.com/gprs1022/chatapp"
    // }
  ];

  return (
    <section id="portfolio" className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">My Portfolio</h2>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Project List (Left Side) */}
        <div className="lg:w-1/3 overflow-y-auto max-h-[600px] pr-4 scrollbar-thin scrollbar-thumb-[#3498db] scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`mb-4 p-4 rounded-lg cursor-pointer transition-all ${activeProject === index ? 'bg-[#3498db]/20 border-l-4 border-[#3498db]' : 'bg-white/5 hover:bg-white/10'}`}
              onClick={() => setActiveProject(index)}
            >
              <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
              <div className="flex flex-wrap gap-1 mb-2">
                {project.tags.slice(0, 3).map((tag, i) => (
                  <span 
                    key={i} 
                    className="px-2 py-0.5 bg-[#3498db]/10 text-[#3498db] rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="text-xs text-gray-400">+{project.tags.length - 3} more</span>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Laptop Display (Right Side) */}
        <div className="lg:w-2/3">
          <div className="relative transform hover:scale-105 transition-all duration-500">
            {/* Laptop mockup */}
            <div className="w-full max-w-[800px] mx-auto">
              <div className="bg-gray-800 rounded-t-xl p-2 h-6 flex items-center">
                <div className="flex space-x-1 ml-1">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 rounded-b-xl shadow-2xl border border-gray-700">
                {/* Project content */}
                <div className="bg-gray-900 rounded-lg p-4 overflow-hidden">
                  <div className="h-48 md:h-64 overflow-hidden rounded-lg mb-4">
                    <img 
                      src={projects[activeProject].image} 
                      alt={projects[activeProject].title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-[#3498db] to-[#2c3e50] bg-clip-text text-transparent">
                    {projects[activeProject].title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4">
                    {projects[activeProject].description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {projects[activeProject].tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-[#3498db]/10 text-[#3498db] rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between">
                    <a 
                      href={projects[activeProject].liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-1 text-[#3498db] hover:text-white hover:bg-[#3498db] px-3 py-1 rounded-full transition-colors text-sm"
                    >
                      <ExternalLink size={14} />
                      <span>Live Demo</span>
                    </a>
                    
                    <a 
                      href={projects[activeProject].githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-1 text-[#3498db] hover:text-white hover:bg-[#3498db] px-3 py-1 rounded-full transition-colors text-sm"
                    >
                      <Github size={14} />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 h-3 rounded-b-xl mx-auto w-1/2"></div>
              <div className="bg-gray-800 h-2 rounded-b-xl mx-auto w-1/3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;