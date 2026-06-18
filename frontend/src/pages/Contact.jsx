import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, ArrowUpRight } from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Eyebrow } from '../components/ui/Eyebrow';
import { ContactLink } from '../components/ui/ContactLink';
import { MultiStepForm } from '../components/ui/MultiStepForm';

// Logo oficial do WhatsApp (mesmo SVG usado em WhatsAppButton)
const WhatsAppIcon = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.008c6.56 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export function Contact() {
  return (
    <div className="min-h-screen bg-canvas text-ink flex flex-col font-sans">
      <Navbar activePath="/contato" lightBackground />

      <main className="w-full flex-grow">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 bg-canvas px-6 md:px-16 lg:px-20 xl:px-24 items-center min-h-screen pt-28 pb-16">

          {/* Coluna Esquerda — Informações */}
          <motion.div
            className="flex flex-col items-start text-left max-w-xl gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Eyebrow>Masterply Solutions</Eyebrow>

            <h1 className="font-sans font-bold tracking-tight text-ink text-[28px] md:text-[36px] lg:text-[42px] leading-tight">
              <span className="text-secondary-500">Fale com quem entende</span>{' '}
              o projeto antes de entender o pedido.
            </h1>

            <p className="font-sans font-normal text-slate-600 text-[15px] md:text-[16px] leading-relaxed max-w-md">
              Não somos um canal de pedidos. Somos um time técnico que entende
              de execução. Quanto antes a gente conversar, melhor a decisão.
            </p>

            {/* Dados diretos — telefone e e-mail em linha */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 w-full">
              <ContactLink
                icon={Phone}
                text="+55 42 99976-6932"
                href="tel:+5542999766932"
              />
              <ContactLink
                icon={Mail}
                text="adm02@mpsmasterply.com"
                href="mailto:adm02@mpsmasterply.com"
              />
            </div>

            {/* Divisor gold */}
            <div className="w-full border-t border-secondary-500/40" />

            {/* Bloco WhatsApp */}
            <div className="flex flex-col gap-3 w-full">
              <div className="flex items-center gap-3">
                <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                <h2 className="font-bold text-ink text-[16px]">
                  Atendimento rápido pelo WhatsApp
                </h2>
              </div>
              <p className="font-sans font-normal text-slate-600 text-[15px] leading-relaxed max-w-md">
                Para um atendimento mais ágil, utilize o WhatsApp. Nossa equipe
                está disponível para responder dúvidas iniciais e orientar
                sobre os próximos passos.
              </p>
              <a
                href="https://wa.me/5542999766932?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20falar%20com%20a%20equipe%20comercial"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-[15px] text-[#25D366] hover:underline w-fit"
              >
                <span>Falar pelo WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Divisor gold inferior */}
            <div className="w-full border-t border-secondary-500/40" />
          </motion.div>

          {/* Coluna Direita — Formulário Multi-etapas (componente da biblioteca) */}
          <motion.div
            className="w-full flex justify-center lg:justify-end"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          >
            <MultiStepForm className="max-w-[640px]" />
          </motion.div>

        </section>
      </main>

      <Footer activePath="/contato" />
    </div>
  );
}

export default Contact;
