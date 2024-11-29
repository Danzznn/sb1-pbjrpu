import React from 'react';
import { AlertTriangle } from 'lucide-react';

export function AgeRestrictionBar() {
  return (
    <div className="bg-gradient-to-r from-red-900 via-red-800 to-red-900 text-white py-2 px-4 fixed bottom-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-red-300" />
          <span className="text-sm">
            18+ Only. Play Responsibly. Gambling can be addictive.
          </span>
        </div>
        <a
          href="#responsible-gaming"
          className="text-sm underline hover:text-red-300 transition-colors"
        >
          Responsible Gaming
        </a>
      </div>
    </div>
  );
}
