import React from 'react';
import { ArrowRight, Code, Smartphone, Cloud, Clock, CheckCircle, Sparkles } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Custom Software Development",
      description: "Tailored solutions for unique business needs"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile App Development", 
      description: "iOS, Android & cross-platform solutions"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Infrastructure",
      description: "AWS, Azure, GCP setup & management"
    }
  ];

  const benefits = [
    "Quick turnaround times with quality delivery",
    "Proven track record of successful projects", 
    "Expert guidance throughout your project"
  ];

  return (
    <section id="home" className="min-h-screen bg-black pt-24 pb-16 relative overflow-hidden">
      {/* 3D Background Objects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating cubes */}
        <div className="absolute top-20 left-10 w-8 h-8 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 transform rotate-45 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-gradient-to-br from-yellow-400/15 to-orange-500/15 transform rotate-12 animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-10 h-10 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 transform -rotate-12 animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Floating spheres */}
        <div className="absolute top-60 right-40 w-12 h-12 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-60 right-10 w-8 h-8 bg-gradient-to-br from-yellow-400/15 to-orange-500/15 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
        
        {/* Floating triangles */}
        <div className="absolute top-80 left-40 w-0 h-0 border-l-6 border-r-6 border-b-10 border-l-transparent border-r-transparent border-b-yellow-400/20 animate-bounce" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute bottom-20 right-60 w-0 h-0 border-l-8 border-r-8 border-b-12 border-l-transparent border-r-transparent border-b-orange-500/15 animate-pulse" style={{animationDelay: '3s'}}></div>
        
        {/* Floating hexagons */}
        <div className="absolute top-32 right-80 w-10 h-10 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 transform rotate-45 clip-path-hexagon animate-bounce" style={{animationDelay: '1.2s'}}></div>
        <div className="absolute bottom-80 left-60 w-6 h-6 bg-gradient-to-br from-yellow-400/15 to-orange-500/15 transform rotate-30 clip-path-hexagon animate-pulse" style={{animationDelay: '2.8s'}}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 py-16 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-white block mb-2">Turn Your Vision</span>
                <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent block">
                  Into Digital Reality
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                Your strategic digital partner providing comprehensive solutions from software development to digital marketing.
              </p>
              
              <p className="text-base sm:text-lg lg:text-xl font-semibold text-yellow-400">
                You Tell, We Implement.
              </p>
            </div>

            {/* Company Tagline */}
            <div className="bg-gradient-to-r from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-md px-5 py-4 sm:px-6 sm:py-5 rounded-xl border border-gray-700/50 w-fit max-w-full">
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed whitespace-normal">
                Built within a Media & Education Excellence Ecosystem associated with{' '}
                <span className="font-bold text-yellow-400">The Times Group</span>
                {', and awarded '}
                <span className="font-semibold italic text-yellow-400">'Best in AI Innovation'</span>
                {' by '}
                <span className="font-bold text-yellow-400">GTAP</span>
                {' for delivering impactful products and services.'}
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-5">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span className="text-base sm:text-lg text-gray-300 leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <a href="/Services">
                <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full font-bold text-base sm:text-lg hover:from-yellow-500 hover:to-orange-600 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg shadow-yellow-400/30">
                  <span>Explore Services</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </a>

              <a
                href="https://wa.me/918341122405?text=Hi%20AmenityForge%2C%20I%20need%20your%20service"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-bold text-base sm:text-lg hover:bg-yellow-400 hover:text-black transition-all flex items-center justify-center space-x-2">
                  <span>Call Now</span>
                </button>
              </a>
            </div>
          </div>

          {/* Right Content - Service Cards */}
          <div className="space-y-6 relative">
            {/* Additional floating objects around service cards */}
            <div className="absolute -top-4 -right-4 w-4 h-4 bg-gradient-to-br from-yellow-400/30 to-orange-500/30 rounded-full animate-pulse"></div>
            <div className="absolute top-20 -left-6 w-6 h-6 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 transform rotate-45 animate-bounce" style={{animationDelay: '1.5s'}}></div>
            <div className="absolute bottom-10 -right-8 w-5 h-5 bg-gradient-to-br from-yellow-400/25 to-orange-500/25 rounded-full animate-pulse" style={{animationDelay: '2.2s'}}></div>
            
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-gradient-to-r from-gray-800/80 to-gray-700/80 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-gray-600 hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/10 relative"
              >
                <div className="flex items-start space-x-5">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-3 lg:p-4 rounded-lg flex-shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 lg:mb-3">{service.title}</h3>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;