import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Eyebrow } from '../ui/Eyebrow';
import { Button } from '../ui/button';
import imgCivil from '../../assets/aplicacao-civil.png';
import imgPiscina from '../../assets/aplicacao-piscina.png';
import imgParqueAquatico from '../../assets/aplicacao-parque-aquatico.png';
import imgEventos from '../../assets/aplicacao-eventos.png';
import imgContainer from '../../assets/aplicacao-container.png';
import imgGrandesEmpreendimentos from '../../assets/aplicacao-grandes-empreendimentos.png';

const APPLICATIONS_DATA = [
  {
    eyebrow: 'Aplicação',
    title: 'Construção Civil',
    description:
      'Formas de concreto que precisam de mais reutilizações, acabamento superior e menor custo operacional por ciclo. Nossas soluções reduzem retrabalho e aumentam a previsibilidade da execução estrutural.',
    image: imgCivil,
  },
  {
    eyebrow: 'Aplicação',
    title: 'Piscinas de Alto Padrão',
    description:
      'Projetos onde a estética é parte da engenharia. Oferecemos materiais com estabilidade dimensional e acabamento refinado — porque piscina de alto padrão começa na estrutura, não na cerâmica.',
    image: imgPiscina,
  },
  {
    eyebrow: 'Aplicação',
    title: 'Parques Aquáticos',
    description:
      'Estruturas que precisam sustentar alto fluxo de pessoas, variações climáticas e padrões rígidos de segurança. Fornecemos materiais com resistência comprovada para ambientes de uso intenso.',
    image: imgParqueAquatico,
  },
  {
    eyebrow: 'Aplicação',
    title: 'Eventos e Estruturas Temporárias',
    description:
      'Rapidez de montagem, segurança estrutural e desempenho garantido para quem não tem margem para improviso. Quando o prazo é curto, o material não pode ser dúvida.',
    image: imgEventos,
  },
  {
    eyebrow: 'Aplicação',
    title: 'Containers e Estruturas Modulares',
    description:
      'Repetibilidade e padronização são a base de projetos modulares. Trabalhamos com lotes que garantem uniformidade técnica entre unidades — sem variação de qualidade entre pedidos.',
    image: imgContainer,
  },
  {
    eyebrow: 'Aplicação',
    title: 'Grandes Empreendimentos',
    description:
      'Escala não pode comprometer consistência. Fornecemos volumes expressivos sem abrir mão do padrão técnico — porque projetos grandes exigem parceiros que cresçam junto com a demanda.',
    image: imgGrandesEmpreendimentos,
  },
];

export function ApplicationsList() {
  return (
    <div className="bg-canvas flex flex-col w-full">
      {APPLICATIONS_DATA.map((app, index) => {
        const reversed = index % 2 !== 0;
        return (
          <section
            key={app.title}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-16 md:py-24 px-6 md:px-16 lg:px-20 xl:px-24 border-b border-slate-100 last:border-none"
          >
            {/* Mídia */}
            <motion.div
              className={cn(
                'w-full h-full min-h-[350px] md:min-h-[450px] max-h-[500px] overflow-hidden relative',
                reversed && 'lg:order-last'
              )}
              initial={{ opacity: 0, x: reversed ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <img
                src={app.image}
                alt={app.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.01]"
              />
            </motion.div>

            {/* Conteúdo */}
            <motion.div
              className="flex flex-col items-start text-left max-w-xl gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            >
              <Eyebrow>{app.eyebrow}</Eyebrow>

              <h2 className="font-sans font-bold tracking-tight text-ink text-[32px] md:text-[38px] lg:text-[44px] leading-tight">
                {app.title}
              </h2>

              <p className="font-sans font-normal text-body text-[15px] md:text-[16px] leading-relaxed text-slate-600">
                {app.description}
              </p>

              <Button variant="primary" className="mt-2 group cursor-pointer">
                <span>Solicitar orçamento</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </motion.div>
          </section>
        );
      })}
    </div>
  );
}

export default ApplicationsList;
