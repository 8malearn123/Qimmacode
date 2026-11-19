import Image from "next/image";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer style={{ background: "var(--qm-surface)", borderTop: "1px solid var(--qm-border)", padding: "clamp(36px,4.5vw,56px) 0 28px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 clamp(16px,3vw,30px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "clamp(22px,3vw,40px)", paddingBottom: 30, borderBottom: "1px solid var(--qm-hairline)" }}>
          <div>
            <Image src="/brand/logo.png" alt="قمّة كود" width={92} height={26} unoptimized style={{ height: 26, width: "auto", display: "block", marginBottom: 12 }} />
            <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.8, color: "var(--qm-subtle)", maxWidth: 260 }}>استوديو برمجيات، والعربية عندنا أولًا. نبني منتجات تصل إلى السوق وتكبر مع أصحابها.</p>
          </div>
          <div>
            <div style={{ fontSize: 12.5, fontWeight: 700, color: "var(--qm-ink)", marginBottom: 12 }}>الخدمات</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
              <a className="hv-text-primary" href="#services" style={{ fontSize: 13.5, color: "var(--qm-subtle)" }}>تطبيقات الويب</a>
              <a className="hv-text-primary" href="#services" style={{ fontSize: 13.5, color: "var(--qm-subtle)" }}>تطبيقات الجوال</a>
              <a className="hv-text-primary" href="#services" style={{ fontSize: 13.5, color: "var(--qm-subtle)" }}>منصات SaaS</a>
              <a className="hv-text-primary" href="#services" style={{ fontSize: 13.5, color: "var(--qm-subtle)" }}>الذكاء الاصطناعي</a>
              <a className="hv-text-primary" href="#services" style={{ fontSize: 13.5, color: "var(--qm-subtle)" }}>حلول المطاعم والمقاهي</a>
              <a className="hv-text-primary" href="#services" style={{ fontSize: 13.5, color: "var(--qm-subtle)" }}>عقود التشغيل والدعم</a>
              <a className="hv-text-primary" href="#services" style={{ fontSize: 13.5, color: "var(--qm-subtle)" }}>التدريب على أدوات الذكاء الاصطناعي</a>
            </div>
          </div>
          <div>
            <div style={{ fontSize: 12.5, fontWeight: 700, color: "var(--qm-ink)", marginBottom: 12 }}>الاستوديو</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
              <a className="hv-text-primary" href="#work" style={{ fontSize: 13.5, color: "var(--qm-subtle)" }}>أعمالنا</a>
              <a className="hv-text-primary" href="#process" style={{ fontSize: 13.5, color: "var(--qm-subtle)" }}>كيف نعمل</a>
              <a className="hv-text-primary" href="#faq" style={{ fontSize: 13.5, color: "var(--qm-subtle)" }}>الأسئلة الشائعة</a>
              <a className="hv-text-primary" href="#brief" style={{ fontSize: 13.5, color: "var(--qm-subtle)" }}>اطلب عرض سعر</a>
            </div>
          </div>
          <div>
            <div style={{ fontSize: 12.5, fontWeight: 700, color: "var(--qm-ink)", marginBottom: 12 }}>تواصل</div>
            {/* flex-start keeps the LTR email/number on the column's (right-hand) start edge instead of stretching and left-aligning. */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 9, fontSize: 13.5, color: "var(--qm-subtle)" }}>
              <span dir="ltr">{site.email}</span>
              <span dir="ltr">{site.whatsapp}</span>
              <span>{site.location}</span>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 12, paddingTop: 20, fontSize: 12, color: "var(--qm-faint)" }}>
          <span>© 2026 قمّة كود · جميع الحقوق محفوظة</span>
        </div>
      </div>
    </footer>
  );
}
