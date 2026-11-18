"use client";

import { Fragment, useState } from "react";
import { FAQS } from "@/lib/faqs";

const NUMS = ["٠١", "٠٢", "٠٣", "٠٤", "٠٥", "٠٦", "٠٧", "٠٨", "٠٩", "١٠"];

/** Single-open accordion; the first question starts open. */
export function FaqList() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div style={{ display: "flex", flexDirection: "column", gridColumn: 2, gridRow: "1 / span 2" }}>
      {FAQS.map((f, i) => {
        const open = openIndex === i;
        return (
          <Fragment key={f.q}>
            <button
              type="button"
              className="qm-unbutton hv-bg-row"
              aria-expanded={open}
              aria-controls={`faq-a-${i}`}
              onClick={() => setOpenIndex(open ? -1 : i)}
              style={{ width: "100%", display: "flex", alignItems: "center", gap: 14, padding: "18px 8px", cursor: "pointer", borderRadius: 12, transition: "background var(--qm-dur-fast)" }}
            >
              <span style={{ fontSize: 20, fontWeight: open ? 700 : 300, color: open ? "var(--qm-primary)" : "var(--qm-faint)", width: 34, flexShrink: 0, lineHeight: 1, transition: "color var(--qm-dur-fast)" }}>{NUMS[i] ?? ""}</span>
              <span style={{ fontSize: 15.5, fontWeight: 700, lineHeight: 1.5, flex: 1, minWidth: 0, color: open ? "var(--qm-primary)" : "var(--qm-ink)", transition: "color var(--qm-dur-fast)" }}>{f.q}</span>
              <span className="msr" aria-hidden="true" style={{ fontSize: 20, color: open ? "var(--qm-primary)" : "var(--qm-faint)", background: open ? "var(--qm-primary-tint)" : "var(--qm-surface-soft)", borderRadius: 9, width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "background var(--qm-dur-fast)" }}>{open ? "remove" : "add"}</span>
            </button>
            <p
              id={`faq-a-${i}`}
              hidden={!open}
              style={{ margin: 0, padding: "2px 48px 20px 8px", fontSize: 14, lineHeight: 1.85, color: "var(--qm-subtle)", maxWidth: 640 }}
            >
              {f.a}
            </p>
            <div style={{ height: 2, borderRadius: 2, backgroundColor: "var(--qm-hairline)", backgroundImage: "linear-gradient(90deg,#58b3b3,#6b5fa0)", backgroundSize: open ? "100% 100%" : "0% 100%", backgroundRepeat: "no-repeat", backgroundPosition: "right center", transition: "background-size .5s cubic-bezier(.22,.61,.36,1)" }} />
          </Fragment>
        );
      })}
    </div>
  );
}
