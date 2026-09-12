import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, ChevronDown, Mail, Phone, Instagram, MapPin } from 'lucide-react';

export default function NavigationMenu({ isOpen, onClose }) {
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const navigate = useNavigate();

  const handleNav = (path) => {
    onClose();
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4 } },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };

  const drawerVariants = {
    hidden: { x: '100%' },
    visible: { 
      x: 0, 
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } 
    },
    exit: { 
      x: '100%', 
      transition: { duration: 0.4, ease: [0.7, 0, 0.84, 0] } 
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex justify-end overflow-hidden">
          {/* Backdrop */}
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-md"
          />

          {/* Editorial Off-Canvas Drawer */}
          <motion.div
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative z-10 w-full max-w-2xl h-full bg-[#111111] text-white flex flex-col justify-between overflow-y-auto border-l border-white/10 px-8 py-10 md:px-14 md:py-12"
          >
            {/* Top Bar inside Menu */}
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <div className="flex items-center gap-3">
                <img 
                  src="/logo-mark-removebg-preview.png" 
                  alt="The Take Studio Mark" 
                  className="h-8 w-auto invert"
                />
                <div>
                  <span className="font-display text-lg tracking-wider text-white">THE TAKE STUDIO</span>
                  <p className="text-[10px] text-gray-400 tracking-widest font-mono">CAPTURE · CREATE · CONNECT</p>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="group flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-black"
              >
                <span>CLOSE</span>
                <X className="h-4 w-4 transition-transform group-hover:rotate-90" />
              </button>
            </div>

            {/* Main Menu Links */}
            <div className="my-8 flex-1 py-4">
              <span className="text-[11px] font-mono tracking-widest text-studio-purple uppercase mb-6 block">
                MENU NAVIGATION
              </span>

              <nav className="space-y-4">
                {/* 1. HOME */}
                <button
                  onClick={() => handleNav('/')}
                  className="group flex w-full items-center justify-between py-2 text-left text-3xl md:text-4xl font-display uppercase tracking-wide text-white transition-all hover:pl-3 hover:text-studio-purple"
                >
                  <span>HOME</span>
                  <ArrowUpRight className="h-6 w-6 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>

                {/* 2. ABOUT US */}
                <button
                  onClick={() => handleNav('/about')}
                  className="group flex w-full items-center justify-between py-2 text-left text-3xl md:text-4xl font-display uppercase tracking-wide text-white transition-all hover:pl-3 hover:text-studio-purple"
                >
                  <span>ABOUT US</span>
                  <ArrowUpRight className="h-6 w-6 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>

                {/* 3. SERVICES (Expandable Accordion) */}
                <div className="border-y border-white/10 py-3">
                  <button
                    onClick={() => setServicesExpanded(!servicesExpanded)}
                    className="flex w-full items-center justify-between py-2 text-left text-3xl md:text-4xl font-display uppercase tracking-wide text-white transition-colors hover:text-studio-purple"
                  >
                    <div className="flex items-center gap-3">
                      <span>SERVICES</span>
                      <span className="text-xs font-mono tracking-widest text-studio-purple bg-studio-purple/20 px-2 py-0.5 rounded-full">
                        3 DISCIPLINES
                      </span>
                    </div>
                    <ChevronDown
                      className={`h-6 w-6 transition-transform duration-300 ${
                        servicesExpanded ? 'rotate-180 text-studio-purple' : 'text-white/60'
                      }`}
                    />
                  </button>

                  {/* Sub-menu (3 Disciplines) */}
                  <AnimatePresence>
                    {servicesExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden space-y-3 pt-3 pb-2 pl-4"
                      >
                        {/* Overview */}
                        <div
                          onClick={() => handleNav('/services')}
                          className="group cursor-pointer rounded-lg bg-white/5 p-4 border border-white/10 transition-colors hover:bg-studio-purple/20 hover:border-studio-purple/50"
                        >
                          <div className="flex items-center justify-between">
                            <h4 className="font-display text-xl text-white group-hover:text-studio-purple">
                              ALL SERVICES OVERVIEW
                            </h4>
                            <ArrowUpRight className="h-4 w-4 text-white/50 group-hover:text-studio-purple" />
                          </div>
                          <p className="text-xs text-gray-400 mt-1 font-sans">
                            Complete studio capabilities & deliverables
                          </p>
                        </div>

                        {/* Podcast Production */}
                        <div
                          onClick={() => handleNav('/services/podcast-production')}
                          className="group cursor-pointer rounded-lg bg-white/5 p-4 border border-white/10 transition-colors hover:bg-studio-purple/20 hover:border-studio-purple/50"
                        >
                          <div className="flex items-center justify-between">
                            <h4 className="font-display text-xl text-white group-hover:text-studio-purple">
                              PODCAST PRODUCTION
                            </h4>
                            <ArrowUpRight className="h-4 w-4 text-white/50 group-hover:text-studio-purple" />
                          </div>
                          <p className="text-xs text-gray-400 mt-1 font-sans">
                            4K multi-camera audio & video show production
                          </p>
                        </div>

                        {/* Video Production & Films */}
                        <div
                          onClick={() => handleNav('/services/video-production')}
                          className="group cursor-pointer rounded-lg bg-white/5 p-4 border border-white/10 transition-colors hover:bg-studio-purple/20 hover:border-studio-purple/50"
                        >
                          <div className="flex items-center justify-between">
                            <h4 className="font-display text-xl text-white group-hover:text-studio-purple">
                              VIDEO PRODUCTION & FILMS
                            </h4>
                            <ArrowUpRight className="h-4 w-4 text-white/50 group-hover:text-studio-purple" />
                          </div>
                          <p className="text-xs text-gray-400 mt-1 font-sans">
                            Commercial films, brand films & cinematic stories
                          </p>
                        </div>

                        {/* Branded Content */}
                        <div
                          onClick={() => handleNav('/services/branded-content')}
                          className="group cursor-pointer rounded-lg bg-white/5 p-4 border border-white/10 transition-colors hover:bg-studio-purple/20 hover:border-studio-purple/50"
                        >
                          <div className="flex items-center justify-between">
                            <h4 className="font-display text-xl text-white group-hover:text-studio-purple">
                              BRANDED CONTENT
                            </h4>
                            <ArrowUpRight className="h-4 w-4 text-white/50 group-hover:text-studio-purple" />
                          </div>
                          <p className="text-xs text-gray-400 mt-1 font-sans">
                            High-engagement digital & social campaigns
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* 4. WORK / PORTFOLIO */}
                <button
                  onClick={() => handleNav('/work')}
                  className="group flex w-full items-center justify-between py-2 text-left text-3xl md:text-4xl font-display uppercase tracking-wide text-white transition-all hover:pl-3 hover:text-studio-purple"
                >
                  <span>WORK / PORTFOLIO</span>
                  <ArrowUpRight className="h-6 w-6 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>

                {/* 5. PODCASTS & SHOWS */}
                <button
                  onClick={() => handleNav('/podcasts')}
                  className="group flex w-full items-center justify-between py-2 text-left text-3xl md:text-4xl font-display uppercase tracking-wide text-white transition-all hover:pl-3 hover:text-studio-purple"
                >
                  <span>PODCASTS & SHOWS</span>
                  <ArrowUpRight className="h-6 w-6 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>

                {/* 6. VIDEO FILMS & REEL */}
                <button
                  onClick={() => handleNav('/video-films')}
                  className="group flex w-full items-center justify-between py-2 text-left text-3xl md:text-4xl font-display uppercase tracking-wide text-white transition-all hover:pl-3 hover:text-studio-purple"
                >
                  <span>VIDEO FILMS & REEL</span>
                  <ArrowUpRight className="h-6 w-6 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>

                {/* 7. BRANDED CONTENT */}
                <button
                  onClick={() => handleNav('/services/branded-content')}
                  className="group flex w-full items-center justify-between py-2 text-left text-3xl md:text-4xl font-display uppercase tracking-wide text-white transition-all hover:pl-3 hover:text-studio-purple"
                >
                  <span>BRANDED CONTENT</span>
                  <ArrowUpRight className="h-6 w-6 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>

                {/* 8. CLIENTS & PARTNERS */}
                <button
                  onClick={() => handleNav('/clients')}
                  className="group flex w-full items-center justify-between py-2 text-left text-3xl md:text-4xl font-display uppercase tracking-wide text-white transition-all hover:pl-3 hover:text-studio-purple"
                >
                  <span>CLIENTS & PARTNERS</span>
                  <ArrowUpRight className="h-6 w-6 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>

                {/* 9. CONTACT STUDIO */}
                <button
                  onClick={() => handleNav('/contact')}
                  className="group flex w-full items-center justify-between py-2 text-left text-3xl md:text-4xl font-display uppercase tracking-wide text-studio-purple transition-all hover:pl-3 hover:text-white"
                >
                  <span>CONTACT STUDIO</span>
                  <ArrowUpRight className="h-6 w-6 opacity-100 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </nav>
            </div>

            {/* Bottom Meta & Contact Info */}
            <div className="border-t border-white/10 pt-6 mt-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-gray-400">
                <div className="space-y-1">
                  <span className="font-mono text-studio-purple uppercase tracking-wider block">CONTACT</span>
                  <a href="mailto:hello@thetakestudio.com" className="hover:text-white transition-colors block">
                    hello@thetakestudio.com
                  </a>
                  <a href="tel:+919876543210" className="hover:text-white transition-colors block">
                    +91 98765 43210
                  </a>
                </div>
                <div className="space-y-1">
                  <span className="font-mono text-studio-purple uppercase tracking-wider block">STUDIO LOCATION</span>
                  <p>Mumbai & New Delhi, India</p>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white hover:text-studio-purple transition-colors inline-block mt-1">
                    @thetakestudio →
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
