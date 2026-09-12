import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, ArrowUpRight } from 'lucide-react';
import NavigationMenu from './NavigationMenu';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md py-4 border-b border-studio-border shadow-sm'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src="/logo-removebg-preview.png"
              alt="THE TAKE STUDIO"
              className="h-16 md:h-20 w-auto object-contain transition-transform scale-[1.8] md:scale-[2.5] origin-left"
            />
          </Link>

          {/* Right Action & Menu Toggle */}
          <div className="flex items-center">
            {/* Menu Trigger Button */}
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="flex items-center gap-2 rounded-full border border-studio-dark/20 bg-white/80 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-studio-dark transition-all hover:border-studio-purple hover:bg-studio-purple hover:text-white"
            >
              <span>MENU</span>
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Reference-Style Menu Navigation Overlay */}
      <NavigationMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
