import React from 'react';

export function PharaohArt() {
  return (
    <section className="relative min-h-screen bg-black py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/home/Danzznn/sb1-pbjrpu/src/Remove-bg.ai_1732891532324.png')] bg-cover bg-center opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-500 via-orange-400 to-yellow-500 text-transparent bg-clip-text">
                Ancient Mysteries
              </span>
              <br />
              <span className="text-white">Modern Fortunes</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Step into a world where ancient Egyptian mythology meets cutting-edge gaming technology. Every spin tells a story of pharaohs, gods, and untold riches.
            </p>
            <div className="space-y-4">
              <div className="bg-black/50 p-4 rounded-lg border border-orange-500/20">
                <p className="text-orange-400 font-semibold">🎰 Dynamic Gameplay</p>
                <p className="text-gray-400">Immersive slots with stunning Egyptian visuals</p>
              </div>
              <div className="bg-black/50 p-4 rounded-lg border border-orange-500/20">
                <p className="text-orange-400 font-semibold">💎 Precious Rewards</p>
                <p className="text-gray-400">Unlock treasures worthy of the pharaohs</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-yellow-500 opacity-30 blur-3xl" />
            <img 
              src="/home/Danzznn/sb1-pbjrpu/src/Remove-bg.ai_1732891532324.png"
              alt="Pharaoh Art"
              className="relative rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full opacity-20 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}