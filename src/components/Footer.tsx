import React from 'react';
import { Pyramid, Facebook, Twitter, Instagram, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Pyramid className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 text-transparent bg-clip-text">
                Pharaoh's Fortune
              </span>
            </div>
            <p className="text-gray-400">
              Experience the magic of ancient Egypt through our premium slot games.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#games" className="hover:text-orange-500 transition-colors">Games</a></li>
              <li><a href="#features" className="hover:text-orange-500 transition-colors">Features</a></li>
              <li><a href="#bonuses" className="hover:text-orange-500 transition-colors">Bonuses</a></li>
              <li><a href="#about" className="hover:text-orange-500 transition-colors">About Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#faq" className="hover:text-orange-500 transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a></li>
              <li><a href="#terms" className="hover:text-orange-500 transition-colors">Terms & Conditions</a></li>
              <li><a href="#privacy" className="hover:text-orange-500 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2024 Pharaoh's Fortune. All rights reserved.</p>
          <p className="mt-2 text-sm">Please play responsibly. Gambling can be addictive.</p>
        </div>
      </div>
    </footer>
  );
}