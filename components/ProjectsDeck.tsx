"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { PROJECTS, type Project, type ProjectMessage } from "@/lib/projects";
import { ROTATE_MS, useProjects } from "@/components/ProjectsProvider";

/** Per-project colours (by position): active tab, tab number badge, and the deck field behind the cards. */
const ACCENT = ["#564d84", "#357f7f", "#b5623a", "#6b5fa0", "#357f7f"];
const ACCENT_TINT = ["#e9e6f1", "#dcefef", "#f5e7de", "#e9e6f1", "#dcefef"];
const FIELD = ["#564d84", "#dcefef", "#f5e7de", "#e9e6f1", "#bfe4e4"];
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
          const acc = ACCENT[i % ACCENT.length];
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
              <span style={{ width: 34, height: 34, borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, lineHeight: 1, flexShrink: 0, background: on ? "rgba(255,255,255,.18)" : ACCENT_TINT[i % ACCENT_TINT.length], color: on ? "#fff" : acc, transition: "background .3s, color .3s" }}>{p.num}</span>
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
          {current.href ? (
            <a
              href={current.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`زيارة الموقع: ${current.name} (يفتح في تبويب جديد)`}
              data-rsp="deck-visit"
              className="hv-lift qm-visit"
              style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "10px 16px", borderRadius: 999, background: "var(--qm-ink)", color: "#fff", fontSize: 13, fontWeight: 700, lineHeight: 1.2, whiteSpace: "nowrap", boxShadow: "0 16px 34px -14px rgba(30,26,52,.35)", transition: "transform var(--qm-dur-fast)" }}
            >
              <span className="msr" aria-hidden="true" style={{ fontSize: "1.3em", color: "var(--qm-mint)" }}>language</span>
              زيارة الموقع
            </a>
          ) : current.upcoming ? (
            <span
              data-rsp="deck-visit"
              style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "10px 16px", borderRadius: 999, background: "var(--qm-orange-tint)", color: "var(--qm-orange-deep)", fontSize: 13, fontWeight: 700, lineHeight: 1.2, whiteSpace: "nowrap", boxShadow: "0 16px 34px -14px rgba(30,26,52,.35)" }}
            >
              <span className="msr" aria-hidden="true" style={{ fontSize: "1.3em" }}>rocket_launch</span>
              قيد الإطلاق
            </span>
          ) : null}
        </div>

        <div style={{ position: "relative", height: "clamp(320px,36vw,470px)" }}>
          {PROJECTS.map((p, i) => {
            const off = (i - active + PROJECTS.length) % PROJECTS.length;
            const c = DECK_POS[off] ?? DECK_POS[3];
            const live = off === 0 && !!p.href;
            return (
              <div
                key={p.num}
                data-rsp="deck-card"
                aria-hidden="true"
                className={live ? "qm-deck-live" : undefined}
                onClick={() => select(i)}
                style={{ position: "absolute", insetInline: 0, marginInline: "auto", bottom: 0, width: "min(84%, 760px)", cursor: off ? "pointer" : "default", background: "var(--qm-surface)", border: "1px solid var(--qm-border)", borderRadius: "22px 22px 0 0", overflow: "hidden", boxShadow: "0 24px 60px -24px rgba(30,26,52,.45)", transform: `rotate(${c.r}deg) translateX(${c.x}%) translateY(${c.y}px) scale(${c.s})`, transformOrigin: "bottom center", zIndex: 10 - off, transition: "transform .5s cubic-bezier(.22,.61,.36,1)" }}
              >
                {p.device === "phone" ? <PhoneCard project={p} front={off === 0} /> : <DesktopCard project={p} />}
                {live && (
                  // The front card opens the live site on click. Kept out of the tab order:
                  // keyboard and screen-reader users get the «زيارة الموقع» link above.
                  <a href={p.href} target="_blank" rel="noopener noreferrer" tabIndex={-1} style={{ position: "absolute", inset: 0, zIndex: 1 }} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

function Screenshot({ src, sizes, focus }: { src: string; sizes: string; focus?: Project["focus"] }) {
  return <Image src={src} alt="" fill sizes={sizes} style={{ objectFit: "cover", objectPosition: focus === "right" ? "top right" : "top center" }} />;
}

/** The project's address, as in a browser's address bar. */
function Address({ url }: { url: string }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 5, background: "var(--qm-surface)", border: "1px solid var(--qm-hairline)", borderRadius: 999, padding: "4px 12px", minWidth: 0 }}>
      <span className="msr" style={{ fontSize: 12, color: "var(--qm-faint)" }}>lock</span>
      <span style={{ fontFamily: "var(--qm-font-mono)", fontSize: 10.5, color: "var(--qm-muted)", letterSpacing: 0.3, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }} dir="ltr">{url}</span>
    </span>
  );
}

function DesktopCard({ project: p }: { project: Project }) {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: 10, background: "var(--qm-surface-row)", borderBottom: "1px solid var(--qm-hairline)", padding: "10px 14px" }}>
        <span style={{ display: "flex", gap: 5, flexShrink: 0 }}>
          <span style={{ ...DOT, background: "#cf7a52" }} />
          <span style={{ ...DOT, background: "#58b3b3" }} />
          <span style={{ ...DOT, background: "var(--qm-violet)" }} />
        </span>
        {p.url && <Address url={p.url} />}
        <span style={{ fontSize: 11, color: "var(--qm-faint)", flexShrink: 0, marginInlineStart: "auto" }}>{p.meta}</span>
      </div>
      <div style={{ position: "relative", height: "clamp(280px,32vw,428px)", background: "var(--qm-surface-soft)", overflow: "hidden" }}>
        <Screenshot src={p.screens[0]} sizes="(max-width: 720px) 94vw, 760px" focus={p.focus} />
      </div>
    </>
  );
}

function PhoneCard({ project: p, front }: { project: Project; front: boolean }) {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: 8, background: "var(--qm-surface-row)", borderBottom: "1px solid var(--qm-hairline)", padding: "10px 14px" }}>
        <span className="msr" style={{ fontSize: 15, color: "var(--qm-teal-deep)" }}>smartphone</span>
        {p.url && <Address url={p.url} />}
        <span style={{ fontSize: 11, color: "var(--qm-faint)", flexShrink: 0, marginInlineStart: "auto" }}>{p.meta}</span>
      </div>
      <div data-rsp="duo-wrap" style={{ position: "relative", height: "clamp(280px,32vw,428px)", background: "var(--qm-surface-soft)", display: "flex", alignItems: "flex-start", justifyContent: "center", gap: "clamp(18px,4vw,54px)", paddingTop: "clamp(16px,2.2vw,26px)", paddingInlineStart: p.message ? "clamp(170px,32%,250px)" : undefined, overflow: "hidden" }}>
        {/* Re-keyed so the message lands again each time this card comes to the front. */}
        {p.message && <Message key={front ? "front" : "back"} message={p.message} animate={front} />}
        {p.screens.map((src, screen) => (
          <div
            key={screen}
            data-rsp="duo-phone"
            style={{ position: "relative", width: "clamp(150px,16vw,208px)", aspectRatio: "9 / 17", background: "var(--qm-surface)", border: "1px solid var(--qm-border-input)", borderRadius: "26px 26px 0 0", borderBottom: "none", boxShadow: "var(--qm-shadow-raised)", transform: screen === 0 ? "rotate(-2deg) translateY(clamp(10px,1.6vw,20px))" : "rotate(2deg) translateY(clamp(26px,3.4vw,44px))" }}
          >
            <div style={{ position: "absolute", top: 8, left: "50%", transform: "translateX(-50%)", width: 34, height: 4, borderRadius: 999, background: "var(--qm-border)" }} />
            <div style={{ position: "absolute", inset: 8, top: 19, bottom: 0, borderRadius: "18px 18px 0 0", overflow: "hidden", background: "var(--qm-surface-row)" }}>
              <Screenshot src={src} sizes="210px" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/** A received chat message, floating beside the phones (the first step of the flow, reading right to left). */
function Message({ message: m, animate }: { message: ProjectMessage; animate: boolean }) {
  return (
    <div
      data-rsp="duo-msg"
      style={{ position: "absolute", zIndex: 1, top: "clamp(44px,8vw,104px)", insetInlineStart: "clamp(12px,2.4%,20px)", width: "clamp(150px,27%,210px)", background: "var(--qm-surface)", border: "1px solid var(--qm-hairline)", borderRadius: 13, borderStartStartRadius: 4, boxShadow: "0 18px 36px -18px rgba(30,26,52,.4)", padding: "9px 11px 7px", animation: animate ? "qmMsgIn .5s cubic-bezier(.22,.61,.36,1) .45s both" : "none" }}
    >
      {m.lines.map((line) => (
        <p key={line} style={{ margin: 0, fontSize: 11, fontWeight: 500, lineHeight: 1.7, color: "var(--qm-ink)", textWrap: "balance" }}>{line}</p>
      ))}
      <p dir="ltr" style={{ margin: "1px 0 0", fontSize: 10.5, lineHeight: 1.6, color: "#2a7bb5", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{m.link}</p>
      <p style={{ margin: "2px 0 0", fontSize: 9.5, lineHeight: 1.4, color: "var(--qm-faint)", textAlign: "end" }}>{m.time}</p>
    </div>
  );
}
