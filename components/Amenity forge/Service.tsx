import React, { useState } from 'react';
import {
  Code, Smartphone, Cloud, Brain, Shield,
  TrendingUp, Palette, Link, Gamepad2, HelpCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-5 h-5" />,
      title: "Software Development",
      description: "Custom applications built with modern technologies"
    },
    {
      icon: <Smartphone className="w-5 h-5" />,
      title: "Web & Mobile",
      description: "Responsive websites and mobile applications"
    },
    {
      icon: <Cloud className="w-5 h-5" />,
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and deployment"
    },
    {
      icon: <Brain className="w-5 h-5" />,
      title: "AI & Machine Learning",
      description: "Intelligent solutions and data analytics"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Security",
      description: "Comprehensive cybersecurity solutions"
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Digital Marketing",
      description: "Growth-focused marketing strategies"
    },
    {
      icon: <Palette className="w-5 h-5" />,
      title: "UI/UX Design",
      description: "User-centered design experiences"
    },
    {
      icon: <Link className="w-5 h-5" />,
      title: "Blockchain",
      description: "Decentralized applications and smart contracts"
    },
    {
      icon: <Gamepad2 className="w-5 h-5" />,
      title: "Game Development",
      description: "Interactive gaming experiences"
    },
    {
      icon: <HelpCircle className="w-5 h-5" />,
      title: "IT Consulting",
      description: "Strategic technology guidance"
    }
  ];

  return (
    <section id="services" className="pt-0 pb-0 bg-black relative overflow-hidden">
      {/* Pure black background - no decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
      </div>

      <div className="container mx-auto px-4 sm:px-5 lg:px-7 relative z-10">
        <div className="text-center mb-3 sm:mb-4 lg:mb-6 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold mb-1.5 sm:mb-2 lg:mb-2">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
              Our Service Categories
            </span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            We offer a comprehensive range of digital services to help your business thrive in the digital era.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-4 sm:p-4 lg:p-5 rounded-xl border transition-all duration-500 transform 
                bg-gradient-to-br from-gray-800/80 to-gray-900/80 text-white border-gray-700/50 
                hover:bg-gradient-to-br hover:from-yellow-400 hover:to-orange-500 
                hover:text-black hover:border-yellow-400 
                hover:shadow-2xl hover:shadow-yellow-400/30 
                hover:scale-105 sm:hover:scale-110 hover:-translate-y-1 sm:hover:-translate-y-2 cursor-pointer relative overflow-hidden animate-fade-in-up backdrop-blur-sm"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <div className="relative z-10">
                <div className="mb-2 lg:mb-3 text-yellow-400 group-hover:text-black group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-1.5 lg:mb-2 text-white group-hover:text-black transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 group-hover:text-black/90 transition-colors duration-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400/0 via-yellow-400/20 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;