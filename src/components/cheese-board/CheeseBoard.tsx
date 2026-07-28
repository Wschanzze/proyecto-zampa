'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
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
    cheeseName: 'Camembert de Oveja Zampa',
    ingredients: [
      'Camembert de Oveja Zampa (100% Leche A2)',
      'Baguette artesanal cortada en finas rodajas',
      'Miel pura de monte',
      'Ramitas de tomillo fresco',
      'Nueces mariposa tostadas',
    ],
    tip: 'Calienta la rueda de Camembert Zampa a 160°C durante 6 a 8 min hasta que el centro se vuelva cremoso y fundente. Rocía miel tibia y ramitas de tomillo.',
    pairWith: 'Vino Blanco Chardonnay o Espumante Brut',
  },
  'pecorino-zampa': {
    title: 'Tabla Rústica de Pecorino en Cava',
    cheeseName: 'Queso Pecorino Zampa',
    ingredients: [
      'Pecorino Zampa madurado 9-12 meses',
      'Higos frescos en mitades o pasas',
      'Almendras doradas saladas',
      'Escamas de sal marina',
      'Aceite de oliva virgen extra',
    ],
    tip: 'Corta el Pecorino Zampa en lajas o trozos irregulares con cuchillo punzón. Su intensa maduración en cava combina de maravilla con frutos secos y sal marina.',
    pairWith: 'Malbec Reserva, Cabernet Sauvignon o Barolo',
  },
  'brie-zampa': {
    title: 'Tostada de Brie Zampa con Higos & Balsámico',
    cheeseName: 'Brie de Oveja Zampa',
    ingredients: [
      'Brie de Oveja Zampa',
      'Higos frescos maduros en cuartos',
      'Tostadas crujientes de masa madre',
      'Reducción de aceto balsámico',
      'Hojas de rúcula silvestre',
    ],
    tip: 'Atempera el Brie de Oveja Zampa fuera de la heladera unos 30 min antes de servir para resaltar su textura aterciopelada y notas de manteca de campo.',
    pairWith: 'Pinot Noir o Chardonnay con roble',
  },
  'manchego-zampa': {
    title: 'Lascas de Manchego Zampa & Membrillo',
    cheeseName: 'Manchego Artesanal Zampa',
    ingredients: [
      'Manchego Artesanal Zampa',
      'Dulce de membrillo artesanal',
      'Almendras tostadas',
      'Crackers de semillas crujientes',
      'Albaricoques o damascos secos',
    ],
    tip: 'Corta el Manchego Zampa en triángulos finos. El maridaje clásico dulce-salado entre el Manchego ovino y el membrillo crea un contraste inigualable.',
    pairWith: 'Tempranillo, Syrah o Vermut de Autor',
  },
  'provolone-zampa': {
    title: 'Provolone Zampa al Horno con Romero',
    cheeseName: 'Provolone de Oveja Zampa',
    ingredients: [
      'Provolone de Oveja Zampa',
      'Tomate concassé y orégano fresco',
      'Aceite de oliva extra virgen',
      'Hojas de romero fresco picado',
      'Pimienta negra recién molida',
    ],
    tip: 'Hornea una rodaja gruesa de Provolone Zampa en cazuela de barro a 220°C durante 8 min hasta gratinar. Servir bien caliente con pan de masa madre.',
    pairWith: 'Sangiovese, Red Blend o Bonarda',
  },
  'ahumado-zampa': {
    title: 'Ahumado Zampa & Frutos Rojos',
    cheeseName: 'Queso Ahumado Zampa',
    ingredients: [
      'Queso Ahumado Zampa de autor',
      'Confitura artesanal de frutos rojos',
      'Nueces de pecán caramelizadas',
      'Láminas finas de manzana verde',
    ],
    tip: 'El ahumado natural con maderas aromáticas selectas resalta maravillosamente con el toque ácido de frutos rojos y la crocantez de la manzana verde.',
    pairWith: 'Merlot, Cerveza Amber Ale o Whisky',
  },
  fruit: {
    title: 'Frutas Frescas de Estación',
    cheeseName: 'Maridaje Dulce y Fresco',
    ingredients: [
      'Higos negros maduros',
      'Uvas de mesa sin semilla',
      'Peras de agua finamente laminadas',
      'Frambuesas y moras frescas',
    ],
    tip: 'Las frutas aportan frescura e hidratación al paladar entre bocado y bocado de queso ovino.',
    pairWith: 'Vinos espumantes y sidras artesanales',
  },
  honey: {
    title: 'Miel Pura de Monte & Confituras',
    cheeseName: 'Dulzor Artesanal',
    ingredients: [
      'Miel pura de flora nativa',
      'Ramita de tomillo infusionada',
      'Ralladura de limón sutil',
      'Escamas de flor de sal',
    ],
    tip: 'Vierte la miel tibia sobre quesos de pasta blanda como el Brie o Camembert Zampa para potenciar su cremosidad.',
    pairWith: 'Toda la línea de quesos Zampa',
  },
  nuts: {
    title: 'Frutos Secos & Semillas Tostadas',
    cheeseName: 'Textura Crujiente',
    ingredients: [
      'Nueces mariposa seleccionadas',
      'Almendras tostadas al horno',
      'Pecan especiado con romero',
      'Pizca de sal marina',
    ],
    tip: 'Aportan una textura crujiente imprescindible y potencian los matices a fruto seco naturales de la leche de oveja.',
    pairWith: 'Vinos de guarda y aperitivos',
  },
  garnish: {
    title: 'Romero & Hierbas de Huerta',
    cheeseName: 'Toque Botánico',
    ingredients: [
      'Ramitas de romero fresco',
      'Tomillo de huerta',
      'Pétalos y lavanda comestible',
    ],
    tip: 'El romero perfuma la tabla y sus ramitas leñosas funcionan como delicados aplicadores de miel.',
    pairWith: 'Toda la experiencia sensorial Zampa',
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
   CLICK INVITATION BADGE
   ───────────────────────────────────── */
function ClickBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="absolute -top-3 -right-2 z-10 flex items-center gap-1.5 rounded-full px-3 py-1.5 shadow-lg"
      style={{
        background: T.cardBack,
        border: `1px solid ${T.gold}`,
      }}
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
   PREMIUM FLIP CARD (3D)
   ───────────────────────────────────── */
function FlipCard({
  recipeKey,
  src,
  alt,
  imgSize = 200,
  delay = 0,
  duration = 4.5,
  rotateFrom = -2,
  rotateTo = 2,
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
      initial={{ opacity: 0, y: 24, scale: 0.94 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay }}
      className="relative w-full h-full"
      style={{ perspective: 1200 }}
    >
      <motion.div
        animate={
          !flipped
            ? { y: [0, -8, 0], rotate: [rotateFrom, rotateTo, rotateFrom] }
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
          {/* ── FRONT SIDE ── */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer group rounded-2xl p-4 bg-white/40 border border-[#EBE4D5] shadow-sm hover:shadow-md transition-shadow"
            style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
            onClick={() => setFlipped(true)}
            role="button"
            tabIndex={0}
            aria-label={`Ver receta para ${alt}`}
            onKeyDown={(e) => e.key === 'Enter' && setFlipped(true)}
          >
            <ClickBadge />

            {/* Product Image */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.3 }}
              className="relative flex items-center justify-center my-auto"
            >
              <Image
                src={src}
                alt={alt}
                width={imgSize}
                height={imgSize}
                className="object-contain drop-shadow-md"
              />
            </motion.div>

            {/* Click hint */}
            <div className="mt-auto pt-2 flex justify-center">
              <motion.div
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                className="flex items-center gap-1.5"
              >
                <span
                  className="uppercase tracking-widest font-medium"
                  style={{
                    fontFamily: 'var(--font-cormorant), serif',
                    fontSize: '0.62rem',
                    letterSpacing: '0.2em',
                    color: T.muted,
                  }}
                >
                  Toca para ver receta
                </span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                  <path
                    d="M6 2v8M3 7l3 3 3-3"
                    stroke={T.gold}
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
            </div>
          </div>

          {/* ── BACK SIDE (RECIPE CARD) ── */}
          <div
            className="absolute inset-0 flex flex-col cursor-pointer rounded-2xl overflow-hidden shadow-2xl"
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
              background: T.cardBack,
            }}
            onClick={() => setFlipped(false)}
            role="button"
            tabIndex={flipped ? 0 : -1}
            aria-label="Cerrar receta"
            onKeyDown={(e) => e.key === 'Enter' && setFlipped(false)}
          >
            {/* Gold Stripe */}
            <div className="h-1 w-full shrink-0" style={{ background: T.gold }} />

            {/* Card Header */}
            <div className="px-5 pt-4 pb-3 border-b border-stone-800">
              <p
                className="uppercase tracking-widest mb-1 font-semibold"
                style={{
                  fontFamily: 'var(--font-cormorant), serif',
                  fontSize: '0.58rem',
                  letterSpacing: '0.22em',
                  color: T.gold,
                }}
              >
                {recipe.cheeseName}
              </p>
              <h3
                className="leading-tight"
                style={{
                  fontFamily: 'var(--font-great-vibes), cursive',
                  fontSize: 'clamp(1.35rem, 2.5vw, 1.65rem)',
                  color: '#F4EFE6',
                  lineHeight: 1.1,
                }}
              >
                {recipe.title}
              </h3>
            </div>

            {/* Ingredients List */}
            <div className="px-5 py-3 flex-1 overflow-y-auto">
              <p
                className="uppercase tracking-widest mb-2 font-semibold"
                style={{
                  fontFamily: 'var(--font-cormorant), serif',
                  fontSize: '0.56rem',
                  letterSpacing: '0.2em',
                  color: T.goldLight,
                }}
              >
                Ingredientes Sugeridos
              </p>
              <ul className="flex flex-col gap-1">
                {recipe.ingredients.map((ing) => (
                  <li key={ing} className="flex items-start gap-2">
                    <span
                      className="mt-[6px] w-1 h-1 rounded-full shrink-0"
                      style={{ background: T.gold }}
                      aria-hidden
                    />
                    <span
                      className="leading-tight"
                      style={{
                        fontFamily: 'var(--font-cormorant), serif',
                        fontSize: '0.82rem',
                        color: '#D8D0C5',
                      }}
                    >
                      {ing}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Chef Tip */}
            {recipe.tip && (
              <div
                className="mx-4 mb-2 px-3 py-2 rounded-xl border border-stone-800"
                style={{ background: 'rgba(255,255,255,0.04)' }}
              >
                <p
                  className="uppercase tracking-widest mb-1 font-semibold"
                  style={{
                    fontFamily: 'var(--font-cormorant), serif',
                    fontSize: '0.54rem',
                    letterSpacing: '0.2em',
                    color: T.gold,
                  }}
                >
                  Consejo del Maestro Quesero
                </p>
                <p
                  className="italic leading-tight text-stone-300"
                  style={{
                    fontFamily: 'var(--font-cormorant), serif',
                    fontSize: '0.78rem',
                  }}
                >
                  "{recipe.tip}"
                </p>
              </div>
            )}

            {/* Pairing */}
            {recipe.pairWith && (
              <div className="px-5 pb-2 flex items-center gap-2">
                <span
                  className="uppercase tracking-widest font-semibold"
                  style={{
                    fontFamily: 'var(--font-cormorant), serif',
                    fontSize: '0.54rem',
                    letterSpacing: '0.18em',
                    color: T.sage,
                  }}
                >
                  Marida con:
                </span>
                <span
                  className="italic text-stone-300"
                  style={{
                    fontFamily: 'var(--font-cormorant), serif',
                    fontSize: '0.78rem',
                  }}
                >
                  {recipe.pairWith}
                </span>
              </div>
            )}

            {/* Bottom hint */}
            <div className="h-0.5 w-full shrink-0" style={{ background: T.gold }} />
            <p
              className="text-center py-1.5 uppercase tracking-widest text-stone-400"
              style={{
                fontFamily: 'var(--font-cormorant), serif',
                fontSize: '0.5rem',
                letterSpacing: '0.2em',
              }}
            >
              Toca para volver
            </p>
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
            fontSize: 'clamp(0.72rem, 1.6vw, 0.85rem)',
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
              fontSize: 'clamp(0.82rem, 1.7vw, 0.95rem)',
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
  imgSize,
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
      <div className="relative w-full" style={{ height: 280 }}>
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
            size={72}
          />
        )}
      </div>

      <div className="w-full pt-3 pb-2 px-1">
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
        className="uppercase tracking-widest shrink-0 font-semibold"
        style={{
          fontFamily: 'var(--font-cormorant), serif',
          fontSize: '0.7rem',
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
   MAIN CHEESE BOARD COMPONENT
   ───────────────────────────────────── */
export default function CheeseBoard() {
  return (
    <main
      className="min-h-screen w-full flex flex-col items-center overflow-x-hidden"
      style={{ background: T.linen }}
    >
      {/* ══ HEADER DISCRETO & NAVBAR DE EVENTOS ══ */}
      <nav className="w-full border-b border-[#E7DFCE] bg-[#F4EFE6]/80 backdrop-blur-md sticky top-0 z-40 px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/IMG_1960(1).png"
            alt="Quesos Zampa Logo"
            width={48}
            height={48}
            className="object-contain group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col">
            <span className="font-serif font-bold text-sm tracking-widest text-[#2A2421]">
              QUESOS ZAMPA
            </span>
            <span className="text-[10px] tracking-widest text-[#8C7A5B] font-light">
              TANDIL • BUENOS AIRES
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="/productos"
            className="hidden sm:inline-flex items-center px-4 py-1.5 rounded-full text-xs font-serif tracking-widest border border-[#C9A84C] text-[#2A2421] hover:bg-[#C9A84C] hover:text-white transition-colors"
          >
            VER PRODUCTOS
          </Link>
          <Link
            href="/contacto"
            className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-serif tracking-widest bg-[#2A2421] text-[#F8F5EE] hover:bg-[#C9A84C] transition-colors"
          >
            CONTACTO EVENTOS
          </Link>
        </div>
      </nav>

      {/* ══ HERO HEADER ══ */}
      <header className="w-full max-w-5xl px-6 md:px-12 pt-12 pb-8 flex flex-col items-center text-center">
        <Reveal delay={0}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFE9DB] border border-[#DDD3BF] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse" />
            <span
              className="uppercase tracking-widest text-xs text-[#5C5245] font-semibold"
              style={{ fontFamily: 'var(--font-cormorant), serif' }}
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
              fontSize: '0.75rem',
              letterSpacing: '0.32em',
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
            className="max-w-xl text-center mt-4 font-serif italic text-stone-600 text-base md:text-lg leading-relaxed"
            style={{ fontFamily: 'var(--font-cormorant), serif' }}
          >
            Una selección artesanal elaborada 100% con leche de oveja frisona de nuestras pasturas de Tandil. Toca cada tarjeta para descubrir sus maridajes, secretos y recetas sugeridas.
          </p>
        </Reveal>

        <Reveal delay={0.55} direction="none">
          <div className="mt-6 flex flex-col items-center gap-2">
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="flex items-center gap-3 rounded-full px-5 py-2.5 shadow-sm"
              style={{
                background: T.cardBack,
                border: `1px solid ${T.gold}`,
              }}
            >
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                style={{ width: 6, height: 6, borderRadius: '50%', background: T.gold, display: 'block', flexShrink: 0 }}
                aria-hidden
              />
              <span
                className="text-white uppercase tracking-widest font-medium"
                style={{
                  fontFamily: 'var(--font-cormorant), serif',
                  fontSize: '0.68rem',
                  letterSpacing: '0.22em',
                }}
              >
                Toca cada queso para revelar su receta y maridaje
              </span>
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 0.9 }}
                style={{ width: 6, height: 6, borderRadius: '50%', background: T.gold, display: 'block', flexShrink: 0 }}
                aria-hidden
              />
            </motion.div>
          </div>
        </Reveal>
      </header>

      {/* ══ BOARD GRID ══ */}
      <section className="w-full max-w-5xl px-6 md:px-12 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">

          <SectionDivider label="Nuestros Quesos de Oveja Zampa" />

          {/* 1. Camembert Zampa */}
          <BoardItem
            recipeKey="camembert-zampa"
            src="/assets/Quesos Zampa/productos/producto_Camembert.png"
            alt="Camembert de Oveja Zampa"
            imgSize={210}
            title={"Camembert\nde Oveja Zampa"}
            subtitle={"Vedette de la Casa — Pasta blanda\n100% Leche Cruda A2 de Oveja Frisona"}
            delay={0.05}
            duration={4.5}
            rotateFrom={-2}
            rotateTo={2}
            rosemaryPos="-bottom-2 -left-4"
            rosemaryRotate={30}
          />

          {/* 2. Pecorino Zampa */}
          <BoardItem
            recipeKey="pecorino-zampa"
            src="/assets/Quesos Zampa/productos/producto_pecorino.png"
            alt="Queso Pecorino Zampa"
            imgSize={200}
            title={"Queso Pecorino\nZampa"}
            subtitle={"Orgullo en Cava — Pasta dura\nMadurado de 9 a 12 Meses en Cava"}
            labelSide="right"
            delay={0.15}
            duration={5}
            rotateFrom={1}
            rotateTo={-1}
            rosemaryPos="-top-3 -right-3"
            rosemaryRotate={-20}
          />

          {/* 3. Brie Zampa */}
          <BoardItem
            recipeKey="brie-zampa"
            src="/assets/Quesos Zampa/productos/producto_brie.png"
            alt="Brie de Oveja Zampa"
            imgSize={200}
            title={"Brie de Oveja\nZampa"}
            subtitle={"Estilo Francés de Autor\nExtrema cremosidad y manteca de campo"}
            delay={0.1}
            duration={4.8}
            rotateFrom={-2}
            rotateTo={2}
            rosemaryPos="-bottom-2 right-4"
            rosemaryRotate={15}
          />

          {/* 4. Manchego Zampa */}
          <BoardItem
            recipeKey="manchego-zampa"
            src="/assets/Quesos Zampa/productos/producto_machego.png"
            alt="Manchego Artesanal Zampa"
            imgSize={200}
            title={"Manchego Artesanal\nZampa"}
            subtitle={"Tradición Ibérica — Pasta semidura\nMadurado 6 a 9 Meses en Cava"}
            labelSide="right"
            delay={0.2}
            duration={4.6}
            rotateFrom={-1}
            rotateTo={2}
            rosemaryPos="-top-4 -left-2"
            rosemaryRotate={-12}
          />

          {/* 5. Provolone Zampa */}
          <BoardItem
            recipeKey="provolone-zampa"
            src="/assets/Quesos Zampa/productos/producto_provolone.png"
            alt="Provolone de Oveja Zampa"
            imgSize={195}
            title={"Provolone de Oveja\nZampa"}
            subtitle={"Pasta Hilada Ovina — Textura elástica\ny rico sabor mediterráneo"}
            delay={0.12}
            duration={4.7}
            rotateFrom={-2}
            rotateTo={1}
            rosemaryPos="-bottom-3 -right-2"
            rosemaryRotate={-18}
          />

          {/* 6. Ahumado Zampa */}
          <BoardItem
            recipeKey="ahumado-zampa"
            src="/assets/Quesos Zampa/productos/producto_ahumado.png"
            alt="Queso Ahumado Zampa"
            imgSize={195}
            title={"Queso Ahumado\nZampa"}
            subtitle={"Ahumado Natural de Autor\nCorteza caramelo con maderas aromáticas"}
            labelSide="right"
            delay={0.22}
            duration={5.1}
            rotateFrom={1}
            rotateTo={-2}
            rosemaryPos="-top-2 right-2"
            rosemaryRotate={22}
          />

          <SectionDivider label="Acompañamientos & Maridajes" />

          {/* 7. Frutas Frescas */}
          <BoardItem
            recipeKey="fruit"
            src="/images/fruit.png"
            alt="Higos y Frutas de Estación"
            imgSize={170}
            title="Frutas de Estación"
            subtitle={"Higos frescos, uvas sin semilla,\nláminas de pera y moras"}
            delay={0.05}
            duration={4.2}
            rotateFrom={-3}
            rotateTo={3}
            rosemaryPos="-bottom-3 right-6"
            rosemaryRotate={20}
          />

          {/* 8. Miel y Confituras */}
          <BoardItem
            recipeKey="honey"
            src="/images/honey.png"
            alt="Miel Pura de Monte"
            imgSize={180}
            title={"Miel Pura\nde Monte"}
            subtitle={"Miel de floración nativa con tomillo\no dulce artesanal de fruta"}
            labelSide="right"
            delay={0.15}
            duration={5.5}
            rotateFrom={-1}
            rotateTo={1}
            rosemaryPos="-top-3 -left-3"
            rosemaryRotate={25}
          />

          {/* 9. Frutos Secos */}
          <BoardItem
            recipeKey="nuts"
            src="/images/nuts.png"
            alt="Nueces y Almendras Tostadas"
            imgSize={180}
            title="Frutos Secos"
            subtitle={"Nueces mariposa, almendras marcona\ny pecan especiado"}
            delay={0.1}
            duration={4}
            rotateFrom={-3}
            rotateTo={3}
            rosemaryPos="-bottom-4 -right-2"
            rosemaryRotate={-25}
          />

          {/* 10. Romero & Hierbas */}
          <BoardItem
            recipeKey="garnish"
            src="/images/rosemary.png"
            alt="Romero y Hierbas Aromáticas"
            imgSize={165}
            title="Romero & Hierbas"
            subtitle={"Romero fresco de la huerta, tomillo\ny lavanda comestible"}
            labelSide="right"
            delay={0.2}
            duration={6}
            rotateFrom={-4}
            rotateTo={4}
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
            <Link
              href="/contacto"
              className="px-8 py-3.5 rounded-full font-serif text-sm tracking-widest uppercase bg-[#C9A84C] text-[#1E1915] font-bold hover:bg-[#E5CD82] transition-colors shadow-lg"
            >
              Consultar por Eventos
            </Link>
            <Link
              href="/productos"
              className="px-8 py-3.5 rounded-full font-serif text-sm tracking-widest uppercase border border-[#C9A84C] text-[#F8F5EE] font-semibold hover:bg-white/10 transition-colors"
            >
              Ver Catálogo Completo
            </Link>
          </div>
        </div>
      </section>

      {/* ══ FOOTER BRANDING ══ */}
      <footer className="flex flex-col items-center pb-16 gap-4 text-center">
        <DecorLine delay={0.1} />
        <Reveal delay={0.2} direction="none">
          <div className="flex flex-col items-center gap-2">
            <Image
              src="/IMG_1960(1).png"
              alt="Quesos Zampa Monograma"
              width={56}
              height={56}
              className="object-contain"
            />
            <p
              className="font-serif text-xs tracking-widest text-[#766D65] uppercase"
              style={{ fontFamily: 'var(--font-cormorant), serif' }}
            >
              Quesos Zampa • Tandil, Buenos Aires • Leche Cruda A2 de Oveja
            </p>
          </div>
        </Reveal>
      </footer>
    </main>
  );
}
