import React from 'react';
import { ArrowRight, Code, Smartphone, Cloud, Clock, CheckCircle, Sparkles } from 'lucide-react';
import LaserFlow from '@/components/Amenity forge/LaserFlow';

const Home = () => {
  const services = [
    {
      icon: <Code className="w-5 h-5" />,
      title: "Custom Software Development",
      description: "Tailored solutions for unique business needs"
    },
    {
      icon: <Smartphone className="w-5 h-5" />,
      title: "Mobile App Development", 
      description: "iOS, Android & cross-platform solutions"
    },
    {
      icon: <Cloud className="w-5 h-5" />,
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
    <section id="home" className="min-h-screen bg-black pt-16 sm:pt-16 pb-0 sm:pb-0 relative overflow-hidden">
      {/* LaserFlow background */}
      <div className="absolute inset-0">
        <LaserFlow
          horizontalBeamOffset={0.12}
          verticalBeamOffset={0.0}
          color="#FF79C6"
          horizontalSizing={0.65}
          verticalSizing={2.2}
          wispDensity={1.1}
          wispSpeed={14}
          wispIntensity={4.5}
          flowSpeed={0.32}
          flowStrength={0.22}
          fogIntensity={0.5}
          fogScale={0.35}
          fogFallSpeed={0.55}
          decay={1.05}
          falloffStart={1.2}
        />
      </div>

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

      <div className="container mx-auto px-4 sm:px-5 lg:px-7 py-4 sm:py-6 lg:py-8 pb-6 sm:pb-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-3 sm:space-y-4">
            <div className="space-y-2 sm:space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                <span className="text-white block mb-1 sm:mb-1.5">Turn Your Vision</span>
                <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent block">
                  Into Digital Reality
                </span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-lg text-gray-300 leading-relaxed max-w-2xl">
                Your strategic digital partner providing comprehensive solutions from software development to digital marketing.
              </p>
              
              <p className="text-sm sm:text-base lg:text-base font-semibold text-yellow-400">
                You Tell, We Implement.
              </p>
            </div>

            {/* Company Tagline */}
            <div className="bg-gradient-to-r from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-md px-4 py-3 sm:px-5 sm:py-4 rounded-lg border border-gray-700/50 w-full sm:w-fit max-w-full">
              <p className="text-sm sm:text-base lg:text-base text-gray-300 leading-relaxed">
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
            <div className="space-y-2 sm:space-y-2.5">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-2.5 sm:space-x-3">
                  <CheckCircle className="w-5 h-5 sm:w-5 sm:h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-300 leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <a href="/Services" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 sm:px-8 py-3.5 sm:py-3 rounded-full font-bold text-sm sm:text-base hover:from-yellow-500 hover:to-orange-600 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg shadow-yellow-400/30 min-h-[44px]">
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </a>

              <a
                href="https://wa.me/918341122405?text=Hi%20AmenityForge%2C%20I%20need%20your%20service"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <button className="w-full sm:w-auto border-2 border-yellow-400 text-yellow-400 px-6 sm:px-8 py-3.5 sm:py-3 rounded-full font-bold text-sm sm:text-base hover:bg-yellow-400 hover:text-black transition-all flex items-center justify-center space-x-2 min-h-[44px]">
                  <span>Call Now</span>
                </button>
              </a>
            </div>
          </div>

          {/* Right Content - Service Cards */}
          <div className="space-y-2.5 sm:space-y-3 relative mt-4 sm:mt-0">
            {/* Additional floating objects around service cards */}
            <div className="absolute -top-4 -right-4 w-4 h-4 bg-gradient-to-br from-yellow-400/30 to-orange-500/30 rounded-full animate-pulse"></div>
            <div className="absolute top-20 -left-6 w-6 h-6 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 transform rotate-45 animate-bounce" style={{animationDelay: '1.5s'}}></div>
            <div className="absolute bottom-10 -right-8 w-5 h-5 bg-gradient-to-br from-yellow-400/25 to-orange-500/25 rounded-full animate-pulse" style={{animationDelay: '2.2s'}}></div>
            
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-gradient-to-r from-gray-800/80 to-gray-700/80 backdrop-blur-sm p-4 sm:p-4 lg:p-5 rounded-xl border border-gray-600 hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/10 relative"
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-2.5 sm:p-2 lg:p-3 rounded-lg flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg lg:text-lg font-bold text-white mb-1.5 sm:mb-2">{service.title}</h3>
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