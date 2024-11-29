import React from 'react';
import { Coins, Diamond, Crown } from 'lucide-react';

export function TreasureShowcase() {
  const treasures = [
    {
      title: "Golden Scarab Jackpot",
      description: "The ultimate Egyptian slot experience",
      icon: Crown,
      image: "https://images.unsplash.com/photo-1589883661923-6476cb0ae9f2?auto=format&fit=crop&q=80"
    },
    {
      title: "Pharaoh's Chamber",
      description: "Unlock the secrets of ancient tombs",
      icon: Diamond,
      image: "https://images.unsplash.com/photo-1590845947676-fa2576f0a33c?auto=format&fit=crop&q=80"
    },
    {
      title: "Pyramid Riches",
      description: "Journey through mystical pyramids",
      icon: Coins,
      image: "https://images.unsplash.com/photo-1608485439022-49c04cc29944?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section className="bg-black py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542621334-a254cf47733d?auto=format&fit=crop&q=80')] opacity-10" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-500 text-transparent bg-clip-text">
              Legendary Treasures Await
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto mb-6" />
          <p className="text-gray-300 max-w-2xl mx-auto">
            Uncover the riches of the ancient pharaohs in our exclusive jackpot games
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {treasures.map((treasure, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
              <img 
                src={treasure.image}
                alt={treasure.title}
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <div className="flex items-center gap-2 mb-2">
                  <treasure.icon className="h-6 w-6 text-yellow-500" />
                  <h3 className="text-xl font-bold text-white">{treasure.title}</h3>
                </div>
                <p className="text-gray-300">{treasure.description}</p>
                <button className="mt-4 w-full bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-bold py-2 px-4 rounded-full transition-colors">
                  Play Now
                </button>
              </div>
              <div className="absolute top-4 right-4 bg-black/80 px-3 py-1 rounded-full z-20">
                <span className="text-yellow-500 font-semibold">Hot 🔥</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}