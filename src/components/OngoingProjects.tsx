import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight, Construction, Clock } from 'lucide-react';

export const OngoingProjects = () => {
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
      name: 'Mobimist',
      description: 'Real-time collaboration platform for Repair and Maintenance',
      stacks: ['android', 'ios', 'flutter'],
      status: 'API Connected',
      statusColor: 'bg-blue-100 text-blue-700'
    },
    {
      name: 'Couger Motorsport',
      description: 'Mobile application for motorsports events',
      stacks: ['flutter'],
      status: 'In UI Design',
      statusColor: 'bg-purple-100 text-purple-700'
    },
    {
      name: 'Pharmapedia',
      description: 'Pharmecial information platform for pharmecy students',
      stacks: ['android', 'flutter'],
      status: 'In Development',
      statusColor: 'bg-green-100 text-green-700'
    },
    {
      name: 'Career Charm',
      description: 'Edtech Platform for students to find job opportunities',
      stacks: ['ios', 'flutter'],
      status: 'Testing Phase',
      statusColor: 'bg-yellow-100 text-yellow-700'
    }
  ];

  const getStackIcon = (stack: string) => {
    switch (stack) {
      case 'android':
        return (
          <div className="w-8 h-8 rounded-full bg-[#3DDC84]/10 flex items-center justify-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Android_logo_2019_%28stacked%29.svg/1031px-Android_logo_2019_%28stacked%29.svg.png?20210331145341" alt="Android" className="w-5 h-5" />
          </div>
        );
      case 'ios':
        return (
          <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/apple/apple-original.svg" alt="iOS" className="w-5 h-5" />
          </div>
        );
      case 'flutter':
        return (
          <div className="w-8 h-8 rounded-full bg-[#02569B]/10 flex items-center justify-center">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg" alt="Flutter" className="w-5 h-5" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 flex items-center gap-2">
          <Construction className="text-[#3DDC84]" />
          Ongoing Projects
        </h2>
        <p className="text-gray-600 mb-6">Projects currently in development or planning stages</p>

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
              className="flex-shrink-0 w-[300px] bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{project.name}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center ${project.statusColor}`}>
                    <Clock size={12} className="mr-1" />
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex gap-2">
                  {project.stacks.map((stack, i) => (
                    <div key={i}>{getStackIcon(stack)}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};