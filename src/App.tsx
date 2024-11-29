import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { TreasureShowcase } from './components/TreasureShowcase';
import { PharaohBanner } from './components/PharaohBanner';
import { PharaohArt } from './components/PharaohArt';
import { Footer } from './components/Footer';
import { AgeRestrictionBar } from './components/AgeRestrictionBar';
import { AgeRestrictionPopup } from './components/AgeRestrictionPopup';

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Header />
      <main>
        <Hero />
        <TreasureShowcase />
        <Features />
        <PharaohArt />
        <PharaohBanner />
      </main>
      <Footer />
      <AgeRestrictionBar />
      <AgeRestrictionPopup />
    </div>
  );
}

export default App;