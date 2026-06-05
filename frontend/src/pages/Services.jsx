import { useEffect } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ServicesHero } from '../components/sections/ServicesHero';
import { ProductServiceDetail } from '../components/sections/ProductServiceDetail';
import { FilmeFacedServiceDetail } from '../components/sections/FilmeFacedServiceDetail';
import { NavalServiceDetail } from '../components/sections/NavalServiceDetail';
import { AntiderrapanteServiceDetail } from '../components/sections/AntiderrapanteServiceDetail';
import { BlogSection } from '../components/sections/BlogSection';
import { CTA } from '../components/sections/CTA';

export function Services() {
  // Ao carregar /servicos vindo de outra página com #anchor, rola até a seção
  // após o React montar (browser nativo tenta antes da renderização e falha).
  useEffect(() => {
    if (!window.location.hash) return;
    const id = window.location.hash.slice(1);
    const timer = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-canvas text-ink flex flex-col font-sans">
      <Navbar activePath="/servicos" />

      <main className="w-full flex-grow">
        <ServicesHero />
        <ProductServiceDetail />
        <FilmeFacedServiceDetail />
        <NavalServiceDetail />
        <AntiderrapanteServiceDetail />
        <BlogSection />
        <CTA />
      </main>

      <Footer activePath="/servicos" />
    </div>
  );
}

export default Services;
