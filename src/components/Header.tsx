import React from 'react';
import { Pyramid, Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-black/95 text-white py-4 px-6 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Pyramid className="h-8 w-8 text-amber-500" />
          <span className="text-2xl font-bold bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-transparent bg-clip-text">
            Pharaoh's Fortune
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#games" className="hover:text-amber-400 transition-colors">Games</a>
          <a href="#features" className="hover:text-amber-400 transition-colors">Features</a>
          <a href="#bonuses" className="hover:text-amber-400 transition-colors">Bonuses</a>
          <a href="#about" className="hover:text-amber-400 transition-colors">About</a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
            Register Now
          </button>
          <button className="bg-amber-500 hover:bg-amber-600 px-6 py-2 rounded-full font-semibold transition-colors">
            Login
          </button>
          <button className="md:hidden p-2 hover:bg-amber-500/10 rounded-full transition-colors">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}