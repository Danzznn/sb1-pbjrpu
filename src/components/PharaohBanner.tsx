import React from 'react';

export function PharaohBanner() {
  return (
    <section className="bg-gradient-to-b from-black via-orange-950 to-black py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1562903990-e45c8a4498b1?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?auto=format&fit=crop&q=80" 
              alt="Pharaoh Statue"
              className="rounded-lg shadow-2xl shadow-orange-500/20 transform -rotate-2 hover:rotate-0 transition-transform duration-500"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-500 via-orange-400 to-yellow-500 text-transparent bg-clip-text">
                Rule Like a Pharaoh
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our VIP program and receive royal treatment with exclusive bonuses, personal account manager, and priority withdrawals.
            </p>
            <button className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-bold py-3 px-8 rounded-full transform hover:scale-105 transition-all duration-300">
              Claim Your Crown
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}