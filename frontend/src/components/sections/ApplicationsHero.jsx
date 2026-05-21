import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Eyebrow } from '../ui/Eyebrow';
import { Button } from '../ui/button';
import heroAplicacao from '../../assets/img-hero-aplicacao.png';

export function ApplicationsHero() {
  return (
    <section
      className="grid grid-cols-1 lg:grid-cols-2 min-h-screen w-full relative"
      id="applications-hero"
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
              className="font-sans font-bold tracking-tight text-ink text-[36px] md:text-[48px] lg:text-[54px] leading-[1.15] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            >
              Cada projeto tem uma exigência.{' '}
              <span className="text-secondary block md:inline">
                Nossas soluções foram desenvolvidas para cada uma delas.
              </span>
            </motion.h1>

            <motion.p
              className="font-sans font-normal text-body text-[16px] md:text-[18px] leading-relaxed max-w-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            >
              Da fundação ao acabamento, da estrutura ao detalhe — atuamos onde
              o desempenho do material define o resultado da obra.
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
          src={heroAplicacao}
          alt=""
          className="object-cover w-full h-full absolute inset-0 z-0"
        />
        {/* Máscara sutil no topo para contraste com a Navbar transparente */}
        <div className="bg-gradient-to-b from-black/80 to-transparent absolute inset-0 z-10 pointer-events-none" />
      </motion.div>
    </section>
  );
}

export default ApplicationsHero;
