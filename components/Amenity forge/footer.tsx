import { Instagram, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-black text-white py-16 px-4 overflow-hidden">
      {/* Pure black background - no decorative elements */}
      <div className="absolute inset-0">
      </div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
        {/* Logo & Description */}
        <div className="animate-fade-in-up">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent mb-3 bg-[length:200%_auto] animate-gradient-shift">
            Amenity Forge
          </h1>
          <p className="text-sm text-gray-400 leading-relaxed">
            Crafting digital experiences with precision and creativity.
          </p>
        </div>

        {/* Links */}
        <div className="animate-fade-in-up" style={{animationDelay: '0.1s'}}>
          <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>
              <a href="#" className="hover:text-yellow-400 transition-colors duration-300 flex items-center group">
                <span className="w-0 group-hover:w-2 h-0.5 bg-yellow-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                About Us
              </a>
            </li>
            <li>
              <a href="/Services" className="hover:text-yellow-400 transition-colors duration-300 flex items-center group">
                <span className="w-0 group-hover:w-2 h-0.5 bg-yellow-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400 transition-colors duration-300 flex items-center group">
                <span className="w-0 group-hover:w-2 h-0.5 bg-yellow-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                Blog
              </a>
            </li>
          </ul>
        </div>

        <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <h3 className="text-white font-semibold mb-4 text-lg">Services</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>
              <a href="#" className="hover:text-yellow-400 transition-colors duration-300 flex items-center group">
                <span className="w-0 group-hover:w-2 h-0.5 bg-yellow-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                Web Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400 transition-colors duration-300 flex items-center group">
                <span className="w-0 group-hover:w-2 h-0.5 bg-yellow-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                UI/UX Design
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400 transition-colors duration-300 flex items-center group">
                <span className="w-0 group-hover:w-2 h-0.5 bg-yellow-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                Branding
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          <h3 className="text-white font-semibold mb-4 text-lg">Connect</h3>
          <div className="flex space-x-4 mt-2">
            <a href="https://www.instagram.com/amenityforge/" target="_blank" rel="noopener noreferrer" className="group relative p-2 rounded-lg bg-gray-800/50 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-500 transition-all duration-300 transform hover:scale-110">
              <Instagram className="text-gray-400 group-hover:text-black transition-colors duration-300" />
            </a>
            <a href="https://in.linkedin.com/company/amenityforge" target="_blank" rel="noopener noreferrer" className="group relative p-2 rounded-lg bg-gray-800/50 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-500 transition-all duration-300 transform hover:scale-110">
              <Linkedin className="text-gray-400 group-hover:text-black transition-colors duration-300" />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&to=amenityforge@gmail.com" target="_blank" rel="noopener noreferrer" className="group relative p-2 rounded-lg bg-gray-800/50 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-500 transition-all duration-300 transform hover:scale-110">
              <Mail className="text-gray-400 group-hover:text-black transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800/50 mt-12 pt-6 text-center text-sm text-gray-500 relative z-10">
        <p className="animate-fade-in-up">
          © {new Date().getFullYear()} <span className="text-yellow-400">Amenityforge</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
