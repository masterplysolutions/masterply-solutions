import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Plus } from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Eyebrow } from '../components/ui/Eyebrow';
import { Button } from '../components/ui/button';
import { ArticleTile } from '../components/ui/tiles';
import { sanityClient } from '../lib/sanity';
import { cn } from '../lib/utils';

const SHOW_ALL = 'Mostrar Todos';

const SORT_OPTIONS = [
  { value: 'recent', label: 'Mais recentes' },
  { value: 'oldest', label: 'Mais antigos' },
  { value: 'alpha', label: 'Ordem Alfabética (A-Z)' },
];

const PAGE_STEP = 3;

// Queries GROQ — posts (expandindo a categoria) e lista de categorias.
const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  mainImage,
  excerpt,
  category->{ title }
}`;

const CATEGORIES_QUERY = `*[_type == "category"] | order(title asc) { title }`;

export function BlogList() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [activeCategory, setActiveCategory] = useState(SHOW_ALL);
  const [sortBy, setSortBy] = useState('recent');
  const [visibleCount, setVisibleCount] = useState(PAGE_STEP);

  // Fetch paralelo de posts e categorias ao montar a página.
  useEffect(() => {
    let cancelled = false;

    setIsLoading(true);
    Promise.all([
      sanityClient.fetch(POSTS_QUERY),
      sanityClient.fetch(CATEGORIES_QUERY),
    ])
      .then(([postsData, categoriesData]) => {
        if (!cancelled) {
          setPosts(Array.isArray(postsData) ? postsData : []);
          setCategories(Array.isArray(categoriesData) ? categoriesData : []);
          setError(null);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          console.error('Erro ao buscar dados do Sanity:', err);
          setError('Não foi possível carregar os artigos no momento.');
        }
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const filteredAndSorted = useMemo(() => {
    let list = [...posts];

    if (activeCategory !== SHOW_ALL) {
      list = list.filter((p) => p.category?.title === activeCategory);
    }

    if (sortBy === 'recent') {
      list.sort(
        (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
      );
    } else if (sortBy === 'oldest') {
      list.sort(
        (a, b) => new Date(a.publishedAt) - new Date(b.publishedAt)
      );
    } else if (sortBy === 'alpha') {
      list.sort((a, b) => a.title.localeCompare(b.title, 'pt-BR'));
    }

    return list;
  }, [posts, activeCategory, sortBy]);

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
            <div className="flex flex-wrap gap-2">
              {[SHOW_ALL, ...categories.map((c) => c.title)].map((cat) => {
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

          {/* Loading state */}
          {isLoading && (
            <div className="mt-10 py-16 text-center text-slate-500 font-sans">
              Carregando artigos…
            </div>
          )}

          {/* Error state */}
          {!isLoading && error && (
            <div className="mt-10 py-16 text-center text-red-500 font-sans">
              {error}
            </div>
          )}

          {/* Grid de artigos */}
          {!isLoading && !error && (
            <>
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {visiblePosts.map((post, idx) => (
                  <motion.div
                    key={post._id}
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
                      category={post.category?.title}
                      title={post.title}
                      description={post.excerpt}
                      href={`/blog/${post.slug}`}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Empty state (sem posts no filtro) */}
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
            </>
          )}
        </section>
      </main>

      <Footer activePath="/blog" />
    </div>
  );
}

export default BlogList;
