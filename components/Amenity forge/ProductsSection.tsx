"use client"

import ProductCard from "./ProductCard";
import { Cpu, GraduationCap, Award, Sparkles, Zap } from "lucide-react";
import { motion } from "framer-motion";

const ProductsSection = () => {
  const products = [
    {
      title: "Amenop – AI-Powered Business Operations",
      description: "Say goodbye to traditional software! With Amenop, turn your business operations into a cakewalk. Automate, optimize, and grow effortlessly using AI.",
      icon: Cpu,
      gradient: "from-blue-500/40 to-purple-500/30"
    },
    {
      title: "OhYes! – AI-Driven Operating System for Schools",
      description: "Reimagine school management. OhYes! replaces conventional ERPs with an AI-powered operating system designed to enhance efficiency, learning, and administration. It's not a traditional ERP—it's the future of school operations.",
      icon: GraduationCap,
      gradient: "from-purple-500/40 to-pink-500/30"
    },
    {
      title: "Elevor – Certification & Technical Partner for Education",
      description: "Elevor partners with schools and colleges to deliver certifications and technical education solutions, empowering students and institutions to achieve excellence.",
      icon: Award,
      gradient: "from-pink-500/40 to-blue-500/30"
    }
  ];

  return (
    <section className="py-32 px-6 bg-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-pink-500/10" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />
      
      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-pulse opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${4 + Math.random() * 3}s`
          }}
        />
      ))}
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <Zap className="h-8 w-8 text-yellow-400 mr-3 animate-pulse" />
            <span className="text-lg font-medium text-yellow-400 tracking-wider uppercase">Our Products</span>
            <Sparkles className="h-8 w-8 text-yellow-400 ml-3 animate-pulse delay-500" />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent leading-tight">
            Revolutionary Solutions
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover our suite of 
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent font-semibold"> AI-powered solutions </span>
            designed to transform your operations and education systems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              icon={product.icon}
              gradient={product.gradient}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
