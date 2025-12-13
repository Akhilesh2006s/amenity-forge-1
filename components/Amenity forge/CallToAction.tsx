import { Sparkles, Crown, Zap } from "lucide-react";

const CallToAction = () => {

  return (
    <section className="py-24 lg:py-32 px-6 bg-black relative overflow-hidden">
      {/* Pure black background - no decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
      </div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="flex items-center justify-center mb-8 animate-bounce-in">
          <div className="relative">
            <Crown className="h-8 w-8 text-yellow-400 mr-3 animate-pulse" />
            <div className="absolute inset-0 h-8 w-8 text-yellow-400/50 blur-sm animate-pulse"></div>
          </div>
          <span className="text-lg font-medium bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent tracking-wider uppercase bg-[length:200%_auto] animate-gradient-shift">Transform Today</span>
          <div className="relative ml-3">
            <Zap className="h-8 w-8 text-yellow-400 animate-pulse" />
            <div className="absolute inset-0 h-8 w-8 text-yellow-400/50 blur-sm animate-pulse"></div>
          </div>
        </div>
        
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent max-w-5xl mx-auto leading-tight animate-fade-in-up bg-[length:200%_auto] animate-gradient-shift" style={{animationDelay: '0.2s'}}>
          Discover how Amenity Forge can transform your organization
        </h2>
        
        <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up pt-2" style={{animationDelay: '0.4s'}}>
          Explore our products today and see the difference 
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent font-semibold"> AI-powered solutions </span>
          can make for your business or educational institution.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-fade-in-up pt-6" style={{animationDelay: '0.6s'}}>
          <a 
            href="https://wa.me/918341122405?text=Hi%20AmenityForge%2C%20I%20need%20your%20service"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <button className="relative border-2 border-yellow-400 text-yellow-400 px-12 py-6 rounded-full font-bold text-lg hover:bg-yellow-400 hover:text-black transition-all flex items-center justify-center space-x-3 overflow-hidden backdrop-blur-sm hover:shadow-lg hover:shadow-yellow-400/50">
              <Sparkles className="w-5 h-5 relative z-10 group-hover:rotate-180 transition-transform duration-500" />
              <span className="relative z-10">Contact Us</span>
              <div className="absolute inset-0 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
