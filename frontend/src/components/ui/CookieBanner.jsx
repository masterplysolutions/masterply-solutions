import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Button } from './button';

const STORAGE_KEY = 'masterply-cookies-accepted';

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      const accepted = localStorage.getItem(STORAGE_KEY);
      if (!accepted) setShow(true);
    } catch {
      // Ambientes sem acesso ao localStorage (SSR/incógnito restrito) — exibir por padrão
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, 'true');
    } catch {
      // Falha silenciosa em ambientes sem storage; o banner ainda some pelo estado React.
    }
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          role="dialog"
          aria-label="Aviso de uso de cookies"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-slate-900 text-white border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 shadow-2xl"
        >
          <p className="font-sans text-[13px] md:text-[14px] leading-relaxed text-white/85 max-w-4xl">
            Utilizamos cookies para oferecer uma melhor experiência de
            navegação, analisar o tráfego do site e personalizar o conteúdo de
            acordo com as diretrizes da LGPD. Ao continuar navegando, você
            concorda com essas condições.{' '}
            <a
              href="/politica-de-cookies"
              className="underline underline-offset-2 text-white/70 hover:text-secondary-500 transition-colors"
            >
              Saiba mais sobre nossa política de cookies
            </a>
            .
          </p>

          <Button
            variant="primary"
            onClick={handleAccept}
            className="shrink-0 cursor-pointer"
          >
            Aceitar e fechar
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CookieBanner;
