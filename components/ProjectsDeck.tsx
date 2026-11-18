"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { PROJECTS, type Project } from "@/lib/projects";
import { ROTATE_MS, useProjects } from "@/components/ProjectsProvider";
import { DesktopPreview, PhonePreview } from "@/components/ProjectPreviews";

const ACCENT = ["#564d84", "#357f7f", "#b5623a", "#6b5fa0"];
const ACCENT_TINT = ["#e9e6f1", "#dcefef", "#f5e7de", "#e9e6f1"];
const FIELD = ["#564d84", "#dcefef", "#f5e7de", "#e9e6f1"];
const METRIC_TONE = ["var(--qm-primary)", "var(--qm-teal-deep)", "var(--qm-orange-deep)"];

/** Fan-out positions of the stacked cards, by distance from the active one. */
const DECK_POS = [
  { r: 0, x: 0, y: 0, s: 1 },
  { r: -4, x: -7, y: -22, s: 0.95 },
  { r: 3.5, x: 7, y: -38, s: 0.9 },
  { r: -2, x: 0, y: -54, s: 0.86 },
];

const DOT: CSSProperties = { width: 9, height: 9, borderRadius: "50%", opacity: 0.55 };

export function ProjectsDeck() {
  const { active, cycle, select } = useProjects();
  const current = PROJECTS[active];

  return (
    <>
      <div data-rsp="tab-row" style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 20 }}>
        {PROJECTS.map((p, i) => {
          const on = i === active;
          const acc = ACCENT[i % 4];
          return (
            <button
              key={p.num}
              type="button"
              className="qm-unbutton hv-lift"
              data-rsp="tab"
              data-on={on ? "1" : "0"}
              aria-pressed={on}
              onClick={() => select(i)}
              style={{ position: "relative", overflow: "hidden", display: "flex", alignItems: "center", gap: 12, padding: "12px 15px", cursor: "pointer", borderRadius: 16, flex: "1 1 200px", minWidth: 0, background: on ? acc : "var(--qm-surface)", border: "1px solid " + (on ? acc : "var(--qm-border)"), boxShadow: on ? "0 16px 34px -14px rgba(30,26,52,.42)" : "var(--qm-shadow-card)", transform: on ? "translateY(-2px)" : "none", transition: "background .3s, border-color .3s, transform var(--qm-dur-fast), box-shadow var(--qm-dur-fast)" }}
            >
              <span style={{ width: 34, height: 34, borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, lineHeight: 1, flexShrink: 0, background: on ? "rgba(255,255,255,.18)" : ACCENT_TINT[i % 4], color: on ? "#fff" : acc, transition: "background .3s, color .3s" }}>{p.num}</span>
              <span style={{ display: "block", flex: 1, minWidth: 0 }}>
                <span style={{ display: "block", fontSize: 14.5, fontWeight: 700, lineHeight: 1.35, color: on ? "#fff" : "var(--qm-ink)", transition: "color .3s", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{p.name}</span>
                <span style={{ display: "block", fontSize: 11.5, marginTop: 3, color: on ? "rgba(255,255,255,.72)" : "var(--qm-muted)", transition: "color .3s", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{p.tag}</span>
              </span>
              <span
                key={on ? `run-${cycle}` : "idle"}
                aria-hidden="true"
                style={{ position: "absolute", bottom: 0, insetInlineStart: 0, height: 3, borderRadius: 999, background: "rgba(255,255,255,.55)", width: "0%", animation: on ? `qmTabRun ${ROTATE_MS / 1000}s linear forwards` : "none" }}
              />
            </button>
          );
        })}
      </div>

      <div data-rsp="deck-field" style={{ position: "relative", borderRadius: 28, background: FIELD[active % FIELD.length], transition: "background .5s ease", overflow: "hidden", padding: "clamp(56px,7vw,96px) clamp(18px,3.4vw,48px) 0" }}>
        <div data-rsp="deck-chips" style={{ position: "absolute", top: "clamp(14px,2.4vw,26px)", insetInlineEnd: "clamp(14px,2.4vw,26px)", display: "flex", flexWrap: "wrap", gap: 10, zIndex: 12 }}>
          {current.metrics.map((m, i) => (
            <div key={i} style={{ display: "flex", alignItems: "baseline", gap: 7, padding: "10px 16px", borderRadius: 999, background: "var(--qm-surface)", boxShadow: "0 16px 34px -14px rgba(30,26,52,.35)", animation: `qmFloat ${5 + i}s ease-in-out ${i * 0.8}s infinite` }}>
              <span style={{ fontSize: 17, fontWeight: 700, color: METRIC_TONE[i % 3], lineHeight: 1.2 }}>{m.v}</span>
              <span style={{ fontSize: 11.5, color: "var(--qm-subtle)" }}>{m.l}</span>
            </div>
          ))}
        </div>

        <div style={{ position: "relative", height: "clamp(320px,36vw,470px)" }}>
          {PROJECTS.map((p, i) => {
            const off = (i - active + PROJECTS.length) % PROJECTS.length;
            const c = DECK_POS[off] ?? DECK_POS[3];
            return (
              <div
                key={p.num}
                data-rsp="deck-card"
                aria-hidden="true"
                onClick={() => select(i)}
                style={{ position: "absolute", insetInline: 0, marginInline: "auto", bottom: 0, width: "min(84%, 760px)", cursor: off ? "pointer" : "default", background: "var(--qm-surface)", border: "1px solid var(--qm-border)", borderRadius: "22px 22px 0 0", overflow: "hidden", boxShadow: "0 24px 60px -24px rgba(30,26,52,.45)", transform: `rotate(${c.r}deg) translateX(${c.x}%) translateY(${c.y}px) scale(${c.s})`, transformOrigin: "bottom center", zIndex: 10 - off, transition: "transform .5s cubic-bezier(.22,.61,.36,1)" }}
              >
                {p.device === "phone" ? <PhoneCard project={p} /> : <DesktopCard project={p} />}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

function Screenshot({ src, sizes }: { src: string; sizes: string }) {
  return <Image src={src} alt="" fill sizes={sizes} style={{ objectFit: "cover", objectPosition: "top center" }} />;
}

function DesktopCard({ project: p }: { project: Project }) {
  const shot = p.screens?.[0];
  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: 10, background: "var(--qm-surface-row)", borderBottom: "1px solid var(--qm-hairline)", padding: "10px 14px" }}>
        <span style={{ display: "flex", gap: 5, flexShrink: 0 }}>
          <span style={{ ...DOT, background: "#cf7a52" }} />
          <span style={{ ...DOT, background: "#58b3b3" }} />
          <span style={{ ...DOT, background: "var(--qm-violet)" }} />
        </span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 5, background: "var(--qm-surface)", border: "1px solid var(--qm-hairline)", borderRadius: 999, padding: "4px 12px", minWidth: 0 }}>
          <span className="msr" style={{ fontSize: 12, color: "var(--qm-faint)" }}>lock</span>
          <span style={{ fontFamily: "var(--qm-font-mono)", fontSize: 10.5, color: "var(--qm-muted)", letterSpacing: 0.3, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }} dir="ltr">{p.url}</span>
        </span>
        <span style={{ fontSize: 11, color: "var(--qm-faint)", flexShrink: 0, marginInlineStart: "auto" }}>{p.meta}</span>
      </div>
      <div style={{ position: "relative", height: "clamp(280px,32vw,428px)", background: "var(--qm-surface-soft)", overflow: "hidden" }}>
        {shot ? <Screenshot src={shot} sizes="(max-width: 720px) 94vw, 760px" /> : <DesktopPreview kind={p.preview} />}
      </div>
    </>
  );
}

function PhoneCard({ project: p }: { project: Project }) {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: 8, background: "var(--qm-surface-row)", borderBottom: "1px solid var(--qm-hairline)", padding: "10px 14px" }}>
        <span className="msr" style={{ fontSize: 15, color: "var(--qm-teal-deep)" }}>smartphone</span>
        <span dir="ltr" style={{ fontFamily: "var(--qm-font-mono)", fontSize: 10, fontWeight: 600, letterSpacing: 0.4, color: "var(--qm-teal-deep)", background: "var(--qm-teal-tint)", borderRadius: 999, padding: "3px 10px", whiteSpace: "nowrap" }}>App Store</span>
        <span dir="ltr" style={{ fontFamily: "var(--qm-font-mono)", fontSize: 10, fontWeight: 600, letterSpacing: 0.4, color: "var(--qm-primary)", background: "var(--qm-primary-tint)", borderRadius: 999, padding: "3px 10px", whiteSpace: "nowrap" }}>Google Play</span>
        <span style={{ fontSize: 11, color: "var(--qm-faint)", flexShrink: 0, marginInlineStart: "auto" }}>{p.meta}</span>
      </div>
      <div data-rsp="duo-wrap" style={{ height: "clamp(280px,32vw,428px)", background: "var(--qm-surface-soft)", display: "flex", alignItems: "flex-start", justifyContent: "center", gap: "clamp(18px,4vw,54px)", paddingTop: "clamp(16px,2.2vw,26px)", overflow: "hidden" }}>
        {[0, 1].map((screen) => (
          <div
            key={screen}
            data-rsp="duo-phone"
            style={{ position: "relative", width: "clamp(150px,16vw,208px)", aspectRatio: "9 / 17", background: "var(--qm-surface)", border: "1px solid var(--qm-border-input)", borderRadius: "26px 26px 0 0", borderBottom: "none", boxShadow: "var(--qm-shadow-raised)", transform: screen === 0 ? "rotate(-2deg) translateY(clamp(10px,1.6vw,20px))" : "rotate(2deg) translateY(clamp(26px,3.4vw,44px))" }}
          >
            <div style={{ position: "absolute", top: 8, left: "50%", transform: "translateX(-50%)", width: 34, height: 4, borderRadius: 999, background: "var(--qm-border)" }} />
            <div style={{ position: "absolute", inset: 8, top: 19, bottom: 0, borderRadius: "18px 18px 0 0", overflow: "hidden", background: "var(--qm-surface-row)" }}>
              {p.screens?.[screen] ? (
                <Screenshot src={p.screens[screen]} sizes="210px" />
              ) : (
                <PhonePreview kind={p.preview} screen={screen} />
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
