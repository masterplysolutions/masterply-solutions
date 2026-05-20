import React from 'react';
import { motion } from 'motion/react';
import { Eyebrow } from '../ui/Eyebrow';
import { ProductTile } from '../ui/tiles';

const differentials = [
  {
    number: '01',
    title: 'Padrão Consistente',
    description:
      'Nossas chapas mantêm a mesma espessura e densidade em todas as unidades, evitando ajustes manuais na obra.',
  },
  {
    number: '02',
    title: 'Capacidade Industrial',
    description:
      'Estrutura logística e fabril pronta para suprir cronogramas agressivos sem interrupções.',
  },
  {
    number: '03',
    title: 'Suporte Técnico',
    description:
      'Engenheiros prontos para indicar a melhor especificação para cada desafio estrutural.',
  },
  {
    number: '04',
    title: 'Foco em Desempenho',
    description:
      'Compensados desenvolvidos para o máximo de reuso, reduzindo o custo por ciclo da obra.',
  },
];

export function Differentials() {
  return (
    <section
      className="w-full bg-surface-dark px-6 md:px-16 lg:px-20 xl:px-24 py-20 md:py-28"
      id="diferencial"
    >
      {/* Cabeçalho centralizado */}
      <motion.div
        className="flex flex-col items-center text-center gap-6 max-w-[1080px] mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Eyebrow className="text-white hover:text-secondary">Diferencial</Eyebrow>

        <h2 className="font-sans font-bold tracking-[-1.2px] text-white text-[32px] md:text-[40px] lg:text-[48px] leading-tight">
          Enquanto o mercado vende madeira,
          <br />
          <span className="text-secondary">
            nós entregamos previsibilidade
          </span>
        </h2>

        <p className="font-sans font-normal text-[16px] md:text-[18px] leading-relaxed text-white/70">
          Escolher apenas pelo preço pode parecer vantajoso no início. Mas, na
          prática, decisões mal direcionadas geram retrabalho, desperdício e
          atrasos. A Masterply foi estruturada para atuar em cenários onde a
          execução precisa ser controlada do início ao fim.
        </p>
      </motion.div>

      {/* Grade de Diferenciais */}
      <div className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {differentials.map((item, idx) => (
          <motion.div
            key={item.number}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
              duration: 0.5,
              delay: idx * 0.1,
              ease: 'easeOut',
            }}
          >
            <ProductTile
              number={item.number}
              title={item.title}
              description={item.description}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Differentials;
