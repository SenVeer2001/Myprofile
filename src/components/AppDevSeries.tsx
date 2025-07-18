import React, { useRef } from 'react';
import { Code, Github, ArrowLeft, ArrowRight, Calendar } from 'lucide-react';

export const AppDevSeries = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 320; // Approximate card width + gap
      
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const projects = [
    {
      name: 'Face Detection App',
      description: 'An Android application for detecting and recognizing faces using Kotlin',
      repo: 'https://github.com/gprs1022/Face-Detection-App',
      day: 1
    },
    {
      name: 'Food Ordering App',
      description: '"Waves of Food" is a dynamic Android-based food ordering app that revolutionizes the way you enjoy your meals',
      repo: 'https://github.com/gprs1022/FoodOrderingApp',
      day: 2
    },
    {
      name: 'Admin App - Waves of Food',
      description: 'Admin panel for the Waves of Food application',
      repo: 'https://github.com/gprs1022/AdminApp_wavesOfFood',
      day: 3
    },
    {
      name: 'Notes App',
      description: 'A note-taking application with create, edit, and delete functionality',
      repo: 'https://github.com/gprs1022/NotesApp',
      day: 4
    },
    {
      name: 'Education Flutter App',
      description: 'Educational application built with Flutter',
      repo: 'https://github.com/gprs1022/education_flutter_app',
      day: 5
    },
    {
      name: 'Blog App',
      description: 'A blogging application built with Kotlin',
      repo: 'https://github.com/gprs1022/Blog-App',
      day: 6
    },
    {
      name: 'Todo App',
      description: 'A task management application for organizing daily activities',
      repo: 'https://github.com/gprs1022/Todo-App',
      day: 7
    },
    {
      name: 'Notes App with Room',
      description: 'A simple Android app that allows users to log in using Google Sign-In and manage their personal notes',
      repo: 'https://github.com/gprs1022/NotesAppwithRoom',
      day: 8
    },
    {
      name: 'SEVG App',
      description: 'Mobile application for SEVG platform',
      repo: 'https://github.com/gprs1022/sevg_app',
      day: 9
    },
    {
      name: 'Destination App',
      description: 'Travel destination application built with Dart',
      repo: 'https://github.com/gprs1022/Destination',
      day: 10
    },
    {
      name: 'Dart Practice',
      description: 'Repository for Dart programming language practice',
      repo: 'https://github.com/gprs1022/Dart-Practice',
      day: 11
    },
    {
      name: 'API Call in Flutter',
      description: 'Implementation of API calls in Flutter applications',
      repo: 'https://github.com/gprs1022/API-call-in-flutter',
      day: 12
    },
    {
      name: 'THE SPRS',
      description: 'Mobile application for SPRS platform',
      repo: 'https://github.com/gprs1022/THE-SPRS',
      day: 13
    },
    {
      name: 'SEGV Tours',
      description: 'SEGV Tours is an internal-use application designed exclusively for company employees',
      repo: 'https://github.com/gprs1022/SEGV-Tours',
      day: 14
    },
    {
      name: 'Tasks App',
      description: 'Task Management App for organizing and tracking tasks',
      repo: 'https://github.com/gprs1022/TasksApp',
      day: 15
    },
    {
      name: 'Grocery App',
      description: 'Mobile application for grocery shopping and management',
      repo: 'https://github.com/gprs1022/Grocery_app',
      day: 16
    },
    {
      name: 'Music App',
      description: 'Music player application built with Kotlin',
      repo: 'https://github.com/gprs1022/MusicAPP',
      day: 17
    },
    {
      name: 'Weather App',
      description: 'Application providing information about current and future weather conditions',
      repo: 'https://github.com/gprs1022/Weather-App',
      day: 18
    },
    {
      name: 'Mail Authentication',
      description: 'Implementation of email authentication in mobile applications',
      repo: 'https://github.com/gprs1022/MailAuthntication',
      day: 19
    },
    {
      name: 'OTP Verification',
      description: 'One-Time Password verification implementation for secure authentication',
      repo: 'https://github.com/gprs1022/otpVerification',
      day: 20
    },
    {
      name: 'Medistop',
      description: 'A stop for all the medi needs - Healthcare application',
      repo: 'https://github.com/gprs1022/Medistop-for-Hackathon-',
      day: 21
    },
    {
      name: 'CRUD Operations',
      description: 'Implementation of Create, Read, Update, and Delete operations',
      repo: 'https://github.com/gprs1022/Crud-Operation',
      day: 22
    },
    {
      name: 'Navigation Drawer',
      description: 'Implementation of navigation drawer in Android applications',
      repo: 'https://github.com/gprs1022/Navigation-Drawer',
      day: 23
    },
    {
      name: 'Notification Feature',
      description: 'Implementation of notifications in Android applications',
      repo: 'https://github.com/gprs1022/Notification-feature',
      day: 24
    },
    {
      name: 'Bottom Navigation',
      description: 'Implementation of bottom navigation in Android applications',
      repo: 'https://github.com/gprs1022/Buttom-Navigation',
      day: 25
    },
    {
      name: 'API Uses',
      description: 'Implementation of API usage in Android applications',
      repo: 'https://github.com/gprs1022/API-Uses',
      day: 26
    },
    {
      name: 'GPRS Times News App',
      description: 'News application with latest updates and articles',
      repo: 'https://github.com/gprs1022/GPRS-Times-news-app',
      day: 27
    },
    {
      name: 'News App with Recycler View',
      description: 'News application implemented with RecyclerView for efficient list display',
      repo: 'https://github.com/gprs1022/News-app-with-Recycler-view',
      day: 28
    },
    {
      name: 'List View Project 1',
      description: 'Implementation of ListView in Android applications',
      repo: 'https://github.com/gprs1022/List-View-Project-1',
      day: 29
    },
    {
      name: 'List View Project 2',
      description: 'Advanced implementation of ListView in Android applications',
      repo: 'https://github.com/gprs1022/ListView-Project-2',
      day: 30
    }
  ];

  return (
    <section id="30daysappdev" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
          <div className="md:w-1/4 flex-shrink-0">
            <img 
              src="/30daysapp.jpg" 
              alt="30 Days App Development Challenge" 
              className="rounded-lg shadow-md w-full max-w-[200px] object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-2 flex items-center gap-2">
              <Code className="text-[#3DDC84]" />
              30daysAppdev Series
            </h2>
            <p className="text-gray-600">A collection of projects from my 30 days app development challenge. Each day I built a new app to improve my skills and explore different features and functionalities.</p>
          </div>
        </div>

        <div className="flex items-center justify-end gap-2 mb-6">
          <button 
            onClick={() => scroll('left')}
            className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100"
            aria-label="Scroll left"
          >
            <ArrowLeft size={20} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100"
            aria-label="Scroll right"
          >
            <ArrowRight size={20} />
          </button>
        </div>

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide gap-6 pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project, index) => (
            <div 
              key={index}
              className="flex-shrink-0 w-[300px] bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{project.name}</h3>
                  <span className="px-2 py-1 rounded-full text-xs font-medium bg-[#3DDC84]/10 text-[#3DDC84] flex items-center">
                    <Calendar size={12} className="mr-1" />
                    Day {project.day}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a 
                  href={project.repo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-800 transition-colors duration-300"
                >
                  <Github size={18} />
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};