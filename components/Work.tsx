import { ProjectsDeck } from "@/components/ProjectsDeck";

export function Work() {
  return (
    <section id="work" style={{ scrollMarginTop: 92, padding: "clamp(48px,6vw,86px) 0", background: "var(--qm-surface-row)", borderBlock: "1px solid var(--qm-border)" }} data-reveal="1">
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 clamp(16px,3vw,30px)" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 13, marginBottom: 32, maxWidth: 680 }}>
          <h2 style={{ margin: 0, fontSize: "clamp(26px,3.2vw,38px)", fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3 }}>مشاريع أُطلقت فعلًا</h2>
        </div>
        <ProjectsDeck />
      </div>
    </section>
  );
}
