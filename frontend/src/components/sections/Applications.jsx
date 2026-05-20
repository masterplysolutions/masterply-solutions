import React from 'react';
import { motion } from 'motion/react';
import {
  Construction,
  Waves,
  FerrisWheel,
  CalendarPlus,
  Package,
  Building2,
} from 'lucide-react';
import { Eyebrow } from '../ui/Eyebrow';
import { SegmentTile, FeatureTile } from '../ui/tiles';
import imgConstrucaoCivil from '../../assets/construcao-civil-home.png';
import imgPiscinaAltoPadrao from '../../assets/piscina-alto-padrao-home.png';
import imgParqueTematico from '../../assets/parque-tematico-home.png';

const tallSegments = [
  {
    id: 'construcao-civil',
    title: 'Construção Civil',
    description:
      'Soluções para formas e estruturas com alto índice de reutilização, garantindo melhor acabamento do concreto e redução de custos operacionais.',
    icon: Construction,
    imageSrc: imgConstrucaoCivil,
  },
  {
    id: 'piscinas',
    title: 'Piscinas de Alto Padrão',
    description:
      'Materiais que proporcionam precisão estrutural e acabamento refinado, essenciais para projetos que exigem estética e durabilidade.',
    icon: Waves,
    imageSrc: imgPiscinaAltoPadrao,
  },
  {
    id: 'parques-tematicos',
    title: 'Parques Temáticos',
    description:
      'Aplicações em estruturas complexas, com necessidade de resistência, adaptação e alto fluxo de uso.',
    icon: FerrisWheel,
    imageSrc: imgParqueTematico,
  },
];

const compactSegments = [
  {
    id: 'eventos',
    title: 'Eventos e Estruturas Temporárias',
    description:
      'Desempenho confiável para montagens rápidas, com segurança estrutural e eficiência operacional.',
    icon: CalendarPlus,
  },
  {
    id: 'containers',
    title: 'Containers e Estruturas Modulares',
    description:
      'Versatilidade e resistência para aplicações industriais e projetos que demandam padronização e repetibilidade.',
    icon: Package,
  },
  {
    id: 'grandes-empreendimentos',
    title: 'Grandes Empreendimentos',
    description:
      'Capacidade de fornecimento em escala, com consistência técnica para projetos que não podem sofrer interrupções.',
    icon: Building2,
  },
];

export function Applications() {
  return (
    <section
      className="w-full bg-canvas px-6 md:px-16 lg:px-20 xl:px-24 py-20 md:py-28"
      id="aplicacoes"
    >
      {/* Cabeçalho */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-end">
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Eyebrow>Setores de atuação</Eyebrow>
          <h2 className="font-sans font-bold tracking-[-1.2px] text-ink text-[32px] md:text-[40px] lg:text-[44px] leading-tight max-w-[560px] mt-2">
            Onde <span className="text-secondary">nossas soluções</span> são
            aplicadas
          </h2>
        </motion.div>

        <motion.p
          className="font-sans font-normal text-body text-[16px] md:text-[18px] leading-relaxed max-w-[420px] lg:justify-self-end"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
        >
          Atendemos projetos que exigem mais do que fornecimento. Exigem
          previsibilidade, resistência e desempenho contínuo.
        </motion.p>
      </div>

      {/* Grade de Aplicações */}
      <div className="mt-16 flex flex-col gap-6">
        {/* Linha 1 — segmentos de imagem */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tallSegments.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.5,
                delay: idx * 0.1,
                ease: 'easeOut',
              }}
            >
              <SegmentTile
                title={item.title}
                description={item.description}
                imageSrc={item.imageSrc}
                icon={item.icon}
                href={`/aplicacoes#${item.id}`}
              />
            </motion.div>
          ))}
        </div>

        {/* Linha 2 — segmentos de ícones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {compactSegments.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.5,
                delay: idx * 0.1,
                ease: 'easeOut',
              }}
            >
              <FeatureTile
                title={item.title}
                description={item.description}
                icon={item.icon}
                href={`/aplicacoes#${item.id}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Applications;
