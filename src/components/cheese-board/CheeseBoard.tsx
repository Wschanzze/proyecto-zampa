'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

/* ─────────────────────────────────────
   RECIPES & RECETAS DE QUESOS ZAMPA
   ───────────────────────────────────── */
const RECIPES: Record<
  string,
  { title: string; cheeseName: string; ingredients: string[]; tip: string; pairWith: string }
> = {
  'camembert-zampa': {
    title: 'Crostini de Camembert con Miel & Tomillo',
    cheeseName: 'Camembert de Oveja',
    ingredients: [
      'Miel pura de monte & tomillo fresco',
      'Baguette artesanal de masa madre',
      'Nueces mariposa tostadas',
    ],
    tip: 'Calentá a 160°C por 6 min hasta que el centro esté cremoso y fundente. Serví con miel tibia.',
    pairWith: 'Chardonnay o Espumante Brut',
  },
  'pecorino-zampa': {
    title: 'Lajas de Pecorino con Higos & Almendras',
    cheeseName: 'Pecorino Zampa 9-12 Meses',
    ingredients: [
      'Higos frescos en mitades o pasas',
      'Almendras doradas saladas',
      'Aceite de oliva virgen extra',
    ],
    tip: 'Cortalo en lajas irregulares con cuchillo punzón. Su maduración en cava destaca con frutos secos.',
    pairWith: 'Malbec Reserva o Barolo',
  },
  'brie-zampa': {
    title: 'Brie de Oveja con Higos & Aceto Balsámico',
    cheeseName: 'Brie de Oveja Zampa',
    ingredients: [
      'Higos maduros & rúcula silvestre',
      'Tostadas de masa madre crocantes',
      'Reducción de aceto balsámico',
    ],
    tip: 'Atemperar 30 min antes de servir para resaltar su textura aterciopelada y notas de manteca.',
    pairWith: 'Pinot Noir o Chardonnay con roble',
  },
  'manchego-zampa': {
    title: 'Manchego con Dulce de Membrillo',
    cheeseName: 'Manchego Artesanal Zampa',
    ingredients: [
      'Dulce de membrillo artesanal',
      'Almendras tostadas crocantes',
      'Crackers rústicas de semillas',
    ],
    tip: 'Cortalo en triángulos finos. El maridaje clásico dulce-salado entre Manchego y membrillo es inigualable.',
    pairWith: 'Tempranillo, Syrah o Vermut',
  },
  'provolone-zampa': {
    title: 'Provolone al Horno con Romero & Tomate',
    cheeseName: 'Provolone de Oveja Zampa',
    ingredients: [
      'Tomate concassé & orégano fresco',
      'Aceite de oliva virgen extra',
      'Tostadas de pan rústico',
    ],
    tip: 'Horneá en cazuela a 220°C durante 8 min hasta gratinar. Servir bien caliente.',
    pairWith: 'Sangiovese, Red Blend o Bonarda',
  },
  'ahumado-zampa': {
    title: 'Ahumado Zampa con Frutos Rojos',
    cheeseName: 'Queso Ahumado Zampa',
    ingredients: [
      'Confitura artesanal de frutos rojos',
      'Láminas finas de manzana verde',
      'Nueces de pecán caramelizadas',
    ],
    tip: 'El ahumado natural con maderas selectas resalta con la acidez del fruto rojo y la manzana.',
    pairWith: 'Merlot, Cerveza Amber Ale o Whisky',
  },
};

/* ─────────────────────────────────────
   COLOR TOKENS (Paleta Rústica Elegante Zampa)
   ───────────────────────────────────── */
const T = {
  ink: '#2A2421',
  linen: '#F8F5EE',
  cardBg: '#FCFAF5',
  cardBack: '#1E1915',
  border: '#DCD4C5',
  sage: '#6B7A59',
  gold: '#C9A84C',
  goldLight: '#E5CD82',
  muted: '#766D65',
};

/* ─────────────────────────────────────
   REVEAL ANIMATION
   ───────────────────────────────────── */
function Reveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'none';
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: direction === 'up' ? 32 : 0,
        x: direction === 'left' ? -28 : direction === 'right' ? 28 : 0,
      }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────
   DECOR LINE
   ───────────────────────────────────── */
function DecorLine({ delay = 0 }: { delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="flex items-center justify-center gap-3 w-full">
      {[{ origin: 'right' }, { origin: 'left' }].map(({ origin }, i) => (
        <motion.div
          key={i}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.9, delay, ease: 'easeOut' }}
          style={{ transformOrigin: origin, background: T.gold }}
          className="h-px w-24 opacity-40"
        />
      ))}
    </div>
  );
}

/* ─────────────────────────────────────
   ROSEMARY DECORATION
   ───────────────────────────────────── */
function Rosemary({
  className = '',
  rotate = 0,
  delay = 0,
  size = 90,
}: {
  className?: string;
  rotate?: number;
  delay?: number;
  size?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      className={`absolute pointer-events-none select-none ${className}`}
      style={{ mixBlendMode: 'multiply' }}
    >
      <motion.div
        animate={{ rotate: [rotate - 5, rotate + 5, rotate - 5] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay }}
      >
        <Image
          src="/images/rosemary.png"
          alt=""
          width={size}
          height={size}
          className="object-contain"
        />
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────
   CLICK INVITATION BADGE - UBICADO DENTRO DE LA TARJETA
   ───────────────────────────────────── */
function ClickBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="absolute top-3.5 right-3.5 z-10 flex items-center gap-1.5 rounded-full px-3 py-1.5 shadow-lg bg-stone-900 border border-[#C9A84C]"
    >
      <motion.span
        animate={{ rotate: [0, 15, -15, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1.5 }}
        style={{ display: 'inline-block', fontSize: '0.65rem', color: T.gold }}
        aria-hidden
      >
        ✦
      </motion.span>
      <span
        className="text-white uppercase tracking-widest font-semibold"
        style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '0.62rem', letterSpacing: '0.18em' }}
      >
        Receta Zampa
      </span>
    </motion.div>
  );
}

/* ─────────────────────────────────────
   PREMIUM FLIP CARD (3D) - ANIMACIÓN MÁS SUTIL
   ───────────────────────────────────── */
function FlipCard({
  recipeKey,
  src,
  alt,
  imgSize = 260,
  delay = 0,
  duration = 5,
  rotateFrom = -1,
  rotateTo = 1,
}: {
  recipeKey: string;
  src: string;
  alt: string;
  imgSize?: number;
  delay?: number;
  duration?: number;
  rotateFrom?: number;
  rotateTo?: number;
}) {
  const [flipped, setFlipped] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const recipe = RECIPES[recipeKey] || {
    title: alt,
    cheeseName: 'Quesos Zampa',
    ingredients: [],
    tip: '',
    pairWith: '',
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay }}
      className="relative w-full h-full"
      style={{ perspective: 1200 }}
    >
      {/* Movimiento flotante más sutil (y reducido a 3px de amplitud, rotación muy suave) */}
      <motion.div
        animate={
          !flipped
            ? { y: [0, -3, 0], rotate: [rotateFrom, rotateTo, rotateFrom] }
            : { y: 0, rotate: 0 }
        }
        transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }}
        className="w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <motion.div
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full h-full"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* ── FRONT SIDE (QUITADO EL OVERFLOW-HIDDEN PARA NO CORTAR COMPONENTES) ── */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-between cursor-pointer group rounded-2xl p-4 bg-white/60 border border-[#EBE4D5] shadow-md hover:shadow-xl transition-all"
            style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
            onClick={() => setFlipped(true)}
            role="button"
            tabIndex={0}
            aria-label={`Ver receta para ${alt}`}
            onKeyDown={(e) => e.key === 'Enter' && setFlipped(true)}
          >
            <ClickBadge />

            {/* Product Image Enlarged */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative flex-1 flex items-center justify-center w-full pt-3 pb-1"
            >
              <Image
                src={src}
                alt={alt}
                width={imgSize}
                height={imgSize}
                className="object-contain drop-shadow-xl max-h-[240px] w-auto"
              />
            </motion.div>

            {/* Click hint */}
            <div className="pt-1 pb-1 flex justify-center shrink-0">
              <motion.div
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F3ECE0]"
              >
                <span
                  className="uppercase tracking-widest font-semibold text-[#5A4F41]"
                  style={{
                    fontFamily: 'var(--font-cormorant), serif',
                    fontSize: '0.72rem',
                    letterSpacing: '0.2em',
                  }}
                >
                  Toca para ver receta
                </span>
                <svg width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden>
                  <path
                    d="M6 2v8M3 7l3 3 3-3"
                    stroke={T.gold}
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
            </div>
          </div>

          {/* ── BACK SIDE (RECIPE CARD — ALTA LEGIBILIDAD & DISEÑO REFINADO) ── */}
          <div
            className="absolute inset-0 flex flex-col cursor-pointer rounded-2xl overflow-hidden shadow-2xl border border-[#C9A84C]/50"
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
              background: '#16120E',
            }}
            onClick={() => setFlipped(false)}
            role="button"
            tabIndex={flipped ? 0 : -1}
            aria-label="Cerrar receta"
            onKeyDown={(e) => e.key === 'Enter' && setFlipped(false)}
          >
            {/* Gold Stripe Header */}
            <div className="h-1.5 w-full shrink-0 bg-gradient-to-r from-[#C9A84C] via-[#E5CD82] to-[#C9A84C]" />

            {/* Card Header */}
            <div className="px-5 pt-4 pb-2.5 border-b border-[#2C241D] shrink-0">
              <span
                className="inline-block uppercase tracking-widest text-[11px] font-bold text-[#E5CD82] mb-1"
                style={{ fontFamily: 'var(--font-cormorant), serif', letterSpacing: '0.2em' }}
              >
                {recipe.cheeseName}
              </span>
              <h3
                className="text-lg md:text-xl font-bold text-white leading-snug tracking-wide"
                style={{ fontFamily: 'var(--font-cormorant), serif' }}
              >
                {recipe.title}
              </h3>
            </div>

            {/* Ingredients List */}
            <div className="px-5 py-3 flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-1.5 mb-2">
                <span className="text-[#C9A84C] text-xs">◆</span>
                <p
                  className="uppercase tracking-widest font-bold text-[11px] text-[#DFC070]"
                  style={{ fontFamily: 'var(--font-cormorant), serif', letterSpacing: '0.18em' }}
                >
                  Ingredientes Sugeridos
                </p>
              </div>
              <ul className="flex flex-col gap-1.5">
                {recipe.ingredients.map((ing) => (
                  <li key={ing} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0 bg-[#C9A84C]" aria-hidden />
                    <span
                      className="leading-snug font-medium text-[0.92rem] text-[#FAF7F2]"
                      style={{ fontFamily: 'var(--font-cormorant), serif' }}
                    >
                      {ing}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Chef Tip */}
            {recipe.tip && (
              <div className="mx-4 mb-2.5 px-3.5 py-2 rounded-xl bg-[#221B15] border border-[#C9A84C]/25 shrink-0">
                <p
                  className="uppercase tracking-widest font-bold text-[10px] text-[#C9A84C] mb-0.5 flex items-center gap-1"
                  style={{ fontFamily: 'var(--font-cormorant), serif', letterSpacing: '0.16em' }}
                >
                  <span>💡</span> Consejos del Maestro Quesero
                </p>
                <p
                  className="italic leading-snug text-[#E0D8CC] text-[0.88rem]"
                  style={{ fontFamily: 'var(--font-cormorant), serif' }}
                >
                  "{recipe.tip}"
                </p>
              </div>
            )}

            {/* Pairing */}
            {recipe.pairWith && (
              <div className="px-5 pb-2.5 flex items-center gap-2 shrink-0">
                <span
                  className="uppercase tracking-widest font-bold text-[10px] text-[#94B075] shrink-0"
                  style={{ fontFamily: 'var(--font-cormorant), serif', letterSpacing: '0.16em' }}
                >
                  🍷 Marida con:
                </span>
                <span
                  className="italic text-[#FAF7F2] font-semibold text-[0.88rem] truncate"
                  style={{ fontFamily: 'var(--font-cormorant), serif' }}
                >
                  {recipe.pairWith}
                </span>
              </div>
            )}

            {/* Bottom hint */}
            <div className="h-px w-full shrink-0 bg-[#2C241D]" />
            <div className="py-2 text-center bg-[#110E0B] shrink-0 flex items-center justify-center gap-1.5">
              <span className="text-[#C9A84C] text-[10px]">↩</span>
              <span
                className="uppercase tracking-widest text-[#B5ABA0] font-semibold text-[10px]"
                style={{ fontFamily: 'var(--font-cormorant), serif', letterSpacing: '0.2em' }}
              >
                Toca para volver
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────
   ITEM LABEL
   ───────────────────────────────────── */
function ItemLabel({
  title,
  subtitle,
  align = 'left',
  delay = 0,
}: {
  title: string;
  subtitle?: string;
  align?: 'left' | 'right';
  delay?: number;
}) {
  return (
    <Reveal delay={delay} direction={align === 'left' ? 'left' : 'right'}>
      <div className={`flex flex-col gap-1 ${align === 'right' ? 'items-end text-right' : 'items-start text-left'}`}>
        <h2
          className="font-bold uppercase whitespace-pre-line leading-tight tracking-widest"
          style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontSize: 'clamp(0.9rem, 2.2vw, 1.1rem)',
            color: T.ink,
          }}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className="italic leading-snug whitespace-pre-line"
            style={{
              fontFamily: 'var(--font-cormorant), serif',
              fontSize: 'clamp(0.92rem, 2.1vw, 1.05rem)',
              color: T.muted,
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </Reveal>
  );
}

/* ─────────────────────────────────────
   BOARD ITEM GRID CELL
   ───────────────────────────────────── */
function BoardItem({
  recipeKey,
  src,
  alt,
  imgSize = 260,
  title,
  subtitle,
  labelSide = 'left',
  delay = 0,
  duration,
  rotateFrom,
  rotateTo,
  rosemaryPos,
  rosemaryRotate,
}: {
  recipeKey: string;
  src: string;
  alt: string;
  imgSize?: number;
  title: string;
  subtitle?: string;
  labelSide?: 'left' | 'right';
  delay?: number;
  duration?: number;
  rotateFrom?: number;
  rotateTo?: number;
  rosemaryPos?: string;
  rosemaryRotate?: number;
}) {
  return (
    <div className="relative flex flex-col items-center">
      <div className="relative w-full" style={{ height: 425 }}>
        <FlipCard
          recipeKey={recipeKey}
          src={src}
          alt={alt}
          imgSize={imgSize}
          delay={delay}
          duration={duration}
          rotateFrom={rotateFrom}
          rotateTo={rotateTo}
        />
        {rosemaryPos && (
          <Rosemary
            className={rosemaryPos}
            rotate={rosemaryRotate ?? 0}
            delay={delay + 0.3}
            size={85}
          />
        )}
      </div>

      <div className="w-full pt-4 pb-2 px-1">
        <ItemLabel
          title={title}
          subtitle={subtitle}
          align={labelSide}
          delay={delay + 0.15}
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────
   SECTION DIVIDER
   ───────────────────────────────────── */
function SectionDivider({ label }: { label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  return (
    <div ref={ref} className="col-span-1 sm:col-span-2 flex items-center gap-4 py-4 my-2">
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        style={{ transformOrigin: 'left', background: T.border }}
        className="h-px flex-1"
      />
      <motion.span
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="uppercase tracking-widest shrink-0 font-bold"
        style={{
          fontFamily: 'var(--font-cormorant), serif',
          fontSize: '0.85rem',
          letterSpacing: '0.28em',
          color: T.gold,
        }}
      >
        {label}
      </motion.span>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        style={{ transformOrigin: 'right', background: T.border }}
        className="h-px flex-1"
      />
    </div>
  );
}

/* ─────────────────────────────────────
   MAIN CHEESE BOARD COMPONENT (CON MODAL KIT INSTAGRAM & QR)
   ───────────────────────────────────── */
export default function CheeseBoard() {
  const [showQrModal, setShowQrModal] = useState(false);
  const [copiedToast, setCopiedToast] = useState(false);

  const shareUrl = 'https://quesoszampa.com/tabla-de-quesos';
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(shareUrl)}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopiedToast(true);
    setTimeout(() => setCopiedToast(false), 3000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Tabla de Quesos Zampa',
          text: 'Descubrí la experiencia interactiva y recetas de la Tabla de Quesos de Oveja Zampa.',
          url: shareUrl,
        });
      } catch (err) {
        handleCopyLink();
      }
    } else {
      handleCopyLink();
    }
  };

  return (
    <main
      className="min-h-screen w-full flex flex-col items-center overflow-x-hidden relative"
      style={{ background: T.linen }}
    >
      {/* ══ HERO HEADER (Ajustado para integrarse bajo el Header oficial) ══ */}
      <header className="w-full max-w-5xl px-6 md:px-12 pt-28 md:pt-36 pb-8 flex flex-col items-center text-center">
        <Reveal delay={0}>
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#EFE9DB] border border-[#DDD3BF] shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse" />
            <span
              className="uppercase tracking-widest text-xs text-[#4A3F35] font-bold"
              style={{ fontFamily: 'var(--font-cormorant), serif', letterSpacing: '0.22em' }}
            >
              Edición Promociones & Eventos
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p
            className="uppercase text-center mb-2 font-medium"
            style={{
              fontFamily: 'var(--font-cormorant), serif',
              fontSize: '0.82rem',
              letterSpacing: '0.34em',
              color: T.muted,
            }}
          >
            Cómo armar la degustación perfecta con
          </p>
        </Reveal>

        <DecorLine delay={0.15} />

        <Reveal delay={0.3} direction="none">
          <h1
            className="text-center mt-4 select-none"
            style={{
              fontFamily: 'var(--font-great-vibes), cursive',
              fontSize: 'clamp(3.8rem, 12vw, 7.5rem)',
              color: T.ink,
              lineHeight: 0.95,
            }}
          >
            Tabla de Quesos
            <br />
            Zampa
          </h1>
        </Reveal>

        <Reveal delay={0.45} direction="none">
          <p
            className="max-w-xl text-center mt-4 font-serif italic text-stone-600 text-base md:text-xl leading-relaxed"
            style={{ fontFamily: 'var(--font-cormorant), serif' }}
          >
            Una selección artesanal elaborada 100% con leche de oveja frisona de nuestras pasturas de Tandil. Toca cada tarjeta para descubrir sus maridajes, secretos y recetas sugeridas.
          </p>
        </Reveal>

        <Reveal delay={0.55} direction="none">
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="flex items-center gap-3 rounded-full px-6 py-3 shadow-md"
              style={{
                background: T.cardBack,
                border: `1px solid ${T.gold}`,
              }}
            >
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                style={{ width: 7, height: 7, borderRadius: '50%', background: T.gold, display: 'block', flexShrink: 0 }}
                aria-hidden
              />
              <span
                className="text-white uppercase tracking-widest font-semibold"
                style={{
                  fontFamily: 'var(--font-cormorant), serif',
                  fontSize: '0.74rem',
                  letterSpacing: '0.22em',
                }}
              >
                Toca cada queso para revelar su receta y maridaje
              </span>
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 0.9 }}
                style={{ width: 7, height: 7, borderRadius: '50%', background: T.gold, display: 'block', flexShrink: 0 }}
                aria-hidden
              />
            </motion.div>

            <button
              onClick={() => setShowQrModal(true)}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#C9A84C] text-[#1E1915] font-serif uppercase tracking-widest font-bold text-xs shadow-md hover:bg-[#E5CD82] transition-all transform hover:scale-105"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
              <span>KIT INSTAGRAM & QR</span>
            </button>
          </div>
        </Reveal>
      </header>

      {/* ══ BOARD GRID ══ */}
      <section className="w-full max-w-5xl px-6 md:px-12 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">

          <SectionDivider label="Nuestros Quesos de Oveja Zampa" />

          {/* 1. Camembert Zampa */}
          <BoardItem
            recipeKey="camembert-zampa"
            src="/assets/Quesos Zampa/productos/producto_Camembert.png"
            alt="Camembert de Oveja Zampa"
            imgSize={260}
            title={"Camembert\nde Oveja Zampa"}
            subtitle={"Vedette de la Casa — Pasta blanda\n100% Leche Pasteurizada A2 de Oveja Frisona"}
            delay={0.05}
            duration={4.5}
            rotateFrom={-0.6}
            rotateTo={0.6}
            rosemaryPos="-bottom-3 -left-3"
            rosemaryRotate={30}
          />

          {/* 2. Pecorino Zampa */}
          <BoardItem
            recipeKey="pecorino-zampa"
            src="/assets/Quesos Zampa/productos/producto_pecorino.png"
            alt="Queso Pecorino Zampa"
            imgSize={250}
            title={"Queso Pecorino\nZampa"}
            subtitle={"Orgullo en Cava — Pasta dura\nMadurado de 9 a 12 Meses en Cava"}
            labelSide="right"
            delay={0.15}
            duration={5}
            rotateFrom={0.4}
            rotateTo={-0.4}
            rosemaryPos="-bottom-3 -right-3"
            rosemaryRotate={-20}
          />

          {/* 3. Brie Zampa */}
          <BoardItem
            recipeKey="brie-zampa"
            src="/assets/Quesos Zampa/productos/producto_brie.png"
            alt="Brie de Oveja Zampa"
            imgSize={250}
            title={"Brie de Oveja\nZampa"}
            subtitle={"Estilo Francés de Autor\nExtrema cremosidad y manteca de campo"}
            delay={0.1}
            duration={4.8}
            rotateFrom={-0.5}
            rotateTo={0.5}
            rosemaryPos="-bottom-3 -left-3"
            rosemaryRotate={15}
          />

          {/* 4. Manchego Zampa */}
          <BoardItem
            recipeKey="manchego-zampa"
            src="/assets/Quesos Zampa/productos/producto_machego.png"
            alt="Manchego Artesanal Zampa"
            imgSize={250}
            title={"Manchego Artesanal\nZampa"}
            subtitle={"Tradición Ibérica — Pasta semidura\nMadurado 6 a 9 Meses en Cava"}
            labelSide="right"
            delay={0.2}
            duration={4.6}
            rotateFrom={-0.4}
            rotateTo={0.6}
            rosemaryPos="-bottom-3 -right-3"
            rosemaryRotate={-12}
          />

          {/* 5. Provolone Zampa */}
          <BoardItem
            recipeKey="provolone-zampa"
            src="/assets/Quesos Zampa/productos/producto_provolone.png"
            alt="Provolone de Oveja Zampa"
            imgSize={245}
            title={"Provolone de Oveja\nZampa"}
            subtitle={"Pasta Hilada Ovina — Textura elástica\ny rico sabor mediterráneo"}
            delay={0.12}
            duration={4.7}
            rotateFrom={-0.5}
            rotateTo={0.4}
            rosemaryPos="-bottom-3 -left-3"
            rosemaryRotate={-18}
          />

          {/* 6. Ahumado Zampa */}
          <BoardItem
            recipeKey="ahumado-zampa"
            src="/assets/Quesos Zampa/productos/producto_ahumado.png"
            alt="Queso Ahumado Zampa"
            imgSize={245}
            title={"Queso Ahumado\nZampa"}
            subtitle={"Ahumado Natural de Autor\nCorteza caramelo con maderas aromáticas"}
            labelSide="right"
            delay={0.22}
            duration={5.1}
            rotateFrom={0.4}
            rotateTo={-0.5}
            rosemaryPos="-bottom-3 -right-3"
            rosemaryRotate={22}
          />

        </div>
      </section>

      {/* ══ CALL TO ACTION PARA EVENTOS & PROMOS ══ */}
      <section className="w-full max-w-4xl px-6 mb-16">
        <div className="rounded-3xl bg-[#2A2421] text-[#F8F5EE] p-8 md:p-12 text-center relative overflow-hidden shadow-xl border border-[#C9A84C]/30">
          <div className="absolute -right-12 -top-12 w-48 h-48 bg-[#C9A84C]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-12 -bottom-12 w-48 h-48 bg-[#6B7A59]/20 rounded-full blur-3xl pointer-events-none" />

          <span
            className="uppercase tracking-widest text-xs text-[#C9A84C] font-semibold mb-2 block"
            style={{ fontFamily: 'var(--font-cormorant), serif', letterSpacing: '0.25em' }}
          >
            Llevá la experiencia a tu evento
          </span>
          <h2
            className="text-3xl md:text-5xl font-serif mb-4 font-normal"
            style={{ fontFamily: 'var(--font-cormorant), serif' }}
          >
            ¿Querés esta tabla de quesos en tu evento o degustación?
          </h2>
          <p
            className="text-stone-300 font-serif italic max-w-xl mx-auto mb-8 text-base md:text-lg"
            style={{ fontFamily: 'var(--font-cormorant), serif' }}
          >
            Armamos tablas personalizadas, hormas enteras para picadas exclusivas y envíos para gastronomía y eventos especiales en Tandil y todo el país.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setShowQrModal(true)}
              className="px-8 py-3.5 rounded-full font-serif text-sm tracking-widest uppercase bg-[#C9A84C] text-[#1E1915] font-bold hover:bg-[#E5CD82] transition-colors shadow-lg flex items-center gap-2"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
              <span>Ver QR & Kit de Redes</span>
            </button>
            <Link
              href="/contacto"
              className="px-8 py-3.5 rounded-full font-serif text-sm tracking-widest uppercase border border-[#C9A84C] text-[#F8F5EE] font-semibold hover:bg-white/10 transition-colors"
            >
              Consultar por Eventos
            </Link>
          </div>
        </div>
      </section>

      {/* ══ MODAL KIT INSTAGRAM & CÓDIGO QR (CON LOGO OFICIAL ZAMPA) ══ */}
      <AnimatePresence>
        {showQrModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
            onClick={() => setShowQrModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-md bg-[#1E1915] text-[#F8F5EE] rounded-3xl p-6 md:p-8 shadow-2xl border border-[#C9A84C]/40 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowQrModal(false)}
                className="absolute top-4 right-4 text-stone-400 hover:text-white p-2 rounded-full bg-stone-800/60 transition-colors z-10"
                aria-label="Cerrar modal"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <div className="flex flex-col items-center text-center">
                {/* Official Brand Logo */}
                <div className="relative w-36 h-14 mb-3">
                  <Image
                    src="/assets/Quesos Zampa/logo blanco.png"
                    alt="Quesos Zampa Logo"
                    fill
                    className="object-contain"
                  />
                </div>

                <span
                  className="uppercase tracking-widest text-xs text-[#C9A84C] font-semibold mb-1"
                  style={{ fontFamily: 'var(--font-cormorant), serif', letterSpacing: '0.24em' }}
                >
                  Experiencia Interactiva
                </span>
                <h3
                  className="text-2xl md:text-3xl font-serif mb-2 text-white"
                  style={{ fontFamily: 'var(--font-cormorant), serif' }}
                >
                  Kit Eventos & Instagram
                </h3>
                <p
                  className="text-stone-300 font-serif italic text-sm mb-6 max-w-xs"
                  style={{ fontFamily: 'var(--font-cormorant), serif' }}
                >
                  Escaneá este código en degustaciones presenciales o compartí el enlace directo en tus Historias de Instagram.
                </p>

                {/* QR Code Container */}
                <div className="relative p-4 bg-white rounded-2xl shadow-xl mb-6 flex items-center justify-center border-4 border-[#C9A84C]/30">
                  <img
                    src={qrCodeUrl}
                    alt="Código QR Tabla de Quesos Zampa"
                    width={200}
                    height={200}
                    className="object-contain rounded-lg"
                  />
                </div>

                <p
                  className="text-xs text-[#C9A84C] tracking-widest uppercase mb-6 font-mono bg-stone-900/80 px-3 py-1.5 rounded-full border border-stone-800"
                >
                  quesoszampa.com/tabla-de-quesos
                </p>

                {/* Actions */}
                <div className="flex flex-col w-full gap-2.5">
                  <button
                    onClick={handleShare}
                    className="w-full py-3 rounded-full font-serif text-xs tracking-widest uppercase bg-[#C9A84C] text-[#1E1915] font-bold hover:bg-[#E5CD82] transition-colors flex items-center justify-center gap-2 shadow-md"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                      <polyline points="16 6 12 2 8 6"></polyline>
                      <line x1="12" y1="2" x2="12" y2="15"></line>
                    </svg>
                    <span>Compartir Enlace / Instagram</span>
                  </button>

                  <a
                    href={qrCodeUrl}
                    download="QR-Tabla-Quesos-Zampa.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-full font-serif text-xs tracking-widest uppercase border border-stone-700 text-stone-200 font-semibold hover:bg-stone-800 transition-colors flex items-center justify-center gap-2"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    <span>Descargar Imagen QR</span>
                  </a>
                </div>

                {/* Toast Notification */}
                {copiedToast && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-3 px-4 py-2 rounded-full bg-[#6B7A59] text-white text-xs font-serif tracking-widest uppercase shadow-lg"
                  >
                    ✓ ¡Enlace copiado al portapapeles!
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
