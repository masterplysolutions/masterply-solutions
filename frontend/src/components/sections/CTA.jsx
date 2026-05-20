import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Eyebrow } from '../ui/Eyebrow';
import { Button } from '../ui/button';

export function CTA() {
  const [bgSrc, setBgSrc] = useState("http://localhost:3845/assets/939e6c3b7eb58c721449ba3edb314561344d42a6.png");
  const fallbackBg = "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80";

  return (
    <section className="w-full bg-canvas px-6 md:px-16 lg:px-20 xl:px-24 py-12 md:py-16" id="contato">

      {/* Box Interno */}
      <div className="relative w-full overflow-hidden bg-[#18213c] py-16 md:py-24 px-6 md:px-12 flex flex-col items-center text-center justify-center gap-6 rounded-none">

        {/* Imagem de Fundo com Fallback */}
        <img
          src={bgSrc}
          alt=""
          onError={() => setBgSrc(fallbackBg)}
          className="absolute inset-0 w-full h-full object-cover object-center z-0 pointer-events-none select-none"
        />

        {/* Overlay de Contraste */}
        <div className="absolute inset-0 bg-[#18213c]/85 md:bg-[#18213c]/90 z-10 pointer-events-none" />

        {/* Conteúdo (Z-20 para ficar acima do overlay) */}
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
            <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" className="inline-block">
              <Button variant="primary">
                Solicitar orçamento
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </a>
          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default CTA;
