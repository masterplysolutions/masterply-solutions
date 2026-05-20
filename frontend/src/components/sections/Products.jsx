import React from 'react';
import { motion } from 'motion/react';
import { Eyebrow } from '../ui/Eyebrow';
import { ProductTypeTile, ServiceTile } from '../ui/tiles';
import imgPlastificado from '../../assets/compensado-plastificado-home.png';
import imgNaval from '../../assets/compensado-naval-home.png';
import imgFilmeFaced from '../../assets/filme-faced-home.png';

const productPlastificado = {
  id: 'compensado-plastificado',
  title: 'Compensado Plastificado',
  description:
    'Oferece proteção contra umidade e maior resistência mecânica, ideal para aplicações estruturais que demandam durabilidade.',
  imageSrc: imgPlastificado,
};

const productNaval = {
  id: 'compensado-naval',
  title: 'Compensado Naval',
  description:
    'Desenvolvido para ambientes com alta exposição à umidade, garantindo estabilidade e longa vida útil mesmo em condições adversas.',
  imageSrc: imgNaval,
};

const productFilmeFaced = {
  id: 'filme-faced',
  title: 'Filme Faced',
  description:
    'Indicado para formas de concreto que exigem acabamento superior e maior número de reutilizações, reduzindo retrabalho e custo por uso.',
  imageSrc: imgFilmeFaced,
};

export function Products() {
  return (
    <section
      className="w-full bg-canvas px-6 md:px-16 lg:px-20 xl:px-24 py-20 md:py-28"
      id="produtos"
    >
      {/* Cabeçalho Centralizado */}
      <motion.div
        className="flex flex-col items-center text-center max-w-[760px] mx-auto gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Eyebrow>Produtos</Eyebrow>
        <h2 className="font-sans font-bold text-[32px] md:text-[40px] lg:text-[44px] leading-tight tracking-[-0.8px] text-ink mt-2">
          Soluções desenvolvidas para{' '}
          <span className="text-secondary">aplicação real</span>
        </h2>
        <p className="font-sans font-normal text-[16px] md:text-[18px] leading-relaxed text-body">
          Cada produto é selecionado e recomendado com base no tipo de
          aplicação, visando maior durabilidade, eficiência e resultado final na
          obra.
        </p>
      </motion.div>

      {/* Grid Assimétrico — Esquerda 1 grande / Direita 2 empilhados */}
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {/* Esquerda — Compensado Plastificado */}
        <motion.div
          className="h-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <ProductTypeTile
            title={productPlastificado.title}
            description={productPlastificado.description}
            imageSrc={productPlastificado.imageSrc}
            href={`/produtos#${productPlastificado.id}`}
            className="aspect-auto h-full min-h-[500px]"
          />
        </motion.div>

        {/* Direita — Naval + Filme Faced */}
        <div className="flex flex-col gap-6 h-full">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          >
            <ServiceTile
              title={productNaval.title}
              description={productNaval.description}
              imageSrc={productNaval.imageSrc}
              href={`/produtos#${productNaval.id}`}
              className="aspect-auto md:aspect-auto h-full min-h-[240px]"
            />
          </motion.div>

          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            <ServiceTile
              title={productFilmeFaced.title}
              description={productFilmeFaced.description}
              imageSrc={productFilmeFaced.imageSrc}
              href={`/produtos#${productFilmeFaced.id}`}
              className="aspect-auto md:aspect-auto h-full min-h-[240px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Products;
