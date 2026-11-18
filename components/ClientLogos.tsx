import Image from "next/image";

/**
 * Client logos marquee. Files live in public/clients/ (322×228, shown "contain"
 * inside a 200×64 tile). Swap the entries below to change the logos.
 */
const CLIENT_LOGOS = [
  { src: "/clients/client-1.webp", name: "JAZ Chocolate" },
  { src: "/clients/client-2.webp", name: "JAZ Chocolate" },
  { src: "/clients/client-3.webp", name: "JAZ Chocolate" },
  { src: "/clients/client-4.webp", name: "JAZ Chocolate" },
  { src: "/clients/client-5.webp", name: "JAZ Chocolate" },
  { src: "/clients/client-6.webp", name: "JAZ Chocolate" },
];

function LogoRow({ clone }: { clone?: boolean }) {
  return (
    <div
      aria-hidden={clone || undefined}
      style={{ display: "flex", gap: 14, paddingInlineEnd: 14, pointerEvents: clone ? "none" : undefined }}
    >
      {CLIENT_LOGOS.map((logo, i) => (
        <div
          key={i}
          style={{ position: "relative", width: 200, height: 64, flexShrink: 0, background: "var(--qm-surface)", border: "1px solid var(--qm-border)", borderRadius: 14, overflow: "hidden" }}
        >
          <Image src={logo.src} alt={clone ? "" : logo.name} fill unoptimized sizes="200px" style={{ objectFit: "contain" }} />
        </div>
      ))}
    </div>
  );
}

export function ClientLogos() {
  return (
    <section style={{ padding: "clamp(28px,4vw,44px) 0" }} data-reveal="1">
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 clamp(16px,3vw,30px)" }}>
        <div style={{ textAlign: "center", fontSize: 12.5, fontWeight: 600, color: "var(--qm-faint)", marginBottom: 20 }}>فرق تبني أشياء جيدة تعمل معنا</div>
        <div style={{ overflow: "hidden", WebkitMaskImage: "linear-gradient(90deg,transparent,#000 9%,#000 91%,transparent)", maskImage: "linear-gradient(90deg,transparent,#000 9%,#000 91%,transparent)" }}>
          <div className="hv-pause" style={{ display: "flex", width: "max-content", animation: "qmMarquee 45s linear infinite" }}>
            <LogoRow />
            <LogoRow clone />
          </div>
        </div>
      </div>
    </section>
  );
}
