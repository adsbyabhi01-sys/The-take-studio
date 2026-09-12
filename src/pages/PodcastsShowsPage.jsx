import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Mic, Clock, Radio, Sparkles, ArrowUpRight } from 'lucide-react';
import VideoModal from '../components/VideoModal';

export default function PodcastsShowsPage() {
  const [selectedShow, setSelectedShow] = useState(null);

  const podcastShows = [
    {
      id: 1,
      title: 'THE CREATIVE LEADERS SHOW',
      host: 'Hosted by Shourabh Tomar',
      episode: 'EPISODE 24 · 48 MINS',
      desc: 'In-depth conversations with visionary founders, creative directors, and filmmakers on building global brands.',
      image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1000&q=80',
      tag: '4K VIDEO PODCAST'
    },
    {
      id: 2,
      title: 'UNFILTERED CINEMA TALKS',
      host: 'Hosted by Lakshay Chahal',
      episode: 'EPISODE 18 · 62 MINS',
      desc: 'Exploring camera gear breakdown, post-production color grading secrets, and narrative filmmaking techniques.',
      image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1000&q=80',
      tag: '4K MULTI-CAM'
    },
    {
      id: 3,
      title: 'BRAND BUILDERS UNCUT',
      host: 'Featured Studio Series',
      episode: 'EPISODE 12 · 42 MINS',
      desc: 'Behind-the-scenes strategies of fast-growing D2C and luxury brands building authority through original podcasts.',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1000&q=80',
      tag: 'STUDIO PODCAST'
    },
    {
      id: 4,
      title: 'CULTURAL REVOLUTION PODCAST',
      host: 'Hosted by Guest Creator',
      episode: 'EPISODE 09 · 55 MINS',
      desc: 'Exploring internet culture, creator economy shifts, and digital storytelling trends.',
      image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1000&q=80',
      tag: 'AUDIO & VIDEO SHOW'
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-24">
      {/* HEADER HERO */}
      <section className="px-6 md:px-12 py-16 md:py-24 max-w-7xl mx-auto border-b border-studio-border">
        <div className="space-y-6">
          <span className="text-xs font-mono text-studio-purple uppercase tracking-widest block">
            THE TAKE STUDIO ORIGINALS & SHOWCASES
          </span>
          <h1 className="font-display text-8xl md:text-9xl lg:text-[11rem] leading-none text-studio-dark uppercase">
            PODCASTS & SHOWS
          </h1>
          <p className="text-xl md:text-2xl text-studio-secondary font-display uppercase tracking-wide max-w-3xl">
            4K MULTI-CAMERA AUDIO AND VIDEO SHOWS PRODUCED IN-HOUSE AT THE TAKE STUDIO.
          </p>
        </div>
      </section>

      {/* PODCAST SHOWS GRID */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12">
        <div className="space-y-16">
          {podcastShows.map((show, idx) => (
            <motion.div
              key={show.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 rounded-3xl bg-studio-card border border-studio-border grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:border-studio-purple/50 transition-colors shadow-lg"
            >
              {/* Thumbnail Container */}
              <div
                onClick={() => setSelectedShow(show)}
                className="lg:col-span-5 relative aspect-[16/10] rounded-2xl overflow-hidden cursor-pointer group border border-studio-border"
              >
                <img
                  src={show.image}
                  alt={show.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="rounded-full bg-white text-black p-5 shadow-2xl group-hover:scale-110 transition-transform">
                    <Play className="h-6 w-6 fill-black translate-x-0.5" />
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  <span className="text-[10px] font-mono text-studio-purple uppercase tracking-widest">
                    {show.tag}
                  </span>
                </div>
              </div>

              {/* Episode Info & Description */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3 text-xs font-mono text-studio-purple uppercase tracking-widest">
                  <Mic className="h-4 w-4" />
                  <span>{show.host}</span>
                  <span className="text-gray-400">·</span>
                  <span className="text-studio-secondary">{show.episode}</span>
                </div>

                <h3 className="font-display text-4xl md:text-6xl text-studio-dark uppercase">
                  {show.title}
                </h3>

                <p className="text-base text-studio-secondary font-sans leading-relaxed">
                  {show.desc}
                </p>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => setSelectedShow(show)}
                    className="inline-flex items-center gap-2 rounded-full bg-studio-dark px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white hover:bg-studio-purple transition-all"
                  >
                    <Play className="h-4 w-4 fill-white" />
                    <span>PLAY EPISODE PREVIEW</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX VIDEO PLAYER MODAL */}
      <VideoModal
        isOpen={!!selectedShow}
        onClose={() => setSelectedShow(null)}
        title={selectedShow?.title}
      />
    </div>
  );
}
