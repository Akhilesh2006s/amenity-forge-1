import React from 'react';
import { Quote, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const regularTestimonials = [
    {
      quote: "Excellent work and professional service. The team delivered exactly what we needed on time.",
      name: "Anand Prakash",
      rating: 5
    },
    {
      quote: "Great experience working with Amenity Forge. Highly recommend their services.",
      name: "Harish",
      rating: 5
    },
    {
      quote: "Outstanding quality and attention to detail. Very satisfied with the results.",
      name: "Sanjeev",
      rating: 5
    },
    {
      quote: "Professional team with excellent technical expertise. Delivered beyond expectations.",
      name: "Sandeep",
      rating: 5
    },
    {
      quote: "Top-notch service and innovative solutions. Would definitely work with them again.",
      name: "Rajesh",
      rating: 5
    },
    {
      quote: "Impressive work quality and timely delivery. Great communication throughout the project.",
      name: "Amit Soni",
      rating: 5
    },
    {
      quote: "Excellent collaboration and results. The team understands client needs perfectly.",
      name: "Raju H",
      rating: 5
    },
    {
      quote: "Outstanding service and professional approach. Highly satisfied with the outcome.",
      name: "Likith",
      rating: 5
    },
    {
      quote: "Great team to work with. Delivered quality solutions that exceeded our expectations.",
      name: "Suresh",
      rating: 5
    }
  ];

  const specialTestimonials = [
    {
      quote: "Amenity Forge has been an exceptional partner in our digital transformation journey. Their innovative AI-powered solutions have revolutionized how we operate. The team's expertise, dedication, and commitment to excellence is unmatched. They don't just deliver projects; they deliver success stories. Working with them has been one of the best decisions we've made.",
      name: "Vineeth Jain",
      position: "MD of Times Group",
      rating: 5,
      isPremium: true
    },
    {
      quote: "Working with Amenity Forge has been a game-changer for our organization. Their technical expertise and innovative approach have helped us achieve remarkable results. The team is professional, responsive, and truly understands how to leverage technology for business success. Highly recommend their services.",
      name: "Sameer Pathak",
      position: "President of Pickle Ball",
      rating: 5,
      isPremium: true
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-black relative overflow-hidden">
      {/* Pure black background */}
      <div className="absolute inset-0 pointer-events-none">
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 lg:mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
              Client Reviews
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed pt-2">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        {/* Special Testimonials - Featured */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16 max-w-7xl mx-auto">
          {/* Vineeth Jain - Most Special */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative"
          >
            <div className="relative bg-gradient-to-br from-gray-800/90 via-gray-700/90 to-gray-800/90 backdrop-blur-md p-8 rounded-2xl border-2 border-yellow-400/70 hover:border-yellow-400 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/30 overflow-hidden">
              {/* Premium badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                ⭐ PREMIUM
              </div>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <div className="relative z-10">
                <Quote className="w-8 h-8 text-yellow-400 mb-4" />
                <p className="text-gray-200 text-base lg:text-lg leading-relaxed mb-4 italic">
                  "{specialTestimonials[0].quote}"
                </p>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1 group-hover:text-yellow-400 transition-colors">
                    {specialTestimonials[0].name}
                  </h4>
                  <p className="text-yellow-400 text-sm mb-2">{specialTestimonials[0].position}</p>
                  <div className="flex items-center">
                    {[...Array(specialTestimonials[0].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/0 via-yellow-400/20 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            </div>
          </motion.div>

          {/* Sameer Pathak - Special but less than Vineeth */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative"
          >
            <div className="relative bg-gradient-to-br from-gray-800/90 via-gray-700/90 to-gray-800/90 backdrop-blur-md p-8 rounded-2xl border border-yellow-400/50 hover:border-yellow-400/70 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/20 overflow-hidden">
              {/* Premium badge - smaller */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400/80 to-orange-500/80 text-white px-3 py-1 rounded-full text-xs font-bold">
                ⭐ FEATURED
              </div>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <div className="relative z-10">
                <Quote className="w-8 h-8 text-yellow-400 mb-4" />
                <p className="text-gray-200 text-base lg:text-lg leading-relaxed mb-4 italic">
                  "{specialTestimonials[1].quote}"
                </p>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1 group-hover:text-yellow-400 transition-colors">
                    {specialTestimonials[1].name}
                  </h4>
                  <p className="text-yellow-400/80 text-sm mb-2">{specialTestimonials[1].position}</p>
                  <div className="flex items-center">
                    {[...Array(specialTestimonials[1].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/0 via-yellow-400/10 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            </div>
          </motion.div>
        </div>

        {/* Regular Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {regularTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-gray-800/90 via-gray-700/90 to-gray-800/90 backdrop-blur-md p-6 rounded-2xl border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/10 overflow-hidden">
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <div className="relative z-10">
                  <Quote className="w-6 h-6 text-yellow-400 mb-3" />
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <h4 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">
                      {testimonial.name}
                    </h4>
                    <div className="flex items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/0 via-yellow-400/10 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;