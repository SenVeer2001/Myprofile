import { Briefcase, Calendar, ExternalLink } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Web Developer",
      company: "Technopedia Software Pvt. Ltd.",
      location: "Noida, India",
      period: "Aug 2024 - Present",
      description: [
        "Developed responsive and interactive web applications using React, TypeScript, and Tailwind CSS",
        "Implemented RESTful APIs and integrated them with frontend applications",
        "Collaborated with UI/UX designers to implement pixel-perfect designs",
        "Optimized web applications for maximum speed and scalability",
        "Participated in code reviews and implemented feedback from senior developers"
      ],
      skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "RESTful API", "Git"],
      link: "https://technopediasoft.com/"
    },
    {
      title: "Frontend Developer Intern",
      company: "Rostris Infotech",
      location: "Remote",
      period: "January 2024 - june 2024",
      description: [
        "Built responsive user interfaces using HTML, CSS, and JavaScript",
        "Assisted in developing and maintaining company websites",
        "Implemented modern CSS techniques and animations",
        "Collaborated with team members using version control systems"
      ],
      skills: ["HTML", "CSS", "JavaScript", "Responsive Design", "Git"],
      link: "#"
    },
   
  ];

  return (
    <section id="experience" className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-2">
        <Briefcase className="text-[#3498db]" />
        Work Experience
      </h2>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="bg-white/5 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-white/10 hover:shadow-xl transition-all"
          >
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-[#3498db] to-[#2c3e50] bg-clip-text text-transparent">
                  {exp.title}
                </h3>
                <p className="text-lg">
                  {exp.company} - {exp.location}
                </p>
              </div>
              <div className="flex items-center gap-2 mt-2 md:mt-0">
                <Calendar size={16} className="text-[#3498db]" />
                <span className="text-gray-400">{exp.period}</span>
              </div>
            </div>

            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              {exp.description.map((item, i) => (
                <li key={i} className="text-gray-300">{item}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mb-4">
              {exp.skills.map((skill, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1 bg-[#3498db]/10 text-[#3498db] rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>

            <a 
              href={exp.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-[#3498db] hover:text-[#2c3e50] transition-colors"
            >
              <ExternalLink size={16} />
              <span>Visit Website</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;