import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Eyebrow } from '../ui/Eyebrow';
import { ChecklistItem } from '../ui/ChecklistItem';
import { Button } from '../ui/button';
import deliveryImg from '../../assets/diferenciais-about.png';

const deliveryPoints = [
  'Produto da Fábrica direto ao projeto',
  'Padrão técnico consistentemente em todos os lotes',
  'Escala de fornecimento sem perda de qualidade',
  'Suporte orientado à especificação do projeto',
  'Relacionamento direto, sem intermediários desnecessários',
];

export function AboutDelivery() {
  return (
    <section
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center bg-canvas py-20 md:py-28 px-6 md:px-16 lg:px-20 xl:px-24"
      id="about-delivery"
    >
      {/* Coluna Esquerda — Mídia */}
      <motion.div
        className="w-full h-full min-h-[350px] md:min-h-[450px] max-h-[500px] overflow-hidden relative"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <img
          src={deliveryImg}
          alt="Compensados empilhados em close-up"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.01]"
        />
      </motion.div>

      {/* Coluna Direita — Conteúdo & Lista */}
      <motion.div
        className="flex flex-col items-start text-left max-w-xl gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
      >
        <Eyebrow>Diferenciais</Eyebrow>

        <h2 className="font-sans font-bold tracking-tight text-ink text-[32px] md:text-[40px] lg:text-[46px] leading-tight">
          O que sustenta cada entrega:
        </h2>

        <div className="flex flex-col gap-4 w-full my-2">
          {deliveryPoints.map((point) => (
            <ChecklistItem key={point}>{point}</ChecklistItem>
          ))}
        </div>

        <Button href="/contato" variant="primary" className="mt-4 group cursor-pointer">
          <span>Solicitar orçamento</span>
          <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Button>
      </motion.div>
    </section>
  );
}

export default AboutDelivery;
