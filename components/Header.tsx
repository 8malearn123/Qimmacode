import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Header() {
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 60, background: "var(--qm-sand)", borderBottom: "1px solid var(--qm-border-header)" }}>
      <div data-rsp="hdr" style={{ maxWidth: 1180, margin: "0 auto", padding: "0 clamp(16px,3vw,30px)", height: 78, display: "flex", alignItems: "center", gap: 28 }}>
        <a href="#top" aria-label="قمّة كود — الصفحة الرئيسية" style={{ display: "flex", alignItems: "center", gap: 11, flexShrink: 0 }}>
          <Image src="/brand/logo.png" alt="قمّة كود" width={96} height={27} loading="eager" unoptimized style={{ height: 27, width: "auto", display: "block" }} />
        </a>
        <nav aria-label="التنقل الرئيسي" data-rsp="nav-links" style={{ display: "flex", alignItems: "center", gap: 26, marginInlineStart: "auto" }}>
          <a className="hv-text-primary" href="#services" style={{ fontSize: 14, fontWeight: 600, color: "var(--qm-subtle)" }}>خدماتنا</a>
          <a className="hv-text-primary" href="#work" style={{ fontSize: 14, fontWeight: 600, color: "var(--qm-subtle)" }}>أعمالنا</a>
          <a className="hv-text-primary" href="#process" style={{ fontSize: 14, fontWeight: 600, color: "var(--qm-subtle)" }}>كيف نعمل</a>
          <a className="hv-text-primary" href="#faq" style={{ fontSize: 14, fontWeight: 600, color: "var(--qm-subtle)" }}>أسئلة شائعة</a>
        </nav>
        <Button icon="bolt" href="#brief">ابدأ مشروعك</Button>
      </div>
    </header>
  );
}
