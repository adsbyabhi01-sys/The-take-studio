import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mic, CheckCircle2, Video, Volume2, Sparkles, Play } from 'lucide-react';

export default function PodcastProductionPage() {
  const podcastServices = [
    'Multi-camera podcast recording',
    'Studio podcast production',
    'Video podcast production',
    'Audio recording',
    'Professional lighting',
    'Podcast editing',
    'Audio mastering',
    'Reels and short clips',
    'YouTube podcast production',
    'Social media content'
  ];

  return (
    <div className="bg-white min-h-screen pt-24">
      {/* HEADER HERO */}
      <section className="px-6 md:px-12 py-16 md:py-24 max-w-7xl mx-auto border-b border-studio-border">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-studio-purple bg-studio-purple/10 px-3 py-1 rounded-full uppercase tracking-widest font-semibold">
              SERVICE 01
            </span>
            <span className="text-xs font-mono text-studio-secondary uppercase tracking-widest">
              THE TAKE STUDIO
            </span>
          </div>

          <h1 className="font-display text-7xl md:text-9xl lg:text-[10rem] leading-none text-studio-dark uppercase">
            PODCAST PRODUCTION
          </h1>

          <div className="pt-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h2 className="font-display text-4xl md:text-6xl text-studio-dark uppercase leading-tight">
                4K MULTI-CAMERA AUDIO & VIDEO SHOW PRODUCTION.
              </h2>
              <p className="text-lg text-studio-secondary font-sans leading-relaxed pt-4">
                We craft studio-grade audio and video podcasts designed for maximum audience engagement. From multi-cam 4K filming and custom set lighting to broadcast sound mix and viral social clips extraction.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-studio-purple px-8 py-5 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-studio-dark hover:scale-105 shadow-lg shadow-studio-purple/25"
              >
                <span>START YOUR PODCAST</span>
                <ArrowUpRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PODCAST STUDIO IMAGE */}
      <section className="py-16 max-w-7xl mx-auto px-6 md:px-12">
        <div className="relative aspect-[21/9] rounded-3xl overflow-hidden bg-studio-dark shadow-2xl border border-studio-border">
          <img
            src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=2000&q=80"
            alt="THE TAKE STUDIO 4K Podcast Set"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-between p-8">
            <div className="space-y-1">
              <span className="text-xs font-mono text-studio-purple uppercase tracking-widest">
                ACOUSTIC MULTI-CAM STUDIO
              </span>
              <h3 className="font-display text-3xl text-white uppercase">4K BROADCAST PODCAST SET</h3>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES INCLUDED GRID */}
      <section className="py-20 bg-studio-card border-y border-studio-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="space-y-4 mb-14">
            <span className="text-xs font-mono text-studio-purple uppercase tracking-widest block">
              CAPABILITIES & DELIVERABLES
            </span>
            <h2 className="font-display text-5xl md:text-7xl text-studio-dark uppercase leading-none">
              WHAT WE PROVIDE
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {podcastServices.map((service, idx) => (
              <motion.div
                key={service}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl bg-white border border-studio-border space-y-3 shadow-sm hover:border-studio-purple transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl text-studio-purple">
                    0{idx + 1}
                  </span>
                  <CheckCircle2 className="h-5 w-5 text-studio-purple" />
                </div>
                <h4 className="font-display text-2xl text-studio-dark uppercase">{service}</h4>
                <p className="text-xs text-studio-secondary font-sans">
                  Professional execution handled end-to-end by THE TAKE STUDIO engineering team.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STUDIO GEAR & WORKFLOW */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-xs font-mono text-studio-purple uppercase tracking-widest block">
              BROADCAST SPECIFICATIONS
            </span>
            <h2 className="font-display text-5xl md:text-7xl text-studio-dark uppercase">
              STUDIO TECH & GEAR
            </h2>
            <p className="text-base text-studio-secondary font-sans leading-relaxed">
              We shoot with cinema-line 4K cameras (Sony FX Series), broadcast Shure SM7B dynamic microphones, acoustic staging, and custom RGB ambient lighting to guarantee a premium look and crystal-clear sound.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm font-semibold text-studio-dark">
                <Video className="h-5 w-5 text-studio-purple" />
                <span>3x to 4x Cinema 4K Camera Angle Setup</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-studio-dark">
                <Volume2 className="h-5 w-5 text-studio-purple" />
                <span>Multi-track Audio Recording & Master Sound Mix</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-studio-dark">
                <Sparkles className="h-5 w-5 text-studio-purple" />
                <span>Subtitled Shorts / Vertical Reels for Instagram & TikTok</span>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-studio-dark text-white space-y-6">
            <span className="text-xs font-mono text-studio-purple uppercase tracking-widest block">
              READY TO LAUNCH YOUR SHOW?
            </span>
            <h3 className="font-display text-4xl text-white uppercase">
              BOOK YOUR FIRST PODCAST SESSION
            </h3>
            <p className="text-xs text-gray-400 font-sans leading-relaxed">
              Contact THE TAKE STUDIO team to reserve your studio slot or discuss complete show production retainers.
            </p>
            <div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-studio-purple px-7 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-black"
              >
                <span>START YOUR PODCAST →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
