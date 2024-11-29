import React from 'react';
import { CreditCard, Bitcoin, Wallet } from 'lucide-react';

export function PaymentMethods() {
  const paymentSystems = [
    { name: "Visa", icon: CreditCard },
    { name: "Mastercard", icon: CreditCard },
    { name: "PayPal", icon: Wallet },
    { name: "Bitcoin", icon: Bitcoin },
    { name: "Ethereum", icon: Bitcoin },
    { name: "Apple Pay", icon: Wallet }
  ];

  return (
    <div className="w-full bg-amber-900/20 backdrop-blur-sm py-8 border-t border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
          {paymentSystems.map((system, index) => (
            <div 
              key={index}
              className="flex flex-col items-center gap-2 group"
            >
              <system.icon className="h-8 w-8 text-amber-400 group-hover:text-amber-300 transition-colors" />
              <span className="text-sm text-amber-300 group-hover:text-white transition-colors">
                {system.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}