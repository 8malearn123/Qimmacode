import Image from "next/image";

/**
 * Client logos marquee: the brands behind the projects in the work deck.
 * Files live in public/clients/ as SVGs drawn on the tile's own 200×64 canvas,
 * so each file sets its logo's size and position (shown "contain" in the tile).
 */
const CLIENT_LOGOS = [
  { src: "/clients/heet.svg", name: "هيت قهوة مختصة" },
  { src: "/clients/forsa.svg", name: "فرصة" },
  { src: "/clients/hood.svg", name: "هود" },
  { src: "/clients/pinkcake.svg", name: "بينك كيك" },
];

/**
 * One pass of the loop. It has to be wider than the strip (up to 1120px at
 * 214px per tile) for the loop to stay seamless, so a short list repeats.
 */
const ROW = Array.from({ length: Math.ceil(6 / CLIENT_LOGOS.length) }, () => CLIENT_LOGOS).flat();

function LogoRow({ clone }: { clone?: boolean }) {
  return (
    <div
      aria-hidden={clone || undefined}
      style={{ display: "flex", gap: 14, paddingInlineEnd: 14, pointerEvents: clone ? "none" : undefined }}
    >
      {ROW.map((logo, i) => (
        <div
          key={i}
          style={{ position: "relative", width: 200, height: 64, flexShrink: 0, background: "var(--qm-surface)", border: "1px solid var(--qm-border)", borderRadius: 14, overflow: "hidden" }}
        >
          {/* Repeats are decorative: each client is named once. */}
          <Image src={logo.src} alt={clone || i >= CLIENT_LOGOS.length ? "" : logo.name} fill unoptimized sizes="200px" style={{ objectFit: "contain" }} />
        </div>
      ))}
    </div>
  );
}

export function ClientLogos() {
  return (
    <section style={{ padding: "clamp(28px,4vw,44px) 0" }} data-reveal="1">
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 clamp(16px,3vw,30px)" }}>
        <div style={{ textAlign: "center", fontSize: 12.5, fontWeight: 600, color: "var(--qm-faint)", marginBottom: 20 }}>عملاء نعتزّ بثقتهم</div>
        <div style={{ overflow: "hidden", WebkitMaskImage: "linear-gradient(90deg,transparent,#000 9%,#000 91%,transparent)", maskImage: "linear-gradient(90deg,transparent,#000 9%,#000 91%,transparent)" }}>
          {/* 7.5s per tile keeps the original pace (six tiles in 45s) whatever the row length. */}
          <div className="hv-pause" style={{ display: "flex", width: "max-content", animation: `qmMarquee ${ROW.length * 7.5}s linear infinite` }}>
            <LogoRow />
            <LogoRow clone />
          </div>
        </div>
      </div>
    </section>
  );
}
