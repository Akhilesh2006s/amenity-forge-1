"use client"

const ProductsSection = () => {
  return (
    <section className="min-h-screen bg-black relative overflow-hidden">
      {/* Pure black background - no decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
      </div>
      
      <div className="relative z-10 min-h-screen">
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat bg-fixed"
          style={{ backgroundImage: "url('/Products.png')", backgroundPosition: "center 40px", backgroundSize: "85% auto" }}
          aria-label="Amenity Forge Products"
        />
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
