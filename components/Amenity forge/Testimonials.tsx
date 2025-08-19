import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(1);

  const testimonials = [
    {
      id: 0,
      quote: "Amenity transformed our outdated systems with their custom software development. The team was professional and delivered exactly what we needed.",
      name: "Ankith Kumar",
      position: "TechSoft Solutions",
      rating: 5
    },
    {
      id: 1,
      quote: "The mobile app developed by Amenity boosted our sales by 40%. Their expertise in UI/UX design created an intuitive experience for our customers.",
      name: "Priya Sharma", 
      position: "Greenleaf E-commerce",
      rating: 5
    },
    {
      id: 2,
      quote: "Amenity's digital marketing strategy dramatically improved our online presence. We've seen a 65% increase in qualified leads since partnering with them.",
      name: "Rajesh",
      position: "Global Logistics Inc.",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-200 via-gray-300 to-white relative overflow-hidden">
      {/* 3D Background Objects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating geometric shapes */}
        <div className="absolute top-16 left-10 w-8 h-8 bg-gradient-to-br from-gray-400/20 to-gray-500/20 transform rotate-45 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-6 h-6 bg-gradient-to-br from-gray-400/25 to-gray-500/25 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-20 w-10 h-10 bg-gradient-to-br from-gray-400/15 to-gray-500/15 transform -rotate-12 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-60 right-40 w-7 h-7 bg-gradient-to-br from-gray-400/30 to-gray-500/30 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-60 right-16 w-5 h-5 bg-gradient-to-br from-gray-400/20 to-gray-500/20 transform rotate-30 animate-pulse" style={{animationDelay: '1.5s'}}></div>
        
        {/* Floating hexagons */}
        <div className="absolute top-80 left-40 w-9 h-9 bg-gradient-to-br from-gray-400/25 to-gray-500/25 transform rotate-45 animate-bounce" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute bottom-20 right-60 w-6 h-6 bg-gradient-to-br from-gray-400/20 to-gray-500/20 transform rotate-12 animate-pulse" style={{animationDelay: '3s'}}></div>
        
        {/* Additional scattered objects */}
        <div className="absolute top-40 left-80 w-4 h-4 bg-gradient-to-br from-gray-400/30 to-gray-500/30 rounded-full animate-pulse" style={{animationDelay: '1.8s'}}></div>
        <div className="absolute bottom-40 left-60 w-8 h-8 bg-gradient-to-br from-gray-400/15 to-gray-500/15 transform rotate-45 animate-bounce" style={{animationDelay: '2.3s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            What Our Clients Sa
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what some of our clients have to say about working with us.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white hover:bg-gray-100 text-black p-3 rounded-full transition-colors z-10 shadow-lg border border-gray-200"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white hover:bg-gray-100 text-black p-3 rounded-full transition-colors z-10 shadow-lg border border-gray-200"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonials Container */}
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => {
              const position = (index - currentTestimonial + testimonials.length) % testimonials.length;
              const isActive = position === 0;
              const isPrev = position === testimonials.length - 1;
              const isNext = position === 1;

              return (
                <div
                  key={testimonial.id}
                  className={`
                    bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 transition-all duration-500 transform shadow-lg relative
                    ${isActive ? 'scale-105 shadow-2xl shadow-yellow-400/20 border-yellow-400/50' : 'scale-95 opacity-75'}
                    ${isPrev || isNext ? 'lg:block' : 'lg:block'}
                    hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/10
                  `}
                >
                  {/* Floating mini objects around testimonial cards */}
                  {isActive && (
                    <>
                      <div className="absolute -top-2 -right-2 w-3 h-3 bg-gradient-to-br from-yellow-400/40 to-orange-500/40 rounded-full animate-pulse"></div>
                      <div className="absolute top-4 -left-3 w-2 h-2 bg-gradient-to-br from-yellow-400/30 to-orange-500/30 transform rotate-45 animate-bounce" style={{animationDelay: '1s'}}></div>
                      <div className="absolute bottom-4 -right-3 w-2 h-2 bg-gradient-to-br from-yellow-400/35 to-orange-500/35 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
                    </>
                  )}
                  
                  <div className="mb-6">
                    <Quote className="w-8 h-8 text-yellow-400 mb-4" />
                    <p className="text-gray-700 text-lg leading-relaxed italic">
                      "{testimonial.quote}"
                    </p>
                  </div>

                  <div className="flex items-center">
                    <div>
                      <h4 className="text-black font-bold text-lg">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.position}</p>
                      <div className="flex items-center mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-12 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-yellow-400' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;