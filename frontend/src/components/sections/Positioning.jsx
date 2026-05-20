import React from 'react';
import { motion } from 'motion/react';
import { Eyebrow } from '../ui/Eyebrow';

const differentials = [
  {
    number: '01',
    title: 'Escalabilidade Garantida',
    description:
      'Nossa cadeia logística e parcerias com as maiores plantas do país permitem que sua obra nunca pare. Entregamos volume com a constância que grandes projetos exigem.',
    filled: false,
  },
  {
    number: '02',
    title: 'Especificação Técnica',
    description:
      'Não vendemos apenas madeira. Entregamos o compensado exato para a sua aplicação: seja fôrmas para concreto aparente ou estruturas navais de alta resistência.',
    filled: false,
  },
];

function DifferentialBlock({ number, title, description, filled, index }) {
  return (
    <motion.div
      className={`group relative p-10 md:p-12 flex flex-col gap-6 transition-all duration-300 cursor-pointer ${
        filled
          ? 'bg-surface-soft hover:bg-primary-100'
          : 'border border-primary-100 bg-canvas hover:bg-surface-soft hover:border-transparent'
      }`}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: 'easeOut' }}
    >
      {/* Número decorativo */}
      <span className="absolute right-8 top-8 font-sans font-semibold text-[48px] md:text-[60px] leading-none tracking-[-1.5px] text-primary-100 select-none transition-colors duration-300 group-hover:text-primary-200">
        {number}
      </span>

      {/* Título */}
      <h3 className="font-sans font-semibold text-[20px] md:text-[24px] leading-[32px] tracking-[-0.6px] text-ink pr-16">
        {title}
      </h3>

      {/* Descrição */}
      <p className="font-sans font-normal text-[16px] md:text-[18px] leading-relaxed text-muted max-w-[520px]">
        {description}
      </p>
    </motion.div>
  );
}

export function Positioning() {
  return (
    <section
      className="w-full bg-canvas px-6 md:px-16 lg:px-20 xl:px-24 py-20 md:py-28"
      id="posicionamento"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Bloco Esquerdo - Cabeçalho */}
        <motion.div
          className="flex flex-col gap-4 lg:sticky lg:top-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Eyebrow>Posicionamento</Eyebrow>
          <h2 className="font-sans font-bold tracking-[-1.2px] text-ink text-[32px] md:text-[40px] lg:text-[44px] leading-tight max-w-[560px] mt-2">
            Mais do que fornecer,
            <br />
            <span className="text-secondary">é garantir execução</span>
          </h2>
        </motion.div>

        {/* Bloco Direito - Lista de Diferenciais */}
        <div className="flex flex-col gap-4">
          {differentials.map((item, idx) => (
            <DifferentialBlock key={item.number} index={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Positioning;
