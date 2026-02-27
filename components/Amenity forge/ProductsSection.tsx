"use client"

import ProductCard from "./ProductCard";
import { Cpu, GraduationCap, Award, Sparkles, Zap, Users } from "lucide-react";
import { motion } from "framer-motion";

const ProductsSection = () => {
  const products = [
    {
      title: "Amenop AI Powered Business Operations",
      description: "Say goodbye to traditional software! With Amenop, turn your business operations into a cakewalk. Automate, optimize, and grow effortlessly using AI.",
      icon: Cpu
    },
    {
      title: "Amen-XE AI Driven Operating System for Schools",
      description: "Reimagine school management. Amen-XE replaces conventional ERPs with an AI-powered operating system designed to enhance efficiency, learning, and administration. It's not a traditional ERP—it's the future of school operations.",
      icon: GraduationCap
    },
    {
      title: "GTP Certification & Technical Partner for Education",
      description: "GTP partners with schools and colleges to deliver certifications and technical education solutions, empowering students and institutions to achieve excellence.",
      icon: Award
    },
    {
      title: "Amen-XC AI Driven CRM Platform",
      description: "Transform customer engagement with Amen-XC, an AI-powered CRM designed to automate sales, support, and customer lifecycle management. From intelligent lead tracking to predictive insights, Amen-XC helps businesses build stronger relationships and scale faster.",
      icon: Users
    }
  ];

  return (
    <section className="py-4 sm:py-6 lg:py-8 px-4 sm:px-5 bg-black relative overflow-hidden pt-16 sm:pt-20 lg:pt-24">
      {/* Pure black background - no decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-4 sm:mb-5 lg:mb-6 animate-fade-in-up">
          <div className="mb-2 sm:mb-3">
            <span className="text-xs sm:text-sm font-medium bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent tracking-wider uppercase bg-[length:200%_auto] animate-gradient-shift">
              Our Products
            </span>
          </div>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent leading-tight bg-[length:200%_auto] animate-gradient-shift animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Revolutionary Solutions
          </h2>
          <p className="text-xs sm:text-sm lg:text-base text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up pt-0.5 px-4" style={{animationDelay: '0.4s'}}>
            Discover our suite of 
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent font-semibold"> AI-powered solutions </span>
            designed to transform your operations and education systems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 max-w-7xl mx-auto">
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
      <div className="mt-6 lg:mt-8 pt-4 lg:pt-5 border-t border-gray-700/50">
        <div className="container mx-auto px-4 lg:px-5">
          <div className="text-center mb-4 lg:mb-5 animate-fade-in-up">
            <h3 className="text-lg lg:text-xl font-bold mb-2">
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                Delivered with Impact
              </span>
            </h3>
          </div>

          {/* 12 Logo Boxes */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-2 lg:gap-3 max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13].map((logoIndex, index) => {
              return (
                <div 
                  key={logoIndex}
                  className="group relative bg-gradient-to-br from-gray-800/90 via-gray-700/90 to-gray-800/90 backdrop-blur-md rounded-lg border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-black/50 hover:shadow-2xl hover:shadow-yellow-400/30 overflow-hidden animate-fade-in-up"
                  style={{animationDelay: `${index * 0.05}s`}}
                >
                  {/* Premium shadow layers */}
                  <div className="absolute inset-0 rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.6),0_4px_15px_rgba(0,0,0,0.4)] group-hover:shadow-[0_12px_40px_rgba(251,191,36,0.3),0_6px_20px_rgba(249,115,22,0.2)] transition-shadow duration-300 pointer-events-none"></div>
                  
                  <div className="aspect-square relative w-full flex items-center justify-center p-3 z-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <img 
                      src={`/logo${logoIndex}.png`}
                      alt={`Partner Logo ${logoIndex}`}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-lg group-hover:drop-shadow-2xl"
                      style={{filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5))'}}
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
          <div className="mt-4 text-center">
            <p className="text-[7px] sm:text-[9px] text-gray-500 leading-tight max-w-3xl mx-auto">
              Logos are used strictly for factual media distribution reference. All trademarks belong to their respective owners. No partnership or endorsement is implied.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
