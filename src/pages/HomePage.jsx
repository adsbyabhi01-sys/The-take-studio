import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play, CheckCircle2, Sparkles } from 'lucide-react';
import VideoModal from '../components/VideoModal';

export default function HomePage() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activeHoverImage, setActiveHoverImage] = useState(null);

  const services = [
    {
      number: '01',
      title: 'PODCAST PRODUCTION',
      subtitle: '4K Multi-Camera Audio & Video Show Production',
      desc: 'Complete end-to-end studio setup, multi-cam recording, acoustics, sound mixing, color grading, and short-form social clip extractions.',
      link: '/services/podcast-production',
      image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=80',
      tags: ['Multi-Cam Recording', 'Studio Lighting', 'Audio Mastering', 'Reels & Clips']
    },
    {
      number: '02',
      title: 'VIDEO PRODUCTION & FILMS',
      subtitle: 'Commercial Films, Brand Films & Cinematic Stories',
      desc: 'Cinematic commercials, brand films, corporate documentaries, wedding films, music videos, and high-impact event aftermovies.',
      link: '/services/video-production',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80',
      tags: ['Commercials', 'Brand Documentaries', 'Wedding Films', 'Cinematic Reels']
    },
    {
      number: '03',
      title: 'BRANDED CONTENT',
      subtitle: 'High-Engagement Digital & Social Campaigns',
      desc: 'Creative campaigns, high-converting social video assets, product showcases, fashion films, and multi-platform advertising creatives.',
      link: '/services/branded-content',
      image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=80',
      tags: ['Social Campaigns', 'Fashion Content', 'Digital Ads', 'Promotional Videos']
    }
  ];

  const featuredWork = [
    {
      id: 1,
      title: 'THE CREATIVE LEADERS PODCAST',
      category: 'PODCAST PRODUCTION',
      image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1000&q=80',
      tag: '4K Multi-Cam'
    },
    {
      id: 2,
      title: 'AURA MOTORSPORTS BRAND FILM',
      category: 'COMMERCIAL FILM',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1000&q=80',
      tag: 'Cinematic Film'
    },
    {
      id: 3,
      title: 'URBAN ECHOES FASHION REEL',
      category: 'BRANDED CONTENT',
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1000&q=80',
      tag: 'Digital Campaign'
    },
    {
      id: 4,
      title: 'DESTINATION ROYAL WEDDING',
      category: 'WEDDING FILM',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80',
      tag: 'Cinematic Wedding'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. HERO VIDEO MASKING SECTION */}
      <section className="relative w-full h-[60vh] md:h-screen flex items-center justify-center overflow-hidden bg-white isolate">
        {/* Background Video Layer */}
        <div className="absolute inset-0 z-0 bg-black">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-90"
            src="/hero-video.mp4" 
          />
        </div>

        {/* CSS Masking Layer (White bg, Black text with mix-blend-screen) */}
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-white mix-blend-screen w-full h-full">
          <h1 className="font-display text-[45vw] md:text-[42vw] leading-[0.75] text-black tracking-tighter text-center whitespace-nowrap select-none mt-10 md:mt-20 scale-y-110 md:scale-y-125">
            STUDIO
          </h1>
        </div>

        {/* Floating Badge (THE TAKE) */}
        <motion.div
          initial={{ scale: 0, rotate: -15, x: '-50%', y: '-50%' }}
          animate={{ scale: 1, rotate: -6, x: '-50%', y: '-50%' }}
          transition={{ delay: 0.4, duration: 0.8, type: 'spring', bounce: 0.5 }}
          className="absolute z-20 top-1/2 left-1/2 flex items-center gap-3 md:gap-4 bg-studio-dark text-white pl-2 pr-6 py-2 md:pl-3 md:pr-8 md:py-3 rounded-[3rem] border-[4px] md:border-[6px] border-white shadow-2xl origin-center mt-6 md:mt-12"
        >
          <div className="bg-white rounded-full p-2 md:p-3 flex items-center justify-center h-12 w-12 md:h-16 md:w-16">
            <img 
              src="/logo-mark-removebg-preview.png" 
              alt="TK Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-display leading-none text-4xl md:text-6xl tracking-widest uppercase mt-2">
              THE TAKE
            </span>
          </div>
        </motion.div>
      </section>

      {/* 2. HERO INTRO & CTAs */}
      <section className="px-6 md:px-12 py-12 md:py-20 max-w-7xl mx-auto text-center border-b border-studio-border">
        <div className="flex flex-col items-center space-y-8">
          
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 rounded-full bg-studio-card border border-studio-border px-4 py-1.5"
          >
            <span className="h-2 w-2 rounded-full bg-studio-purple animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-studio-dark font-semibold">
              THE TAKE STUDIO
            </span>
            <span className="text-gray-300">|</span>
            <span className="text-xs font-mono tracking-widest text-studio-secondary">
              CAPTURE · CREATE · CONNECT
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl sm:text-7xl md:text-9xl leading-[0.9] text-studio-dark tracking-tight max-w-5xl"
          >
            WE TURN <span className="text-studio-purple">MOMENTS</span> INTO STORIES.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-2xl font-display tracking-wide uppercase text-studio-secondary max-w-3xl"
          >
            A CREATIVE PRODUCTION STUDIO FOR FILMS, PODCASTS AND BRANDED CONTENT.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap justify-center items-center gap-4 pt-6"
          >
            <Link
              to="/work"
              className="inline-flex items-center gap-2 rounded-full bg-studio-dark px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-studio-purple hover:scale-105 shadow-lg"
            >
              <span>EXPLORE OUR WORK</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <button
              onClick={() => setIsVideoOpen(true)}
              className="group inline-flex items-center gap-3 rounded-full border-2 border-studio-dark/10 px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-studio-dark transition-all hover:border-studio-purple hover:bg-studio-purple hover:text-white"
            >
              <div className="rounded-full bg-studio-purple/10 p-1.5 transition-colors group-hover:bg-white/20">
                <Play className="h-4 w-4 fill-current text-studio-purple group-hover:text-white" />
              </div>
              <span>WATCH REEL</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* 3. EDITORIAL ABOUT SECTION */}
      <section className="bg-studio-card py-24 border-b border-studio-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 space-y-4">
              <span className="text-xs font-mono text-studio-purple uppercase tracking-widest block">
                01 / ABOUT THE STUDIO
              </span>
              <h2 className="font-display text-7xl md:text-8xl text-studio-dark leading-none uppercase">
                ABOUT
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-8">
              <h3 className="font-display text-4xl md:text-6xl text-studio-dark leading-tight uppercase">
                WE ARE A CREATIVE PRODUCTION STUDIO BUILT FOR STORIES.
              </h3>
              <p className="text-base md:text-xl text-studio-secondary font-sans leading-relaxed">
                The Take Studio creates cinematic films, podcasts and branded content for brands, businesses and people with stories worth telling. We combine high-end film production aesthetics with modern multi-camera podcast production to craft engaging experiences across screens.
              </p>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-3 font-display text-2xl uppercase tracking-wider text-studio-dark hover:text-studio-purple transition-colors border-b-2 border-studio-dark hover:border-studio-purple pb-1"
                >
                  <span>DISCOVER THE STUDIO</span>
                  <ArrowUpRight className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES SECTION */}
      <section className="py-28 max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between border-b border-studio-border pb-8 mb-12">
          <div>
            <span className="text-xs font-mono text-studio-purple uppercase tracking-widest block mb-2">
              02 / WHAT WE DO
            </span>
            <h2 className="font-display text-7xl md:text-9xl text-studio-dark uppercase leading-none">
              SERVICE
            </h2>
          </div>
          <p className="text-sm font-mono text-studio-secondary uppercase tracking-widest max-w-xs mt-4 md:mt-0">
            3 CORE DISCIPLINES · END-TO-END CREATIVE PRODUCTION
          </p>
        </div>

        {/* Numbered Service Rows */}
        <div className="divide-y divide-studio-border">
          {services.map((svc) => (
            <div
              key={svc.number}
              onMouseEnter={() => setActiveHoverImage(svc.image)}
              onMouseLeave={() => setActiveHoverImage(null)}
              className="group py-12 md:py-16 transition-all duration-300 hover:bg-studio-card/50 px-4 md:px-8 rounded-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Number & Title */}
                <div className="lg:col-span-6 space-y-2">
                  <span className="font-display text-3xl text-studio-purple block">
                    {svc.number}
                  </span>
                  <h3 className="font-display text-4xl md:text-6xl text-studio-dark group-hover:text-studio-purple transition-colors uppercase">
                    {svc.title}
                  </h3>
                  <p className="text-xs font-mono text-studio-secondary tracking-wider uppercase">
                    {svc.subtitle}
                  </p>
                </div>

                {/* Description & Deliverables */}
                <div className="lg:col-span-4 space-y-4">
                  <p className="text-sm text-studio-secondary font-sans leading-relaxed">
                    {svc.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {svc.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono bg-white border border-studio-border px-2.5 py-1 rounded-full text-studio-dark"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow CTA */}
                <div className="lg:col-span-2 flex justify-start lg:justify-end">
                  <Link
                    to={svc.link}
                    className="rounded-full border border-studio-dark/20 p-4 transition-all duration-300 group-hover:bg-studio-purple group-hover:border-studio-purple group-hover:text-white"
                  >
                    <ArrowUpRight className="h-6 w-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FEATURED WORK SHOWCASE */}
      <section className="bg-studio-dark text-white py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between border-b border-white/10 pb-8 mb-16">
            <div>
              <span className="text-xs font-mono text-studio-purple uppercase tracking-widest block mb-2">
                03 / SELECTED PORTFOLIO
              </span>
              <h2 className="font-display text-7xl md:text-9xl text-white uppercase leading-none">
                WORK
              </h2>
            </div>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white hover:bg-white hover:text-black transition-colors mt-6 md:mt-0"
            >
              <span>VIEW ALL PROJECTS</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {featuredWork.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -8 }}
                className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                </div>
                <div className="p-8 space-y-3 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-studio-purple uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-[10px] font-mono bg-white/10 text-white px-2.5 py-1 rounded-full border border-white/10">
                      {project.tag}
                    </span>
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl text-white group-hover:text-studio-purple transition-colors uppercase">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CLIENTS & PARTNERS LOGO TICKER */}
      <section className="py-24 border-b border-studio-border bg-studio-card">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center space-y-10">
          <span className="text-xs font-mono text-studio-purple uppercase tracking-widest block">
            TRUSTED BY BRANDS & CREATORS
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
            {['AURORA', 'VALOR', 'NEXUS', 'ECHO', 'VANGUARD', 'SOLARIS'].map((brand, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white border border-studio-border flex items-center justify-center font-display text-2xl text-studio-dark/60 hover:text-studio-purple hover:border-studio-purple/40 hover:shadow-sm transition-all cursor-pointer"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        title="THE TAKE STUDIO — MASTER REEL 2026"
      />
    </div>
  );
}
