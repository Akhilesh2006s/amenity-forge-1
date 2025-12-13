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
    <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden py-16 lg:py-24">
      
      <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
        <div className="flex items-center justify-center mb-6 lg:mb-8 animate-bounce-in">
          <div className="relative">
            <Crown className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-400 mr-2 sm:mr-3 animate-pulse" />
            <div className="absolute inset-0 h-6 w-6 sm:h-8 sm:w-8 text-yellow-400/50 blur-sm animate-pulse"></div>
          </div>
          <span className="text-base sm:text-lg font-medium bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent tracking-wider uppercase bg-[length:200%_auto] animate-gradient-shift">Amenity Forge</span>
          <div className="relative ml-2 sm:ml-3">
            <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-purple-400 animate-pulse" />
            <div className="absolute inset-0 h-6 w-6 sm:h-8 sm:w-8 text-purple-400/50 blur-sm animate-pulse"></div>
          </div>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 lg:mb-8 bg-gradient-to-r from-yellow-400 via-orange-500 to-purple-500 bg-clip-text text-transparent leading-tight animate-fade-in-up bg-[length:200%_auto] animate-gradient-shift px-4">
          You are just an amenity away
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-10 lg:mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up font-light px-4" style={{animationDelay: '0.2s'}}>
          Transform operations, education, and skill-building with 
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent font-semibold"> Amenity Forge's </span>
          innovative products.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 lg:gap-6 justify-center items-center animate-fade-in-up" style={{animationDelay: '0.5s'}}>
          <Button 
            size="lg" 
            className="relative bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 hover:shadow-2xl hover:shadow-yellow-400/50 transition-all duration-500 text-base sm:text-lg lg:text-xl px-8 sm:px-10 lg:px-12 py-5 sm:py-6 lg:py-8 group overflow-hidden font-semibold transform hover:scale-110 bg-[length:200%_auto] animate-gradient-shift"
            onClick={handleExploreProducts}
          >
            <span className="relative z-10 flex items-center">
              Explore Our Products
              <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
