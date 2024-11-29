import React from 'react';
import { Sparkles, Gift, Trophy, Clock, CreditCard, HeartHandshake } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Sparkles,
      title: "Premium Slots",
      description: "Experience our collection of high-quality Egyptian-themed slot games"
    },
    {
      icon: Gift,
      title: "Welcome Bonus",
      description: "Get up to 500% bonus on your first deposit with free spins"
    },
    {
      icon: Trophy,
      title: "Daily Tournaments",
      description: "Compete with other players for massive prize pools"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Our dedicated team is always here to help you"
    },
    {
      icon: CreditCard,
      title: "Fast Payouts",
      description: "Withdraw your winnings quickly and securely"
    },
    {
      icon: HeartHandshake,
      title: "Loyalty Rewards",
      description: "Earn points and unlock exclusive benefits"
    }
  ];

  return (
    <section id="features" className="bg-black/95 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 text-transparent bg-clip-text">
              Why Choose Us
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience the best of Egyptian-themed slot gaming with our premium features and rewards
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-colors"
            >
              <div className="bg-orange-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}