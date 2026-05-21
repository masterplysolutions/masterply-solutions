import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Eyebrow } from '../ui/Eyebrow';
import { Button } from '../ui/button';
import heroServico from '../../assets/bg-hero-servico.png';

export function ServicesHero() {
  return (
    <section
      className="grid grid-cols-1 lg:grid-cols-2 min-h-screen w-full relative"
      id="services-hero"
    >
      {/* Lado Esquerdo — Conteúdo */}
      <div className="bg-canvas flex flex-col justify-center px-6 py-24 md:py-32 md:px-16 lg:px-20 xl:px-24">
        <div className="max-w-[580px] w-full mx-auto lg:mx-0 flex flex-col gap-8 items-start">

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Eyebrow>Masterply Solutions</Eyebrow>
          </motion.div>

          <div className="flex flex-col gap-4">
            <motion.h1
              className="font-sans font-bold tracking-tight text-ink text-[36px] md:text-[48px] lg:text-[54px] leading-[1.15]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            >
              A especificação técnica correta é a primeira decisão de uma boa
              obra.
            </motion.h1>

            <motion.p
              className="font-sans font-normal text-body text-[16px] md:text-[18px] leading-relaxed text-slate-600 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            >
              Conheça as soluções da Masterply — desenvolvidas para desempenho
              real, não para catálogo.
            </motion.p>
          </div>

          <motion.div
            className="flex flex-wrap gap-4 items-center w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: 'easeOut' }}
          >
            <Button variant="primary" className="group cursor-pointer">
              <span>Solicitar orçamento</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </motion.div>

        </div>
      </div>

      {/* Lado Direito — Mídia Estática */}
      <motion.div
        className="w-full h-full min-h-[400px] lg:min-h-screen relative overflow-hidden bg-primary-950"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <img
          src={heroServico}
          alt=""
          className="object-cover object-bottom w-full h-full absolute inset-0 z-0"
        />
        {/* Máscara sutil no topo para contraste com a Navbar transparente */}
        <div className="bg-gradient-to-b from-black/80 to-transparent absolute inset-0 z-10 pointer-events-none" />
      </motion.div>
    </section>
  );
}

export default ServicesHero;
