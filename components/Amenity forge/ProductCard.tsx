import React from "react";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ProductCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  delay?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  icon: Icon,
  gradient,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900/50 to-neutral-800/50 backdrop-blur-sm border border-neutral-700/50 p-8 h-full transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20">
        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
        
        {/* Icon */}
        <div className="relative z-10 mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 group-hover:scale-110 transition-transform duration-300">
            <Icon className="h-8 w-8 text-primary" />
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-neutral-300 leading-relaxed group-hover:text-neutral-200 transition-colors duration-300">
            {description}
          </p>
        </div>
        
        {/* Hover effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
};

export default ProductCard;
