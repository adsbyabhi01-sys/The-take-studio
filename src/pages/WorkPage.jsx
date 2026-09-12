import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Play, Filter } from 'lucide-react';
import VideoModal from '../components/VideoModal';

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [selectedVideo, setSelectedVideo] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'THE CREATIVE LEADERS PODCAST',
      category: 'PODCAST',
      client: 'Vanguard Media',
      image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1000&q=80',
      tag: '4K Multi-Cam Podcast'
    },
    {
      id: 2,
      title: 'AURA MOTORSPORTS BRAND FILM',
      category: 'FILMS',
      client: 'Aura Motors',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1000&q=80',
      tag: 'Commercial Film'
    },
    {
      id: 3,
      title: 'URBAN ECHOES FASHION REEL',
      category: 'BRANDED CONTENT',
      client: 'Urban Couture',
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1000&q=80',
      tag: 'Social Campaign'
    },
    {
      id: 4,
      title: 'DESTINATION LUXURY WEDDING FILM',
      category: 'FILMS',
      client: 'Private Client',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80',
      tag: 'Wedding Documentary'
    },
    {
      id: 5,
      title: 'UNFILTERED TALKS SHOW — SEASON 2',
      category: 'PODCAST',
      client: 'Nexus Studios',
      image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1000&q=80',
      tag: 'Video Podcast'
    },
    {
      id: 6,
      title: 'LUMINA TECH PRODUCT LAUNCH',
      category: 'BRANDED CONTENT',
      client: 'Lumina Tech',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80',
      tag: 'Digital Ad Creative'
    }
  ];

  const filteredProjects = activeFilter === 'ALL'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="bg-white min-h-screen pt-24">
      {/* PAGE HEADER */}
      <section className="px-6 md:px-12 py-16 md:py-24 max-w-7xl mx-auto border-b border-studio-border">
        <div className="space-y-6">
          <span className="text-xs font-mono text-studio-purple uppercase tracking-widest block">
            SELECTED STUDIO PORTFOLIO
          </span>
          <h1 className="font-display text-8xl md:text-9xl lg:text-[11rem] leading-none text-studio-dark uppercase">
            WORK / PORTFOLIO
          </h1>
          <p className="text-xl md:text-2xl text-studio-secondary font-display uppercase tracking-wide max-w-3xl">
            EXPLORE OUR LATEST PODCAST PRODUCTIONS, COMMERCIAL FILMS, AND HIGH-ENGAGEMENT BRANDED CONTENT.
          </p>
        </div>
      </section>

      {/* FILTER TABS */}
      <section className="py-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-wrap items-center gap-3 border-b border-studio-border pb-6">
          <span className="text-xs font-mono text-studio-secondary uppercase tracking-widest mr-4 flex items-center gap-2">
            <Filter className="h-3.5 w-3.5" />
            FILTER BY:
          </span>
          {['ALL', 'PODCAST', 'FILMS', 'BRANDED CONTENT'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-all ${
                activeFilter === cat
                  ? 'bg-studio-dark text-white shadow-md'
                  : 'bg-studio-card text-studio-dark hover:bg-studio-purple/20 border border-studio-border'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* PORTFOLIO GRID */}
      <section className="pb-28 max-w-7xl mx-auto px-6 md:px-12">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedVideo(project)}
                className="group relative rounded-3xl overflow-hidden bg-studio-card border border-studio-border cursor-pointer shadow-lg"
              >
                {/* Image Container with Zoom Effect */}
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
                  {/* Play Trigger Badge */}
                  <div className="absolute top-6 right-6 rounded-full bg-white/20 backdrop-blur-md p-3 text-white transition-transform group-hover:scale-110 group-hover:bg-studio-purple">
                    <Play className="h-5 w-5 fill-white translate-x-0.5" />
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-6 left-6 rounded-full bg-black/60 backdrop-blur-md px-3.5 py-1.5 border border-white/20">
                    <span className="text-[10px] font-mono text-studio-purple uppercase tracking-widest">
                      {project.tag}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-8 space-y-2 bg-studio-dark text-white flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-mono text-gray-400 uppercase tracking-widest block">
                      {project.category} · {project.client}
                    </span>
                    <h3 className="font-display text-3xl md:text-4xl text-white group-hover:text-studio-purple transition-colors uppercase">
                      {project.title}
                    </h3>
                  </div>
                  <div className="rounded-full border border-white/20 p-3 text-white transition-all group-hover:bg-white group-hover:text-black">
                    <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* LIGHTBOX VIDEO PLAYER MODAL */}
      <VideoModal
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        title={selectedVideo?.title}
      />
    </div>
  );
}
