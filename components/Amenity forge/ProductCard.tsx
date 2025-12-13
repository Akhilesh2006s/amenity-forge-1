"use client"

import React from "react";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ProductCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  icon: Icon,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      viewport={{ once: true }}
      className="group relative animate-fade-in-up"
      style={{animationDelay: `${delay / 1000}s`}}
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-gray-800/90 via-gray-700/90 to-gray-800/90 backdrop-blur-md border border-gray-600/50 p-8 h-full transition-all duration-500 transform hover:scale-105 hover:border-yellow-400/70 hover:shadow-2xl hover:shadow-yellow-400/20">
        {/* Shimmer effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        
        {/* Icon */}
        <div className="relative z-10 mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-yellow-400/30">
            <Icon className="h-8 w-8 text-black" />
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300 leading-tight">
            {title}
          </h3>
          <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
            {description}
          </p>
        </div>
        
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/0 via-yellow-400/10 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
