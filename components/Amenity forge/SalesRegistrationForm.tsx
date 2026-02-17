"use client"

import React, { useState } from 'react';
import { Send, CheckCircle, Loader2, User, Mail, Phone, Briefcase, MapPin, FileText } from 'lucide-react';

const SalesRegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    location: '',
    experience: '',
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
    setResult("Submitting your registration...");

    try {
      const response = await fetch('/api/sales-registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setResult("Registration submitted successfully! We'll get back to you soon.");
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          company: '',
          location: '',
          experience: '',
          message: ''
        });
      } else {
        setResult(data.message || "Failed to submit registration. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-8 sm:py-10 lg:py-16 bg-black relative overflow-hidden min-h-screen">
      <div className="container mx-auto px-4 sm:px-5 lg:px-7 relative z-10">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12 animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 lg:mb-5">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
              Sales Registration
            </span>
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Join our sales team! Fill out the form below and we'll get in touch with you.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-md p-6 sm:p-8 lg:p-10 rounded-xl border border-gray-700/50 shadow-2xl relative animate-fade-in-up hover:shadow-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300">
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm text-gray-300 mb-2 font-medium flex items-center space-x-2">
                    <User className="w-4 h-4 text-yellow-400" />
                    <span>Full Name *</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-sm sm:text-base bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 min-h-[44px]"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-300 mb-2 font-medium flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-yellow-400" />
                    <span>Email Address *</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-sm sm:text-base bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 min-h-[44px]"
                    placeholder="john.doe@example.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm text-gray-300 mb-2 font-medium flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-yellow-400" />
                    <span>Phone Number *</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-sm sm:text-base bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 min-h-[44px]"
                    placeholder="+1 234 567 8900"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm text-gray-300 mb-2 font-medium flex items-center space-x-2">
                    <Briefcase className="w-4 h-4 text-yellow-400" />
                    <span>Current Company</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-sm sm:text-base bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 min-h-[44px]"
                    placeholder="Company Name"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
                <div>
                  <label htmlFor="location" className="block text-sm text-gray-300 mb-2 font-medium flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-yellow-400" />
                    <span>Location *</span>
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-sm sm:text-base bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 min-h-[44px]"
                    placeholder="City, State/Country"
                  />
                </div>
                <div>
                  <label htmlFor="experience" className="block text-sm text-gray-300 mb-2 font-medium flex items-center space-x-2">
                    <FileText className="w-4 h-4 text-yellow-400" />
                    <span>Years of Experience *</span>
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-sm sm:text-base bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 min-h-[44px]"
                  >
                    <option value="" className="bg-gray-800">Select experience</option>
                    <option value="0-1" className="bg-gray-800">0-1 years</option>
                    <option value="1-3" className="bg-gray-800">1-3 years</option>
                    <option value="3-5" className="bg-gray-800">3-5 years</option>
                    <option value="5-10" className="bg-gray-800">5-10 years</option>
                    <option value="10+" className="bg-gray-800">10+ years</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-gray-300 mb-2 font-medium flex items-center space-x-2">
                  <FileText className="w-4 h-4 text-yellow-400" />
                  <span>Additional Information</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 text-sm sm:text-base bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 resize-none"
                  placeholder="Tell us about your sales experience, achievements, or why you're interested in joining our team..."
                ></textarea>
              </div>

              {/* Status message */}
              {result && (
                <div className={`p-4 rounded-lg text-sm sm:text-base ${
                  result.includes("successfully") 
                    ? "bg-green-900/50 text-green-300 border border-green-700/50" 
                    : "bg-yellow-900/50 text-yellow-300 border border-yellow-700/50"
                }`}>
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

              <button
                type="submit"
                disabled={isSubmitting}
                className="relative w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 text-black py-4 sm:py-4 lg:py-5 px-6 lg:px-8 rounded-lg font-bold text-base sm:text-lg transition-all transform hover:scale-105 flex items-center justify-center space-x-2 overflow-hidden shadow-lg shadow-yellow-400/50 hover:shadow-yellow-400/70 bg-[length:200%_auto] animate-gradient-shift disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span className="relative z-10">Submit Registration</span>
                    <Send className="w-5 h-5 relative z-10" />
                  </>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-600 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesRegistrationForm;
