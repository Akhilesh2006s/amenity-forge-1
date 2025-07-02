import React, { useState } from 'react';
import { Users, Target, Lightbulb, Award, Star, ChevronRight } from 'lucide-react';

const About = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Client-focused approach",
      description: "Putting your needs first in every project"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Comprehensive digital solutions", 
      description: "End-to-end services under one roof"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovative technologies",
      description: "Cutting-edge tools and methodologies"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Expert team of professionals",
      description: "Experienced specialists in every domain"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating gradient blobs */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-full filter blur-3xl opacity-70 animate-float-slow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-yellow-400/5 to-orange-500/5 rounded-full filter blur-3xl opacity-50 animate-float-medium"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5 [background-image:linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [background-size:24px_24px]"></div>
        
        {/* Floating 3D shapes */}
        <div className="absolute top-20 left-12 w-10 h-10 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 transform rotate-45 animate-float-fast shadow-lg"></div>
        <div className="absolute top-40 right-16 w-14 h-14 bg-gradient-to-br from-yellow-400/15 to-orange-500/15 rounded-full animate-float-slow shadow-lg" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-24 w-12 h-12 bg-gradient-to-br from-yellow-400/25 to-orange-500/25 transform -rotate-12 animate-float-medium shadow-lg" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-60 right-40 w-8 h-8 bg-gradient-to-br from-yellow-400/30 to-orange-500/30 rounded-full animate-float-fast shadow-lg" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full filter blur-xl opacity-30 animate-pulse"></div>
              <h2 className="text-5xl lg:text-6xl font-bold text-black mb-6 relative">
                <span className="relative z-10">About Amenity</span>
                <span className="absolute -bottom-2 left-0 w-32 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></span>
              </h2>
              <p className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-8">
                Founded by Shri Yasaswi with a vision to transform businesses through technology
              </p>
            </div>

            <div className="space-y-6 text-gray-700 relative">
              <div className="absolute -left-6 top-0 h-full w-1 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-full"></div>
              <p className="text-lg leading-relaxed pl-6">
                <span className="font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Amenity</span> is a forward-thinking technology services company dedicated to helping businesses of all sizes leverage the power of digital innovation. Our comprehensive suite of services spans software development, digital marketing, cloud solutions, and much more.
              </p>
              <p className="text-lg leading-relaxed pl-6">
                With our expert team and commitment to excellence, we translate your ideas into effective digital solutions. Our philosophy of <span className="font-semibold italic">"You Tell, We Implement"</span> reflects our customer-centric approach and dedication to bringing your vision to life.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                  className={`
                    relative p-5 rounded-xl transition-all duration-300 
                    ${hoveredFeature === index 
                      ? 'bg-gradient-to-br from-white to-gray-50 shadow-2xl shadow-yellow-400/20 border border-yellow-400/30 transform -translate-y-1' 
                      : 'bg-white/80 hover:bg-white shadow-md hover:shadow-lg border border-gray-200'
                    }
                  `}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`
                      p-2 rounded-lg flex-shrink-0 transition-all duration-300
                      ${hoveredFeature === index 
                        ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-md'
                        : 'bg-gradient-to-r from-yellow-400/20 to-orange-500/20 text-yellow-600'
                      }
                    `}>
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className={`font-semibold mb-1 transition-all duration-300 ${hoveredFeature === index ? 'text-black' : 'text-gray-800'}`}>
                        {feature.title}
                      </h4>
                      <p className={`text-sm transition-all duration-300 ${hoveredFeature === index ? 'text-gray-700' : 'text-gray-600'}`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className={`
                    absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-all duration-300
                    ${hoveredFeature === index 
                      ? 'opacity-100 text-orange-500 translate-x-0' 
                      : 'opacity-0 -translate-x-2'
                    }
                  `} />
                </div>
              ))}
            </div>

            <button className={`
              relative overflow-hidden group
              bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full
              font-bold hover:shadow-xl hover:shadow-yellow-400/30 transition-all duration-300
              transform hover:scale-105
            `}>
              <span className="relative z-10 flex items-center">
                Get in Touch
                <ChevronRight className="w-5 h-5 ml-2 transition-all duration-300 group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </div>

          {/* Right Content - Image with Testimonial Overlay */}
          <div className="relative">
            {/* Floating decoration */}
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full filter blur-xl opacity-20 animate-pulse"></div>
            
            {/* Main image with shine effect */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Amenity team collaboration"
                className="w-full h-[28rem] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500"></div>
            </div>
            
            {/* Testimonial Overlay */}
            <div className="absolute -bottom-10 -left-10 bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl border border-gray-200 shadow-2xl max-w-sm hover:shadow-yellow-400/20 transition-shadow duration-300 group">
              <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <Star className="w-5 h-5 text-white fill-current" />
              </div>
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-sm text-gray-700 mb-4 italic group-hover:text-gray-800 transition-colors duration-300">
                "Amenity transformed our digital strategy with their innovative solutions. Their team delivered beyond our expectations."
              </p>
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <img 
                    src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100" 
                    alt="Raj Mehta"
                    className="w-10 h-10 rounded-full object-cover border-2 border-yellow-400 group-hover:border-orange-500 transition-all duration-300"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <p className="text-black font-semibold text-sm group-hover:text-orange-500 transition-colors duration-300">Raj Mehta</p>
                  <p className="text-gray-600 text-xs group-hover:text-gray-700 transition-colors duration-300">CTO, Techinnovate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add these keyframes to your global CSS */}
      <style jsx global>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-15px) translateX(15px); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-10px) translateX(5px); }
        }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 6s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 4s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default About;