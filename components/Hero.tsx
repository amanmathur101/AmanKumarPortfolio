import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { PERSONAL_DETAILS } from "../constants";

/**
 * Simple typing effect (same behavior as before)
 */
const TypingEffect: React.FC<{ text: string }> = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.slice(0, ++i));
      } else clearInterval(t);
    }, 45);
    return () => clearInterval(t);
  }, [text]);
  return (
    <span>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

/**
 * Simplified Hero component — same logic, cleaner structure, mobile-friendly
 * Note: image uses the local uploaded path so the environment/tool will convert it to a served URL.
 */
const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;
    const headerOffset = 80;
    const top = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
    window.scrollTo({ top, behavior: "smooth" });
    window.history.pushState(null, "", href);
  };

  return (
    <section className="relative min-h-[65vh] md:min-h-screen flex items-center pt-16 md:pt-24 px-6 overflow-hidden mesh-gradient">
      {/* subtle background blobs */}
      <div className="absolute top-16 right-6 w-56 h-56 md:w-72 md:h-72 bg-primary/18 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-8 left-4 w-72 h-72 md:w-96 md:h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center w-full">
        {/* LEFT: text */}
        <div className="text-center md:text-left py-6 md:py-0">
          <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-primary uppercase bg-primary/10 rounded-full border border-primary/20">
            Available for Work
          </motion.span>

          <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="text-4xl md:text-6xl font-bold text-white leading-tight mb-3">
            Hi, I'm <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{PERSONAL_DETAILS.name}</span>
          </motion.h1>

          <motion.h2 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="text-lg md:text-2xl text-slate-300 mb-4 font-medium">
            <TypingEffect text={PERSONAL_DETAILS.role} />
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="text-slate-400 text-sm md:text-base mb-6 max-w-md">
            {PERSONAL_DETAILS.tagline}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
            <a href="#contact" onClick={(e) => handleScroll(e, "#contact")} className="flex items-center gap-2 px-5 py-3 bg-primary text-dark font-bold rounded-lg hover:scale-105 transition-transform shadow-md">
              Contact Me <ArrowRight size={16} />
            </a>

            <a href="/Aman-Kumar-Resume.pdf" download className="flex items-center gap-2 px-5 py-3 bg-slate-800/50 border border-slate-600 text-white rounded-lg hover:bg-slate-800 transition-colors">
              Resume <Download size={16} />
            </a>
          </motion.div>
        </div>

        {/* RIGHT: image */}
        <div className="flex justify-center md:justify-end items-center py-6 md:py-0">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.7 }} className="relative">
            <div className="w-40 sm:w-56 md:w-80 lg:w-96 h-40 sm:h-56 md:h-80 lg:h-96 rounded-full overflow-hidden border-2 md:border-4 border-slate-800 shadow-2xl">
              <img
                src="/assets/skills/Aman.jpg"
                alt={PERSONAL_DETAILS.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(PERSONAL_DETAILS.name)}&background=0D8ABC&color=fff&size=256`;
                }}
              />
            </div>

            <motion.div animate={{ y: [-6, 6, -6] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute -bottom-3 -left-3 md:bottom-4 md:left-0 bg-card border border-slate-700 p-3 rounded-2xl shadow-xl flex items-center gap-3">
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
              <div className="text-xs">
                <p className="text-slate-400">Status</p>
                <p className="text-white font-bold">Open to Work</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
