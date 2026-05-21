import React from 'react';
import { motion } from 'motion/react';
import { Eyebrow } from '../ui/Eyebrow';

const pillars = [
  {
    number: '01',
    title: 'Missão',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    number: '02',
    title: 'Visão',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    number: '03',
    title: 'Valores',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
];

function PillarCard({ number, title, description, index }) {
  return (
    <motion.div
      className="group relative p-8 border border-slate-200/80 bg-white hover:bg-slate-50 hover:border-transparent transition-all duration-300 cursor-pointer"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: 'easeOut' }}
    >
      {/* Número decorativo */}
      <span className="absolute right-8 top-8 font-sans font-bold text-[48px] leading-none tracking-[-1.5px] text-slate-200 select-none transition-colors duration-300 group-hover:text-secondary-400">
        {number}
      </span>

      {/* Título */}
      <h3 className="font-sans font-bold text-ink text-[20px] mb-2 pr-16">
        {title}
      </h3>

      {/* Descrição */}
      <p className="font-sans font-normal text-[14px] md:text-[15px] leading-relaxed text-slate-600 max-w-[480px]">
        {description}
      </p>
    </motion.div>
  );
}

export function AboutPositioning() {
  return (
    <section
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 bg-canvas py-20 md:py-28 px-6 md:px-16 lg:px-20 xl:px-24"
      id="about-posicionamento"
    >
      {/* Bloco Esquerdo — Cabeçalho & Manifesto */}
      <motion.div
        className="flex flex-col items-start text-left max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Eyebrow>Posicionamento</Eyebrow>

        <h2 className="font-sans font-bold tracking-tight text-ink text-[32px] md:text-[40px] lg:text-[46px] leading-tight mt-4 mb-6">
          Enquanto o mercado compete por volume,{' '}
          <span className="text-secondary-500">
            nós competimos por resultado
          </span>
        </h2>

        <div className="font-sans font-normal text-body text-[15px] md:text-[16px] leading-relaxed text-slate-600 flex flex-col gap-4">
          <p>
            A maioria dos fornecedores mede sucesso em toneladas entregues. Nós
            medimos no desempenho da obra.
          </p>
          <p>
            Isso muda tudo: da forma como atendemos, da forma como recomendamos
            o produto certo, até a forma como acompanhamos projetos de longo
            prazo.
          </p>
        </div>
      </motion.div>

      {/* Bloco Direito — Pilares (Missão, Visão, Valores) */}
      <div className="flex flex-col gap-6 w-full">
        {pillars.map((item, idx) => (
          <PillarCard key={item.number} index={idx} {...item} />
        ))}
      </div>
    </section>
  );
}

export default AboutPositioning;
