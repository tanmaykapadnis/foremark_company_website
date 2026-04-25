"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function Diamond() {
  return (
    <svg className="inline-block align-middle mx-3 -translate-y-1" width="36" height="36" viewBox="0 0 24 24" fill="none">
      <motion.path
        animate={{ rotate: 360, scale: [1, 1.15, 1] }}
        transition={{ rotate: { repeat: Infinity, duration: 8, ease: "linear" }, scale: { repeat: Infinity, duration: 3, ease: "easeInOut" } }}
        style={{ transformOrigin: "12px 12px" }}
        d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z"
        fill="var(--accent)"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative pt-40 pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-accent/[0.05] blur-[140px]" />
      {/* Strong orange radial glow behind headline */}
      <div className="hero-glow" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm text-xs text-neutral-300 mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 inline-block" /> Mumbai Based ✦ Engineering First Company
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[88px] xl:text-[96px] font-semibold leading-[1.02]"
          style={{ fontFamily: "var(--font-heading)", letterSpacing: "-2px" }}
        >
          <span className="text-accent">Development Agency</span>
          <br />
          Beyond <Diamond /> Limits.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 text-neutral-400 max-w-xl mx-auto text-base md:text-lg"
        >
          We design and engineer intelligent digital systems that help companies build, scale, and automate modern technology platforms.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 flex items-center justify-center gap-4 hero-cta-blur rounded-full"
        >
          <a href="#why-us" className="btn-glow inline-flex items-center gap-2 bg-accent text-black font-medium px-6 py-3 rounded-full hover:brightness-110 transition-all duration-300">
            Learn More <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
