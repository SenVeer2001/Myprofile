import React from 'react';
import { Smartphone } from 'lucide-react';


export const AppMockups = () => {
  const apps = [
    {
      name: 'Mobimist',
      color: '#1870E5',
      screens: [
        '/1.jpg',
        '/2.jpg',
        '/3.jpg'
      ],
      features: [
        'Buy Refurbished Phones: Browse and purchase verified refurbished smartphones and accessories',
        'Phone Repair Services: Book phone repairs by selecting brand, model, and issue with real-time service tracking',
        'Secure Authentication: OTP-based user login and registration with Flutter Secure Storage',
        'Dynamic Product Listings: Display models and services dynamically based on brand and category selection',
        'Order Management: Track order history, repair status, and service invoices',
        'Admin Panel (Web): Manage users, products, services, and orders from a separate web dashboard'
      ]
    },
    {
      name: 'Couger Motorsports',
      color: '#E7000C',
      screens: [
        '/couger1.jpg',
        '/couger2.jpg',
        '/couger3.jpg'
      ],
      features: [
        'Vehicle Showcase: Interactive gallery of motorsport vehicles with detailed specifications',
        'Event Calendar: Upcoming races, exhibitions, and team events with registration options',
        'Team Profiles: Detailed information about drivers, engineers, and support staff',
        'Live Race Updates: Real-time notifications and updates during racing events',
        'Performance Analytics: Track and analyze vehicle performance metrics and race statistics',
        'Fan Engagement: Interactive content, polls, and exclusive behind-the-scenes footage'
      ]
    },
    {
      name: 'Vimal Mega Mart',
      color: '#13B5D4',
      screens: [
        '/vimal1.webp',
        '/vimal2.webp',
        '/vimal3.jpg'
      ],
      features: [
        'Feature 1',
        'Feature 2',
        'Feature 3'
      ]
    },
    {
      name: 'Career Guidance',
      color: '#F97316',
      screens: [
        '/career1.jpg',
        '/career2.jpg',
        '/career3.jpg'
      ],
      features: [
        'Feature 1',
        'Feature 2',
        'Feature 3'
      ]
    },
    {
      name: 'Pharmapedia',
      color: '#8B5CF6',
      screens: [
        '/pharmapedia1.jpg',
        '/pharmapedia2.jpg',
        '/pharmapedia3.jpg'
      ],
      features: [
        'Feature 1',
        'Feature 2',
        'Feature 3'
      ]
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 flex items-center gap-2">
          <Smartphone className="text-[#3DDC84]" />
          App Showcase
        </h2>
        <p className="text-gray-600 mb-12">A closer look at some of my featured applications</p>

        <div className="space-y-24">
          {apps.map((app, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4" style={{ color: app.color }}>{app.name}</h3>
                  <div className="flex gap-4">
                    {app.screens.map((screen, i) => (
                      <div 
                        key={i}
                        className="relative w-[200px] transform transition-transform hover:scale-105"
                      >
                        <div className="w-full aspect-[9/19] bg-gray-900 rounded-[32px] p-2 shadow-xl">
                          <img 
                            src={screen}
                            alt={`${app.name} screenshot ${i + 1}`}
                            className="w-full h-full object-cover rounded-[24px]"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <h4 className="text-xl font-semibold mb-4">Key Features</h4>
                    <ul className="space-y-3">
                      {app.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: app.color }}></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};