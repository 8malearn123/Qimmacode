import { Avatar } from "@/components/ui/Avatar";

export function Testimonials() {
  return (
    <section style={{ padding: "clamp(48px,6vw,86px) 0", background: "var(--qm-surface-row)", borderBlock: "1px solid var(--qm-border)" }} data-reveal="1">
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 clamp(16px,3vw,30px)" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 13, marginBottom: 32, maxWidth: 660 }}>
          <h2 style={{ margin: 0, fontSize: "clamp(26px,3.2vw,38px)", fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3 }}>قالوا عنّا</h2>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 18, alignItems: "stretch" }}>
          <div style={{ flex: "1.6 1 460px", minWidth: 0, background: "var(--qm-surface)", border: "1px solid var(--qm-border)", borderRadius: 24, boxShadow: "var(--qm-shadow-card)", padding: "clamp(24px,3vw,34px)", display: "flex", flexDirection: "column", gap: 22 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ width: 44, height: 44, borderRadius: 14, background: "var(--qm-teal-tint)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span className="msr" aria-hidden="true" style={{ fontSize: 24, color: "var(--qm-teal-deep)" }}>format_quote</span>
              </span>
            </div>
            <p style={{ margin: 0, fontSize: "clamp(18px,1.9vw,22px)", fontWeight: 500, lineHeight: 1.95, color: "var(--qm-ink)", flex: 1 }}>
              أطلقنا النسخة الأولى في
              {" "}
              <span style={{ background: "var(--qm-teal-tint)", color: "var(--qm-teal-deep)", borderRadius: 7, padding: "1px 8px", fontWeight: 700, whiteSpace: "nowrap" }}>ستة أسابيع بدل ستة أشهر</span>
              . وأكثر شيء ريّحنا أن كل أسبوع كان فيه شيء جاهز نجرّبه بأنفسنا.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 12, paddingTop: 18, borderTop: "1px solid var(--qm-hairline)" }}>
              <Avatar name="عبدالله" size={38} />
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: 13.5, fontWeight: 700 }}>عبدالله الحارثي</div>
                <div style={{ fontSize: 12, color: "var(--qm-muted)" }}>مؤسس، منصة ناشئة</div>
              </div>
            </div>
          </div>
          <div style={{ flex: "1 1 300px", minWidth: 0, display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ flex: 1, background: "var(--qm-surface)", border: "1px solid var(--qm-border)", borderRadius: 20, boxShadow: "var(--qm-shadow-card)", padding: 22, display: "flex", flexDirection: "column", gap: 14 }}>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.85, color: "var(--qm-ink)", flex: 1 }}>
                أول فريق نتعامل معه يفهم أن
                {" "}
                <span style={{ background: "var(--qm-primary-tint)", color: "var(--qm-primary)", borderRadius: 6, padding: "1px 7px", fontWeight: 700, whiteSpace: "nowrap" }}>العربية مو ترجمة</span>
                . الواجهة طلعت طبيعية لعملائنا من أول يوم، وبدون ترقيع.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Avatar name="نورة" size={30} />
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 700 }}>نورة العتيبي</div>
                  <div style={{ fontSize: 11.5, color: "var(--qm-muted)" }}>مديرة منتج، شركة تجزئة</div>
                </div>
              </div>
            </div>
            <div style={{ flex: 1, background: "var(--qm-surface)", border: "1px solid var(--qm-border)", borderRadius: 20, boxShadow: "var(--qm-shadow-card)", padding: 22, display: "flex", flexDirection: "column", gap: 14 }}>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.85, color: "var(--qm-ink)", flex: 1 }}>
                استلمنا
                {" "}
                <span style={{ background: "var(--qm-orange-tint)", color: "var(--qm-orange-deep)", borderRadius: 6, padding: "1px 7px", fontWeight: 700, whiteSpace: "nowrap" }}>الكود والتوثيق كاملين</span>
                ، وفريقنا كمّل عليه بدون مشاكل. تعامل راقي من أول يوم لآخر يوم.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Avatar name="ماجد" size={30} />
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 700 }}>ماجد الشمري</div>
                  <div style={{ fontSize: 11.5, color: "var(--qm-muted)" }}>مدير تقني، شركة لوجستية</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
