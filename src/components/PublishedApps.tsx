import React from 'react';
import { Smartphone, ExternalLink } from 'lucide-react';

export const PublishedApps = () => {
  const apps = [
    {
      name: 'Vimal Mega Mart',
      icon: '/vmal.webp',
      color: '#13B5D4',
      description: 'Vimal Mega Mart  Smart Retail Management App',
      link: 'https://play.google.com/store/apps/details?id=com.vimal.app'
    },
    {
      name: 'THE SPRS',
      icon: '/sprs.webp',
      color: '#E7000C',
      description: 'Purchers ,Rent Sell, Retail and Service Platform',
      link: 'https://play.google.com/store/search?q=SPRS&c=apps&hl=en_IN'
    },
    {
      name: 'SEGV Tours',
      icon: '/segv.webp',
      color: '#F97316',
      description: 'Explore and book your next adventure with SEGV Tours',
      link: 'https://play.google.com/store/apps/details?id=com.sevg.tours'
    }
  ];

  return (
    <section id="projects" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 flex items-center gap-2">
          <Smartphone className="text-[#3DDC84]" />
          Published Apps on Google Play
        </h2>
        <p className="text-gray-600 mb-12">Mobile applications I've developed and published</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg"
            >
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mr-4"
                    // style={{ backgroundColor: `${app.color}20`, color: app.color }}
                  >
                   <img src={app.icon} alt="" className=''/>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{app.name}</h3>
                    <p className="text-gray-600 mt-1">{app.description}</p>
                  </div>
                </div>
                <a 
                  href={app.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 mt-4 w-full py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                    alt="Google Play" 
                    className="h-5" 
                  />
                  View on Play Store
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};