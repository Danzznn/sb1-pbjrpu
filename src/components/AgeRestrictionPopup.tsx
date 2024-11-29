import React, { useState, useEffect } from 'react';
import { AlertTriangle, X } from 'lucide-react';

export function AgeRestrictionPopup() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-b from-amber-900 to-amber-950 rounded-2xl max-w-lg w-full p-8 relative">
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-amber-300 hover:text-white transition-colors"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="flex flex-col items-center text-center">
          <AlertTriangle className="h-16 w-16 text-amber-400 mb-6" />
          <h2 className="text-2xl font-bold text-white mb-4">Age Restriction Notice</h2>
          <p className="text-amber-200 mb-6">
            You must be 18 years or older to access this website. By entering, you confirm that you are of legal gambling age in your jurisdiction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <button
              onClick={() => window.location.href = 'https://www.begambleaware.org/'}
              className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold transition-colors"
            >
              Exit Site
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-full font-semibold transition-colors"
            >
              I am 18+ Years Old
            </button>
          </div>
          <p className="mt-6 text-sm text-amber-300">
            Please gamble responsibly. Gambling can be addictive.
          </p>
        </div>
      </div>
    </div>
  );
}