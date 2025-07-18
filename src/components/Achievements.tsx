import React, { useState, useEffect } from 'react';
import { Trophy, ChevronLeft, ChevronRight, Linkedin } from 'lucide-react';

export const Achievements = () => {
  const [achievementIndex, setAchievementIndex] = useState(0);
  const [linkedInIndex, setLinkedInIndex] = useState(0);
  const [isAchievementTransitioning, setIsAchievementTransitioning] = useState(false);
  const [isLinkedInTransitioning, setIsLinkedInTransitioning] = useState(false);

  const linkedInPosts = [
    "urn:li:ugcPost:7052015035161722880",
    // "urn:li:ugcPost:7046824610272604161",
    // "urn:li:ugcPost:7279758320851152896",
    // "urn:li:ugcPost:7112329481096228864",
  
  ];

  const achievements = [
    {
      title: "Sprint Hacks Winner 2023",
      description: "Sprint Hacks organized by DSC KIET group in KIET Group of Institutions. Ghaziabad, Delhi NCR.🏆👨‍💻 Our project 𝐌𝐞𝐝𝐢𝐬𝐭𝐨𝐩 - 𝐎𝐧𝐞 𝐒𝐭𝐨𝐩 𝐅𝐨𝐫 𝐀𝐥𝐥 𝐌𝐞𝐝𝐢𝐍𝐞𝐞𝐝𝐬 seized the First Place 🏅 award with 30K price money and a big bonus Gift Hamper by @DevTown and T-shirt 👕 by Programming Pathshala",
      year: "2023",
      image: "/sprinthacks.jpg"
    },
    // {
    //   title: "30 Days App dev Challange Winner 2023",
    //   description: "Achieved over one million downloads across published applications",
    //   year: "2023",
    //   image: "/30daysapp.jpg",
    // },
    {
      title: "Hack The Space",
      description: "Participated in Hack The Space 2023 in Chattisgarh, India",
      year: "2023",
      image: "/hack.png",
    },
    // {
    //   title: "AKS Developer Student Club 2023 @ADSC Lead",
    //   description: "Built a Student Community and built a platform for students to learn, collaborate, and showcase their projects",
    //   year: "2023",
    //   image: "/adsc.png",
    // },
    // {
    //   title: "Rescue Maze Winner 2020",
    //   description: "State Level winner 🏆 in Mp among 75 teams At jabalpur.National level fourth place Award at Bangaluru.That event organised by @Indian Robo Cup junior",
    //   year: "2020",
    //   image: "/robocup.jpeg",
    // },
    // {
    //   title: "Redhat Student Brand Ambassador 2022",
    //   description: "Conducted 10+ technical workshops on Basics of Linux, Managing Network Security, Configuring and Securing SSH, Ansible, Devops, kubernetes ,Docker, AWS,Python and Containers.- Spreading awareness about programs and certifications provided by Red Hat",
    //   year: "2022",
    //   image: "/redhat.jpeg",
    // }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-[#3DDC84]/5 to-transparent rounded-full transform rotate-45 animate-float"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-[#02569B]/5 to-transparent rounded-full transform -rotate-45 animate-float-delayed"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold mb-2 flex items-center gap-2">
          <Trophy className="text-[#3DDC84] animate-bounce" />
          <span className="gradient-text">Achievements</span>
        </h2>
        <p className="text-gray-600 mb-12 animate-fade-in">Recognition and milestones in my development journey</p>

        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          <div className="relative w-full md:w-1/2 h-[400px] group">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 ${index === achievementIndex ? 'opacity-100 z-30 scale-100' : 
                  index === (achievementIndex + 1) % achievements.length ? 'opacity-60 z-20 scale-95 translate-x-[10%]' :
                  index === (achievementIndex + 2) % achievements.length ? 'opacity-30 z-10 scale-90 translate-x-[20%]' : 'opacity-0 z-0 scale-85'}`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#3DDC84]/20 to-[#02569B]/20 rounded-lg transform rotate-3 transition-transform duration-300"></div>
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="rounded-lg shadow-lg w-full h-full object-cover relative z-10"
                />
              </div>
            ))}
            
            <div className="absolute bottom-4 right-4 flex gap-2 z-40">
              <button
                onClick={() => {
                  if (!isAchievementTransitioning) {
                    setIsAchievementTransitioning(true);
                    setAchievementIndex((prev) => (prev - 1 + achievements.length) % achievements.length);
                    setTimeout(() => setIsAchievementTransitioning(false), 500);
                  }
                }}
                className="p-2 bg-white/80 rounded-full shadow-lg hover:bg-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>
              <button
                onClick={() => {
                  if (!isAchievementTransitioning) {
                    setIsAchievementTransitioning(true);
                    setAchievementIndex((prev) => (prev + 1) % achievements.length);
                    setTimeout(() => setIsAchievementTransitioning(false), 500);
                  }
                }}
                className="p-2 bg-white/80 rounded-full shadow-lg hover:bg-white transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div
              className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 transform transition-all duration-500 glass-morphism"
              style={{
                opacity: isAchievementTransitioning ? 0 : 1,
                transform: isAchievementTransitioning ? 'translateY(20px)' : 'translateY(0)'
              }}
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-gray-900 gradient-text">
                  {achievements[achievementIndex].title}
                </h3>
                <span className="px-4 py-2 bg-gradient-to-r from-[#3DDC84]/10 to-[#02569B]/10 text-[#3DDC84] rounded-full text-sm font-medium">
                  {achievements[achievementIndex].year}
                </span>
              </div>
              <p className="text-lg text-gray-600">
                {achievements[achievementIndex].description}
              </p>
            </div>
          </div>
        </div>

        {/* LinkedIn Posts Section */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Linkedin className="text-[#0A66C2]" />
            <span>Featured LinkedIn Posts</span>
          </h3>
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500 ease-in-out">
                {linkedInPosts.map((postId, index) => (
                  <div
                    key={postId}
                    className={`w-full flex-shrink-0 transition-all duration-500 transform ${index === linkedInIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                    style={{ transform: `translateX(-${linkedInIndex * 100}%)` }}
                  >
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-4 glass-morphism hover:shadow-xl transition-all duration-300">
                      <div className="aspect-[4/3] w-full relative overflow-hidden rounded-lg">
                        <iframe
                          src={`https://www.linkedin.com/embed/feed/update/${postId}?collapsed=1`}
                          height="100%"
                          width="100%"
                          frameBorder="0"
                          allowFullScreen
                          title={`LinkedIn Post ${index }`}
                          className="absolute inset-0 w-full h-full"
                          loading="lazy"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 z-10">
              <button
                onClick={() => {
                  if (!isLinkedInTransitioning) {
                    setIsLinkedInTransitioning(true);
                    setLinkedInIndex((prev) => (prev - 1 + linkedInPosts.length) % linkedInPosts.length);
                    setTimeout(() => setIsLinkedInTransitioning(false), 500);
                  }
                }}
                className="p-2 bg-white/80 rounded-full shadow-lg hover:bg-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>
              <button
                onClick={() => {
                  if (!isLinkedInTransitioning) {
                    setIsLinkedInTransitioning(true);
                    setLinkedInIndex((prev) => (prev + 1) % linkedInPosts.length);
                    setTimeout(() => setIsLinkedInTransitioning(false), 500);
                  }
                }}
                className="p-2 bg-white/80 rounded-full shadow-lg hover:bg-white transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>
            </div>
            
            <div className="flex justify-center gap-2 mt-4">
              {linkedInPosts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isLinkedInTransitioning && linkedInIndex !== index) {
                      setIsLinkedInTransitioning(true);
                      setLinkedInIndex(index);
                      setTimeout(() => setIsLinkedInTransitioning(false), 500);
                    }
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${linkedInIndex === index ? 'bg-[#0A66C2] w-4' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};