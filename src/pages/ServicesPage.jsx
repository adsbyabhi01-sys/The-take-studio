import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Mic, Film, Sparkles } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      number: '01',
      title: 'PODCAST PRODUCTION',
      subtitle: '4K MULTI-CAMERA AUDIO & VIDEO SHOW PRODUCTION',
      desc: 'Complete end-to-end studio setup, multi-cam recording, acoustics, sound mixing, color grading, and short-form social clip extractions.',
      link: '/services/podcast-production',
      image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=80',
      items: [
        'Multi-camera podcast recording',
        'Studio podcast production',
        'Video podcast production',
        'Audio recording & sound design',
        'Professional lighting & staging',
        'Podcast editing & color grading',
        'Audio mastering',
        'Reels and short clips',
        'YouTube podcast production',
        'Social media content'
      ]
    },
    {
      number: '02',
      title: 'VIDEO PRODUCTION & FILMS',
      subtitle: 'COMMERCIAL FILMS, BRAND FILMS & CINEMATIC STORIES',
      desc: 'High-end commercial films, brand documentaries, corporate films, wedding films, music videos, product films, and cinematic reels.',
      link: '/services/video-production',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80',
      items: [
        'Commercial Films',
        'Brand Films',
        'Corporate Films',
        'Wedding Films',
        'Documentary Films',
        'Music Videos',
        'Event Films',
        'Product Films',
        'Cinematic Reels'
      ]
    },
    {
      number: '03',
      title: 'BRANDED CONTENT',
      subtitle: 'HIGH-ENGAGEMENT DIGITAL & SOCIAL CAMPAIGNS',
      desc: 'Social media campaigns, high-converting vertical reels, creative product videos, digital ad creatives, and promotional campaigns.',
      link: '/services/branded-content',
      image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=80',
      items: [
        'Social Media Videos',
        'Reels & Vertical Clips',
        'Campaign Content',
        'Product Content',
        'Fashion Content',
        'Digital Ads',
        'Promotional Videos',
        'Creative Campaigns'
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-24">
      {/* PAGE HEADER */}
      <section className="px-6 md:px-12 py-16 md:py-24 max-w-7xl mx-auto border-b border-studio-border">
        <div className="space-y-6">
          <span className="text-xs font-mono text-studio-purple uppercase tracking-widest block">
            STUDIO CAPABILITIES & DELIVERABLES
          </span>
          <h1 className="font-display text-8xl md:text-9xl lg:text-[11rem] leading-none text-studio-dark uppercase">
            SERVICE
          </h1>
          <p className="text-xl md:text-2xl text-studio-secondary font-display uppercase tracking-wide max-w-3xl">
            EDITORIAL PRODUCTION ACROSS THREE CORE DISCIPLINES: PODCAST PRODUCTION, VIDEO FILMS, AND BRANDED CONTENT.
          </p>
        </div>
      </section>

      {/* EDITORIAL ROW-BASED SERVICES LISTING */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12">
        <div className="space-y-24">
          {services.map((svc) => (
            <motion.div
              key={svc.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border-b border-studio-border pb-20 space-y-10"
            >
              {/* Row Header */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-2">
                  <span className="font-display text-5xl md:text-7xl text-studio-purple">
                    {svc.number}
                  </span>
                </div>

                <div className="lg:col-span-7 space-y-3">
                  <h2 className="font-display text-4xl md:text-6xl text-studio-dark uppercase">
                    {svc.title}
                  </h2>
                  <span className="text-xs font-mono text-studio-purple uppercase tracking-widest block">
                    {svc.subtitle}
                  </span>
                  <p className="text-base text-studio-secondary font-sans leading-relaxed pt-2">
                    {svc.desc}
                  </p>
                </div>

                <div className="lg:col-span-3 lg:text-right">
                  <Link
                    to={svc.link}
                    className="inline-flex items-center gap-2 rounded-full bg-studio-dark px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-studio-purple hover:scale-105"
                  >
                    <span>EXPLORE SERVICE</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Service Visual Banner */}
              <div className="relative aspect-[21/9] rounded-3xl overflow-hidden bg-studio-card border border-studio-border shadow-lg group cursor-pointer">
                <img
                  src={svc.image}
                  alt={svc.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-end p-8">
                  <span className="text-xs font-mono text-white bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 uppercase">
                    {svc.title} · THE TAKE STUDIO
                  </span>
                </div>
              </div>

              {/* Capabilities List Grid */}
              <div className="bg-studio-card p-8 rounded-3xl border border-studio-border">
                <h4 className="font-display text-xl text-studio-dark uppercase mb-4">
                  INCLUDED DELIVERABLES & SERVICES:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {svc.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs font-semibold text-studio-dark">
                      <CheckCircle2 className="h-4 w-4 text-studio-purple flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-24 bg-studio-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          <span className="text-xs font-mono text-studio-purple uppercase tracking-widest block">
            NEED A CUSTOM CREATIVE RETAINER?
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
    </div>
  );
}
