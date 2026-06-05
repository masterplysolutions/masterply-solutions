import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Eyebrow } from '../ui/Eyebrow';
import { ChecklistItem } from '../ui/ChecklistItem';
import { Button } from '../ui/button';
import { ImageCarousel } from '../ui/ImageCarousel';
import img1 from '../../assets/Compensado Antiderrapante (1).jpg';
import img2 from '../../assets/Compensado Antiderrapante 2.jpg';
import img3 from '../../assets/Compensado Antiderrapante 3.jpg';
import img4 from '../../assets/Compensado Antiderrapante 4.jpg';

const advantages = [
  'Máxima segurança: Textura em relevo que evita escorregamentos',
  'Alta resistência mecânica: Suporta tráfego intenso e movimentação de cargas',
  'Durabilidade estendida: Barreira altamente resistente ao desgaste físico e às intempéries',
];

export function AntiderrapanteServiceDetail() {
  return (
    <section
      className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch bg-canvas py-16 md:py-24 px-6 md:px-16 lg:px-20 xl:px-24"
      id="compensado-antiderrapante"
    >
      {/* Coluna Esquerda — Conteúdo Técnico */}
      <motion.div
        className="flex flex-col justify-center items-start text-left max-w-xl gap-5 h-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Eyebrow>Segurança, estabilidade e aderência máxima.</Eyebrow>

        <h2 className="font-sans font-bold tracking-tight text-ink text-[32px] md:text-[40px] lg:text-[46px] leading-tight">
          Compensado Antiderrapante
        </h2>

        <p className="font-sans font-normal text-body text-[15px] md:text-[16px] leading-relaxed text-slate-600 mb-2">
          Desenvolvido para coberturas e plataformas que exigem máxima segurança, estabilidade e aderência, mesmo quando molhadas. Com uma superfície texturizada de alta resistência, o Compensado Antiderrapante previne acidentes, suporta cargas pesadas e garante a integridade da operação em ambientes industriais e de logística.
        </p>

        {/* Indicado para */}
        <div className="flex flex-col gap-2 w-full">
          <h3 className="font-sans font-bold text-[16px] text-secondary-500">
            Indicado para:
          </h3>
          <p className="font-sans font-normal text-[15px] md:text-[16px] leading-relaxed text-slate-600">
            Pisos de caminhões, carretas, containers e vagões; plataformas de trabalho, andaimes e passarelas operacionais; arquibancadas, palcos e estruturas para eventos de grande porte.
          </p>
        </div>

        {/* Vantagens */}
        <div className="flex flex-col gap-3 w-full">
          <h3 className="font-sans font-bold text-[16px] text-secondary-500 mt-2">
            Vantagens:
          </h3>
          <div className="flex flex-col gap-3 w-full">
            {advantages.map((point) => (
              <ChecklistItem key={point}>{point}</ChecklistItem>
            ))}
          </div>
        </div>

        <Button href="/contato" variant="primary" className="mt-4 group cursor-pointer">
          <span>Solicitar orçamento</span>
          <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Button>
      </motion.div>

      {/* Coluna Direita — Mídia */}
      <motion.div
        className="w-full h-full min-h-[380px] md:min-h-[480px] overflow-hidden relative"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
      >
        <ImageCarousel
          images={[img1, img2, img3, img4]}
          alt="Compensado Antiderrapante"
        />
      </motion.div>
    </section>
  );
}

export default AntiderrapanteServiceDetail;
