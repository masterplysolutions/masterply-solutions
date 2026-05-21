import React, { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Plus } from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Eyebrow } from '../components/ui/Eyebrow';
import { Button } from '../components/ui/button';
import { ArticleTile } from '../components/ui/tiles';
import { MOCK_POSTS } from '../data/mocks';
import { cn } from '../lib/utils';

const CATEGORY_FILTERS = [
  'Mostrar Todos',
  'Construção Civil',
  'Especificação Técnica',
  'Normatização',
];

const SORT_OPTIONS = [
  { value: 'recent', label: 'Mais recentes' },
  { value: 'oldest', label: 'Mais antigos' },
  { value: 'alpha', label: 'Ordem Alfabética (A-Z)' },
];

const PAGE_STEP = 3;

export function BlogList() {
  const [activeCategory, setActiveCategory] = useState('Mostrar Todos');
  const [sortBy, setSortBy] = useState('recent');
  const [visibleCount, setVisibleCount] = useState(PAGE_STEP);

  const filteredAndSorted = useMemo(() => {
    let list = [...MOCK_POSTS];

    if (activeCategory !== 'Mostrar Todos') {
      list = list.filter((p) => p.category === activeCategory);
    }

    if (sortBy === 'recent') {
      list.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortBy === 'oldest') {
      list.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (sortBy === 'alpha') {
      list.sort((a, b) => a.title.localeCompare(b.title, 'pt-BR'));
    }

    return list;
  }, [activeCategory, sortBy]);

  const visiblePosts = filteredAndSorted.slice(0, visibleCount);
  const hasMore = visibleCount < filteredAndSorted.length;

  const handleCategoryClick = (cat) => {
    setActiveCategory(cat);
    setVisibleCount(PAGE_STEP);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    setVisibleCount(PAGE_STEP);
  };

  return (
    <div className="min-h-screen bg-canvas text-ink flex flex-col font-sans">
      <Navbar activePath="/blog" lightBackground />

      <main className="w-full flex-grow">
        <section className="w-full bg-canvas px-6 md:px-16 lg:px-20 xl:px-24 py-28">

          {/* Cabeçalho */}
          <motion.div
            className="flex flex-col gap-4 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Eyebrow>Blog</Eyebrow>
            <h1 className="font-sans font-bold tracking-tight text-ink text-[32px] md:text-[42px] lg:text-[52px] leading-tight">
              Conteúdo Técnico e{' '}
              <span className="text-secondary-500">Insights do Setor</span>
            </h1>
            <p className="font-sans font-normal text-slate-600 text-[16px] md:text-[18px] leading-relaxed mt-2 max-w-2xl">
              Análises, normas e boas práticas para quem decide com base em
              dados — não em catálogo.
            </p>
          </motion.div>

          {/* Filtros + Ordenação */}
          <div className="mt-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Categorias */}
            <div className="flex flex-wrap gap-2">
              {CATEGORY_FILTERS.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => handleCategoryClick(cat)}
                    className={cn(
                      'font-sans text-[14px] font-medium px-4 py-2 border transition-all duration-200 cursor-pointer',
                      isActive
                        ? 'bg-ink text-white border-ink'
                        : 'bg-transparent text-ink/70 border-slate-200 hover:border-ink hover:text-ink'
                    )}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Select de ordenação */}
            <div className="relative w-full lg:w-auto">
              <label className="sr-only" htmlFor="sort-select">
                Ordenar por
              </label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={handleSortChange}
                className="appearance-none bg-white border border-slate-200 px-4 py-2 pr-10 text-[14px] font-sans font-medium text-ink cursor-pointer focus:outline-none focus:border-secondary-500 w-full lg:w-auto"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-ink/60 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Grid de artigos */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visiblePosts.map((post, idx) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: (idx % PAGE_STEP) * 0.1,
                  ease: 'easeOut',
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

          {/* Empty state */}
          {visiblePosts.length === 0 && (
            <div className="mt-10 py-16 text-center text-slate-500 font-sans">
              Nenhum artigo encontrado para esta categoria.
            </div>
          )}

          {/* Ver mais */}
          {hasMore && (
            <div className="mt-12 flex justify-center">
              <Button
                variant="secondary"
                onClick={() => setVisibleCount((c) => c + PAGE_STEP)}
                className="cursor-pointer"
              >
                <span>Ver mais</span>
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          )}
        </section>
      </main>

      <Footer activePath="/blog" />
    </div>
  );
}

export default BlogList;
