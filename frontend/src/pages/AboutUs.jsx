import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { AboutHero } from '../components/sections/AboutHero';
import { AboutManifesto } from '../components/sections/AboutManifesto';
import { AboutPositioning } from '../components/sections/AboutPositioning';
import { AboutDelivery } from '../components/sections/AboutDelivery';
import { BlogSection } from '../components/sections/BlogSection';
import { CTA } from '../components/sections/CTA';

export function AboutUs() {
  return (
    <div className="min-h-screen bg-canvas text-ink flex flex-col font-sans">
      <Navbar activePath="/sobre-nos" />

      <main className="w-full flex-grow">
        <AboutHero />
        <AboutManifesto />
        <AboutPositioning />
        <AboutDelivery />
        <BlogSection />
        <CTA />
      </main>

      <Footer activePath="/sobre-nos" />
    </div>
  );
}

export default AboutUs;
