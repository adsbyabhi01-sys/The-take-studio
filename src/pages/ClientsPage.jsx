import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Award, ShieldCheck, Zap, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import LogoMarquee from '../components/LogoMarquee';

export default function ClientsPage() {
  const brandPlaceholders = [
    { name: 'PARTNER ALPHA', label: 'MEDIA BRAND 01', category: 'Broadcasting & Media' },
    { name: 'PARTNER BETA', label: 'CREATIVE LABS', category: 'Digital Agency' },
    { name: 'PARTNER GAMMA', label: 'LUXURY PRODUCTIONS', category: 'Fashion & Luxury' },
    { name: 'PARTNER DELTA', label: 'VENTURES CAPITAL', category: 'Corporate & FinTech' },
    { name: 'PARTNER EPSILON', label: 'AUDIO NETWORK', category: 'Podcast Network' },
    { name: 'PARTNER ZETA', label: 'AUTOMOTIVE LAB', category: 'Commercial Brand' },
    { name: 'PARTNER ETA', label: 'GLOBAL ENTERTAINMENT', category: 'Film Distribution' },
    { name: 'PARTNER THETA', label: 'DIGITAL STUDIOS', category: 'Social Media Agency' },
    { name: 'PARTNER IOTA', label: 'TECH ENTERPRISES', category: 'Enterprise Brand' }
  ];

  return (
    <div className="bg-white min-h-screen pt-24">
      {/* HEADER HERO */}
      <section className="px-6 md:px-12 py-16 md:py-24 max-w-7xl mx-auto border-b border-studio-border">
        <div className="space-y-6">
          <span className="text-xs font-mono text-studio-purple uppercase tracking-widest block">
            COLLABORATIONS & BRAND TRUST
          </span>
          <h1 className="font-display text-8xl md:text-9xl lg:text-[11rem] leading-none text-studio-dark uppercase">
            CLIENTS & PARTNERS
          </h1>
          <p className="text-xl md:text-2xl text-studio-secondary font-display uppercase tracking-wide max-w-3xl">
            WE PARTNER WITH FORWARD-THINKING BRANDS, CREATORS, AND ENTERPRISES TO PRODUCE HIGH-IMPACT VISUAL & AUDIO CONTENT.
          </p>
        </div>
      </section>

      {/* LOGO MARQUEE — LIGHT */}
      <section className="py-24 max-w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
          <div className="space-y-4">
            <span className="text-xs font-mono text-studio-purple uppercase tracking-widest block">
              STUDIO PARTNERSHIPS
            </span>
            <h2 className="font-display text-5xl md:text-7xl text-studio-dark uppercase">
              FEATURED COLLABORATORS
            </h2>
          </div>
        </div>
        <LogoMarquee dark={false} />
      </section>



      {/* TRUST HIGHLIGHTS */}
      <section className="py-24 bg-studio-dark text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-4">
            <ShieldCheck className="h-8 w-8 text-studio-purple" />
            <h4 className="font-display text-3xl text-white uppercase">UNCOMPROMISING QUALITY</h4>
            <p className="text-xs text-gray-400 font-sans leading-relaxed">
              Every production undergoes rigorous color grading, acoustic sound mastering, and multi-platform quality assurance.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-4">
            <Zap className="h-8 w-8 text-studio-purple" />
            <h4 className="font-display text-3xl text-white uppercase">RAPID PRODUCTION TURNAROUND</h4>
            <p className="text-xs text-gray-400 font-sans leading-relaxed">
              Efficient multi-camera studio workflows engineered for quick post-production edits and social clip delivery.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-4">
            <Star className="h-8 w-8 text-studio-purple" />
            <h4 className="font-display text-3xl text-white uppercase">END-TO-END RETAINERS</h4>
            <p className="text-xs text-gray-400 font-sans leading-relaxed">
              Full creative strategy, scripting, production, and post-production management under one roof.
            </p>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          <span className="text-xs font-mono text-studio-purple uppercase tracking-widest block">
            BECOME A STUDIO PARTNER
          </span>
          <h2 className="font-display text-6xl md:text-8xl text-studio-dark uppercase leading-none">
            LET'S CREATE SOMETHING WORTH REMEMBERING.
          </h2>
          <div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-studio-dark px-9 py-5 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-studio-purple hover:scale-105"
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
