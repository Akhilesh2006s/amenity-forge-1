"use client"

import Navbar from "@/components/Amenity forge/navbar";
import Footer from "@/components/Amenity forge/footer";
import { motion } from "framer-motion";
import { ExternalLink, Shield, GraduationCap, Award, BarChart3, BadgeCheck, Users, Sparkles, BookOpen, FileCheck, TrendingUp, School } from "lucide-react";

export default function GTPPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      {/* GTAP Hero Section */}
      <section className="pt-12 sm:pt-16 lg:pt-20 pb-6 sm:pb-8 lg:pb-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 lg:mb-8">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3"
            >
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                Empowering Schools to Become AI-Ready Institutions
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-4xl mx-auto mb-6"
            >
              Join IAETDS – India's School AI Readiness & Digital Credibility Association
            </motion.p>
            <motion.a
              href="/Home#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 text-black font-bold text-base rounded-lg hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300 transform hover:scale-105"
            >
              Become an IAETDS Partner School
            </motion.a>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-6 sm:py-8 lg:py-10 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-center"
            >
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
                🤝 Why Partner With IAETDS?
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 text-sm sm:text-base lg:text-lg mb-6 text-center max-w-4xl mx-auto"
            >
              IAETDS partners with schools to enhance:
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-6">
              {[
                { icon: Shield, text: "Academic credibility" },
                { icon: Sparkles, text: "AI readiness" },
                { icon: GraduationCap, text: "Student future skills" },
                { icon: BadgeCheck, text: "Digital recognition" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-md p-3 rounded-lg border border-gray-700/50"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-black" />
                  </div>
                  <p className="text-white font-semibold text-sm sm:text-base">{item.text}</p>
                </motion.div>
              ))}
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-white text-center text-base sm:text-lg font-semibold max-w-3xl mx-auto"
            >
              We are not just an app.<br />
              We are a School AI & Digital Recognition Association.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Annual Partnership Section */}
      <section className="py-6 sm:py-8 lg:py-10 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 text-center"
            >
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
                💼 ₹10,000 Annual Partnership Includes
              </span>
            </motion.h2>
            <div className="grid grid-cols-1 gap-3 sm:gap-4 max-w-2xl mx-auto">
              {[
                {
                  icon: School,
                  title: "Official IAETDS School Login",
                  items: ["Dedicated school admin dashboard", "School digital ID", "Institutional recognition"]
                },
                {
                  icon: BookOpen,
                  title: "Student Access to AI Learning App",
                  items: ["AI-based quizzes", "Logical & math puzzles", "Skill assessments", "Future skills modules", "Offline-friendly access"]
                },
                {
                  icon: Award,
                  title: "Digital Certification System",
                  items: ["GTAP branded certificates", "QR-code verification", "AI skill completion awards", "Participation certificates"]
                },
                {
                  icon: BarChart3,
                  title: "Quarterly School Skill Report",
                  items: ["Student participation insights", "Skill development analytics", "Performance summary"]
                },
                {
                  icon: BadgeCheck,
                  title: "AI-Enabled School Recognition Badge",
                  items: ["AI-Enabled Partner School 2026", "Website listing", "Social media recognition", "Principal recognition certificate"]
                },
                {
                  icon: Users,
                  title: "2 AI Awareness Workshops Per Year",
                  items: ["AI introduction sessions", "Career guidance in AI", "Future technology awareness"]
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-md p-3 sm:p-4 rounded-lg border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20"
                >
                  <div className="mb-2">
                    <div className="w-7 h-7 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mb-2">
                      <benefit.icon className="w-3.5 h-3.5 text-black" />
                    </div>
                    <h3 className="text-white font-bold text-xs sm:text-sm mb-2">{benefit.title}</h3>
                  </div>
                  <ul className="space-y-1">
                    {benefit.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-1.5 text-gray-300 text-xs">
                        <span className="text-yellow-400 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Original GTAP Section */}
      <section className="py-6 sm:py-8 lg:py-10 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4 lg:mb-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3"
            >
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                GTAP
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-4xl mx-auto mb-3"
            >
              Global T.I.M.E.S Accreditation Panel
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white text-base sm:text-lg lg:text-xl font-semibold max-w-4xl mx-auto mb-4"
            >
              T.I.M.E.S stands for Training, Innovation, Mentorship, Education & Standards
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-4xl mx-auto text-gray-300 text-xs sm:text-sm lg:text-base leading-relaxed mb-6 space-y-3"
            >
              <p>
                GTAP (Global T.I.M.E.S Accreditation Panel) is built on a media and education excellence ecosystem inspired by a legacy of innovation in learning and communication. It represents a global movement that bridges innovation, credibility, and world-class academic standards.
              </p>
            </motion.div>
            <motion.a
              href="https://globaltimespanel.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
            >
              Visit Global Times Panel
              <ExternalLink className="w-3 h-3" />
            </motion.a>
          </div>
        </div>
      </section>

      {/* IAETDS Section */}
      <section className="py-4 sm:py-6 lg:py-8 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-4 lg:mb-5">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3"
            >
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                IAETDS
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-4xl mb-4"
            >
              Indian Association for Educational Technology & Digital Systems
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-4xl text-gray-300 text-xs sm:text-sm lg:text-base leading-relaxed space-y-3"
            >
              <p>
                The Indian Association for Educational Technology & Digital Systems (IAETDS) is a national organization dedicated to helping schools adopt modern digital technology in a safe, structured, and practical way.
              </p>
              <p>
                Our goal is to support schools in improving teaching, learning, and administration through reliable digital systems. We assist schools in implementing learning platforms, secure student data systems, digital classrooms, automation tools, and AI-powered solutions where needed.
              </p>
              <p>
                IAETDS focuses on making technology simple, affordable, and effective for schools. We help institutions move from basic computer usage to fully organized digital systems that improve efficiency, transparency, and academic performance.
              </p>
              <p>
                By combining strong technical expertise with modern innovations like AI, IAETDS aims to prepare Indian schools for the future while ensuring safety, scalability, and long-term growth.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-4xl mt-5 space-y-3"
            >
              <p className="text-white text-sm sm:text-base lg:text-lg font-semibold leading-relaxed">
                Partner with IAETDS to gain institutional recognition, receive GTAP certification, and strengthen your school's digital credibility.
              </p>
              <p className="text-gray-300 text-xs sm:text-sm lg:text-base leading-relaxed">
                Empower your institution with structured technology systems, compliance support, and future-ready solutions.
              </p>
            </motion.div>
            
            <motion.a
              href="/Home#contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300 transform hover:scale-105 mt-4 text-sm sm:text-base"
            >
              Apply for Recognition
            </motion.a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

