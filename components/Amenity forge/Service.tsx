import React, { useState } from 'react';
import {
  Code, Smartphone, Cloud, Brain, Shield,
  TrendingUp, Palette, Link, Gamepad2, HelpCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Software Development",
      description: "Custom applications built with modern technologies"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Web & Mobile",
      description: "Responsive websites and mobile applications"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and deployment"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & Machine Learning",
      description: "Intelligent solutions and data analytics"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security",
      description: "Comprehensive cybersecurity solutions"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Growth-focused marketing strategies"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "User-centered design experiences"
    },
    {
      icon: <Link className="w-8 h-8" />,
      title: "Blockchain",
      description: "Decentralized applications and smart contracts"
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: "Game Development",
      description: "Interactive gaming experiences"
    },
    {
      icon: <HelpCircle className="w-8 h-8" />,
      title: "IT Consulting",
      description: "Strategic technology guidance"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-100 to-white relative overflow-hidden">
      {/* Floating Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-8 w-6 h-6 bg-gradient-to-br from-gray-300/30 to-gray-400/30 transform rotate-45 animate-pulse"></div>
        <div className="absolute top-32 right-12 w-8 h-8 bg-gradient-to-br from-gray-300/20 to-gray-400/20 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-16 w-10 h-10 bg-gradient-to-br from-gray-300/25 to-gray-400/25 transform -rotate-12 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-60 right-32 w-7 h-7 bg-gradient-to-br from-gray-300/20 to-gray-400/20 transform rotate-30 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-60 right-8 w-5 h-5 bg-gradient-to-br from-gray-300/30 to-gray-400/30 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-80 left-32 w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-gray-300/25 animate-bounce" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute bottom-20 right-48 w-0 h-0 border-l-6 border-r-6 border-b-10 border-l-transparent border-r-transparent border-b-gray-400/20 animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-40 left-64 w-4 h-4 bg-gradient-to-br from-gray-300/20 to-gray-400/20 transform rotate-45 animate-pulse" style={{ animationDelay: '1.8s' }}></div>
        <div className="absolute bottom-40 left-80 w-6 h-6 bg-gradient-to-br from-gray-300/25 to-gray-400/25 rounded-full animate-bounce" style={{ animationDelay: '2.3s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Our Service Categories
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We offer a comprehensive range of digital services to help your business thrive in the digital era.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                p-6 rounded-2xl border transition-all duration-300 transform 
                bg-gradient-to-br from-white to-gray-50 text-black border-gray-200 
                hover:bg-gradient-to-br hover:from-yellow-400 hover:to-orange-500 
                hover:text-black hover:border-yellow-400 
                hover:shadow-lg hover:shadow-yellow-400/20 
                hover:scale-105 cursor-pointer relative
              "
            >
              <div className="mb-4 text-yellow-500 hover:text-black">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold mb-3 text-black">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 hover:text-black/80">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;