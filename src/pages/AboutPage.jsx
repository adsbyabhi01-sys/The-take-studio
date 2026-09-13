import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Award, Zap, Camera, Mic, Film } from 'lucide-react';

export default function AboutPage() {
  const founders = [
    {
      number: '01',
      name: 'SHOURABH TOMAR',
      role: 'CEO & FOUNDER',
      image: '/shourabh-tomar.png',
      bio: 'Entrepreneur and creative strategist, founder of The Backstory Media and The Take Studio, working at the intersection of digital marketing, branding, content, and media. With The Take Studio, he is building a modern space where ideas, conversations, and stories become powerful content.'
    },
    {
      number: '02',
      name: 'LAKSHAY CHAHAL',
      role: 'CO-FOUNDER',
      image: '/lakshya-chahal.jpeg',
      bio: 'Creative director and post-production lead steering branded digital strategy, sound engineering, color grading, and high-engagement visual visual stories.'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'DISCOVERY & STRATEGY',
      desc: 'We dive deep into your brand voice, story objectives, audience hook, and content deliverables to build a tailored creative blueprint.'
    },
    {
      step: '02',
      title: 'CREATIVE & PRE-PRODUCTION',
      desc: 'Scriptwriting, storyboarding, multi-camera acoustic staging, set design, talent prep, and production schedule design.'
    },
    {
      step: '03',
      title: 'CINEMATIC PRODUCTION',
      desc: 'High-end 4K multi-cam filming, studio lighting, dedicated sound engineering, and real-time audio/video multi-track capture.'
    },
    {
      step: '04',
      title: 'POST-PRODUCTION & DELIVERY',
      desc: 'Master edit, color grading, acoustic sound design, social reels extraction, thumbnail optimization, and multi-platform packaging.'
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-24">
      {/* HEADER HERO */}
      <section className="px-6 md:px-12 py-16 md:py-24 max-w-7xl mx-auto border-b border-studio-border">
        <div className="space-y-6">
          <span className="text-xs font-mono text-studio-purple uppercase tracking-widest block">
            ABOUT THE STUDIO
          </span>
          <h1 className="font-display text-8xl md:text-9xl lg:text-[11rem] leading-none text-studio-dark uppercase">
            ABOUT
          </h1>
          <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-6">
              <h2 className="font-display text-4xl md:text-6xl text-studio-dark uppercase leading-tight">
                WE ARE A CREATIVE PRODUCTION STUDIO BUILT FOR STORIES.
              </h2>
              <p className="text-lg md:text-xl text-studio-secondary font-sans leading-relaxed">
                The Take Studio creates cinematic films, podcasts and branded content for brands, businesses and people with stories worth telling. Founded on the principle of editorial precision and cinematic storytelling, we operate across film, podcasts, and digital media.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-studio-dark px-7 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-studio-purple hover:scale-105"
              >
                <span>DISCOVER THE STUDIO</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* OUR APPROACH & WHAT WE CREATE */}
      <section className="py-24 bg-studio-card border-b border-studio-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* OUR APPROACH */}
          <div className="space-y-6">
            <span className="text-xs font-mono text-studio-purple uppercase tracking-widest block">
              STUDIO PHILOSOPHY
            </span>
            <h3 className="font-display text-5xl md:text-6xl text-studio-dark uppercase">
              OUR APPROACH
            </h3>
            <p className="text-base text-studio-secondary font-sans leading-relaxed">
              Every story requires a tailored visual and acoustic language. We don't just shoot footage—we curate emotion, pace, and visual weight. By blending cinematic film direction with modular 4K studio podcast workflows, we help creators and brands build audience loyalty.
            </p>
            <ul className="space-y-3 pt-2">
              <li className="flex items-center gap-3 text-sm font-semibold text-studio-dark">
                <CheckCircle2 className="h-5 w-5 text-studio-purple" />
                <span>Editorial Visual Aesthetics & Clean Composition</span>
              </li>
              <li className="flex items-center gap-3 text-sm font-semibold text-studio-dark">
                <CheckCircle2 className="h-5 w-5 text-studio-purple" />
                <span>State-of-the-Art 4K Multi-Camera Acoustic Studio</span>
              </li>
              <li className="flex items-center gap-3 text-sm font-semibold text-studio-dark">
                <CheckCircle2 className="h-5 w-5 text-studio-purple" />
                <span>Full Post-Production Color Grading & Sound Mix</span>
              </li>
            </ul>
          </div>

          {/* WHAT WE CREATE */}
          <div className="space-y-6">
            <span className="text-xs font-mono text-studio-purple uppercase tracking-widest block">
              DELIVERABLES & MEDIA
            </span>
            <h3 className="font-display text-5xl md:text-6xl text-studio-dark uppercase">
              WHAT WE CREATE
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-6 rounded-2xl bg-white border border-studio-border space-y-2">
                <Mic className="h-7 w-7 text-studio-purple" />
                <h4 className="font-display text-2xl text-studio-dark uppercase">4K PODCASTS</h4>
                <p className="text-xs text-studio-secondary">Multi-camera show recording & audio mastering.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-studio-border space-y-2">
                <Film className="h-7 w-7 text-studio-purple" />
                <h4 className="font-display text-2xl text-studio-dark uppercase">BRAND FILMS</h4>
                <p className="text-xs text-studio-secondary">Cinematic commercials & brand documentaries.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-studio-border space-y-2">
                <Camera className="h-7 w-7 text-studio-purple" />
                <h4 className="font-display text-2xl text-studio-dark uppercase">BRANDED CONTENT</h4>
                <p className="text-xs text-studio-secondary">High-conversion Reels & digital media assets.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-studio-border space-y-2">
                <Zap className="h-7 w-7 text-studio-purple" />
                <h4 className="font-display text-2xl text-studio-dark uppercase">SHORT CLIPS</h4>
                <p className="text-xs text-studio-secondary">Viral short-form content extracted from long-form.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE PEOPLE BEHIND THE STUDIO (FOUNDERS SECTION) */}
      <section className="py-28 max-w-7xl mx-auto px-6 md:px-12 border-b border-studio-border">
        <div className="space-y-4 mb-16">
          <span className="text-xs font-mono text-studio-purple uppercase tracking-widest block">
            LEADERSHIP & VISION
          </span>
          <h2 className="font-display text-6xl md:text-8xl text-studio-dark uppercase leading-none">
            THE PEOPLE BEHIND THE STUDIO
          </h2>
          <p className="text-sm font-mono text-studio-secondary uppercase tracking-widest max-w-xl">
            MEET THE FOUNDERS DRIVING THE VISION OF THE TAKE STUDIO.
          </p>
        </div>

        {/* Founders Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {founders.map((founder) => (
            <motion.div
              key={founder.name}
              whileHover={{ y: -6 }}
              className="group space-y-6"
            >
              {/* Founder Image Container */}
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-studio-card border border-studio-border shadow-xl">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-6 left-6 rounded-full bg-black/60 backdrop-blur-md px-4 py-1.5 border border-white/20">
                  <span className="font-display text-lg text-white">{founder.number}</span>
                </div>
              </div>

              {/* Founder Profile Details */}
              <div className="space-y-2 border-t border-studio-border pt-4">
                <span className="text-xs font-mono text-studio-purple uppercase tracking-widest font-bold">
                  {founder.role}
                </span>
                <h3 className="font-display text-4xl md:text-5xl text-studio-dark group-hover:text-studio-purple transition-colors uppercase">
                  {founder.name}
                </h3>
                <p className="text-sm text-studio-secondary font-sans leading-relaxed pt-1">
                  {founder.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* OUR CREATIVE PROCESS */}
      <section className="py-24 bg-studio-dark text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="space-y-4 mb-16">
            <span className="text-xs font-mono text-studio-purple uppercase tracking-widest block">
              WORKFLOW & EXECUTION
            </span>
            <h2 className="font-display text-6xl md:text-8xl text-white uppercase leading-none">
              OUR CREATIVE PROCESS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 space-y-4 hover:border-studio-purple/50 transition-colors"
              >
                <span className="font-display text-4xl text-studio-purple block">
                  {step.step}
                </span>
                <h4 className="font-display text-2xl text-white uppercase">{step.title}</h4>
                <p className="text-xs text-gray-400 font-sans leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CALL TO ACTION */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          <span className="text-xs font-mono text-studio-purple uppercase tracking-widest block">
            READY TO COLLABORATE?
          </span>
          <h2 className="font-display text-6xl md:text-8xl text-studio-dark uppercase leading-none">
            LET'S CREATE SOMETHING WORTH REMEMBERING.
          </h2>
          <div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-studio-dark px-9 py-5 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-studio-purple hover:scale-105"
            >
              <span>CONTACT STUDIO</span>
              <ArrowUpRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
