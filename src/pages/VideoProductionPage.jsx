import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play, Film, Camera, Sparkles, CheckCircle2 } from 'lucide-react';
import VideoModal from '../components/VideoModal';

export default function VideoProductionPage() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const categories = [
    { title: 'Commercial Films', desc: 'High-impact TV and digital commercial productions with high production values.', image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80' },
    { title: 'Brand Films', desc: 'Narrative-driven brand stories establishing connection and trust.', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80' },
    { title: 'Corporate Films', desc: 'Sleek executive communications, investor reels, and company profiles.', image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80' },
    { title: 'Wedding Films', desc: 'Bespoke luxury wedding documentaries and high-end cinematic films.', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80' },
    { title: 'Documentary Films', desc: 'Deep-dive non-fiction storytelling, real people, authentic human emotion.', image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80' },
    { title: 'Music Videos', desc: 'Stylized music videos with artistic direction, VFX, and rhythmic editing.', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80' },
    { title: 'Event Films', desc: 'Dynamic aftermovies and multi-camera live event coverage.', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80' },
    { title: 'Product Films', desc: 'Macro lighting and sleek cinematic visual presentations for products.', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80' },
    { title: 'Cinematic Reels', desc: 'Fast-paced, high-aesthetic vertical & horizontal visual reels.', image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800&q=80' }
  ];

  return (
    <div className="bg-white min-h-screen pt-24">
      {/* HEADER HERO */}
      <section className="px-6 md:px-12 py-16 md:py-24 max-w-7xl mx-auto border-b border-studio-border">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-studio-purple bg-studio-purple/10 px-3 py-1 rounded-full uppercase tracking-widest font-semibold">
              SERVICE 02
            </span>
            <span className="text-xs font-mono text-studio-secondary uppercase tracking-widest">
              THE TAKE STUDIO
            </span>
          </div>

          <h1 className="font-display text-7xl md:text-9xl lg:text-[10rem] leading-none text-studio-dark uppercase">
            VIDEO PRODUCTION & FILMS
          </h1>

          <div className="pt-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <p className="text-xl md:text-2xl text-studio-secondary font-display uppercase tracking-wide">
                CINEMATIC STORIES CRAFTED WITH CREATIVE DIRECTION, EDITORIAL RHYTHM, AND UNCOMPROMISING PRODUCTION VALUES.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <button
                onClick={() => setIsVideoOpen(true)}
                className="inline-flex items-center gap-3 rounded-full bg-studio-dark px-7 py-4 text-xs font-bold uppercase tracking-widest text-white hover:bg-studio-purple transition-all"
              >
                <Play className="h-4 w-4 fill-white" />
                <span>WATCH FILM SHOWREEL</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED CINEMATIC REEL BANNER */}
      <section className="py-16 max-w-7xl mx-auto px-6 md:px-12">
        <div
          onClick={() => setIsVideoOpen(true)}
          className="relative aspect-[21/9] rounded-3xl overflow-hidden bg-studio-dark shadow-2xl border border-studio-border cursor-pointer group"
        >
          <img
            src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=2000&q=80"
            alt="Cinematic Video Production"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end justify-between p-8">
            <div>
              <span className="text-xs font-mono text-studio-purple uppercase tracking-widest block mb-1">
                CINEMATIC FILMMAKING
              </span>
              <h3 className="font-display text-4xl text-white uppercase">THE TAKE STUDIO MASTER SHOWREEL</h3>
            </div>
            <div className="rounded-full bg-white text-black p-4 group-hover:scale-110 transition-transform">
              <Play className="h-6 w-6 fill-black translate-x-0.5" />
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES GRID */}
      <section className="py-20 bg-studio-card border-y border-studio-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="space-y-4 mb-16">
            <span className="text-xs font-mono text-studio-purple uppercase tracking-widest block">
              FILM DISCIPLINES
            </span>
            <h2 className="font-display text-6xl md:text-8xl text-studio-dark uppercase leading-none">
              WHAT WE FILM
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, idx) => (
              <motion.div
                key={cat.title}
                whileHover={{ y: -6 }}
                className="group rounded-3xl overflow-hidden bg-white border border-studio-border space-y-4 shadow-sm"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    <span className="font-display text-sm text-white">0{idx + 1}</span>
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="font-display text-3xl text-studio-dark group-hover:text-studio-purple transition-colors uppercase">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-studio-secondary font-sans leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="py-24 bg-studio-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          <span className="text-xs font-mono text-studio-purple uppercase tracking-widest block">
            HAVE A FILM IN MIND?
          </span>
          <h2 className="font-display text-6xl md:text-8xl text-white uppercase leading-none">
            LET'S CREATE SOMETHING WORTH REMEMBERING.
          </h2>
          <div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-white px-9 py-5 text-sm font-bold uppercase tracking-widest text-black transition-all hover:bg-studio-purple hover:text-white hover:scale-105"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        title="THE TAKE STUDIO — VIDEO FILMS SHOWREEL"
      />
    </div>
  );
}
