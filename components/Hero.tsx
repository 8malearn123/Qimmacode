import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section id="top" style={{ padding: "clamp(28px,4vw,44px) 0 clamp(40px,5vw,64px)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 clamp(16px,3vw,30px)", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        <h1 style={{ margin: "0 0 clamp(22px,2.6vw,32px)", fontSize: "clamp(36px,5.2vw,64px)", fontWeight: 700, lineHeight: 1.24, letterSpacing: -0.7, maxWidth: 880 }}>
          فكرتك على ورق؟
          <br />
          <span style={{ backgroundImage: "linear-gradient(90deg,var(--qm-teal-tint),var(--qm-teal-tint))", backgroundRepeat: "no-repeat", backgroundPosition: "right center", backgroundSize: "0% 100%", borderRadius: 12, padding: "1px 10px", animation: "qmMark .9s cubic-bezier(.22,.61,.36,1) .5s forwards" }}>التنفيذ علينا.</span>
        </h1>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12, marginBottom: "clamp(28px,3.6vw,48px)" }}>
          {/* 52px rows around 42px buttons — reproduces the spacing of the approved design. */}
          <div style={{ height: 52 }}>
            <Button icon="rocket_launch" href="#brief">اطلب عرض سعر</Button>
          </div>
          <div style={{ height: 52 }}>
            <Button variant="ghost" icon="folder_special" href="#work">شاهد أعمالنا</Button>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", width: "100%" }}>
          <div data-rsp="fan-side" style={{ width: "min(280px,26vw)", minWidth: 170, transform: "rotate(-5deg) translateY(14px)", marginInlineEnd: -34, position: "relative", zIndex: 1, background: "var(--qm-surface)", border: "1px solid var(--qm-border)", borderRadius: 20, boxShadow: "var(--qm-shadow-card)", padding: "16px 16px 14px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 10, fontWeight: 600, color: "var(--qm-subtle)" }}>
                <span style={{ width: 7, height: 7, borderRadius: 3, background: "var(--qm-primary)" }} />
                هذا الربع
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 10, fontWeight: 600, color: "var(--qm-muted)" }}>
                <span style={{ width: 7, height: 7, borderRadius: 3, background: "var(--qm-mint)" }} />
                الماضي
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height: 110, borderBottom: "1px solid var(--qm-hairline)" }}>
              <div style={{ flex: 1, height: 34, borderRadius: "5px 5px 0 0", background: "var(--qm-mint)", transformOrigin: "bottom center", animation: "qmGrow 6.5s cubic-bezier(.22,.61,.36,1) infinite" }} />
              <div style={{ flex: 1, height: 58, borderRadius: "5px 5px 0 0", background: "var(--qm-mint)", transformOrigin: "bottom center", animation: "qmGrow 6.5s cubic-bezier(.22,.61,.36,1) infinite", animationDelay: ".14s" }} />
              <div style={{ flex: 1, height: 44, borderRadius: "5px 5px 0 0", background: "#58b3b3", transformOrigin: "bottom center", animation: "qmGrow 6.5s cubic-bezier(.22,.61,.36,1) infinite", animationDelay: ".28s" }} />
              <div style={{ flex: 1, height: 78, borderRadius: "5px 5px 0 0", background: "var(--qm-primary)", transformOrigin: "bottom center", animation: "qmGrow 6.5s cubic-bezier(.22,.61,.36,1) infinite", animationDelay: ".42s" }} />
              <div style={{ flex: 1, height: 52, borderRadius: "5px 5px 0 0", background: "#58b3b3", transformOrigin: "bottom center", animation: "qmGrow 6.5s cubic-bezier(.22,.61,.36,1) infinite", animationDelay: ".56s" }} />
            </div>
            <div style={{ fontSize: 10.5, color: "var(--qm-faint)", marginTop: 8 }}>لوحة تحليلات</div>
          </div>
          <div data-rsp="fan-main" style={{ width: "min(520px,50vw)", minWidth: 260, position: "relative", zIndex: 2, background: "var(--qm-surface)", border: "1px solid var(--qm-border)", borderRadius: 22, boxShadow: "var(--qm-shadow-raised)", overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, background: "var(--qm-surface-row)", borderBottom: "1px solid var(--qm-hairline)", padding: "10px 14px" }}>
              <span style={{ display: "flex", gap: 5, flexShrink: 0 }}>
                <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#cf7a52", opacity: 0.55 }} />
                <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#58b3b3", opacity: 0.55 }} />
                <span style={{ width: 9, height: 9, borderRadius: "50%", background: "var(--qm-violet)", opacity: 0.55 }} />
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "var(--qm-surface)", border: "1px solid var(--qm-hairline)", borderRadius: 999, padding: "4px 12px" }}>
                <span className="msr" aria-hidden="true" style={{ fontSize: 12, color: "var(--qm-faint)" }}>lock</span>
                <span style={{ fontFamily: "var(--qm-font-mono)", fontSize: 10.5, color: "var(--qm-muted)", letterSpacing: 0.3 }} dir="ltr">qimmacode.sa</span>
              </span>
            </div>
            <div aria-hidden="true" style={{ height: "clamp(200px,24vw,300px)", background: "var(--qm-surface-soft)", display: "flex", overflow: "hidden" }}>
              <div dir="ltr" data-rsp="fan-code" style={{ flex: 1.05, minWidth: 0, background: "linear-gradient(160deg,#5a5189,#453f6b)", padding: "12px 14px", display: "flex", flexDirection: "column", overflow: "hidden" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 7, flexShrink: 0 }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "rgba(255,255,255,.32)" }} />
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "rgba(255,255,255,.16)" }} />
                  <span style={{ fontFamily: "var(--qm-font-mono)", fontSize: 9.5, color: "rgba(255,255,255,.55)", letterSpacing: 0.4 }}>src/app.tsx</span>
                </div>
                <div style={{ margin: "auto 0", paddingTop: 10, animation: "qmVeil 9s linear infinite" }}>
                  <div style={{ overflow: "hidden", animation: "qmCodeH 9s linear infinite" }}>
                    <div style={{ height: 22, display: "flex", alignItems: "center", gap: 5 }}>
                      <span style={{ width: 32, height: 8, borderRadius: 4, background: "#bfe4e4" }} />
                      <span style={{ width: 46, height: 8, borderRadius: 4, background: "rgba(255,255,255,.3)" }} />
                    </div>
                    <div style={{ height: 22, display: "flex", alignItems: "center", gap: 5, paddingLeft: 14 }}>
                      <span style={{ width: 24, height: 8, borderRadius: 4, background: "#e0a183" }} />
                      <span style={{ width: 36, height: 8, borderRadius: 4, background: "rgba(255,255,255,.3)" }} />
                      <span style={{ width: 22, height: 8, borderRadius: 4, background: "#6cc3c3" }} />
                    </div>
                    <div style={{ height: 22, display: "flex", alignItems: "center", gap: 5, paddingLeft: 14 }}>
                      <span style={{ width: 40, height: 8, borderRadius: 4, background: "#6cc3c3" }} />
                      <span style={{ width: 20, height: 8, borderRadius: 4, background: "rgba(255,255,255,.3)" }} />
                    </div>
                    <div style={{ height: 22, display: "flex", alignItems: "center", gap: 5, paddingLeft: 28 }}>
                      <span style={{ width: 50, height: 8, borderRadius: 4, background: "rgba(255,255,255,.3)" }} />
                      <span style={{ width: 18, height: 8, borderRadius: 4, background: "#bfe4e4" }} />
                    </div>
                    <div style={{ height: 22, display: "flex", alignItems: "center", gap: 5, paddingLeft: 28 }}>
                      <span style={{ width: 32, height: 8, borderRadius: 4, background: "#e0a183" }} />
                      <span style={{ width: 24, height: 8, borderRadius: 4, background: "rgba(255,255,255,.3)" }} />
                    </div>
                    <div style={{ height: 22, display: "flex", alignItems: "center", gap: 5, paddingLeft: 14 }}>
                      <span style={{ width: 20, height: 8, borderRadius: 4, background: "#6cc3c3" }} />
                      <span style={{ width: 40, height: 8, borderRadius: 4, background: "rgba(255,255,255,.3)" }} />
                    </div>
                    <div style={{ height: 22, display: "flex", alignItems: "center", gap: 5 }}>
                      <span style={{ width: 26, height: 8, borderRadius: 4, background: "#bfe4e4" }} />
                    </div>
                  </div>
                  <span style={{ display: "block", width: 8, height: 12, marginTop: 2, background: "rgba(255,255,255,.7)", animation: "qmBlink 1s linear infinite" }} />
                </div>
              </div>
              <div style={{ flex: 1, minWidth: 0, display: "flex", padding: 12 }}>
                <div style={{ width: "min(270px,100%)", margin: "auto", position: "relative", display: "flex", flexDirection: "column", gap: 7, animation: "qmVeil 9s linear infinite" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, animation: "qmBld1 9s cubic-bezier(.22,.61,.36,1) infinite" }}>
                    <span style={{ width: 11, height: 11, borderRadius: 4, background: "var(--qm-violet)" }} />
                    <span style={{ width: 30, height: 6, borderRadius: 3, background: "#d8d3ca" }} />
                    <span style={{ width: 20, height: 6, borderRadius: 3, background: "#e7e2d9" }} />
                    <span style={{ width: 13, height: 13, borderRadius: "50%", background: "var(--qm-mint)", marginInlineStart: "auto" }} />
                  </div>
                  <div style={{ display: "flex", gap: 6, animation: "qmBld2 9s cubic-bezier(.22,.61,.36,1) infinite" }}>
                    <span style={{ flex: 1, display: "flex", alignItems: "center", gap: 5, background: "#dcefef", borderRadius: 8, padding: "6px 8px" }}>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#357f7f" }} />
                      <span style={{ width: 24, height: 5, borderRadius: 3, background: "rgba(53,127,127,.45)" }} />
                    </span>
                    <span style={{ flex: 1, display: "flex", alignItems: "center", gap: 5, background: "#e9e6f1", borderRadius: 8, padding: "6px 8px" }}>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#564d84" }} />
                      <span style={{ width: 24, height: 5, borderRadius: 3, background: "rgba(86,77,132,.45)" }} />
                    </span>
                  </div>
                  <div style={{ background: "var(--qm-surface)", border: "1px solid var(--qm-hairline)", borderRadius: 10, padding: "8px 9px", animation: "qmBld3 9s cubic-bezier(.22,.61,.36,1) infinite" }}>
                    <span style={{ display: "block", width: 28, height: 5, borderRadius: 3, background: "#e7e2d9", marginBottom: 7 }} />
                    <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 32 }}>
                      <span style={{ flex: 1, height: 13, borderRadius: "3px 3px 0 0", background: "var(--qm-mint)", transformOrigin: "bottom center", animation: "qmBarB 9s cubic-bezier(.22,.61,.36,1) infinite" }} />
                      <span style={{ flex: 1, height: 24, borderRadius: "3px 3px 0 0", background: "#58b3b3", transformOrigin: "bottom center", animation: "qmBarC 9s cubic-bezier(.22,.61,.36,1) infinite" }} />
                      <span style={{ flex: 1, height: 18, borderRadius: "3px 3px 0 0", background: "var(--qm-mint)", transformOrigin: "bottom center", animation: "qmBarB 9s cubic-bezier(.22,.61,.36,1) infinite" }} />
                      <span style={{ flex: 1, height: 30, borderRadius: "3px 3px 0 0", background: "var(--qm-violet)", transformOrigin: "bottom center", animation: "qmBarC 9s cubic-bezier(.22,.61,.36,1) infinite" }} />
                    </div>
                  </div>
                  <div style={{ background: "var(--qm-surface)", border: "1px solid var(--qm-hairline)", borderRadius: 10, padding: "7px 9px", display: "flex", flexDirection: "column", gap: 6, animation: "qmBld4 9s cubic-bezier(.22,.61,.36,1) infinite" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <span className="msr" aria-hidden="true" style={{ fontSize: 13, color: "var(--qm-teal-deep)" }}>check_circle</span>
                      <span style={{ width: 52, height: 5, borderRadius: 3, background: "#e7e2d9" }} />
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <span style={{ position: "relative", width: 13, height: 13, flexShrink: 0 }}>
                        <span className="msr" aria-hidden="true" style={{ position: "absolute", inset: 0, fontSize: 13, color: "var(--qm-faint)", animation: "qmChkA 9s linear infinite" }}>radio_button_unchecked</span>
                        <span className="msr" aria-hidden="true" style={{ position: "absolute", inset: 0, fontSize: 13, color: "var(--qm-teal-deep)", animation: "qmChkB 9s linear infinite" }}>check_circle</span>
                      </span>
                      <span style={{ width: 40, height: 5, borderRadius: 3, background: "#e7e2d9" }} />
                    </div>
                  </div>
                  <div style={{ position: "absolute", bottom: -6, insetInlineStart: 0, display: "inline-flex", alignItems: "center", gap: 6, background: "var(--qm-surface)", border: "1px solid var(--qm-border)", borderRadius: 999, boxShadow: "var(--qm-shadow-card)", padding: "5px 11px", animation: "qmToastB 9s cubic-bezier(.22,.61,.36,1) infinite" }}>
                    <span className="msr" aria-hidden="true" style={{ fontSize: 13, color: "var(--qm-teal-deep)" }}>check_circle</span>
                    <span style={{ fontSize: 10.5, fontWeight: 600, color: "var(--qm-subtle)" }}>تم النشر</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-rsp="fan-side" style={{ width: "min(210px,20vw)", minWidth: 130, transform: "rotate(5deg) translateY(18px)", marginInlineStart: -34, position: "relative", zIndex: 1, background: "var(--qm-surface)", border: "1px solid var(--qm-border-input)", borderRadius: 26, boxShadow: "var(--qm-shadow-card)", padding: 10 }}>
            <div style={{ width: 32, height: 5, borderRadius: 999, background: "var(--qm-border)", margin: "2px auto 8px" }} />
            <div aria-hidden="true" style={{ height: "clamp(150px,17vw,210px)", borderRadius: 16, overflow: "hidden", background: "var(--qm-surface-soft)", position: "relative" }}>
              <div style={{ position: "absolute", inset: 0, padding: 9, display: "flex", flexDirection: "column", gap: 6, animation: "qmVeil 9s linear infinite" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 5, flexShrink: 0 }}>
                  <span style={{ width: 9, height: 9, borderRadius: 3, background: "var(--qm-violet)" }} />
                  <span style={{ width: 22, height: 5, borderRadius: 3, background: "#d8d3ca" }} />
                  <span style={{ position: "relative", marginInlineStart: "auto", display: "inline-flex" }}>
                    <span className="msr" aria-hidden="true" style={{ fontSize: 13, color: "var(--qm-muted)" }}>notifications</span>
                    <span style={{ position: "absolute", top: 0, insetInlineEnd: 0, width: 5, height: 5, borderRadius: "50%", background: "#cf7a52" }} />
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6, background: "var(--qm-surface)", border: "1px solid var(--qm-border)", borderRadius: 10, boxShadow: "var(--qm-shadow-card)", padding: "6px 8px", animation: "qmNotif 9s cubic-bezier(.22,.61,.36,1) infinite" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 18, height: 18, borderRadius: "50%", background: "#dcefef", flexShrink: 0 }}>
                    <span className="msr" aria-hidden="true" style={{ fontSize: 11, color: "var(--qm-teal-deep)" }}>rocket_launch</span>
                  </span>
                  <span style={{ display: "flex", flexDirection: "column", gap: 3, minWidth: 0 }}>
                    <span style={{ fontSize: 9, fontWeight: 700, color: "var(--qm-subtle)", whiteSpace: "nowrap" }}>وصل إصدارك الجديد</span>
                    <span style={{ width: 42, height: 4, borderRadius: 2, background: "#e7e2d9" }} />
                  </span>
                </div>
                <div style={{ background: "var(--qm-surface)", border: "1px solid var(--qm-hairline)", borderRadius: 10, padding: "6px 8px", display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ width: 30, height: 5, borderRadius: 3, background: "#e7e2d9" }} />
                  <span style={{ position: "relative", marginInlineStart: "auto", width: 46, height: 16, flexShrink: 0 }}>
                    <span style={{ position: "absolute", inset: 0, display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: 999, background: "#f5e7de", color: "#b5623a", fontSize: 8, fontWeight: 700, animation: "qmSwapA 9s linear infinite" }}>قيد العمل</span>
                    <span style={{ position: "absolute", inset: 0, display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: 999, background: "#dcefef", color: "#357f7f", fontSize: 8, fontWeight: 700, animation: "qmSwapB 9s linear infinite" }}>اكتمل</span>
                  </span>
                </div>
                <div style={{ background: "var(--qm-surface)", border: "1px solid var(--qm-hairline)", borderRadius: 10, padding: "7px 8px" }}>
                  <span style={{ display: "block", width: 26, height: 5, borderRadius: 3, background: "#e7e2d9", marginBottom: 6 }} />
                  <span style={{ display: "block", height: 5, borderRadius: 999, background: "#e9e6f1", overflow: "hidden" }}>
                    <span style={{ display: "block", height: "100%", borderRadius: 999, background: "linear-gradient(90deg,#58b3b3,#6b5fa0)", transformOrigin: "right center", animation: "qmFill 9s cubic-bezier(.22,.61,.36,1) infinite" }} />
                  </span>
                </div>
                <span style={{ position: "absolute", bottom: 9, insetInlineEnd: 9, width: 26, height: 26, borderRadius: "50%", background: "var(--qm-violet)", display: "inline-flex", alignItems: "center", justifyContent: "center", boxShadow: "var(--qm-shadow-card)" }}>
                  <span style={{ position: "absolute", inset: -4, borderRadius: "50%", border: "2px solid var(--qm-violet)", animation: "qmPing 2.8s cubic-bezier(.22,.61,.36,1) infinite" }} />
                  <span className="msr" aria-hidden="true" style={{ fontSize: 15, color: "#fff" }}>add</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
