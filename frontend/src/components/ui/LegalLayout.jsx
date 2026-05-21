import React from 'react';
import { motion } from 'motion/react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';

/**
 * Wrapper para páginas legais (Privacidade, Termos, Cookies).
 *
 * Pode receber:
 *  - { html }      → string HTML a ser injetada com dangerouslySetInnerHTML
 *  - { children }  → JSX customizado
 *
 * O estilo tipográfico fica encapsulado aqui (h2, h3, p, ul, a, .lead),
 * cobrindo tanto o conteúdo HTML quanto eventuais filhos JSX.
 */
export function LegalLayout({ title, activePath = '/', html, children }) {
  return (
    <div className="min-h-screen bg-canvas text-ink flex flex-col font-sans">
      <Navbar activePath={activePath} lightBackground />

      <main className="w-full flex-grow px-6 pb-16">
        <motion.article
          className="max-w-3xl mx-auto px-6 md:px-10 py-16 md:py-20 bg-white mt-20 border border-slate-100 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {title && (
            <h1 className="font-sans font-bold tracking-tight text-ink text-[28px] md:text-[36px] lg:text-[42px] leading-tight mb-8">
              {title}
            </h1>
          )}

          {(() => {
            const proseClasses = [
              'font-sans text-[15px] md:text-[16px] leading-relaxed text-slate-700',
              '[&_h2]:font-sans [&_h2]:font-bold [&_h2]:text-ink [&_h2]:text-[20px] [&_h2]:md:text-[22px] [&_h2]:leading-snug [&_h2]:tracking-tight [&_h2]:mt-10 [&_h2]:mb-3',
              '[&_h3]:font-sans [&_h3]:font-semibold [&_h3]:text-ink [&_h3]:text-[17px] [&_h3]:md:text-[18px] [&_h3]:leading-snug [&_h3]:mt-6 [&_h3]:mb-2',
              '[&_p]:mb-4',
              '[&_p.lead]:text-[14px] [&_p.lead]:text-slate-500 [&_p.lead]:uppercase [&_p.lead]:tracking-wider [&_p.lead]:font-medium [&_p.lead]:mb-10',
              '[&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2',
              '[&_li]:leading-relaxed',
              '[&_a]:text-secondary-500 [&_a]:underline hover:[&_a]:text-secondary-600',
              '[&_strong]:font-semibold [&_strong]:text-ink',
            ].join(' ');

            return html ? (
              <div
                className={proseClasses}
                dangerouslySetInnerHTML={{ __html: html }}
              />
            ) : (
              <div className={proseClasses}>{children}</div>
            );
          })()}
        </motion.article>
      </main>

      <Footer activePath={activePath} />
    </div>
  );
}

export default LegalLayout;
