"use client"

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Crown, Zap, Clock, Star } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ComingSoon = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Set target date (30 days from now)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center overflow-hidden">
      {/* Dynamic cursor glow */}
      <div 
        className="fixed w-96 h-96 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-3xl opacity-20 pointer-events-none z-0 transition-all duration-300"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-orange-500/10" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-2xl animate-pulse" />
      
      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-60 animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }}
        />
      ))}
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center mb-8"
        >
          <Crown className="h-8 w-8 text-yellow-400 mr-3 animate-pulse" />
          <span className="text-lg font-medium text-yellow-400 tracking-wider uppercase">Amenity Forge</span>
          <Sparkles className="h-8 w-8 text-orange-500 ml-3 animate-pulse" />
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent leading-tight relative"
        >
          <span className="relative inline-block">
            Something
            <span className="relative mx-4">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent animate-pulse">
                Amazing
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent opacity-50 blur-sm animate-pulse" />
            </span>
            is Coming
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
        >
          We're working on something revolutionary. 
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent font-semibold"> Amenity Forge </span>
          is about to change everything.
        </motion.p>

        {/* Countdown Timer */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center items-center gap-8 mb-12"
        >
          <div className="text-center">
            <div className="text-4xl md:text-6xl font-bold text-yellow-400 mb-2">{timeLeft.days}</div>
            <div className="text-gray-400 uppercase tracking-wider">Days</div>
          </div>
          <div className="text-4xl md:text-6xl font-bold text-yellow-400">:</div>
          <div className="text-center">
            <div className="text-4xl md:text-6xl font-bold text-yellow-400 mb-2">{timeLeft.hours}</div>
            <div className="text-gray-400 uppercase tracking-wider">Hours</div>
          </div>
          <div className="text-4xl md:text-6xl font-bold text-yellow-400">:</div>
          <div className="text-center">
            <div className="text-4xl md:text-6xl font-bold text-yellow-400 mb-2">{timeLeft.minutes}</div>
            <div className="text-gray-400 uppercase tracking-wider">Minutes</div>
          </div>
          <div className="text-4xl md:text-6xl font-bold text-yellow-400">:</div>
          <div className="text-center">
            <div className="text-4xl md:text-6xl font-bold text-yellow-400 mb-2">{timeLeft.seconds}</div>
            <div className="text-gray-400 uppercase tracking-wider">Seconds</div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 transition-all duration-500 text-xl px-12 py-8 group relative overflow-hidden font-semibold transform hover:scale-105 animate-pulse"
          >
            <span className="relative z-10 flex items-center">
              <Clock className="mr-3 h-6 w-6" />
              Get Notified
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-yellow-400/50 hover:border-yellow-400 hover:bg-yellow-400/10 hover:shadow-lg hover:shadow-yellow-400/20 transition-all duration-500 text-xl px-12 py-8 group relative overflow-hidden font-medium transform hover:scale-105"
          >
            <span className="relative z-10 flex items-center text-yellow-400 group-hover:text-white transition-colors">
              <Star className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
              Learn More
            </span>
          </Button>
        </motion.div>

        {/* Preview Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-20 p-8 bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl border border-yellow-400/20"
        >
          <h3 className="text-3xl font-bold text-yellow-400 mb-4">What's Coming?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="text-center">
              <Zap className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-white mb-2">AI-Powered Solutions</h4>
              <p className="text-gray-300">Revolutionary AI technology that transforms how you work and learn.</p>
            </div>
            <div className="text-center">
              <Crown className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-white mb-2">Premium Experience</h4>
              <p className="text-gray-300">Unmatched quality and innovation in every feature and interaction.</p>
            </div>
            <div className="text-center">
              <Sparkles className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-white mb-2">Future-Ready</h4>
              <p className="text-gray-300">Built for tomorrow's challenges with cutting-edge technology.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComingSoon;
