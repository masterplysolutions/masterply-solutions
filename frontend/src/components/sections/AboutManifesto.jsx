import React from 'react';
import { motion } from 'motion/react';
import { Eyebrow } from '../ui/Eyebrow';

export function AboutManifesto() {
  return (
    <section
      className="w-full bg-canvas px-6 md:px-16 lg:px-20 xl:px-24 py-20 md:py-28 flex flex-col items-center text-center justify-center"
      id="manifesto"
    >
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <Eyebrow>Quem somos</Eyebrow>
      </motion.div>

      <motion.h2
        className="font-sans font-bold tracking-tight text-ink text-[32px] md:text-[42px] lg:text-[48px] leading-tight max-w-4xl mx-auto mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
      >
        Uma <span className="text-secondary">empresa estruturada</span> para
        projetos que não podem errar
      </motion.h2>

      <motion.div
        className="flex flex-col gap-6 max-w-3xl md:max-w-4xl lg:max-w-[1200px] mx-auto font-sans font-normal text-body text-[16px] md:text-[18px] leading-relaxed text-black/70"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
      >
        <p>
          Atuamos no fornecimento de compensados para obras, estruturas e
          projetos de médio e grande porte, sempre com foco na aplicação
          correta, não apenas na entrega do volume. Participamos da decisão de
          compra.
        </p>
        <p>
          Orientamos a especificação técnica. Garantimos consistência entre
          pedidos.
        </p>
        <p>
          Porque em projetos exigentes, o que diferencia o sucesso da falha
          costuma ser a qualidade do parceiro — não o preço da chapa.
        </p>
      </motion.div>
    </section>
  );
}

export default AboutManifesto;
