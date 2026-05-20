import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/sections/Hero';
import { Positioning } from '../components/sections/Positioning';
import { Applications } from '../components/sections/Applications';
import { Differentials } from '../components/sections/Differentials';
import { Products } from '../components/sections/Products';
import { BlogSection } from '../components/sections/BlogSection';
import { ImpactBanner } from '../components/sections/ImpactBanner';
import { CTA } from '../components/sections/CTA';

export function Home() {
  return (
    <div className="min-h-screen bg-canvas text-ink flex flex-col font-sans">
      <Navbar activePath="/" />

      <main className="w-full flex-grow">
        <Hero />
        <Positioning />
        <Applications />
        <Differentials />
        <Products />
        <BlogSection />
        <ImpactBanner />
        <CTA />
      </main>

      <Footer activePath="/" />
    </div>
  );
}

export default Home;
