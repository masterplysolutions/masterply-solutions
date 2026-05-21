import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ApplicationsHero } from '../components/sections/ApplicationsHero';
import { ApplicationsList } from '../components/sections/ApplicationsList';
import { CTA } from '../components/sections/CTA';

export function Applications() {
  return (
    <div className="min-h-screen bg-canvas text-ink flex flex-col font-sans">
      <Navbar activePath="/aplicacoes" />

      <main className="w-full flex-grow">
        <ApplicationsHero />
        <ApplicationsList />
        <CTA />
      </main>

      <Footer activePath="/aplicacoes" />
    </div>
  );
}

export default Applications;
