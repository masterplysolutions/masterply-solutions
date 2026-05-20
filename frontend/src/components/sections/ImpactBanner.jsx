import React, { useState } from 'react';
import { motion } from 'motion/react';

export function ImpactBanner() {
  const [vectorVisible, setVectorVisible] = useState(true);

  return (
    <section 
      className="relative w-full bg-[#18213c] px-6 md:px-16 lg:px-20 xl:px-24 py-24 md:py-32 overflow-hidden flex flex-col items-center text-center justify-center"
      id="manifesto"
    >
      {/* Decorative Vector Background */}
      {vectorVisible && (
        <img 
          src="http://localhost:3845/assets/8f385be721e33f3fc4bd2b547f3b0b91a7fdd883.svg" 
          alt="" 
          onError={() => setVectorVisible(false)}
          className="absolute pointer-events-none select-none opacity-[0.06] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-[1635px] max-w-none h-[621px] object-contain"
        />
      )}

      {/* Conteúdo Centralizado */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center gap-8">
        
        {/* Linha Decorativa Dourada */}
        <motion.div 
          className="w-24 h-[4px] bg-[#e9c16c]"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        {/* Título de Impacto */}
        <motion.h2 
          className="font-sans font-bold text-white text-[28px] md:text-[38px] lg:text-[48px] leading-tight tracking-[-1.2px] max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          O custo do material <span className="text-[#c89b3d]">raramente é o maior problema</span> de uma obra.
        </motion.h2>

        {/* Parágrafo de Apoio */}
        <motion.p 
          className="font-sans font-normal text-slate-300 text-[15px] md:text-[18px] leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          Atrasos, retrabalho e falhas estruturais geram impactos muito maiores do que qualquer economia inicial. Projetos exigentes não escolhem apenas fornecedor. Escolhem quem reduz risco e garante previsibilidade.
        </motion.p>

      </div>
    </section>
  );
}

export default ImpactBanner;
