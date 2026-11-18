import { FaqList } from "@/components/FaqList";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";

export function Faq() {
  return (
    <section id="faq" style={{ scrollMarginTop: 92, padding: "clamp(48px,6vw,86px) 0" }} data-reveal="1">
      <div data-rsp="faq-grid" style={{ maxWidth: 1180, margin: "0 auto", padding: "0 clamp(16px,3vw,30px)", display: "grid", gridTemplateColumns: "minmax(300px,420px) 1fr", gap: "clamp(24px,4vw,48px)", alignItems: "start" }}>
        <div data-rsp="faq-intro" style={{ maxWidth: 420 }}>
          <h2 style={{ margin: "14px 0 12px", fontSize: "clamp(26px,3.2vw,38px)", fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3 }}>في بالك أسئلة</h2>
          <p style={{ margin: "0 0 22px", fontSize: 16, lineHeight: 1.7, color: "var(--qm-subtle)" }}>لم تجد سؤالك؟ اكتبه في الطلب وسنجيب عليه في أول رد.</p>
        </div>
        <FaqList />
        <div data-rsp="faq-ask" style={{ gridColumn: 1, gridRow: 2, alignSelf: "start", maxWidth: 420, background: "var(--qm-surface)", border: "1px solid var(--qm-border)", borderRadius: 20, boxShadow: "var(--qm-shadow-card)", padding: 20, display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
              <span style={{ display: "inline-flex" }}>
                <Avatar name="سارة" size={30} />
              </span>
              <span style={{ display: "inline-flex", marginInlineStart: -9 }}>
                <Avatar name="أحمد" size={30} />
              </span>
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: 13.5, fontWeight: 700 }}>يجيبك مهندس من الفريق</div>
              <div style={{ fontSize: 12, color: "var(--qm-muted)", marginTop: 2 }}>لا مندوب مبيعات، ولا ردود جاهزة.</div>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 11.5, fontWeight: 700, color: "var(--qm-teal-deep)", background: "var(--qm-teal-tint)", padding: "4px 12px", borderRadius: 999 }}>
              <span className="msr" aria-hidden="true" style={{ fontSize: 14 }}>schedule</span>
              نرد خلال 24 ساعة
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 11.5, fontWeight: 700, color: "var(--qm-primary)", background: "var(--qm-primary-tint)", padding: "4px 12px", borderRadius: 999 }}>
              <span className="msr" aria-hidden="true" style={{ fontSize: 14 }}>lock</span>
              اتفاقية سرية عند الطلب
            </span>
          </div>
          <Button variant="soft" icon="mail" href="#brief">اسأل مباشرة</Button>
        </div>
      </div>
    </section>
  );
}
