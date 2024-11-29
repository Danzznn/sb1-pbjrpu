import React from 'react';
import { Coins, Crown, Shield } from 'lucide-react';
import { PaymentMethods } from './PaymentMethods';

export function Hero() {
  return (
    <div className="relative min-h-screen bg-black flex flex-col justify-center glow-bg">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1608485439523-25b28d982428?auto=format&fit=crop&q=80")'
        }}
      />
      
      <div className="relative flex-grow flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 text-transparent bg-clip-text">
                  Discover the Riches
                </span>
                <br />
                of Ancient Egypt
              </h1>
              <p className="text-gray-300 text-lg mb-8">
                Embark on an epic journey through time and fortune. Experience premium slots inspired by the mysteries of ancient Egyptian civilization.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="glow-effect bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-semibold transition-colors">
                  Start Playing
                </button>
                <button className="glow-effect border-2 border-amber-600 text-amber-400 hover:bg-amber-600/10 px-8 py-3 rounded-full font-semibold transition-colors">
                  Learn More
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-6 mt-12">
                {[
                  { icon: Shield, text: "Secure Gaming" },
                  { icon: Crown, text: "VIP Rewards" },
                  { icon: Coins, text: "Instant Payouts" }
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center text-center glow-effect">
                    <div className="bg-amber-600/10 p-3 rounded-full mb-3">
                      <item.icon className="h-6 w-6 text-amber-400" />
                    </div>
                    <span className="text-white text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1589882645126-390eb8b6c28a?auto=format&fit=crop&q=80"
                alt="Egyptian Slots"
                className="rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 glow-effect"
              />
            </div>
          </div>
        </div>
      </div>
      
      <PaymentMethods />
    </div>
  );
}