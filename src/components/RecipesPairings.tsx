'use client';
import React, { useRef, useState, useEffect } from 'react';
import AppIcon from '@/components/ui/AppIcon';

interface VideoItem {
  id: number;
  title: string;
  author: string;
  instagramUrl: string;
  instagramHandle: string;
  videoUrl: string;
}

const videoItems: VideoItem[] = [
  {
    id: 1,
    title: 'Amaru Tandil',
    author: 'Restaurante & Experiencia',
    instagramUrl: 'https://www.instagram.com/amaru_tandil/',
    instagramHandle: '@amaru_tandil',
    videoUrl: '/assets/Quesos Zampa/Recetas/amaru tandil.mp4',
  },
  {
    id: 2,
    title: 'Charcutería Artesanal',
    author: 'Chef Daniel Alberto Techeyro',
    instagramUrl: 'https://www.instagram.com/danielalbertotecheyro/',
    instagramHandle: '@danielalbertotecheyro',
    videoUrl: '/assets/Quesos Zampa/Recetas/charcuteria.mp4',
  },
  {
    id: 3,
    title: 'Don Rosendo Tandil',
    author: 'Gastronomía Local',
    instagramUrl: 'https://www.instagram.com/donrosendotandil/',
    instagramHandle: '@donrosendotandil',
    videoUrl: '/assets/Quesos Zampa/Recetas/don rosendo.mp4',
  },
  {
    id: 4,
    title: 'Pecorino en Salumería',
    author: 'Bocado Salumería',
    instagramUrl: 'https://www.instagram.com/bocadosalumeria/',
    instagramHandle: '@bocadosalumeria',
    videoUrl: '/assets/Quesos Zampa/Recetas/pecorino-prueba.mp4',
  },
  {
    id: 5,
    title: 'Queso Brie Zampa',
    author: 'Quesería Zampa',
    instagramUrl: 'https://www.instagram.com/quesoszampa/',
    instagramHandle: '@quesoszampa',
    videoUrl: '/assets/Quesos Zampa/Recetas/queso-brie.mp4',
  },
];

function VideoCard({ 
  item, 
  activePlayingId, 
  setActivePlayingId 
}: { 
  item: VideoItem; 
  activePlayingId: number | null; 
  setActivePlayingId: (id: number | null) => void; 
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isPlaying = activePlayingId === item.id;
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  // Control centralizado: cuando otro video se activa, este se pausa y reinicia
  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
        setProgress(0);
      }
    }
  }, [isPlaying]);

  const togglePlay = () => {
    if (isPlaying) {
      setActivePlayingId(null);
    } else {
      setActivePlayingId(item.id);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration || 1;
      setProgress((current / duration) * 100);
    }
  };

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-charcoal/5 flex flex-col justify-between group">
      {/* Contenedor Interactivo de Video estilo Reels */}
      <div 
        className="relative aspect-[9/16] max-h-[500px] w-full overflow-hidden cursor-pointer bg-charcoal"
        onClick={togglePlay}
      >
        <video
          ref={videoRef}
          src={`${item.videoUrl}#t=0.001`}
          preload="metadata"
          playsInline
          loop
          onTimeUpdate={handleTimeUpdate}
          className="w-full h-full object-cover select-none pointer-events-none"
        />

        {/* Gradiente dinámico para contraste y legibilidad */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 transition-opacity duration-300 ${isPlaying ? 'opacity-25' : 'opacity-70'}`} />

        {/* Botón de Play Central (Efecto Glassmorphism translúcido) */}
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isPlaying ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100 scale-100'}`}>
          <div className="w-16 h-16 rounded-full bg-white/25 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-2xl group-hover:scale-110 group-hover:bg-[#6B4226]/80 group-hover:border-[#6B4226] transition-all duration-300">
            <svg className="w-7 h-7 fill-current ml-1" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Botón de Mute / Sonido */}
        {isPlaying && (
          <button
            onClick={toggleMute}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
            aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
          >
            {isMuted ? (
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
              </svg>
            )}
          </button>
        )}

        {/* Indicador de Reproducción activa */}
        {isPlaying && (
          <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-light">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span>Reproduciendo</span>
          </div>
        )}

        {/* Barra de progreso de video */}
        {isPlaying && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
            <div 
              className="h-full bg-[#C9A84C] transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>

      {/* Detalles del Video & Link a Instagram */}
      <div className="p-6 flex flex-col gap-4">
        <div>
          <h3 className="text-xl font-medium text-charcoal uppercase tracking-wide">
            {item.title}
          </h3>
          <p className="text-sm text-charcoal/70 font-light mt-0.5">
            {item.author}
          </p>
        </div>

        <div className="pt-3 border-t border-charcoal/10 flex items-center justify-between">
          <a 
            href={item.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#6B4226] hover:text-charcoal transition-colors"
          >
            <AppIcon name="Instagram" size={15} />
            <span>{item.instagramHandle}</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function RecipesPairings() {
  const [activePlayingId, setActivePlayingId] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-light uppercase tracking-wide text-charcoal mb-4">
          Nuestros Quesos en Acción
        </h2>
        <p className="text-charcoal/80 font-light max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          Descubrí cómo chefs, restaurantes y amigos de la casa preparan y disfrutan los quesos de Zampa en sus propias cocinas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videoItems.map((item) => (
          <VideoCard 
            key={item.id} 
            item={item} 
            activePlayingId={activePlayingId}
            setActivePlayingId={setActivePlayingId}
          />
        ))}
      </div>
    </section>
  );
}
