import { BriefForm } from "@/components/BriefForm";
import { site } from "@/lib/site";

const PROMISES = [
  "يرد عليك شخص من الفريق خلال 24 ساعة",
  "جلسة أولى مجانية مدتها 45 دقيقة",
  "نوقّع اتفاقية سرية إذا طلبت، وفكرتك تبقى لك",
];

export function Brief() {
  return (
    <section id="brief" style={{ scrollMarginTop: 92, padding: "clamp(48px,6vw,86px) 0 clamp(56px,7vw,96px)" }} data-reveal="1">
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 clamp(16px,3vw,30px)" }}>
        <div style={{ background: "var(--qm-gradient-hero)", borderRadius: 24, padding: "clamp(24px,3.4vw,44px)", boxShadow: "var(--qm-shadow-raised)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))", gap: "clamp(26px,3.5vw,46px)", alignItems: "start" }}>
          <div>
            <h2 style={{ margin: "0 0 16px", fontSize: "clamp(26px,3.2vw,40px)", fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.4, color: "#fff" }}>
              كلّمنا عن مشروعك،
              <br />
              ونرجع لك بخطة واضحة.
            </h2>
            <p style={{ margin: "0 0 26px", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,.78)", maxWidth: 440 }}>عبّئ الطلب في دقيقتين. نقرؤه بأنفسنا ونرد عليك خلال 24 ساعة برأي صريح: نقدر نخدمك أو لا.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 28 }}>
              {PROMISES.map((text) => (
                <div key={text} style={{ display: "flex", alignItems: "flex-start", gap: 11, color: "rgba(255,255,255,.9)" }}>
                  <span className="msr" aria-hidden="true" style={{ fontSize: 20, color: "var(--qm-mint)" }}>check_circle</span>
                  <span style={{ fontSize: 14.5, lineHeight: 1.6 }}>{text}</span>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 20, paddingTop: 22, borderTop: "1px solid rgba(255,255,255,.18)" }}>
              <div>
                <div style={{ fontSize: 11.5, color: "rgba(255,255,255,.6)", marginBottom: 4 }}>واتساب</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#fff" }} dir="ltr">{site.whatsapp}</div>
              </div>
              <div>
                <div style={{ fontSize: 11.5, color: "rgba(255,255,255,.6)", marginBottom: 4 }}>البريد</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#fff" }} dir="ltr">{site.email}</div>
              </div>
            </div>
          </div>

          <div style={{ background: "var(--qm-surface)", borderRadius: 20, padding: "clamp(20px,2.4vw,28px)", boxShadow: "var(--qm-shadow-modal)" }}>
            <BriefForm />
          </div>
        </div>
      </div>
    </section>
  );
}
