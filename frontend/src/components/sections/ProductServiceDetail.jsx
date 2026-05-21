import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Eyebrow } from '../ui/Eyebrow';
import { ChecklistItem } from '../ui/ChecklistItem';
import { Button } from '../ui/button';
import imgCompensado from '../../assets/servico-compensado.png';

const advantages = [
  'Alta durabilidade',
  'Resistência mecânica',
  'Melhor custo-benefício ao longo do tempo',
];

export function ProductServiceDetail() {
  return (
    <section
      className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch bg-canvas py-16 md:py-24 px-6 md:px-16 lg:px-20 xl:px-24"
      id="compensado-plastificado"
    >
      {/* Coluna Esquerda — Mídia */}
      <motion.div
        className="order-2 lg:order-1 w-full h-full min-h-[380px] md:min-h-[480px] overflow-hidden relative"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <img
          src={imgCompensado}
          alt="Compensado Plastificado em uso"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.01]"
        />
      </motion.div>

      {/* Coluna Direita — Conteúdo Técnico */}
      <motion.div
        className="order-1 lg:order-2 flex flex-col justify-center items-start text-left max-w-xl gap-5 h-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
      >
        <Eyebrow>Resistência onde a umidade é variável.</Eyebrow>

        <h2 className="font-sans font-bold tracking-tight text-ink text-[32px] md:text-[40px] lg:text-[46px] leading-tight">
          Compensado Plastificado
        </h2>

        <p className="font-sans font-normal text-body text-[15px] md:text-[16px] leading-relaxed text-slate-600 mb-2">
          A proteção plastificada cria uma barreira eficiente contra a umidade
          sem comprometer a resistência mecânica. Ideal para aplicações
          estruturais em ambientes úmidos ou de uso contínuo, onde a
          durabilidade do material define o prazo do projeto.
        </p>

        {/* Indicado para */}
        <div className="flex flex-col gap-2 w-full">
          <h3 className="font-sans font-bold text-[16px] text-secondary-500">
            Indicado para:
          </h3>
          <p className="font-sans font-normal text-[15px] md:text-[16px] leading-relaxed text-slate-600">
            Estruturas em ambientes úmidos, uso contínuo, aplicações mistas.
          </p>
        </div>

        {/* Vantagens */}
        <div className="flex flex-col gap-3 w-full">
          <h3 className="font-sans font-bold text-[16px] text-secondary-500 mt-2">
            Vantagens:
          </h3>
          <div className="flex flex-col gap-3 w-full">
            {advantages.map((point) => (
              <ChecklistItem key={point}>{point}</ChecklistItem>
            ))}
          </div>
        </div>

        <Button variant="primary" className="mt-4 group cursor-pointer">
          <span>Solicitar orçamento</span>
          <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Button>
      </motion.div>
    </section>
  );
}

export default ProductServiceDetail;
