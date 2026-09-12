import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Film, Camera, Sparkles, ArrowUpRight } from 'lucide-react';
import VideoModal from '../components/VideoModal';

export default function VideoFilmsPage() {
  const [selectedFilm, setSelectedFilm] = useState(null);

  const films = [
    {
      id: 1,
      title: 'AURA MOTORSPORTS COMMERCIAL',
      category: 'COMMERCIAL FILM',
      desc: 'High-octane automotive commercial filmed on anamorphic lenses with custom sound design.',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 2,
      title: 'HERITAGE LUXURY BRAND DOCUMENTARY',
      category: 'BRAND FILM',
      desc: 'Craftsmanship documentary exploring artisans, timeless materials, and brand legacy.',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 3,
      title: 'ROYAL PALACE DESTINATION WEDDING',
      category: 'WEDDING FILM',
      desc: '3-day cinematic luxury wedding film featuring aerial multi-camera choreography.',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 4,
      title: 'NEON MIDNIGHT MUSIC VIDEO',
      category: 'MUSIC VIDEO',
      desc: 'Stylized performance music video with dramatic color grading and atmospheric lighting.',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 5,
      title: 'GLOBAL TECH FESTIVAL AFTERMOVIE',
      category: 'EVENT FILM',
      desc: 'High-energy multi-camera event aftermovie capturing keynotes, crowds, and festival vibes.',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1000&q=80'
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-24">
      {/* HEADER HERO */}
      <section className="px-6 md:px-12 py-16 md:py-24 max-w-7xl mx-auto border-b border-studio-border">
        <div className="space-y-6">
          <span className="text-xs font-mono text-studio-purple uppercase tracking-widest block">
            CINEMATIC FILMMAKING & SHOWREELS
          </span>
          <h1 className="font-display text-8xl md:text-9xl lg:text-[11rem] leading-none text-studio-dark uppercase">
            VIDEO FILMS & REEL
          </h1>
          <p className="text-xl md:text-2xl text-studio-secondary font-display uppercase tracking-wide max-w-3xl">
            A SHOWCASE OF COMMERCIAL FILMS, BRAND STORIES, LUXURY WEDDING FILMS, AND MUSIC VIDEOS.
          </p>
        </div>
      </section>

      {/* MASTER REEL HERO BANNER */}
      <section className="py-16 max-w-7xl mx-auto px-6 md:px-12">
        <div
          onClick={() => setSelectedFilm({ title: 'THE TAKE STUDIO — MASTER FILM REEL' })}
          className="relative aspect-[21/9] rounded-3xl overflow-hidden bg-studio-dark shadow-2xl border border-studio-border cursor-pointer group"
        >
          <img
            src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=2000&q=80"
            alt="Master Reel"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-between p-8">
            <div className="space-y-1">
              <span className="text-xs font-mono text-studio-purple uppercase tracking-widest">
                CINEMATIC SHOWCASE
              </span>
              <h3 className="font-display text-4xl text-white uppercase">THE TAKE STUDIO MASTER FILM REEL</h3>
            </div>
            <div className="rounded-full bg-white text-black p-5 group-hover:scale-110 transition-transform">
              <Play className="h-6 w-6 fill-black translate-x-0.5" />
            </div>
          </div>
        </div>
      </section>

      {/* FILM PROJECTS GRID */}
      <section className="pb-28 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {films.map((film) => (
            <motion.div
              key={film.id}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedFilm(film)}
              className="group relative rounded-3xl overflow-hidden bg-studio-dark text-white border border-white/10 cursor-pointer shadow-lg"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={film.image}
                  alt={film.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute top-4 right-4 rounded-full bg-white/20 backdrop-blur-md p-3 text-white group-hover:bg-studio-purple">
                  <Play className="h-5 w-5 fill-white translate-x-0.5" />
                </div>
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  <span className="text-[10px] font-mono text-studio-purple uppercase tracking-widest">
                    {film.category}
                  </span>
                </div>
              </div>

              <div className="p-8 space-y-2">
                <h3 className="font-display text-3xl md:text-4xl text-white group-hover:text-studio-purple transition-colors uppercase">
                  {film.title}
                </h3>
                <p className="text-xs text-gray-400 font-sans leading-relaxed">
                  {film.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX VIDEO PLAYER MODAL */}
      <VideoModal
        isOpen={!!selectedFilm}
        onClose={() => setSelectedFilm(null)}
        title={selectedFilm?.title}
      />
    </div>
  );
}
