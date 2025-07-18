import { useState } from "react";
import { Code, Database, Figma, Github, Layers, Monitor } from "lucide-react";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const skillCategories = [
    {
      id: "frontend",
      title: "Frontend Development",
      icon: <Monitor size={24} />,
      skills: [
        {
          name: "React",
          proficiency: 90,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "TypeScript",
          proficiency: 85,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "JavaScript",
          proficiency: 95,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "HTML5",
          proficiency: 95,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS3",
          proficiency: 90,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          name: "Tailwind CSS",
          proficiency: 90,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
        },
        {
          name: "Next.js",
          proficiency: 80,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
      ],
    },
    {
      id: "backend",
      title: "Backend & Database",
      icon: <Database size={24} />,
      skills: [
        {
          name: "Node.js",
          proficiency: 85,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Express",
          proficiency: 80,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },
        {
          name: "MongoDB",
          proficiency: 75,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "MySQL",
          proficiency: 70,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "Firebase",
          proficiency: 80,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        },
        {
          name: "REST API",
          proficiency: 85,
          icon: "API",
        },
      ],
    },
    {
      id: "tools",
      title: "Languages & Tools",
      icon: <Code size={24} />,
      skills: [
        {
          name: "Git",
          proficiency: 90,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          name: "GitHub",
          proficiency: 90,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        },
        {
          name: "VS Code",
          proficiency: 95,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        },
        {
          name: "npm",
          proficiency: 85,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
        },
        {
          name: "Webpack",
          proficiency: 75,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
        },
        {
          name: "Jest",
          proficiency: 70,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
        },
      ],
    },
    // {
    //   id: "architecture",
    //   title: "Architecture & Patterns",
    //   icon: <Layers size={24} />,
    //   skills: [
    //     {
    //       name: "Responsive Design",
    //       proficiency: 95,
    //       icon: "RD",
    //     },
    //     {
    //       name: "Progressive Web Apps",
    //       proficiency: 80,
    //       icon: "PWA",
    //     },
    //     {
    //       name: "Single Page Apps",
    //       proficiency: 90,
    //       icon: "SPA",
    //     },
    //     {
    //       name: "RESTful Architecture",
    //       proficiency: 85,
    //       icon: "REST",
    //     },
    //     {
    //       name: "MVC Pattern",
    //       proficiency: 80,
    //       icon: "MVC",
    //     },
    //     {
    //       name: "Component-Based Design",
    //       proficiency: 90,
    //       icon: "CBD",
    //     },
    //   ],
    // },
    {
      id: "design",
      title: "Design Tools",
      icon: <Figma size={24} />,
      skills: [
        {
          name: "Figma",
          proficiency: 85,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        },
        {
          name: "Adobe XD",
          proficiency: 75,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg",
        },
        {
          name: "Photoshop",
          proficiency: 70,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
        },
        {
          name: "Canva",
          proficiency: 90,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
        },
      ],
    },
    {
      id: "version",
      title: "Version Control & Deployment",
      icon: <Github size={24} />,
      skills: [
        {
          name: "Git",
          proficiency: 90,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          name: "GitHub",
          proficiency: 90,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        },
        {
          name: "Netlify",
          proficiency: 85,
          icon: "NTFY",
        },
        {
          name: "Vercel",
          proficiency: 85,
          icon: "VRCL",
        },
        {
          name: "Heroku",
          proficiency: 75,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg",
        },
        {
          name: "Docker",
          proficiency: 65,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        },
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {skillCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveTab(category.id)}
            className={`flex items-center gap-2 px-4 py-2 text-black rounded-full transition-all ${activeTab === category.id
              ? "bg-gradient-to-r from-[#3498db] to-[#2c3e50] text-white shadow-lg"
              : "bg-gray-100 hover:bg-gray-200"
              }`}
          >
            <span>{category.icon}</span>
            <span>{category.title}</span>
          </button>
        ))}
      </div>

      {/* Skills Display */}
      <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-white/10">
        {skillCategories.map(
          (category) =>
            activeTab === category.id && (
              <div key={category.id} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:shadow-lg transition-all hover:scale-105 border border-white/10"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      {typeof skill.icon === "string" && skill.icon.startsWith("http") ? (
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-8 h-8 object-contain"
                        />
                      ) : (
                        <div className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-md text-xs font-bold">
                          {skill.icon}
                        </div>
                      )}
                      <div>
                        <h3 className="font-medium">{skill.name}</h3>
                        <p className="text-sm text-gray-400">{skill.proficiency}%</p>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-2 w-full bg-gray-200/20 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full relative before:absolute before:inset-0 before:bg-white/30 before:animate-shimmer ${getProgressBarColor(
                          category.id,
                          skill.proficiency
                        )}`}
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            )
        )}
      </div>
    </section>
  );
};

// Helper function to get progress bar color based on category
const getProgressBarColor = (categoryId: string, proficiency: number) => {
  const baseColors: Record<string, string> = {
    frontend: "bg-gradient-to-r from-[#3498db] to-[#2c3e50]",
    backend: "bg-gradient-to-r from-[#2c3e50] to-[#3498db]",
    tools: "bg-gradient-to-r from-[#3498db] to-[#2980b9]",
    architecture: "bg-gradient-to-r from-[#2980b9] to-[#2c3e50]",
    design: "bg-gradient-to-r from-[#3498db] to-[#2c3e50]",
    version: "bg-gradient-to-r from-[#2c3e50] to-[#3498db]",
  };

  return baseColors[categoryId] || "bg-gradient-to-r from-[#3498db] to-[#2c3e50]";
};

export default Skills;