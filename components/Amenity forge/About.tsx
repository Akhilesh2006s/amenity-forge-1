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
    <section id="about" className="py-24 lg:py-32 bg-black relative overflow-hidden pt-24 lg:pt-32">
      {/* Pure black background */}
      <div className="absolute inset-0 pointer-events-none">
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-12 relative z-10">
            <div className="space-y-8 animate-fade-in-up">
              <h2 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-white block mb-3">About</span>
                <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                  Amenity Forge
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-gray-300 relative animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <p className="text-xl lg:text-2xl leading-relaxed">
                <span className="font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Amenity Forge</span> is a forward-thinking technology services company dedicated to helping businesses of all sizes leverage the power of digital innovation. Our comprehensive suite of services spans software development, digital marketing, cloud solutions, and much more.
              </p>
              <p className="text-xl lg:text-2xl leading-relaxed pt-2">
                With our expert team and commitment to excellence, we translate your ideas into effective digital solutions. Our philosophy of <span className="font-semibold italic text-yellow-400">"You Tell, We Implement"</span> reflects our customer-centric approach and dedication to bringing your vision to life.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up pt-4" style={{animationDelay: '0.4s'}}>
              {features.map((feature, index) => (
                <div 
                  key={index}
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                  className="group relative bg-gradient-to-br from-gray-800/90 via-gray-700/90 to-gray-800/90 backdrop-blur-md p-6 rounded-2xl border border-gray-700/50 hover:border-yellow-400/70 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/20 overflow-hidden"
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  <div className="flex items-start space-x-4 relative z-10">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-yellow-400/30">
                      <div className="text-black">{feature.icon}</div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg mb-2 text-white group-hover:text-yellow-400 transition-colors duration-300">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/0 via-yellow-400/10 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                </div>
              ))}
            </div>

            <div className="animate-fade-in-up pt-6" style={{animationDelay: '0.6s'}}>
              <a href="/Home#contact" className="group inline-block">
                <button className="relative overflow-hidden bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 text-black px-8 py-4 rounded-full font-bold hover:shadow-2xl hover:shadow-yellow-400/50 transition-all duration-500 transform hover:scale-110 bg-[length:200%_auto] animate-gradient-shift">
                  <span className="relative z-10 flex items-center">
                    Get in Touch
                    <ChevronRight className="w-5 h-5 ml-2 transition-all duration-300 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </a>
            </div>
          </div>

          {/* Right Content - Image with Testimonial Overlay */}
          <div className="relative animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            {/* Main image with shine effect */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group border border-gray-700/50">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Amenity team collaboration"
                className="w-full h-[28rem] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
            </div>
            
            {/* Testimonial Overlay */}
            <div className="absolute -bottom-10 -left-10 bg-gradient-to-br from-gray-800/95 via-gray-700/95 to-gray-800/95 backdrop-blur-md p-6 rounded-2xl border border-gray-700/50 shadow-2xl max-w-sm hover:shadow-yellow-400/30 hover:border-yellow-400/50 transition-all duration-300 group">
              <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <Star className="w-5 h-5 text-black fill-current" />
              </div>
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-sm text-gray-300 mb-4 italic group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                "Amenity Forge transformed our digital strategy with their innovative solutions. Their team delivered beyond our expectations."
              </p>
              <div>
                <p className="text-white font-semibold text-sm group-hover:text-yellow-400 transition-colors duration-300">Vipin</p>
                <p className="text-gray-400 text-xs group-hover:text-gray-300 transition-colors duration-300">CTO, Techinnovate</p>
              </div>
            </div>
          </div>
        </div>

        {/* About the Founder Section */}
        <div className="mt-24 lg:mt-32 pt-16 lg:pt-20 border-t border-gray-700/50">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16 animate-fade-in-up">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                  About the Founder
                </span>
              </h3>
              <h4 className="text-xl lg:text-2xl text-white font-semibold mb-8">
                Shri Yasaswi
              </h4>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Left Side - Image/Icon */}
              <div className="relative animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group border border-gray-700/50">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src="/founder.png" 
                    alt="Shri Yasaswi - Founder & CEO"
                    className="w-full h-[400px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
                </div>
                {/* Decorative badge */}
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-full shadow-2xl border-4 border-black">
                  <Award className="w-8 h-8 text-black" />
                </div>
              </div>

              {/* Right Side - Text Content */}
              <div className="space-y-6 text-gray-300 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                <p className="text-base lg:text-lg leading-relaxed">
                  Shri Yasaswi is a young technology entrepreneur, AI innovator, and student founder with a strong focus on building scalable, impact-driven digital products at the intersection of Artificial Intelligence, Education, and Media.
                </p>

                <p className="text-base lg:text-lg leading-relaxed">
                  As the <span className="font-semibold text-yellow-400">Founder & CEO of AmenityForge</span>, Shri Yasaswi leads the vision of creating a next-generation ecosystem that delivers AI-powered tools, platforms, and services designed for students, creators, businesses, and institutions. His work emphasizes practical AI adoption, affordability, and real-world usability rather than experimental concepts.
                </p>

                <p className="text-base lg:text-lg leading-relaxed">
                  Shri Yasaswi's entrepreneurial journey began early, driven by a deep interest in AI engineering, product architecture, and business strategy. He has successfully conceptualized and executed multiple technology initiatives, including AI-based platforms, educational products, and digital solutions, while simultaneously pursuing his academic path.
                </p>

                <div className="bg-gradient-to-br from-gray-800/90 via-gray-700/90 to-gray-800/90 backdrop-blur-md p-6 lg:p-8 rounded-2xl border border-gray-700/50 mt-8">
                  <h5 className="text-lg lg:text-xl font-bold text-white mb-4">His flagship initiatives focus on:</h5>
                  <ul className="space-y-3 text-base lg:text-lg">
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-3 mt-1">•</span>
                      <span>AI tools and platforms across multiple verticals</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-3 mt-1">•</span>
                      <span>EdTech innovation, especially for school-level and early learners</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-3 mt-1">•</span>
                      <span>Scalable SaaS and digital products with long-term commercial viability</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-3 mt-1">•</span>
                      <span>Media and content-driven technology integration</span>
                    </li>
                  </ul>
                </div>

                <p className="text-base lg:text-lg leading-relaxed">
                  AmenityForge is built within a Media & Education Excellence ecosystem associated with <span className="font-bold text-yellow-400">The Times Group</span>, reflecting a commitment to quality, credibility, and industry-aligned standards. Shri Yasaswi also brings experience from the media and music domain, with creative works officially released under <span className="font-bold text-yellow-400">T-Series</span>, India's leading music and entertainment label — demonstrating his ability to bridge technology, creativity, and mass platforms.
                </p>

                <p className="text-base lg:text-lg leading-relaxed">
                  With a long-term vision of building globally relevant AI-first companies, Shri Yasaswi aims to scale AmenityForge into a trusted technology brand while contributing to India's growing startup and innovation ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Members Section */}
        <div className="mt-24 lg:mt-32 pt-16 lg:pt-20 border-t border-gray-700/50">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16 animate-fade-in-up">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                  Leadership Team
                </span>
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
              {/* Chelluri Bhavya Madhav */}
              <div className="bg-gradient-to-br from-gray-800/90 via-gray-700/90 to-gray-800/90 backdrop-blur-md p-6 lg:p-8 rounded-2xl border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="relative mb-6">
                    <div className="relative rounded-2xl overflow-hidden shadow-xl group border-2 border-gray-600/50 w-[200px] h-[250px] lg:w-[250px] lg:h-[300px]">
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <img 
                        src="/BhavyaMadhav.jpg" 
                        alt="Chelluri Bhavya Madhav"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
                    </div>
                    <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-full shadow-lg border-2 border-black">
                      <Lightbulb className="w-5 h-5 text-black" />
                    </div>
                  </div>
                  <h4 className="text-xl lg:text-2xl font-bold text-white mb-2">
                    Chelluri Bhavya Madhav
                  </h4>
                  <p className="text-base lg:text-lg font-semibold text-yellow-400 mb-4">
                    Technology Oversight & Architecture
                  </p>
                </div>
                <p className="text-sm lg:text-base text-gray-300 leading-relaxed text-center">
                  Leads the overall technology vision with a strong focus on data science and AI, overseeing system architecture, data pipelines, and technical governance to deliver scalable, secure, and future-ready platforms across products and services.
                </p>
              </div>

              {/* Akhilesh */}
              <div className="bg-gradient-to-br from-gray-800/90 via-gray-700/90 to-gray-800/90 backdrop-blur-md p-6 lg:p-8 rounded-2xl border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="relative mb-6">
                    <div className="relative rounded-2xl overflow-hidden shadow-xl group border-2 border-gray-600/50 w-[200px] h-[250px] lg:w-[250px] lg:h-[300px]">
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <img 
                        src="/Akhilesh.png" 
                        alt="Akhilesh - DevOps and Service Operations Lead"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
                    </div>
                    <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-full shadow-lg border-2 border-black">
                      <Target className="w-5 h-5 text-black" />
                    </div>
                  </div>
                  <h4 className="text-xl lg:text-2xl font-bold text-white mb-2">
                    Akhilesh
                  </h4>
                  <p className="text-base lg:text-lg font-semibold text-yellow-400 mb-4">
                    DevOps and Service Operations Lead
                  </p>
                </div>
                <p className="text-sm lg:text-base text-gray-300 leading-relaxed text-center">
                  Leads DevOps and service operations with a focus on reliability, scalability, and performance, managing cloud infrastructure, CI/CD pipelines, and operational workflows to ensure seamless delivery and stability of digital products and services.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Advisors & Leaders Section */}
        <div className="mt-24 lg:mt-32 pt-16 lg:pt-20 border-t border-gray-700/50">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16 animate-fade-in-up">
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                Backed by <span className="font-bold text-yellow-400">Stanford-recognized top 1% global scientists</span> and accomplished <span className="font-bold text-yellow-400">PhD & MBA industry leaders</span>.
              </p>
            </div>

            {/* 8 Small Image Boxes */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {[...Array(8)].map((_, index) => (
                <div 
                  key={index}
                  className="group relative bg-gradient-to-br from-gray-800/90 via-gray-700/90 to-gray-800/90 backdrop-blur-md rounded-xl border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/20 overflow-hidden animate-fade-in-up"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="aspect-square relative w-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <img 
                      src={`/advisor${index + 1}.png`}
                      alt={`Advisor ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-all duration-500"></div>
                    {/* Decorative corner badge */}
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-orange-500 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Award className="w-4 h-4 text-black" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scientific Advisory Board Section */}
        <div className="mt-24 lg:mt-32 pt-16 lg:pt-20 border-t border-gray-700/50">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16 animate-fade-in-up">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                  Scientific Advisory Board
                </span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
              {/* Dr. Karnika Dwivedi */}
              <div className="bg-gradient-to-br from-gray-800/90 via-gray-700/90 to-gray-800/90 backdrop-blur-md p-6 rounded-2xl border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/20 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                <h4 className="text-lg lg:text-xl font-bold text-white mb-2">Dr. Karnika Dwivedi</h4>
                <p className="text-sm lg:text-base text-yellow-400 font-semibold mb-3">
                  <span className="hidden md:inline">Ph.D. in Artificial Intelligence</span>
                  <span className="md:hidden">Ph.D. AI</span>
                </p>
                <p className="text-sm lg:text-base text-gray-300">
                  <span className="hidden md:inline">Research Scientist | 15 Publications</span>
                  <span className="md:hidden">15 Publications</span>
                </p>
              </div>

              {/* Dr. Uphar Singh */}
              <div className="bg-gradient-to-br from-gray-800/90 via-gray-700/90 to-gray-800/90 backdrop-blur-md p-6 rounded-2xl border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/20 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <h4 className="text-lg lg:text-xl font-bold text-white mb-2">Dr. Uphar Singh</h4>
                <p className="text-sm lg:text-base text-yellow-400 font-semibold mb-3">
                  <span className="hidden md:inline">Ph.D. | M.Tech (Data Science)</span>
                  <span className="md:hidden">Ph.D. Data Science</span>
                </p>
                <p className="text-sm lg:text-base text-gray-300">
                  <span className="hidden md:inline">Research Scientist | 7 Publications</span>
                  <span className="md:hidden">7 Publications</span>
                </p>
              </div>

              {/* Dr. Sidharth Quamara */}
              <div className="bg-gradient-to-br from-gray-800/90 via-gray-700/90 to-gray-800/90 backdrop-blur-md p-6 rounded-2xl border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/20 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                <h4 className="text-lg lg:text-xl font-bold text-white mb-2">Dr. Sidharth Quamara</h4>
                <p className="text-sm lg:text-base text-yellow-400 font-semibold mb-3">Ph.D. in Blockchain (NIT)</p>
                <p className="text-sm lg:text-base text-gray-300">MHRD Fellowship Awardee</p>
              </div>

              {/* Dr. Amit Soni */}
              <div className="bg-gradient-to-br from-gray-800/90 via-gray-700/90 to-gray-800/90 backdrop-blur-md p-6 rounded-2xl border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/20 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <h4 className="text-lg lg:text-xl font-bold text-white mb-2">Dr. Amit Soni</h4>
                <p className="text-sm lg:text-base text-yellow-400 font-semibold mb-3">
                  <span className="hidden md:inline">Ph.D. in Artificial Intelligence (IIT) | M.Tech</span>
                  <span className="md:hidden">Ph.D. AI (IIT) | Researcher</span>
                </p>
                <p className="text-sm lg:text-base text-gray-300">
                  <span className="hidden md:inline">Research Scientist | 3 Publications</span>
                  <span className="md:hidden">3 Publications</span>
                </p>
              </div>

              {/* Dr. Ankith Kumar Pandey */}
              <div className="bg-gradient-to-br from-gray-800/90 via-gray-700/90 to-gray-800/90 backdrop-blur-md p-6 rounded-2xl border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/20 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
                <h4 className="text-lg lg:text-xl font-bold text-white mb-2">Dr. Ankith Kumar Pandey</h4>
                <p className="text-sm lg:text-base text-yellow-400 font-semibold mb-3">
                  <span className="hidden md:inline">Stanford-Recognized | World's Top 2% Scientist</span>
                  <span className="md:hidden">Top 2% Scientist | Stanford-Recognized</span>
                </p>
                <p className="text-sm lg:text-base text-gray-300">Research & Academic Advisor</p>
              </div>

              {/* Dr. Avinash Upadhyay */}
              <div className="bg-gradient-to-br from-gray-800/90 via-gray-700/90 to-gray-800/90 backdrop-blur-md p-6 rounded-2xl border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/20 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                <h4 className="text-lg lg:text-xl font-bold text-white mb-2">Dr. Avinash Upadhyay</h4>
                <p className="text-sm lg:text-base text-yellow-400 font-semibold mb-3">Ph.D. | M.S. (KU)</p>
                <p className="text-sm lg:text-base text-gray-300">Research & Technology Advisor</p>
              </div>

              {/* Dr. Manoj Sharma */}
              <div className="bg-gradient-to-br from-gray-800/90 via-gray-700/90 to-gray-800/90 backdrop-blur-md p-6 rounded-2xl border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/20 animate-fade-in-up" style={{animationDelay: '0.7s'}}>
                <h4 className="text-lg lg:text-xl font-bold text-white mb-2">Dr. Manoj Sharma</h4>
                <p className="text-sm lg:text-base text-yellow-400 font-semibold mb-3">Ph.D. in Computer Science | Professor</p>
                <p className="text-sm lg:text-base text-gray-300">Academic & Research Advisor</p>
              </div>

              {/* Dr. Vivek Kumar */}
              <div className="bg-gradient-to-br from-gray-800/90 via-gray-700/90 to-gray-800/90 backdrop-blur-md p-6 rounded-2xl border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/20 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
                <h4 className="text-lg lg:text-xl font-bold text-white mb-2">Dr. Vivek Kumar</h4>
                <p className="text-sm lg:text-base text-yellow-400 font-semibold mb-3">Ph.D. in High-Performance Computing (APJTU)</p>
                <p className="text-sm lg:text-base text-gray-300">Systems & Infrastructure Advisor</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;