import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Instagram, Mail, Phone, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-studio-dark text-white border-t border-white/10 pt-20 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Massive Call to Action Section */}
        <div className="border-b border-white/10 pb-16 mb-16">
          <span className="text-xs font-mono text-studio-purple uppercase tracking-widest block mb-4">
            START YOUR PROJECT
          </span>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h2 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight text-white leading-none">
                LET'S CREATE <br />
                <span className="text-studio-purple">SOMETHING WORTH</span> <br />
                REMEMBERING.
              </h2>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-5 text-sm font-bold uppercase tracking-widest text-black transition-all hover:bg-studio-purple hover:text-white hover:scale-105"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Studio Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 border-b border-white/10 pb-16 mb-12">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo-removebg-preview.png"
                alt="THE TAKE STUDIO"
                className="h-20 md:h-24 w-auto invert scale-[1.8] md:scale-[2.5] origin-left"
              />
            </div>
            <p className="text-xs font-mono text-studio-purple tracking-widest uppercase">
              CAPTURE · CREATE · CONNECT
            </p>
            <p className="text-sm text-gray-400 max-w-sm font-sans leading-relaxed">
              A premium creative production studio crafting high-impact cinematic films, 4K multi-camera podcasts, and branded digital content.
            </p>
          </div>

          {/* Col 2: Core Pages */}
          <div className="space-y-3">
            <h4 className="font-display text-lg text-white tracking-wider">NAVIGATION</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <Link to="/" className="hover:text-studio-purple transition-colors">HOME</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-studio-purple transition-colors">ABOUT US</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-studio-purple transition-colors">SERVICES</Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-studio-purple transition-colors">WORK / PORTFOLIO</Link>
              </li>
              <li>
                <Link to="/clients" className="hover:text-studio-purple transition-colors">CLIENTS & PARTNERS</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-studio-purple transition-colors">CONTACT STUDIO</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Disciplines */}
          <div className="space-y-3">
            <h4 className="font-display text-lg text-white tracking-wider">SERVICES</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <Link to="/services/podcast-production" className="hover:text-studio-purple transition-colors">PODCAST PRODUCTION</Link>
              </li>
              <li>
                <Link to="/services/video-production" className="hover:text-studio-purple transition-colors">VIDEO PRODUCTION & FILMS</Link>
              </li>
              <li>
                <Link to="/services/branded-content" className="hover:text-studio-purple transition-colors">BRANDED CONTENT</Link>
              </li>
              <li>
                <Link to="/podcasts" className="hover:text-studio-purple transition-colors">PODCASTS & SHOWS</Link>
              </li>
              <li>
                <Link to="/video-films" className="hover:text-studio-purple transition-colors">VIDEO FILMS & REEL</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Social */}
          <div className="space-y-3">
            <h4 className="font-display text-lg text-white tracking-wider">CONNECT</h4>
            <div className="space-y-2 text-xs text-gray-400">
              <a href="mailto:hello@thetakestudio.com" className="flex items-center gap-2 hover:text-studio-purple transition-colors">
                <Mail className="h-3.5 w-3.5" />
                <span>hello@thetakestudio.com</span>
              </a>
              <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-studio-purple transition-colors">
                <Phone className="h-3.5 w-3.5" />
                <span>+91 98765 43210</span>
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-studio-purple transition-colors">
                <MessageSquare className="h-3.5 w-3.5" />
                <span>WhatsApp Studio</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-studio-purple transition-colors">
                <Instagram className="h-3.5 w-3.5" />
                <span>@thetakestudio</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} THE TAKE STUDIO. ALL RIGHTS RESERVED.</p>
          <p className="text-gray-400">CAPTURE · CREATE · CONNECT</p>
        </div>
      </div>
    </footer>
  );
}
