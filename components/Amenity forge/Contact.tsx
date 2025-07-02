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
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Ready to transform your business with our digital solutions? Reach out to us today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-white to-gray-100 p-8 rounded-2xl border border-gray-200 shadow-lg relative">
            <h3 className="text-2xl font-bold text-black mb-8">Send us a message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-gray-700 mb-2 font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2 font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-gray-700 mb-2 font-medium">
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg"
                >
                  <option value="">Select a service</option>
                  <option value="software-development">Software Development</option>
                  <option value="mobile-app">Mobile App Development</option>
                  <option value="web-development">Web Development</option>
                  <option value="cloud-services">Cloud Services</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="ui-ux-design">UI/UX Design</option>
                  <option value="consulting">IT Consulting</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg"
                ></textarea>
              </div>

              {/* Status message */}
              {result && (
                <div className={`p-3 rounded-lg ${result.includes("successfully") ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}>
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
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black py-4 px-8 rounded-lg font-bold hover:from-yellow-500 hover:to-orange-600 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-800 to-black p-8 rounded-2xl border border-gray-600 shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Phone</p>
                    <p className="text-white font-semibold text-lg">+91 8341122405</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Email</p>
                    <p className="text-white font-semibold text-lg">ysyasaswissv@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Address</p>
                    <p className="text-white font-semibold text-lg">Hyderabad, Telangana, India</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-600">
                <a href="tel:+918341122405" className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black py-3 px-6 rounded-lg font-bold hover:from-yellow-500 hover:to-orange-600 transition-all transform hover:scale-105 flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-black p-8 rounded-2xl border border-gray-600 shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                <Clock className="w-6 h-6 text-yellow-400" />
                <span>Business Hours</span>
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
