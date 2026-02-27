import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import LaserFlow from "@/components/Amenity forge/LaserFlow";

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
    <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden pt-0 pb-6 sm:pb-8 lg:pb-10">
      {/* LaserFlow background */}
      <div className="absolute inset-0">
        <LaserFlow
          horizontalBeamOffset={0.1}
          verticalBeamOffset={0.0}
          color="#FF79C6"
          horizontalSizing={0.7}
          verticalSizing={2.5}
          wispDensity={1.3}
          wispSpeed={15}
          wispIntensity={5}
          flowSpeed={0.35}
          flowStrength={0.25}
          fogIntensity={0.7}
          fogScale={0.4}
          fogFallSpeed={0.6}
          decay={1.1}
          falloffStart={1.2}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-5 lg:px-7 text-center relative z-10">
        <div className="mb-2 sm:mb-3 animate-bounce-in">
          <span className="text-base sm:text-base font-medium bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent tracking-wider uppercase bg-[length:200%_auto] animate-gradient-shift">
            Amenity Forge
          </span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 lg:mb-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-purple-500 bg-clip-text text-transparent leading-tight animate-fade-in-up bg-[length:200%_auto] animate-gradient-shift px-4">
          You are just an amenity away
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-300 mb-3 sm:mb-4 lg:mb-6 max-w-4xl mx-auto leading-relaxed animate-fade-in-up font-light px-4" style={{animationDelay: '0.2s'}}>
          Transform operations, education, and skill-building with 
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent font-semibold"> Amenity Forge's </span>
          innovative products.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-5 justify-center items-center animate-fade-in-up" style={{animationDelay: '0.5s'}}>
          <Button 
            size="lg" 
            className="relative bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 hover:shadow-2xl hover:shadow-yellow-400/50 transition-all duration-500 text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-10 py-3.5 sm:py-4 lg:py-5 group overflow-hidden font-semibold transform hover:scale-110 bg-[length:200%_auto] animate-gradient-shift min-h-[44px] w-full sm:w-auto"
            onClick={handleExploreProducts}
          >
            <span className="relative z-10 flex items-center justify-center">
              Explore Our Products
              <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-2 transition-transform duration-300" />
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
