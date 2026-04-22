"use client";
import { useState } from "react";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { href: "#why-us", label: "Why Us" },
  { href: "#mission", label: "Mission" },
  { href: "#works", label: "Works" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(96%,860px)]">
      <div className="flex items-center justify-between gap-4 pl-3 pr-2 py-2 rounded-full border border-border bg-background/70 backdrop-blur-xl">
        <a href="#" className="flex items-center gap-2 pl-1">
          <Image src="/assets/icon-foremark.png" alt="Foremark" width={28} height={28} className="h-7 w-7" priority />
          <div className="leading-[1] text-accent font-semibold text-[12px] hidden sm:block">
            Foremark<br /><span className="text-[10px]">Technologies</span>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-5 text-sm text-neutral-200">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white transition">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-1.5 border border-border bg-muted/60 text-sm px-4 py-2 rounded-full hover:bg-muted transition"
        >
          Let&apos;s Talk <ArrowUpRight size={14} />
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-neutral-200"
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden mt-2 rounded-2xl border border-border bg-background/90 backdrop-blur-xl p-4 flex flex-col gap-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-neutral-300 hover:text-white text-sm">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="border border-border bg-muted/60 text-sm px-4 py-2 rounded-full text-center">
            Let&apos;s Talk ↗
          </a>
        </div>
      )}
    </header>
  );
}
