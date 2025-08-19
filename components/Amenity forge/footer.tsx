import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <h1 className="text-2xl font-bold text-white mb-3">Amenity Forge</h1>
          <p className="text-sm text-gray-400">
            Crafting digital experiences with precision and creativity.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="/Services" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white">Web Development</a></li>
            <li><a href="#" className="hover:text-white">UI/UX Design</a></li>
            <li><a href="#" className="hover:text-white">Branding</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-3">Connect</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#"><Instagram className="text-gray-400 hover:text-white" /></a>
            <a href="#"><Twitter className="text-gray-400 hover:text-white" /></a>
            <a href="#"><Facebook className="text-gray-400 hover:text-white" /></a>
            <a href="#"><Mail className="text-gray-400 hover:text-white" /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Amenityforge. All rights reserved.
      </div>
    </footer>
  );
}
