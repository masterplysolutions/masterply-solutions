import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Eyebrow } from '../ui/Eyebrow';
import { Button } from '../ui/button';
import ctaBg from '../../assets/CTA-BG.png';

export function CTA() {
  return (
    <section className="w-full bg-canvas px-6 md:px-16 lg:px-20 xl:px-24 py-12 md:py-16" id="contato">

      {/* Box Interno */}
      <div className="relative w-full overflow-hidden bg-[#18213c] py-16 md:py-24 px-6 md:px-12 flex flex-col items-center text-center justify-center gap-6 rounded-none">

        {/* Imagem de Fundo */}
        <img
          src={ctaBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center z-0 pointer-events-none select-none"
        />

        {/* Conteúdo */}
        <div className="relative z-20 max-w-[1100px] mx-auto flex flex-col items-center gap-6">

          <Eyebrow className="text-secondary-500 hover:text-secondary-400">Fale conosco</Eyebrow>

          <motion.h2
            className="font-sans font-bold tracking-tight text-white text-[26px] md:text-[36px] lg:text-[42px] leading-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Se o seu projeto exige desempenho,
            <br className="hidden md:inline" />{' '}
            <span className="text-[#c89b3d]">a escolha do fornecedor não pode ser comum</span>.
          </motion.h2>

          <motion.p
            className="font-sans font-normal text-slate-300 text-[15px] md:text-[18px] leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            Fale com um especialista e entenda qual solução entrega o melhor resultado para a sua aplicação.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mt-4"
          >
            <Button href="/contato" variant="primary">
              Solicitar orçamento
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default CTA;
