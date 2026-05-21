import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Eyebrow } from '../ui/Eyebrow';
import { ChecklistItem } from '../ui/ChecklistItem';
import { Button } from '../ui/button';
import imgNaval from '../../assets/servico-compensado-naval.png';

const advantages = [
  'Resistência permanente à umidade',
  'Estabilidade estrutural',
  'Vida útil prolongada',
];

export function NavalServiceDetail() {
  return (
    <section
      className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch bg-canvas py-16 md:py-24 px-6 md:px-16 lg:px-20 xl:px-24"
      id="compensado-naval"
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
          src={imgNaval}
          alt="Compensado Naval em uso"
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
        <Eyebrow>
          Desenvolvido para o ambiente mais exigente: a água constante.
        </Eyebrow>

        <h2 className="font-sans font-bold tracking-tight text-ink text-[32px] md:text-[40px] lg:text-[46px] leading-tight">
          Compensado Naval
        </h2>

        <p className="font-sans font-normal text-body text-[15px] md:text-[16px] leading-relaxed text-slate-600 mb-2">
          Quando a exposição à umidade não é eventual, mas permanente, o
          Compensado Naval é a escolha técnica correta. Alta estabilidade
          dimensional e longa vida útil mesmo em condições adversas — porque
          alguns projetos não aceitam meia solução.
        </p>

        {/* Indicado para */}
        <div className="flex flex-col gap-2 w-full">
          <h3 className="font-sans font-bold text-[16px] text-secondary-500">
            Indicado para:
          </h3>
          <p className="font-sans font-normal text-[15px] md:text-[16px] leading-relaxed text-slate-600">
            Piscinas, áreas externas, ambientes agressivos e projetos à beira
            d&apos;água.
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

        <Button href="/contato" variant="primary" className="mt-4 group cursor-pointer">
          <span>Solicitar orçamento</span>
          <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Button>
      </motion.div>
    </section>
  );
}

export default NavalServiceDetail;
