import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Eyebrow } from '../ui/Eyebrow';
import { Button } from '../ui/button';

export function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 min-h-screen w-full relative" id="hero">
      {/* Lado Esquerdo - Conteúdo */}
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
              className="font-sans font-bold tracking-tight text-ink text-[36px] md:text-[48px] lg:text-[56px] leading-[1.15]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            >
              Projetos grandes não falham por falta de material.{' '}
              <span className="text-secondary block md:inline">Falham por falta de parceiro.</span>
            </motion.h1>

            <motion.p
              className="font-sans font-normal text-body text-[16px] md:text-[18px] leading-relaxed max-w-xl mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            >
              A Masterply Solutions fornece soluções em compensados para obras e estruturas que exigem desempenho, escala e previsibilidade na execução.
            </motion.p>
          </div>

          <motion.div
            className="flex flex-wrap gap-4 items-center w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: 'easeOut' }}
          >
            <Button href="/contato" variant="primary" className="group cursor-pointer">
              <span>Solicitar orçamento</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
            <Button href="/sobre-nos" variant="secondary" className="cursor-pointer">
              Saiba mais
            </Button>
          </motion.div>

        </div>
      </div>

      {/* Lado Direito - Mídia (Vídeo) */}
      <motion.div
        className="w-full h-full min-h-[400px] lg:min-h-screen relative overflow-hidden bg-primary-950"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <video
          src="/videos/hero-bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full absolute inset-0 z-0"
        />
        {/* Máscara de gradiente no topo para contraste do menu sobre o vídeo */}
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/80 via-black/40 to-transparent pointer-events-none z-10" />
        {/* Overlay sutil escuro geral para profundidade */}
        <div className="absolute inset-0 bg-primary-950/15 pointer-events-none z-[1]" />
      </motion.div>
    </section>
  );
}

export default Hero;