export function Process() {
  return (
    <section id="process" style={{ scrollMarginTop: 92, padding: "clamp(48px,6vw,86px) 0" }} data-reveal="1">
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 clamp(16px,3vw,30px)" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 13, marginBottom: 34, maxWidth: 660 }}>
          <h2 style={{ margin: 0, fontSize: "clamp(26px,3.2vw,38px)", fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3 }}>أربع خطوات</h2>
          <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7, color: "var(--qm-subtle)" }}>تعرف في كل أسبوع أين وصل مشروعك وتجرّبه بيدك</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(52px,7vw,88px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))", gap: "clamp(28px,5vw,64px)", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 14, maxWidth: 460 }}>
              <h3 style={{ margin: 0, fontSize: "clamp(26px,3.2vw,38px)", fontWeight: 700, lineHeight: 1.35, letterSpacing: -0.5 }}>
                جلسة
                {" "}
                <span style={{ color: "var(--qm-teal-deep)", backgroundImage: "linear-gradient(90deg,var(--qm-teal-tint),var(--qm-teal-tint))", backgroundRepeat: "no-repeat", backgroundPosition: "right bottom", backgroundSize: "100% 32%", borderRadius: 8, padding: "0 8px" }}>استكشاف</span>
              </h3>
              <p style={{ margin: 0, fontSize: "clamp(14.5px,1.3vw,16px)", lineHeight: 1.85, color: "var(--qm-subtle)" }}>45 دقيقة نفهم فيها هدفك ومستخدمك، ونحدد أقصر طريق للإطلاق.</p>
              <span style={{ fontSize: 11.5, fontWeight: 700, color: "var(--qm-teal-deep)", background: "var(--qm-teal-tint)", padding: "4px 12px", borderRadius: 999, marginTop: 2 }}>مجانًا وبلا التزام</span>
            </div>
            <div style={{ width: "min(480px,100%)", marginInlineStart: "auto", background: "var(--qm-surface)", border: "1px solid var(--qm-border)", borderRadius: 22, boxShadow: "var(--qm-shadow-raised)", padding: 14, transform: "rotate(-1.2deg)" }}>
              <div style={{ height: 146 }}>
                <div style={{ width: "calc(100% / 1.3)", height: 112, transform: "scale(1.3)", transformOrigin: "top right" }}>
                  <div aria-hidden="true" style={{ height: 112, borderRadius: 14, border: "1px solid var(--qm-hairline)", background: "var(--qm-surface-soft)", padding: 10, overflow: "hidden" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6, animation: "qmVeil 9s linear infinite" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
                        <span style={{ width: 14, height: 14, borderRadius: "50%", background: "var(--qm-mint)" }} />
                        <span style={{ width: 14, height: 14, borderRadius: "50%", background: "var(--qm-violet)", marginInlineStart: -5 }} />
                        <span style={{ marginInlineStart: "auto", whiteSpace: "nowrap", fontSize: 9, fontWeight: 700, color: "var(--qm-teal-deep)", background: "var(--qm-teal-tint)", borderRadius: 999, padding: "2px 7px" }}>45 دقيقة</span>
                      </div>
                      <div style={{ alignSelf: "flex-start", background: "var(--qm-surface)", border: "1px solid var(--qm-hairline)", borderRadius: "10px 10px 10px 3px", padding: "5px 8px", display: "flex", gap: 4, animation: "qmMsgA 9s linear infinite" }}>
                        <span style={{ width: 34, height: 5, borderRadius: 3, background: "#d8d3ca" }} />
                        <span style={{ width: 18, height: 5, borderRadius: 3, background: "#e7e2d9" }} />
                      </div>
                      <div style={{ alignSelf: "flex-end", background: "#e9e6f1", borderRadius: "10px 10px 3px 10px", padding: "5px 8px", display: "flex", gap: 4, animation: "qmMsgB 9s linear infinite" }}>
                        <span style={{ width: 26, height: 5, borderRadius: 3, background: "rgba(86,77,132,.45)" }} />
                        <span style={{ width: 30, height: 5, borderRadius: 3, background: "rgba(86,77,132,.3)" }} />
                      </div>
                      <div style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: 5, background: "var(--qm-surface)", border: "1px solid var(--qm-border)", borderRadius: 999, boxShadow: "var(--qm-shadow-card)", padding: "4px 9px", animation: "qmMsgC 9s linear infinite" }}>
                        <span className="msr" aria-hidden="true" style={{ fontSize: 12, color: "var(--qm-primary)" }}>description</span>
                        <span style={{ fontSize: 9.5, fontWeight: 700, color: "var(--qm-subtle)", whiteSpace: "nowrap" }}>ملخص مكتوب لما فهمناه</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))", gap: "clamp(28px,5vw,64px)", alignItems: "center" }}>
            <div data-rsp="step-vis" style={{ width: "min(480px,100%)", background: "var(--qm-surface)", border: "1px solid var(--qm-border)", borderRadius: 22, boxShadow: "var(--qm-shadow-raised)", padding: 14, transform: "rotate(1.2deg)" }}>
              <div style={{ height: 146 }}>
                <div style={{ width: "calc(100% / 1.3)", height: 112, transform: "scale(1.3)", transformOrigin: "top right" }}>
                  <div aria-hidden="true" style={{ height: 112, borderRadius: 14, border: "1px solid var(--qm-hairline)", background: "var(--qm-surface-soft)", padding: "9px 10px", overflow: "hidden" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: 5, animation: "qmVeil 9s linear infinite" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                        <span className="msr" aria-hidden="true" style={{ fontSize: 12, color: "var(--qm-primary)" }}>checklist</span>
                        <span style={{ fontSize: 9.5, fontWeight: 700, color: "var(--qm-faint)", whiteSpace: "nowrap" }}>وثيقة النطاق والمحطات</span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 5, background: "var(--qm-surface)", border: "1px solid var(--qm-hairline)", borderRadius: 8, padding: "4px 7px", animation: "qmBld1 9s cubic-bezier(.22,.61,.36,1) infinite" }}>
                        <span className="msr" aria-hidden="true" style={{ fontSize: 11, color: "var(--qm-teal-deep)" }}>flag</span>
                        <span style={{ width: 40, height: 5, borderRadius: 3, background: "#e7e2d9" }} />
                        <span style={{ marginInlineStart: "auto", width: 24, height: 9, borderRadius: 5, background: "#dcefef" }} />
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 5, background: "var(--qm-surface)", border: "1px solid var(--qm-hairline)", borderRadius: 8, padding: "4px 7px", animation: "qmBld2 9s cubic-bezier(.22,.61,.36,1) infinite" }}>
                        <span className="msr" aria-hidden="true" style={{ fontSize: 11, color: "var(--qm-violet)" }}>flag</span>
                        <span style={{ width: 32, height: 5, borderRadius: 3, background: "#e7e2d9" }} />
                        <span style={{ marginInlineStart: "auto", width: 24, height: 9, borderRadius: 5, background: "#e9e6f1" }} />
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 5, background: "var(--qm-surface)", border: "1px solid var(--qm-hairline)", borderRadius: 8, padding: "4px 7px", animation: "qmBld3 9s cubic-bezier(.22,.61,.36,1) infinite" }}>
                        <span className="msr" aria-hidden="true" style={{ fontSize: 11, color: "var(--qm-orange-deep)" }}>flag</span>
                        <span style={{ width: 46, height: 5, borderRadius: 3, background: "#e7e2d9" }} />
                        <span style={{ marginInlineStart: "auto", width: 24, height: 9, borderRadius: 5, background: "#f5e7de" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 14, maxWidth: 460 }}>
              <h3 style={{ margin: 0, fontSize: "clamp(26px,3.2vw,38px)", fontWeight: 700, lineHeight: 1.35, letterSpacing: -0.5 }}>
                نطاق
                {" "}
                <span style={{ color: "var(--qm-primary)", backgroundImage: "linear-gradient(90deg,var(--qm-primary-tint),var(--qm-primary-tint))", backgroundRepeat: "no-repeat", backgroundPosition: "right bottom", backgroundSize: "100% 32%", borderRadius: 8, padding: "0 8px" }}>وخطة مكتوبة</span>
              </h3>
              <p style={{ margin: 0, fontSize: "clamp(14.5px,1.3vw,16px)", lineHeight: 1.85, color: "var(--qm-subtle)" }}>خطة مقسّمة على مراحل، لكل محطة تاريخها وتسليماتها المحددة.</p>
              <span style={{ fontSize: 11.5, fontWeight: 700, color: "var(--qm-primary)", background: "var(--qm-primary-tint)", padding: "4px 12px", borderRadius: 999, marginTop: 2 }}>قبل أي دفعة</span>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))", gap: "clamp(28px,5vw,64px)", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 14, maxWidth: 460 }}>
              <h3 style={{ margin: 0, fontSize: "clamp(26px,3.2vw,38px)", fontWeight: 700, lineHeight: 1.35, letterSpacing: -0.5 }}>
                تطوير
                {" "}
                <span style={{ color: "var(--qm-orange-deep)", backgroundImage: "linear-gradient(90deg,var(--qm-orange-tint),var(--qm-orange-tint))", backgroundRepeat: "no-repeat", backgroundPosition: "right bottom", backgroundSize: "100% 32%", borderRadius: 8, padding: "0 8px" }}>بدفعات أسبوعية</span>
              </h3>
              <p style={{ margin: 0, fontSize: "clamp(14.5px,1.3vw,16px)", lineHeight: 1.85, color: "var(--qm-subtle)" }}>كل أسبوع شيء جاهز تجرّبه بيدك — لا عروض شرائح ولا وعود.</p>
              <span style={{ fontSize: 11.5, fontWeight: 700, color: "var(--qm-orange-deep)", background: "var(--qm-orange-tint)", padding: "4px 12px", borderRadius: 999, marginTop: 2 }}>إصدار كل أسبوع</span>
            </div>
            <div style={{ width: "min(480px,100%)", marginInlineStart: "auto", background: "var(--qm-surface)", border: "1px solid var(--qm-border)", borderRadius: 22, boxShadow: "var(--qm-shadow-raised)", padding: 14, transform: "rotate(-1.2deg)" }}>
              <div style={{ height: 146 }}>
                <div style={{ width: "calc(100% / 1.3)", height: 112, transform: "scale(1.3)", transformOrigin: "top right" }}>
                  <div aria-hidden="true" style={{ height: 112, borderRadius: 14, border: "1px solid var(--qm-hairline)", background: "var(--qm-surface-soft)", padding: 10, overflow: "hidden" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8, animation: "qmVeil 9s linear infinite" }}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <span style={{ fontSize: 9.5, fontWeight: 700, color: "var(--qm-faint)", whiteSpace: "nowrap" }}>هذا الأسبوع</span>
                        <span dir="ltr" style={{ position: "relative", marginInlineStart: "auto", width: 34, height: 15 }}>
                          <span style={{ position: "absolute", inset: 0, display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: 5, background: "#e9e6f1", color: "#564d84", fontFamily: "var(--qm-font-mono)", fontSize: 8.5, fontWeight: 700, animation: "qmSwapA 9s linear infinite" }}>v2.3</span>
                          <span style={{ position: "absolute", inset: 0, display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: 5, background: "#dcefef", color: "#357f7f", fontFamily: "var(--qm-font-mono)", fontSize: 8.5, fontWeight: 700, animation: "qmSwapB 9s linear infinite" }}>v2.4</span>
                        </span>
                      </div>
                      <span style={{ display: "block", position: "relative", height: 8, borderRadius: 999, background: "#e9e6f1", overflow: "hidden" }}>
                        <span style={{ position: "absolute", inset: 0, borderRadius: 999, background: "linear-gradient(90deg,#58b3b3,#6b5fa0)", transformOrigin: "right center", animation: "qmFill 9s cubic-bezier(.22,.61,.36,1) infinite" }} />
                        <span style={{ position: "absolute", top: 0, bottom: 0, left: "25%", width: 2, background: "var(--qm-surface-soft)" }} />
                        <span style={{ position: "absolute", top: 0, bottom: 0, left: "50%", width: 2, background: "var(--qm-surface-soft)" }} />
                        <span style={{ position: "absolute", top: 0, bottom: 0, left: "75%", width: 2, background: "var(--qm-surface-soft)" }} />
                      </span>
                      <div style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: 5, background: "var(--qm-surface)", border: "1px solid var(--qm-border)", borderRadius: 999, boxShadow: "var(--qm-shadow-card)", padding: "4px 9px", animation: "qmToastB 9s cubic-bezier(.22,.61,.36,1) infinite" }}>
                        <span className="msr" aria-hidden="true" style={{ fontSize: 12, color: "var(--qm-teal-deep)" }}>link</span>
                        <span style={{ fontSize: 9.5, fontWeight: 700, color: "var(--qm-subtle)", whiteSpace: "nowrap" }}>رابط تجريبي جديد — جرّبه بيدك</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))", gap: "clamp(28px,5vw,64px)", alignItems: "center" }}>
            <div data-rsp="step-vis" style={{ width: "min(480px,100%)", background: "var(--qm-surface)", border: "1px solid var(--qm-border)", borderRadius: 22, boxShadow: "var(--qm-shadow-raised)", padding: 14, transform: "rotate(1.2deg)" }}>
              <div style={{ height: 146 }}>
                <div style={{ width: "calc(100% / 1.3)", height: 112, transform: "scale(1.3)", transformOrigin: "top right" }}>
                  <div aria-hidden="true" style={{ height: 112, borderRadius: 14, border: "1px solid var(--qm-hairline)", background: "var(--qm-surface-soft)", padding: 10, overflow: "hidden" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8, animation: "qmVeil 9s linear infinite" }}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: 4, background: "var(--qm-teal-tint)", color: "var(--qm-teal-deep)", borderRadius: 999, padding: "3px 8px", fontSize: 9, fontWeight: 700, whiteSpace: "nowrap" }}>
                          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--qm-teal-deep)", animation: "qmDot 2.4s linear infinite" }} />
                          يعمل الآن
                        </span>
                        <span dir="ltr" style={{ marginInlineStart: "auto", fontFamily: "var(--qm-font-mono)", fontSize: 9, color: "var(--qm-faint)" }}>99.9%</span>
                      </div>
                      <div style={{ display: "flex", alignItems: "flex-end", gap: 5, height: 52, borderBottom: "1px solid var(--qm-hairline)", paddingBottom: 0 }}>
                        <span style={{ flex: 1, height: 18, borderRadius: "3px 3px 0 0", background: "var(--qm-mint)", transformOrigin: "bottom center", animation: "qmBarB 9s cubic-bezier(.22,.61,.36,1) infinite" }} />
                        <span style={{ flex: 1, height: 32, borderRadius: "3px 3px 0 0", background: "#58b3b3", transformOrigin: "bottom center", animation: "qmBarC 9s cubic-bezier(.22,.61,.36,1) infinite" }} />
                        <span style={{ flex: 1, height: 24, borderRadius: "3px 3px 0 0", background: "var(--qm-mint)", transformOrigin: "bottom center", animation: "qmBarB 9s cubic-bezier(.22,.61,.36,1) infinite" }} />
                        <span style={{ flex: 1, height: 42, borderRadius: "3px 3px 0 0", background: "var(--qm-violet)", transformOrigin: "bottom center", animation: "qmBarC 9s cubic-bezier(.22,.61,.36,1) infinite" }} />
                        <span style={{ flex: 1, height: 28, borderRadius: "3px 3px 0 0", background: "#58b3b3", transformOrigin: "bottom center", animation: "qmBarB 9s cubic-bezier(.22,.61,.36,1) infinite" }} />
                      </div>
                      <div style={{ fontSize: 9, color: "var(--qm-faint)" }}>نراقب الأداء بعد الإطلاق</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 14, maxWidth: 460 }}>
              <h3 style={{ margin: 0, fontSize: "clamp(26px,3.2vw,38px)", fontWeight: 700, lineHeight: 1.35, letterSpacing: -0.5 }}>
                إطلاق
                {" "}
                <span style={{ color: "var(--qm-teal-deep)", backgroundImage: "linear-gradient(90deg,var(--qm-teal-tint),var(--qm-teal-tint))", backgroundRepeat: "no-repeat", backgroundPosition: "right bottom", backgroundSize: "100% 32%", borderRadius: 8, padding: "0 8px" }}>ومتابعة</span>
              </h3>
              <p style={{ margin: 0, fontSize: "clamp(14.5px,1.3vw,16px)", lineHeight: 1.85, color: "var(--qm-subtle)" }}>ننشر المنتج، نراقب أداءه، ونبقى معك بعد الإطلاق لا قبله فقط.</p>
              <span style={{ fontSize: 11.5, fontWeight: 700, color: "var(--qm-teal-deep)", background: "var(--qm-teal-tint)", padding: "4px 12px", borderRadius: 999, marginTop: 2 }}>الكود ملكك بالكامل</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
