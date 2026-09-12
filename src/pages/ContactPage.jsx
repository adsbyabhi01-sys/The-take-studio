import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Phone, MessageSquare, Instagram, MapPin, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Podcast Production',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen pt-24">
      {/* HEADER HERO */}
      <section className="px-6 md:px-12 py-16 md:py-24 max-w-7xl mx-auto border-b border-studio-border">
        <div className="space-y-6">
          <span className="text-xs font-mono text-studio-purple uppercase tracking-widest block">
            START YOUR PROJECT WITH THE TAKE STUDIO
          </span>
          <h1 className="font-display text-8xl md:text-9xl lg:text-[11rem] leading-none text-studio-dark uppercase">
            CONTACT STUDIO
          </h1>
          <div className="pt-4 max-w-4xl space-y-4">
            <h2 className="font-display text-4xl md:text-6xl text-studio-dark uppercase leading-tight">
              HAVE A STORY TO TELL? <br />
              <span className="text-studio-purple">LET'S CREATE SOMETHING</span> WORTH REMEMBERING.
            </h2>
            <p className="text-base text-studio-secondary font-sans leading-relaxed">
              Reach out to reserve podcast studio time, discuss a commercial film concept, or launch a branded content campaign.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN FORM & DIRECT CONTACT INFO SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Direct Studio Contacts */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <span className="text-xs font-mono text-studio-purple uppercase tracking-widest block">
                DIRECT CONTACT CHANNELS
              </span>
              <h3 className="font-display text-4xl text-studio-dark uppercase">STUDIO DESK</h3>
              <p className="text-sm text-studio-secondary font-sans leading-relaxed">
                Connect directly with our producers and creative directors.
              </p>
            </div>

            {/* Contact Badges */}
            <div className="space-y-6">
              {/* WHATSAPP */}
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between p-6 rounded-2xl bg-studio-card border border-studio-border hover:border-studio-purple hover:bg-studio-purple/5 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-studio-purple/10 p-3 text-studio-purple">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="font-display text-2xl text-studio-dark group-hover:text-studio-purple transition-colors block uppercase">
                      WHATSAPP STUDIO
                    </span>
                    <span className="text-xs font-mono text-studio-secondary">+91 98765 43210</span>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-studio-dark group-hover:text-studio-purple" />
              </a>

              {/* EMAIL */}
              <a
                href="mailto:hello@thetakestudio.com"
                className="group flex items-center justify-between p-6 rounded-2xl bg-studio-card border border-studio-border hover:border-studio-purple hover:bg-studio-purple/5 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-studio-purple/10 p-3 text-studio-purple">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="font-display text-2xl text-studio-dark group-hover:text-studio-purple transition-colors block uppercase">
                      EMAIL INQUIRIES
                    </span>
                    <span className="text-xs font-mono text-studio-secondary">hello@thetakestudio.com</span>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-studio-dark group-hover:text-studio-purple" />
              </a>

              {/* INSTAGRAM */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between p-6 rounded-2xl bg-studio-card border border-studio-border hover:border-studio-purple hover:bg-studio-purple/5 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-studio-purple/10 p-3 text-studio-purple">
                    <Instagram className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="font-display text-2xl text-studio-dark group-hover:text-studio-purple transition-colors block uppercase">
                      INSTAGRAM
                    </span>
                    <span className="text-xs font-mono text-studio-secondary">@thetakestudio</span>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-studio-dark group-hover:text-studio-purple" />
              </a>
            </div>

            {/* Studio Address */}
            <div className="p-6 rounded-2xl bg-studio-dark text-white space-y-2">
              <div className="flex items-center gap-2 text-studio-purple">
                <MapPin className="h-4 w-4" />
                <span className="text-xs font-mono uppercase tracking-widest">STUDIO LOCATIONS</span>
              </div>
              <p className="font-display text-xl text-white">MUMBAI & NEW DELHI, INDIA</p>
              <p className="text-xs text-gray-400 font-sans">Available for global on-location film and podcast shoots.</p>
            </div>
          </div>

          {/* Right Column: Project Request Form */}
          <div className="lg:col-span-7 bg-studio-card p-8 md:p-12 rounded-3xl border border-studio-border shadow-lg">
            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-16 text-center space-y-6"
              >
                <div className="w-20 h-20 rounded-full bg-studio-purple/20 border border-studio-purple text-studio-purple flex items-center justify-center mx-auto">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h3 className="font-display text-4xl text-studio-dark uppercase">
                  PROJECT REQUEST RECEIVED!
                </h3>
                <p className="text-sm text-studio-secondary max-w-md mx-auto font-sans leading-relaxed">
                  Thank you for contacting THE TAKE STUDIO. Our team will review your story details and respond within 24 hours.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase text-studio-purple hover:underline"
                >
                  Send another message →
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-mono text-studio-purple uppercase tracking-widest block">
                    PROJECT INQUIRY FORM
                  </span>
                  <h3 className="font-display text-4xl text-studio-dark uppercase">
                    TELL US ABOUT YOUR PROJECT
                  </h3>
                </div>

                {/* NAME */}
                <div className="space-y-1">
                  <label className="text-xs font-mono uppercase text-studio-dark tracking-wider block">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl border border-studio-border bg-white px-5 py-4 text-sm text-studio-dark focus:border-studio-purple focus:outline-none transition-colors"
                  />
                </div>

                {/* EMAIL & PHONE GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* EMAIL */}
                  <div className="space-y-1">
                    <label className="text-xs font-mono uppercase text-studio-dark tracking-wider block">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="rahul@brand.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-studio-border bg-white px-5 py-4 text-sm text-studio-dark focus:border-studio-purple focus:outline-none transition-colors"
                    />
                  </div>

                  {/* PHONE */}
                  <div className="space-y-1">
                    <label className="text-xs font-mono uppercase text-studio-dark tracking-wider block">
                      PHONE NUMBER *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl border border-studio-border bg-white px-5 py-4 text-sm text-studio-dark focus:border-studio-purple focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* PROJECT TYPE */}
                <div className="space-y-1">
                  <label className="text-xs font-mono uppercase text-studio-dark tracking-wider block">
                    PROJECT TYPE *
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full rounded-xl border border-studio-border bg-white px-5 py-4 text-sm text-studio-dark focus:border-studio-purple focus:outline-none transition-colors"
                  >
                    <option value="Podcast Production">Podcast Production (4K Multi-Cam)</option>
                    <option value="Video Production & Films">Video Production & Commercial Films</option>
                    <option value="Branded Content">Branded Content & Social Campaign</option>
                    <option value="Full Studio Retainer">Full Studio Retainer</option>
                  </select>
                </div>

                {/* MESSAGE */}
                <div className="space-y-1">
                  <label className="text-xs font-mono uppercase text-studio-dark tracking-wider block">
                    MESSAGE / STORY OUTLINE *
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Tell us about your brand, timeline, and what story you want to bring to life..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl border border-studio-border bg-white px-5 py-4 text-sm text-studio-dark focus:border-studio-purple focus:outline-none transition-colors"
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 rounded-full bg-studio-dark py-5 text-sm font-bold uppercase tracking-widest text-white hover:bg-studio-purple transition-all shadow-lg"
                >
                  <span>START A PROJECT</span>
                  <ArrowUpRight className="h-5 w-5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
