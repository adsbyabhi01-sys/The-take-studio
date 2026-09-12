import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play } from 'lucide-react';

export default function VideoModal({ isOpen, onClose, videoUrl, title }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-lg"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative z-10 w-full max-w-5xl bg-[#111111] rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40">
            <div>
              <span className="text-[10px] font-mono text-studio-purple uppercase tracking-widest block">
                THE TAKE STUDIO PLAYER
              </span>
              <h3 className="font-display text-xl text-white">{title || 'CINEMATIC SHOWCASE'}</h3>
            </div>
            <button
              onClick={onClose}
              className="rounded-full bg-white/10 p-2 text-white hover:bg-white hover:text-black transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Video Container */}
          <div className="relative aspect-video w-full bg-black flex items-center justify-center">
            {videoUrl ? (
              <iframe
                src={videoUrl}
                title={title || "Video player"}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="text-center p-12 space-y-4">
                <div className="mx-auto w-16 h-16 rounded-full bg-studio-purple/20 border border-studio-purple flex items-center justify-center">
                  <Play className="h-8 w-8 text-studio-purple fill-studio-purple" />
                </div>
                <h4 className="font-display text-2xl text-white uppercase">SHOWREEL PREVIEW</h4>
                <p className="text-sm text-gray-400 max-w-md mx-auto">
                  High-definition 4K multi-camera master showreel stream. Experience cinematic storytelling crafted by THE TAKE STUDIO.
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
