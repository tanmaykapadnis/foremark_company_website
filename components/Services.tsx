"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-block px-4 py-1.5 rounded-full border border-border bg-muted/40 text-xs text-neutral-300 mb-6">
            Our Services
          </div>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Expertise That Drives Quality
          </h2>
          <p className="mt-5 text-neutral-400 max-w-2xl mx-auto text-sm">
            From custom software systems to AI automation — we build technology that solves real problems at scale.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {/* Web & App Maintenance */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            className="card-glass p-8 rounded-3xl text-center"
          >
            <div className="card-grid-overlay" />
            <div className="relative z-10 w-14 h-14 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center mx-auto mb-6">
              <Image src="/assets/icon-gear.svg" alt="" width={20} height={20} />
            </div>
            <h3 className="relative z-10 text-xl font-medium mb-3">Web & App Maintenance</h3>
            <p className="relative z-10 text-neutral-400 text-sm leading-relaxed">
              We handle your hosting, server management, updates, and uptime — so you never have to worry about your product going down. We keep it running, fast and stable.
            </p>
          </motion.div>

          {/* Custom Web Apps & Websites */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="card-glass p-8 rounded-3xl text-center"
          >
            <div className="card-grid-overlay" />
            <div className="relative z-10 w-14 h-14 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center mx-auto mb-6">
              <Image src="/assets/icon-server.svg" alt="" width={20} height={20} />
            </div>
            <h3 className="relative z-10 text-xl font-medium mb-3">Custom Web Apps & Websites</h3>
            <p className="relative z-10 text-neutral-400 text-sm leading-relaxed mb-5">
              We build your product from the ground up — whether it&apos;s a business website, a SaaS platform, or a full web application. Designed well, engineered to scale.
            </p>
            {/* Code snippet decoration */}
            <div className="relative z-10 rounded-xl bg-background border border-border p-4 text-left text-[11px] text-neutral-500 font-mono leading-relaxed">
              <div><span className="text-accent">Class</span> <span className="text-white">ChatBot</span>{"{"}</div>
              <div className="pl-3"><span className="text-neutral-600">address</span> <span className="text-accent">public</span> owner;</div>
              <div className="pl-3"><span className="text-neutral-600">int</span> <span className="text-accent">private</span> response;</div>
              <div className="pl-3"><span className="text-purple-400">constructor</span>(){"{"}</div>
              <div className="pl-6">owner = msg.sender;</div>
              <div className="pl-3">{"}"}</div>
              <div>{"}"}</div>
            </div>
          </motion.div>

          {/* Smart Automation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="card-glass p-8 rounded-3xl text-center"
          >
            <div className="card-grid-overlay" />
            <div className="relative z-10 w-14 h-14 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center mx-auto mb-6">
              <Image src="/assets/icon-bolt.svg" alt="" width={20} height={20} />
            </div>
            <h3 className="relative z-10 text-xl font-medium mb-3">Smart Automation</h3>
            <p className="relative z-10 text-neutral-400 text-sm leading-relaxed mb-5">
              We map your business processes and build intelligent automations that save time, reduce manual work, and help your team focus on what actually matters.
            </p>
            <div className="relative z-10 flex flex-wrap items-center justify-center gap-2 text-[11px]">
              <span className="px-3 py-1.5 rounded-full bg-background border border-border">Trigger</span>
              <ArrowRight size={10} className="text-neutral-600" />
              <span className="px-3 py-1.5 rounded-full bg-background border border-border">Prompts</span>
              <ArrowRight size={10} className="text-neutral-600" />
              <span className="px-3 py-1.5 rounded-full bg-accent/20 border border-accent/40 text-accent inline-flex items-center gap-1">
                <Image src="/assets/icon-mail-white.svg" alt="" width={12} height={12} className="invert-0" /> Send Email
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
