import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';

export function BlogList() {
  return (
    <div className="min-h-screen bg-canvas text-ink flex flex-col font-sans">
      <Navbar activePath="/blog" />

      <main className="w-full flex-grow flex flex-col items-center justify-center py-32 px-6 text-center">
        <h1 className="text-3xl font-bold font-sans tracking-tight mb-2 text-ink">Blog</h1>
        <p className="text-body max-w-md">Esta página está pronta para receber a componentização oficial do Figma.</p>
      </main>

      <Footer activePath="/blog" />
    </div>
  );
}
