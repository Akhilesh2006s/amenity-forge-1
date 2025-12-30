"use client"

import ProductCard from "./ProductCard";
import { Cpu, GraduationCap, Award, Sparkles, Zap, Users } from "lucide-react";
import { motion } from "framer-motion";

const ProductsSection = () => {
  const products = [
    {
      title: "Amen-OP AI Powered Business Operations",
      description: "Say goodbye to traditional software! With Amen-OP, turn your business operations into a cakewalk. Automate, optimize, and grow effortlessly using AI.",
      icon: Cpu
    },
    {
      title: "Amen-XE AI Driven Operating System for Schools",
      description: "Reimagine school management. Amen-XE replaces conventional ERPs with an AI-powered operating system designed to enhance efficiency, learning, and administration. It's not a traditional ERP—it's the future of school operations.",
      icon: GraduationCap
    },
    {
      title: "Elevor Certification & Technical Partner for Education",
      description: "Elevor partners with schools and colleges to deliver certifications and technical education solutions, empowering students and institutions to achieve excellence.",
      icon: Award
    },
    {
      title: "Amen-XC AI-Driven CRM Platform",
      description: "Transform customer engagement with Amen-XC, an AI-powered CRM designed to automate sales, support, and customer lifecycle management. From intelligent lead tracking to predictive insights, Amen-XC helps businesses build stronger relationships and scale faster.",
      icon: Users
    }
  ];

  return (
    <section className="py-14 lg:py-18 px-5 bg-black relative overflow-hidden pt-14 lg:pt-18">
      {/* Pure black background - no decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-10 lg:mb-12 animate-fade-in-up">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <Zap className="h-5 w-5 text-yellow-400 mr-2 animate-pulse" />
              <div className="absolute inset-0 h-5 w-5 text-yellow-400/50 blur-sm animate-pulse"></div>
            </div>
            <span className="text-sm font-medium bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent tracking-wider uppercase bg-[length:200%_auto] animate-gradient-shift">Our Products</span>
            <div className="relative ml-2">
              <Sparkles className="h-5 w-5 text-yellow-400 animate-pulse" />
              <div className="absolute inset-0 h-5 w-5 text-yellow-400/50 blur-sm animate-pulse"></div>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent leading-tight bg-[length:200%_auto] animate-gradient-shift animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Revolutionary Solutions
          </h2>
          <p className="text-base lg:text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up pt-2" style={{animationDelay: '0.4s'}}>
            Discover our suite of 
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent font-semibold"> AI-powered solutions </span>
            designed to transform your operations and education systems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              icon={product.icon}
              delay={index * 200}
            />
          ))}
        </div>
      </div>

      {/* Delivered with Impact Section */}
      <div className="mt-14 lg:mt-18 pt-10 lg:pt-12 border-t border-gray-700/50">
        <div className="container mx-auto px-5 lg:px-7">
          <div className="text-center mb-8 lg:mb-10 animate-fade-in-up">
            <h3 className="text-2xl lg:text-3xl font-bold mb-3">
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                Delivered with Impact
              </span>
            </h3>
          </div>

          {/* 12 Logo Boxes */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-3 lg:gap-4 max-w-7xl mx-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13].map((logoIndex, index) => {
              return (
                <div 
                  key={logoIndex}
                  className="group relative bg-gradient-to-br from-gray-800/90 via-gray-700/90 to-gray-800/90 backdrop-blur-md rounded-xl border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/20 overflow-hidden animate-fade-in-up"
                  style={{animationDelay: `${index * 0.05}s`}}
                >
                  <div className="aspect-square relative w-full flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <img 
                      src={`/logo${logoIndex}.png`}
                      alt={`Partner Logo ${logoIndex}`}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Disclaimer */}
          <div className="mt-8 text-center">
            <p className="text-[8px] sm:text-[10px] text-gray-500 leading-tight max-w-4xl mx-auto">
              Logos are used strictly for factual media distribution reference. All trademarks belong to their respective owners. No partnership or endorsement is implied.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
