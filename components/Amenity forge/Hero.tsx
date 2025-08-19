import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Crown, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const router = useRouter();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleExploreProducts = () => {
    router.push('/ComingSoon');
  };

  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      {/* Dynamic cursor glow */}
      <div 
        className="fixed w-96 h-96 bg-gradient-luxury rounded-full blur-3xl opacity-20 pointer-events-none z-0 transition-all duration-300"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-accent/30" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float delay-1000" />
      <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-gradient-luxury rounded-full blur-2xl animate-glow-pulse" />
      
      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-2 h-2 bg-gradient-primary rounded-full opacity-60 animate-float`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }}
        />
      ))}
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="flex items-center justify-center mb-8 animate-bounce-in">
          <Crown className="h-8 w-8 text-primary mr-3" />
          <span className="text-lg font-medium text-primary tracking-wider uppercase">Amenity Forge</span>
          <Sparkles className="h-8 w-8 text-accent ml-3" />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-luxury bg-clip-text text-transparent leading-tight animate-fade-in-up">
          You are just an amenity away
        </h1>
        
        <p className="text-2xl md:text-3xl text-foreground/90 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200 font-light">
          Transform operations, education, and skill-building with 
          <span className="bg-gradient-primary bg-clip-text text-transparent font-semibold"> Amenity Forge's </span>
          innovative products.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up delay-500">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-luxury transition-all duration-500 text-xl px-12 py-8 group relative overflow-hidden font-semibold transform hover:scale-105"
            onClick={handleExploreProducts}
          >
            <span className="relative z-10 flex items-center">
              Explore Our Products
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-luxury opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
