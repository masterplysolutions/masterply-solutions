import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { MOCK_POSTS } from '../../data/mocks';
import { Eyebrow } from '../ui/Eyebrow';
import { Button } from '../ui/button';
import { ArticleTile } from '../ui/tiles';

export function BlogSection() {
  return (
    <section className="w-full bg-[#fafafa] px-6 md:px-16 lg:px-20 xl:px-24 py-20 md:py-28" id="blog">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* Header Layout Assíncrono */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">

          {/* Lado Esquerdo - Textos */}
          <motion.div
            className="flex flex-col items-start gap-4 md:max-w-[820px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Eyebrow>Blog</Eyebrow>
            <h2 className="font-sans font-bold text-[32px] md:text-[40px] lg:text-[44px] leading-tight tracking-[-0.8px] text-ink mt-2">
              Decisões técnicas <span className="text-secondary-500">impactam diretamente</span> o resultado da obra
            </h2>
            <p className="font-sans font-normal text-[16px] md:text-[18px] leading-relaxed text-body mt-2">
              Escolhas feitas na compra do material refletem no custo total, no prazo e na qualidade da execução.
            </p>
          </motion.div>

          {/* Lado Direito - Botão Global (somente desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="shrink-0 hidden md:block"
          >
            <Button href="/blog" variant="primary">
              Ver todos os artigos
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </motion.div>

        </div>

        {/* Grid de Artigos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {MOCK_POSTS.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: idx * 0.1,
                ease: "easeOut"
              }}
              className="h-full"
            >
              <ArticleTile
                category={post.category}
                title={post.title}
                description={post.excerpt}
                href={`/blog/${post.slug}`}
              />
            </motion.div>
          ))}
        </div>

        {/* Botão Global (somente mobile, após os posts) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="md:hidden flex justify-start"
        >
          <Button href="/blog" variant="primary">
            Ver todos os artigos
            <ArrowUpRight className="w-4 h-4" />
          </Button>
        </motion.div>

      </div>
    </section>
  );
}

export default BlogSection;
