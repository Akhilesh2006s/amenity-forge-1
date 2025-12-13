import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Loader2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult("Sending your message...");

    const formDataToSend = new FormData();
    formDataToSend.append("fullName", formData.fullName);
    formDataToSend.append("name", formData.fullName); // ✅ Required by Web3Forms
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("service", formData.service);
    formDataToSend.append("message", formData.message);
    formDataToSend.append("access_key", "09d17e97-7ab1-4fe5-aa2c-d65f328d12db"); // ✅ Replace with your actual key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          Accept: "application/json" // ✅ Recommended
        },
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        setResult(data.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const businessHours = [
    { day: 'Monday - Friday:', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday:', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday:', hours: 'Closed' }
  ];

  return (
    <section id="contact" className="py-16 lg:py-24 bg-black relative overflow-hidden">
      {/* Pure black background - no decorative elements */}
      <div className="absolute inset-0">
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 lg:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-6">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
              Get in Touch
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Ready to transform your business with our digital solutions? Reach out to us today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-md p-6 lg:p-8 rounded-2xl border border-gray-700/50 shadow-2xl relative animate-fade-in-up hover:shadow-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300" style={{animationDelay: '0.2s'}}>
            <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-6 lg:mb-8">Send us a message</h3>

            <form onSubmit={handleSubmit} className="space-y-5 lg:space-y-6">
              <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm sm:text-base text-gray-300 mb-2 font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-sm sm:text-base bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm sm:text-base text-gray-300 mb-2 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-sm sm:text-base bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm sm:text-base text-gray-300 mb-2 font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-sm sm:text-base bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm sm:text-base text-gray-300 mb-2 font-medium">
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-sm sm:text-base bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                >
                  <option value="" className="bg-gray-800">Select a service</option>
                  <option value="software-development" className="bg-gray-800">Software Development</option>
                  <option value="mobile-app" className="bg-gray-800">Mobile App Development</option>
                  <option value="web-development" className="bg-gray-800">Web Development</option>
                  <option value="cloud-services" className="bg-gray-800">Cloud Services</option>
                  <option value="digital-marketing" className="bg-gray-800">Digital Marketing</option>
                  <option value="ui-ux-design" className="bg-gray-800">UI/UX Design</option>
                  <option value="consulting" className="bg-gray-800">IT Consulting</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm sm:text-base text-gray-300 mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full px-4 py-3 text-sm sm:text-base bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 resize-none"
                ></textarea>
              </div>

              {/* Status message */}
              {result && (
                <div className={`p-3 rounded-lg text-sm sm:text-base ${result.includes("successfully") ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}>
                  <div className="flex items-center space-x-2">
                    {isSubmitting ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <CheckCircle className="w-5 h-5" />
                    )}
                    <span>{result}</span>
                  </div>
                </div>
              )}

              <input type="hidden" name="redirect" value="https://web3forms.com/success" />

              <button
                type="submit"
                disabled={isSubmitting}
                className="relative w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 text-black py-3 lg:py-4 px-6 lg:px-8 rounded-lg font-bold text-sm sm:text-base transition-all transform hover:scale-105 flex items-center justify-center space-x-2 overflow-hidden shadow-lg shadow-yellow-400/50 hover:shadow-yellow-400/70 bg-[length:200%_auto] animate-gradient-shift disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span className="relative z-10">Send Message</span>
                    <Send className="w-5 h-5 relative z-10" />
                  </>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-600 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 lg:space-y-8">
            <div className="bg-gradient-to-br from-gray-800/90 to-black/90 backdrop-blur-md p-6 lg:p-8 rounded-2xl border border-gray-600/50 shadow-2xl relative animate-fade-in-up hover:border-yellow-400/50 transition-all duration-300" style={{animationDelay: '0.3s'}}>
              <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-6 lg:mb-8">Contact Information</h3>
              <div className="space-y-5 lg:space-y-6">
                <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-yellow-400/30 flex-shrink-0">
                    <Phone className="w-5 h-5 lg:w-6 lg:h-6 text-black" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-xs sm:text-sm mb-1">Phone</p>
                    <p className="text-white font-semibold text-base sm:text-lg group-hover:text-yellow-400 transition-colors duration-300">+91 8341122405</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-yellow-400/30 flex-shrink-0">
                    <Mail className="w-5 h-5 lg:w-6 lg:h-6 text-black" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-xs sm:text-sm mb-1">Email</p>
                    <p className="text-white font-semibold text-base sm:text-lg group-hover:text-yellow-400 transition-colors duration-300 break-words">amenityforge@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-yellow-400/30 flex-shrink-0">
                    <MapPin className="w-5 h-5 lg:w-6 lg:h-6 text-black" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-xs sm:text-sm mb-1">Address</p>
                    <p className="text-white font-semibold text-base sm:text-lg group-hover:text-yellow-400 transition-colors duration-300">Hyderabad, Telangana, India</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 lg:mt-8 pt-6 lg:pt-8 border-t border-gray-600/50">
                <a href="tel:+918341122405" className="relative inline-block bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 text-black py-3 px-6 rounded-lg font-bold text-sm sm:text-base transition-all transform hover:scale-110 flex items-center space-x-2 overflow-hidden shadow-lg shadow-yellow-400/50 hover:shadow-yellow-400/70 bg-[length:200%_auto] animate-gradient-shift">
                  <Phone className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Call Now</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-600 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/90 to-black/90 backdrop-blur-md p-8 rounded-2xl border border-gray-600/50 shadow-2xl relative animate-fade-in-up hover:border-yellow-400/50 transition-all duration-300" style={{animationDelay: '0.4s'}}>
              <h3 className="text-2xl font-bold mb-6 flex items-center space-x-2">
                <Clock className="w-6 h-6 text-yellow-400 animate-pulse" />
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Business Hours</span>
              </h3>
              <div className="space-y-4">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-300">{schedule.day}</span>
                    <span className={`font-semibold ${schedule.hours === 'Closed' ? 'text-red-400' : 'text-white'}`}>
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
