"use client"

import Navbar from "@/components/Amenity forge/navbar";
import Footer from "@/components/Amenity forge/footer";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function RNXAPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <section className="pt-16 sm:pt-20 lg:pt-24 pb-0 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 lg:mb-8 animate-fade-in-up">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                RNXA
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto mb-2"
            >
              Internationally operating as RNXA Digital
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white text-lg sm:text-xl lg:text-2xl font-semibold max-w-3xl mx-auto mb-2"
            >
              Reimagining CRM with Agentic AI.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto mb-4"
            >
              Driving Growth, Experience and Speed on ServiceNow
            </motion.p>
            <motion.a
              href="https://rnxadigital.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300 transform hover:scale-105"
            >
              Visit RNXA Digital
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </div>
        </div>
      </section>

      {/* Committed to Excellence Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-center"
            >
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                Committed to Excellence
              </span>
              <span className="block text-white mt-2">in Enterprise AI</span>
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed"
            >
              <p>
                RNXA Digital was founded to close the gap between strategy and execution in enterprise CRM and AI. Built by leaders with decades of experience delivering and operating mission-critical systems, we help organizations move beyond pilots into production-ready, outcome-driven solutions. Our vision is to make Agentic AI practical, reliable, and valuable in real business environments.
              </p>
              
              <p>
                We put customers first by measuring success through tangible outcomes. From initial engagement through long-term operations, we take end-to-end accountability for what we design, deploy, and support. Our focus is on building systems that scale, perform, and deliver value well beyond go-live.
              </p>
              
              <p>
                Our culture is grounded in respect for people, integrity in action, and experience over theory. We uphold high standards, transparency, and trust, especially when decisions are difficult. Our guidance is shaped by real-world execution and a commitment to clarity, consistency, and results.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BRANDS THAT TRUST US Section */}
      <section className="pt-6 sm:pt-8 lg:pt-10 pb-6 sm:pb-8 lg:pb-10 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center items-center"
          >
            <img 
              src="/brands-trust-us.png" 
              alt="Brands That Trust Us"
              className="w-full max-w-5xl h-auto rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

