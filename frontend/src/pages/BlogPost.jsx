import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PortableText } from '@portabletext/react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Eyebrow } from '../components/ui/Eyebrow';
import { Button } from '../components/ui/button';
import { sanityClient, urlFor } from '../lib/sanity';
import ctaBg from '../assets/CTA-BG.png';

function formatDate(isoDate) {
  if (!isoDate) return '';
  const d = new Date(isoDate);
  return d.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}

// Queries GROQ — post pelo slug + 3 mais recentes para sidebar (excluindo o atual).
const POST_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  mainImage,
  excerpt,
  body,
  category->{ title }
}`;

const RECOMMENDED_QUERY = `*[_type == "post" && slug.current != $slug] | order(publishedAt desc)[0...3] {
  _id,
  title,
  "slug": slug.current,
  mainImage,
  category->{ title }
}`;

// Render customizado dos blocos do PortableText — tipografia consistente com o design system.
const portableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="font-sans font-bold tracking-tight text-ink text-[22px] md:text-[26px] leading-snug mt-8 mb-3">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-sans font-semibold text-ink text-[18px] md:text-[20px] leading-snug mt-6 mb-2">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-secondary-500 pl-4 italic text-slate-700 my-4">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="font-sans font-normal">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 flex flex-col gap-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 flex flex-col gap-2">{children}</ol>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-ink">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-secondary-500 underline hover:text-secondary-600"
      >
        {children}
      </a>
    ),
  },
};

function NotFoundState() {
  return (
    <div className="min-h-screen bg-canvas text-ink flex flex-col font-sans">
      <Navbar activePath="/blog" lightBackground />
      <main className="flex-grow flex flex-col items-center justify-center text-center px-6 py-32 gap-6">
        <Eyebrow>Blog</Eyebrow>
        <h2 className="font-sans font-bold tracking-tight text-ink text-[28px] md:text-[36px] leading-tight max-w-lg">
          Não encontramos o artigo que você procura.
        </h2>
        <p className="font-sans text-slate-600 max-w-md">
          O conteúdo pode ter sido movido ou removido. Volte para a listagem e
          explore os outros artigos disponíveis.
        </p>
        <Link to="/blog" className="inline-block">
          <Button variant="primary" className="cursor-pointer">
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para o blog</span>
          </Button>
        </Link>
      </main>
      <Footer activePath="/blog" />
    </div>
  );
}

function LoadingState() {
  return (
    <div className="min-h-screen bg-canvas text-ink flex flex-col font-sans">
      <Navbar activePath="/blog" lightBackground />
      <main className="flex-grow flex items-center justify-center py-32">
        <p className="font-sans text-slate-500">Carregando artigo…</p>
      </main>
      <Footer activePath="/blog" />
    </div>
  );
}

export function BlogPost() {
  const { slug } = useParams();
  const [postData, setPostData] = useState(null);
  const [recommended, setRecommended] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setIsLoading(true);
    setPostData(null);

    Promise.all([
      sanityClient.fetch(POST_QUERY, { slug }),
      sanityClient.fetch(RECOMMENDED_QUERY, { slug }),
    ])
      .then(([post, recs]) => {
        if (!cancelled) {
          setPostData(post || null);
          setRecommended(Array.isArray(recs) ? recs : []);
          setError(null);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          console.error('Erro ao buscar artigo do Sanity:', err);
          setError('Falha ao carregar o artigo.');
        }
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (isLoading) return <LoadingState />;
  if (error || !postData) return <NotFoundState />;

  const mainImageUrl = postData.mainImage
    ? urlFor(postData.mainImage).width(1600).fit('max').auto('format').url()
    : null;

  return (
    <div className="min-h-screen bg-canvas text-ink flex flex-col font-sans">
      <Navbar activePath="/blog" lightBackground />

      <main className="w-full flex-grow">
        {/* Article + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 px-6 md:px-16 lg:px-20 xl:px-24 py-28 bg-canvas items-start">

          {/* Coluna Principal */}
          <motion.article
            className="lg:col-span-2 flex flex-col gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Categoria + Data */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
              {postData.category?.title && (
                <Eyebrow>{postData.category.title}</Eyebrow>
              )}
              <span className="font-sans text-[13px] text-slate-500">
                {formatDate(postData.publishedAt)}
              </span>
            </div>

            {/* H1 */}
            <h1 className="font-sans font-bold tracking-tight text-ink text-[32px] md:text-[42px] lg:text-[48px] leading-tight">
              {postData.title}
            </h1>

            {/* Imagem widescreen */}
            {mainImageUrl && (
              <div className="w-full aspect-[16/9] overflow-hidden mt-4">
                <img
                  src={mainImageUrl}
                  alt={postData.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Corpo via PortableText */}
            <div className="text-ink text-[16px] md:text-[18px] leading-relaxed flex flex-col gap-6 mt-8">
              <PortableText
                value={postData.body}
                components={portableTextComponents}
              />
            </div>

            {/* Voltar */}
            <div className="mt-8">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 font-sans text-[14px] font-medium text-slate-600 hover:text-secondary-500 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Voltar para o blog</span>
              </Link>
            </div>
          </motion.article>

          {/* Sidebar */}
          <motion.aside
            className="lg:col-span-1 lg:sticky lg:top-28 space-y-6 self-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          >
            <h2 className="font-sans font-bold text-ink text-[20px] tracking-tight">
              Artigos Recomendados
            </h2>

            <div className="flex flex-col gap-4">
              {recommended.map((rec) => {
                const thumbUrl = rec.mainImage
                  ? urlFor(rec.mainImage).width(160).height(160).fit('crop').auto('format').url()
                  : null;
                return (
                  <Link
                    key={rec._id}
                    to={`/blog/${rec.slug}`}
                    className="group flex gap-4 items-start bg-white border border-slate-100 hover:border-secondary-500/40 hover:shadow-sm transition-all duration-300 p-3"
                  >
                    {thumbUrl && (
                      <div className="w-20 h-20 shrink-0 overflow-hidden">
                        <img
                          src={thumbUrl}
                          alt={rec.title}
                          className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="flex flex-col gap-1 flex-grow">
                      {rec.category?.title && (
                        <span className="font-sans text-[11px] uppercase tracking-wider text-secondary-500 font-medium">
                          {rec.category.title}
                        </span>
                      )}
                      <h3 className="font-sans font-semibold text-ink text-[14px] leading-snug line-clamp-3 group-hover:text-secondary-500 transition-colors duration-300">
                        {rec.title}
                      </h3>
                    </div>
                  </Link>
                );
              })}
            </div>
          </motion.aside>
        </div>

        {/* CTA Boxed (variante blog) */}
        <section className="w-full bg-canvas px-6 md:px-16 lg:px-20 xl:px-24 py-12 md:py-16">
          <div className="relative w-full overflow-hidden bg-[#18213c] py-16 md:py-24 px-6 md:px-12 flex flex-col items-center text-center justify-center gap-6 rounded-none">
            <img
              src={ctaBg}
              alt="Fundo decorativo Masterply"
              className="absolute inset-0 w-full h-full object-cover object-center z-0 pointer-events-none select-none"
            />
            <div className="absolute inset-0 bg-[#18213c]/80 z-10 pointer-events-none" />

            <div className="relative z-20 max-w-[1100px] mx-auto flex flex-col items-center gap-6">
              <Eyebrow className="text-secondary-500 hover:text-secondary-400">
                Fale conosco
              </Eyebrow>

              <motion.h2
                className="font-sans font-bold tracking-tight text-white text-[26px] md:text-[36px] lg:text-[42px] leading-tight"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                Decisões técnicas exigem{' '}
                <span className="text-[#c89b3d]">
                  o parceiro estratégico correto
                </span>{' '}
                no seu projeto.
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                className="mt-4"
              >
                <Link to="/contato" className="inline-block">
                  <Button variant="primary" className="cursor-pointer">
                    Solicitar orçamento
                    <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer activePath="/blog" />
    </div>
  );
}

export default BlogPost;
