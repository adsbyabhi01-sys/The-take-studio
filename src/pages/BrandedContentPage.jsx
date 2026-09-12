import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Sparkles, Smartphone, BarChart3, Zap } from 'lucide-react';

export default function BrandedContentPage() {
  const contentTypes = [
    { title: 'Social Media Videos', desc: 'Engaging short-form and vertical storytelling optimized for Instagram, TikTok, and YouTube.' },
    { title: 'Reels & Shorts', desc: 'Fast-paced, highly shareable vertical reels crafted with viral visual hooks.' },
    { title: 'Campaign Content', desc: 'Cohesive multi-asset creative packages for product launches and brand pushes.' },
    { title: 'Product Content', desc: 'Sleek visual presentations, feature highlights, and aesthetic unboxings.' },
    { title: 'Fashion Content', desc: 'Stylized lookbooks, runway recaps, and high-editorial fashion videos.' },
    { title: 'Digital Ads', desc: 'High-converting video creative engineered for performance marketing.' },
    { title: 'Promotional Videos', desc: 'Event promos, launch teasers, and high-energy brand motion.' },
    { title: 'Creative Campaigns', desc: 'Full concept-to-execution visual campaigns tailored for digital impact.' }
  ];

  return (
    <div className="bg-white min-h-screen pt-24">
      {/* HEADER HERO */}
      <section className="px-6 md:px-12 py-16 md:py-24 max-w-7xl mx-auto border-b border-studio-border">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-studio-purple bg-studio-purple/10 px-3 py-1 rounded-full uppercase tracking-widest font-semibold">
              SERVICE 03
            </span>
            <span className="text-xs font-mono text-studio-secondary uppercase tracking-widest">
              THE TAKE STUDIO
            </span>
          </div>

          <h1 className="font-display text-7xl md:text-9xl lg:text-[10rem] leading-none text-studio-dark uppercase">
            BRANDED CONTENT
          </h1>

          <div className="pt-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h2 className="font-display text-4xl md:text-6xl text-studio-dark uppercase leading-tight">
                HIGH-ENGAGEMENT DIGITAL & SOCIAL CAMPAIGNS.
              </h2>
              <p className="text-lg text-studio-secondary font-sans leading-relaxed pt-4">
                We craft performance-focused, editorial digital content that commands attention in modern feeds. Designed for brands that demand cultural relevance and elevated visual standards.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-studio-purple px-8 py-5 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-studio-dark hover:scale-105 shadow-lg shadow-studio-purple/25"
              >
                <span>CREATE YOUR CAMPAIGN</span>
                <ArrowUpRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED CAMPAIGN IMAGE */}
      <section className="py-16 max-w-7xl mx-auto px-6 md:px-12">
        <div className="relative aspect-[21/9] rounded-3xl overflow-hidden bg-studio-dark shadow-2xl border border-studio-border">
          <img
            src="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=2000&q=80"
            alt="Branded Digital Content"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-between p-8">
            <div>
              <span className="text-xs font-mono text-studio-purple uppercase tracking-widest block mb-1">
                DIGITAL-FIRST MEDIA
              </span>
              <h3 className="font-display text-3xl text-white uppercase">CAMPAIGN & SOCIAL ASSETS</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT TYPES GRID */}
      <section className="py-20 bg-studio-card border-y border-studio-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="space-y-4 mb-16">
            <span className="text-xs font-mono text-studio-purple uppercase tracking-widest block">
              CAMPAIGN FORMATS & DELIVERABLES
            </span>
            <h2 className="font-display text-6xl md:text-8xl text-studio-dark uppercase leading-none">
              WHAT WE CREATE
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contentTypes.map((item, idx) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-white border border-studio-border space-y-3 shadow-sm hover:border-studio-purple transition-all"
              >
                <span className="font-display text-2xl text-studio-purple">
                  0{idx + 1}
                </span>
                <h4 className="font-display text-2xl text-studio-dark uppercase">{item.title}</h4>
                <p className="text-xs text-studio-secondary font-sans leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="py-24 bg-studio-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          <span className="text-xs font-mono text-studio-purple uppercase tracking-widest block">
            READY TO LAUNCH YOUR CAMPAIGN?
          </span>
          <h2 className="font-display text-6xl md:text-8xl text-white uppercase leading-none">
            LET'S CREATE SOMETHING WORTH REMEMBERING.
          </h2>
          <div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-white px-9 py-5 text-sm font-bold uppercase tracking-widest text-black transition-all hover:bg-studio-purple hover:text-white hover:scale-105"
            >
              <span>CREATE YOUR CAMPAIGN →</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
