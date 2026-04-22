import Image from "next/image";

const clients = [
  { src: "/assets/client-pain-instacure.png", alt: "Pain Instacure" },
  { src: "/assets/client-regius.png", alt: "Regius" },
  { src: "/assets/client-starton.png", alt: "Starton" },
  { src: "/assets/client-phoenix-legal.png", alt: "Phoenix Legal" },
  { src: "/assets/client-rus-med.png", alt: "Rus-Med Exports" },
];

export default function Marquee() {
  return (
    <section className="py-14 border-y border-border overflow-hidden">
      <p className="text-center text-xs uppercase tracking-[0.2em] text-neutral-500 mb-8">
        Our Recent Clients
      </p>
      <div className="relative">
        <div
          className="absolute inset-y-0 left-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, var(--background), transparent)" }}
        />
        <div
          className="absolute inset-y-0 right-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, var(--background), transparent)" }}
        />
        <div className="flex gap-20 items-center animate-[scroll_30s_linear_infinite] whitespace-nowrap">
          {[...clients, ...clients, ...clients].map((c, i) => (
            <div key={i} className="flex items-center shrink-0 h-10 opacity-70 hover:opacity-100 transition">
              <Image
                src={c.src}
                alt={c.alt}
                width={200}
                height={60}
                className="h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      <style>{`@keyframes scroll { from { transform: translateX(0) } to { transform: translateX(-33.33%) } }`}</style>
    </section>
  );
}
