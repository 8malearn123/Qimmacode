export function Guarantees() {
  return (
    <section style={{ padding: "clamp(20px,3vw,32px) 0" }} data-reveal="1">
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 clamp(16px,3vw,30px)" }}>
        <div style={{ background: "var(--qm-surface)", border: "1px solid var(--qm-border)", borderRadius: 24, boxShadow: "var(--qm-shadow-card)", padding: "clamp(22px,3vw,36px)", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "clamp(24px,4vw,52px)" }}>
          <div style={{ flex: "1 1 280px", minWidth: 0, display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 12 }}>
            <h3 style={{ margin: 0, fontSize: "clamp(20px,2.3vw,27px)", fontWeight: 700, lineHeight: 1.4 }}>
              أربعة بنود لا تتغيّر
              <br />
              في أي اتفاق نوقّعه
            </h3>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.85, color: "var(--qm-subtle)", maxWidth: 400 }}>لا نطلب منك أن تثق بكلامنا — نوقّع عليه. هذه البنود جزء ثابت من عقدنا مع كل عميل، ويحق لك محاسبتنا عليها.</p>
          </div>
          <div style={{ flex: "1.35 1 400px", minWidth: 0, position: "relative" }}>
            <div style={{ background: "var(--qm-surface-row)", border: "1px solid var(--qm-hairline)", borderRadius: 18, padding: "4px 18px 6px", boxShadow: "var(--qm-shadow-card)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "12px 2px", borderBottom: "1px solid var(--qm-border)" }}>
                <span className="msr" aria-hidden="true" style={{ fontSize: 17, color: "var(--qm-primary)" }}>description</span>
                <span style={{ fontSize: 12.5, fontWeight: 700, color: "var(--qm-ink)" }}>عقد التطوير — البنود الثابتة</span>
                <span dir="ltr" style={{ marginInlineStart: "auto", fontFamily: "var(--qm-font-mono)", fontSize: 9.5, letterSpacing: 0.6, color: "var(--qm-faint)" }}>QMA·STD</span>
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 10, padding: "12px 2px", borderBottom: "1px solid var(--qm-hairline)" }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: "var(--qm-primary)", flexShrink: 0 }}>١·</span>
                <span style={{ fontSize: 13.5, lineHeight: 1.7, minWidth: 0 }}>
                  <strong style={{ fontWeight: 700, color: "var(--qm-ink)" }}>سعر ثابت لكل مرحلة</strong>
                  {" "}
                  <span style={{ color: "var(--qm-subtle)" }}>— يُعتمد قبل البدء ولا يتغيّر.</span>
                </span>
                <span className="msr" aria-hidden="true" style={{ fontSize: 16, color: "var(--qm-teal-deep)", marginInlineStart: "auto", flexShrink: 0, alignSelf: "center" }}>check_circle</span>
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 10, padding: "12px 2px", borderBottom: "1px solid var(--qm-hairline)" }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: "var(--qm-primary)", flexShrink: 0 }}>٢·</span>
                <span style={{ fontSize: 13.5, lineHeight: 1.7, minWidth: 0 }}>
                  <strong style={{ fontWeight: 700, color: "var(--qm-ink)" }}>رابط تجريبي كل أسبوع</strong>
                  {" "}
                  <span style={{ color: "var(--qm-subtle)" }}>— ترى التقدم بيدك، لا في التقارير.</span>
                </span>
                <span className="msr" aria-hidden="true" style={{ fontSize: 16, color: "var(--qm-teal-deep)", marginInlineStart: "auto", flexShrink: 0, alignSelf: "center" }}>check_circle</span>
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 10, padding: "12px 2px", borderBottom: "1px solid var(--qm-hairline)" }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: "var(--qm-primary)", flexShrink: 0 }}>٣·</span>
                <span style={{ fontSize: 13.5, lineHeight: 1.7, minWidth: 0 }}>
                  <strong style={{ fontWeight: 700, color: "var(--qm-ink)" }}>الكود والتوثيق ملكك</strong>
                  {" "}
                  <span style={{ color: "var(--qm-subtle)" }}>— عند كل تسليم، بلا احتكار.</span>
                </span>
                <span className="msr" aria-hidden="true" style={{ fontSize: 16, color: "var(--qm-teal-deep)", marginInlineStart: "auto", flexShrink: 0, alignSelf: "center" }}>check_circle</span>
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 10, padding: "12px 2px" }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: "var(--qm-primary)", flexShrink: 0 }}>٤·</span>
                <span style={{ fontSize: 13.5, lineHeight: 1.7, minWidth: 0 }}>
                  <strong style={{ fontWeight: 700, color: "var(--qm-ink)" }}>رد خلال يوم عمل</strong>
                  {" "}
                  <span style={{ color: "var(--qm-subtle)" }}>— طوال مدة المشروع.</span>
                </span>
                <span className="msr" aria-hidden="true" style={{ fontSize: 16, color: "var(--qm-teal-deep)", marginInlineStart: "auto", flexShrink: 0, alignSelf: "center" }}>check_circle</span>
              </div>
            </div>
            <span aria-hidden="true" style={{ position: "absolute", bottom: -13, insetInlineEnd: 20, display: "inline-flex", alignItems: "center", gap: 6, border: "2.5px solid var(--qm-primary)", color: "var(--qm-primary)", background: "rgba(233,230,241,.92)", borderRadius: 11, padding: "6px 14px", fontSize: 11.5, fontWeight: 700, letterSpacing: 0.5, boxShadow: "var(--qm-shadow-card)", animation: "qmStamp 10s ease-out infinite" }}>
              <span className="msr" aria-hidden="true" style={{ fontSize: 14 }}>approval</span>
              معتمد · قمّة للبرمجيات
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
