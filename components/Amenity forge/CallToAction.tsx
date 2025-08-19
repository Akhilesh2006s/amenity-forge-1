import { Button } from "@/components/ui/button";
import { Sparkles, Crown, Star, Zap } from "lucide-react";

const CallToAction = () => {

  return (
    <section className="py-32 px-6 bg-gradient-card relative overflow-hidden">
      {/* Epic background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20" />
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-gradient-luxury rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-glow-pulse" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-gradient-purple rounded-full blur-3xl animate-float" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float delay-1000" />
      
      {/* Floating elements */}
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float opacity-40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }}
        >
          {i % 3 === 0 ? (
            <Star className="w-3 h-3 text-primary" />
          ) : i % 3 === 1 ? (
            <Sparkles className="w-2 h-2 text-accent" />
          ) : (
            <div className="w-1 h-1 bg-gradient-primary rounded-full" />
          )}
        </div>
      ))}
      
      <div className="container mx-auto text-center relative z-10">
        <div className="flex items-center justify-center mb-8 animate-bounce-in">
          <Crown className="h-8 w-8 text-primary mr-3" />
          <span className="text-lg font-medium text-primary tracking-widest uppercase">Transform Today</span>
          <Zap className="h-8 w-8 text-accent ml-3" />
        </div>
        
        <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-luxury bg-clip-text text-transparent max-w-5xl mx-auto leading-tight animate-fade-in-up">
          Discover how Amenity Forge can transform your organization
        </h2>
        
        <p className="text-2xl text-foreground/90 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200">
          Explore our products today and see the difference 
          <span className="bg-gradient-primary bg-clip-text text-transparent font-semibold"> AI-powered solutions </span>
          can make for your business or educational institution.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center animate-fade-in-up delay-500">
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-accent/60 hover:border-accent hover:bg-gradient-purple/20 hover:shadow-purple transition-all duration-500 text-xl px-16 py-8 group relative overflow-hidden font-semibold transform hover:scale-110"
            asChild
          >
            <a 
              href="https://wa.me/918341122405?text=Hi%20AmenityForge%2C%20I%20need%20your%20service"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="relative z-10 flex items-center text-accent group-hover:text-foreground transition-colors">
                <Sparkles className="mr-4 h-6 w-6 group-hover:rotate-180 transition-transform duration-500" />
                Contact Us
              </span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
