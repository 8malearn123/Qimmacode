const RESTAURANT_FEATURES = [
  { icon: "qr_code_2", title: "منيو رقمي وطلب من الطاولة", text: "العميل يمسح الباركود ويطلب، وطلبه يصل للكاشير والمطبخ مباشرة." },
  { icon: "smartphone", title: "تطبيق وموقع طلبات باسمك", text: "استلام من الفرع أو توصيل، وبدون عمولة تطبيقات التوصيل." },
  { icon: "loyalty", title: "برنامج ولاء ونقاط", text: "أختام رقمية ونقاط وعروض ترجّع عميلك مرة بعد مرة." },
  { icon: "point_of_sale", title: "ربط الكاشير وتطبيقات التوصيل", text: "كل الطلبات والمبيعات وتقاريرها في لوحة واحدة." },
];

const TICKET_ITEMS = [
  { qty: "٢×", name: "آيس لاتيه", price: "٣٢ ر.س" },
  { qty: "١×", name: "كرواسون زعتر", price: "١٤ ر.س" },
  { qty: "١×", name: "مياه", price: "٣ ر.س" },
];

const TRAINING_SESSIONS = [
  { title: "كتابة الأوامر بوضوح", length: "٤٥ دقيقة" },
  { title: "تلخيص الملفات وتحليلها", length: "ساعة" },
  { title: "أتمتة المهام المتكررة", length: "ساعة ونصف" },
];

const TRAINEES = [
  { initial: "م", color: "var(--qm-avatar-1)" },
  { initial: "ر", color: "var(--qm-avatar-2)" },
  { initial: "ن", color: "var(--qm-avatar-7)" },
  { initial: "ع", color: "var(--qm-avatar-3)" },
];

export function Services() {
  return (
    <section id="services" style={{ scrollMarginTop: 92, padding: "clamp(48px,6vw,86px) 0" }} data-reveal="1">
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 clamp(16px,3vw,30px)" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 13, marginBottom: 34, maxWidth: 660 }}>
          <h2 style={{ margin: 0, fontSize: "clamp(26px,3.2vw,38px)", fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3 }}>كل ما يحتاجه مشروعك</h2>
          <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7, color: "var(--qm-subtle)" }}>فريق واحد يصمّم ويبرمج ويطلق ويشغّل، وما تحتاج تنسّق بين أكثر من جهة.</p>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 18 }}>
          <div className="hv-lift-shadow" style={{ flex: "1.6 1 560px", minWidth: 0, background: "var(--qm-surface)", border: "1px solid var(--qm-border)", borderRadius: 24, boxShadow: "var(--qm-shadow-card)", padding: 26, display: "flex", flexWrap: "wrap", alignItems: "stretch", gap: 24, transition: "transform var(--qm-dur-fast),box-shadow var(--qm-dur-fast)" }}>
            <div style={{ flex: "1 1 240px", minWidth: 0, display: "flex", flexDirection: "column", justifyContent: "center", gap: 11 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
                <span style={{ width: 38, height: 38, borderRadius: 12, background: "var(--qm-primary-tint)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span className="msr" aria-hidden="true" style={{ fontSize: 21, color: "var(--qm-primary)" }}>language</span>
                </span>
                <h3 style={{ margin: 0, fontSize: 17, fontWeight: 700 }}>تطبيقات الويب</h3>
              </div>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.75, color: "var(--qm-subtle)" }}>منصات ولوحات سريعة وخفيفة، نبنيها بالعربية ومن اليمين لليسار من أول سطر.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                <span style={{ fontSize: 11.5, fontWeight: 600, color: "var(--qm-subtle-2)", background: "var(--qm-surface-soft)", padding: "4px 10px", borderRadius: 999 }} dir="ltr">React</span>
                <span style={{ fontSize: 11.5, fontWeight: 600, color: "var(--qm-subtle-2)", background: "var(--qm-surface-soft)", padding: "4px 10px", borderRadius: 999 }} dir="ltr">Next.js</span>
                <span style={{ fontSize: 11.5, fontWeight: 600, color: "var(--qm-subtle-2)", background: "var(--qm-surface-soft)", padding: "4px 10px", borderRadius: 999 }} dir="ltr">TypeScript</span>
              </div>
            </div>
            <div data-rsp="svc-vis-a" style={{ flex: "1.15 1 280px", minWidth: 0, background: "var(--qm-surface-row)", border: "1px solid var(--qm-hairline)", borderRadius: 16, padding: 12, display: "flex", gap: 10, minHeight: 176 }}>
              <div style={{ width: 52, flexShrink: 0, background: "var(--qm-surface)", border: "1px solid var(--qm-hairline)", borderRadius: 11, padding: 7, display: "flex", flexDirection: "column", gap: 6, position: "relative" }}>
                <div style={{ position: "absolute", insetInline: 7, top: 7, height: 15, borderRadius: 6, background: "var(--qm-primary)", animation: "qmSideHop 9s cubic-bezier(.22,.61,.36,1) infinite" }} />
                <div style={{ height: 15, borderRadius: 6, background: "var(--qm-surface-soft)" }} />
                <div style={{ height: 15, borderRadius: 6, background: "var(--qm-surface-soft)" }} />
                <div style={{ height: 15, borderRadius: 6, background: "var(--qm-surface-soft)" }} />
                <div style={{ height: 15, borderRadius: 6, background: "var(--qm-surface-soft)" }} />
              </div>
              <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 8, justifyContent: "center" }}>
                <div style={{ height: 11, width: "52%", borderRadius: 6, background: "var(--qm-border)" }} />
                <div style={{ background: "var(--qm-surface)", border: "1px solid var(--qm-hairline)", borderRadius: 11, padding: "9px 11px", display: "flex", alignItems: "center", gap: 9 }}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#58b3b3", flexShrink: 0 }} />
                  <span style={{ flex: 1, height: 8, borderRadius: 5, background: "var(--qm-surface-soft)" }} />
                  <span style={{ fontSize: 10.5, fontWeight: 700, color: "var(--qm-orange-deep)", background: "var(--qm-orange-tint)", padding: "2px 9px", borderRadius: 999, flexShrink: 0 }}>عاجل</span>
                </div>
                <div style={{ background: "var(--qm-surface)", border: "1px solid var(--qm-hairline)", borderRadius: 11, padding: "9px 11px", display: "flex", alignItems: "center", gap: 9 }}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--qm-violet)", flexShrink: 0 }} />
                  <span style={{ flex: 1, height: 8, borderRadius: 5, background: "var(--qm-surface-soft)" }} />
                  <span style={{ fontSize: 10.5, fontWeight: 700, color: "var(--qm-primary)", background: "var(--qm-primary-tint)", padding: "2px 9px", borderRadius: 999, flexShrink: 0 }}>تم</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ flex: 1, height: 8, borderRadius: 999, background: "var(--qm-surface-soft)", overflow: "hidden" }}>
                    <div style={{ width: "72%", height: "100%", borderRadius: 999, background: "linear-gradient(90deg,#58b3b3,#6b5fa0)", transformOrigin: "right center", animation: "qmFill 7s cubic-bezier(.22,.61,.36,1) infinite" }} />
                  </div>
                  <span style={{ fontSize: 10.5, fontWeight: 700, color: "var(--qm-teal-deep)" }}>٧٢٪</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hv-lift-shadow" style={{ flex: "1 1 340px", minWidth: 0, background: "var(--qm-surface)", border: "1px solid var(--qm-border)", borderRadius: 24, boxShadow: "var(--qm-shadow-card)", padding: 26, display: "flex", flexDirection: "column", gap: 16, transition: "transform var(--qm-dur-fast),box-shadow var(--qm-dur-fast)" }}>
            <div style={{ height: 176, background: "var(--qm-surface-row)", border: "1px solid var(--qm-hairline)", borderRadius: 16, display: "flex", alignItems: "flex-end", justifyContent: "center", overflow: "hidden" }}>
              <div style={{ width: 128, height: 162, marginBottom: -16, background: "var(--qm-surface)", border: "1px solid var(--qm-border-input)", borderRadius: "22px 22px 0 0", boxShadow: "var(--qm-shadow-card)", padding: "10px 12px", display: "flex", flexDirection: "column", gap: 8, position: "relative", animation: "qmFloat 7s ease-in-out infinite" }}>
                <div style={{ width: 34, height: 5, borderRadius: 999, background: "var(--qm-border)", margin: "0 auto", flexShrink: 0 }} />
                <div style={{ height: 22, borderRadius: 8, background: "var(--qm-surface-soft)", display: "flex", alignItems: "center", gap: 5, padding: "0 7px", flexShrink: 0 }}>
                  <span className="msr" aria-hidden="true" style={{ fontSize: 11, color: "var(--qm-faint)" }}>search</span>
                  <span style={{ width: 38, height: 5, borderRadius: 3, background: "var(--qm-border)" }} />
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ width: 16, height: 16, borderRadius: "50%", background: "var(--qm-mint)", flexShrink: 0 }} />
                  <span style={{ flex: 1, height: 6, borderRadius: 4, background: "var(--qm-surface-soft)" }} />
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ width: 16, height: 16, borderRadius: "50%", background: "var(--qm-primary-tint)", flexShrink: 0 }} />
                  <span style={{ flex: 1, height: 6, borderRadius: 4, background: "var(--qm-surface-soft)" }} />
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ width: 16, height: 16, borderRadius: "50%", background: "var(--qm-orange-tint)", flexShrink: 0 }} />
                  <span style={{ flex: 1, height: 6, borderRadius: 4, background: "var(--qm-surface-soft)" }} />
                </div>
                <div style={{ position: "absolute", bottom: 22, insetInlineStart: 12, width: 30, height: 30, borderRadius: "50%", background: "var(--qm-teal-deep)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "var(--qm-shadow-raised)", animation: "qmPulse 2.8s ease-in-out infinite" }}>
                  <span className="msr" aria-hidden="true" style={{ fontSize: 16, color: "#fff" }}>add</span>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
                <span style={{ width: 38, height: 38, borderRadius: 12, background: "var(--qm-teal-tint)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span className="msr" aria-hidden="true" style={{ fontSize: 21, color: "var(--qm-teal-deep)" }}>smartphone</span>
                </span>
                <h3 style={{ margin: 0, fontSize: 17, fontWeight: 700 }}>تطبيقات الجوال</h3>
              </div>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.75, color: "var(--qm-subtle)" }}>نبني تطبيقك مرة واحدة، وينزل للآيفون والأندرويد في نفس اليوم، بأداء سلس على الاثنين.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                <span style={{ fontSize: 11.5, fontWeight: 600, color: "var(--qm-subtle-2)", background: "var(--qm-surface-soft)", padding: "4px 10px", borderRadius: 999 }} dir="ltr">React Native</span>
                <span style={{ fontSize: 11.5, fontWeight: 600, color: "var(--qm-subtle-2)", background: "var(--qm-surface-soft)", padding: "4px 10px", borderRadius: 999 }} dir="ltr">Flutter</span>
              </div>
            </div>
          </div>
          <div className="hv-lift-shadow" style={{ flex: "1 1 300px", minWidth: 0, background: "var(--qm-surface)", border: "1px solid var(--qm-border)", borderRadius: 24, boxShadow: "var(--qm-shadow-card)", padding: 26, display: "flex", flexDirection: "column", gap: 16, transition: "transform var(--qm-dur-fast),box-shadow var(--qm-dur-fast)" }}>
            <div style={{ height: 176, background: "var(--qm-surface-row)", border: "1px solid var(--qm-hairline)", borderRadius: 16, padding: 14, display: "flex", flexDirection: "column", justifyContent: "center", gap: 9 }}>
              <div style={{ background: "var(--qm-surface)", border: "1px solid var(--qm-hairline)", borderRadius: 11, padding: "9px 12px", display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 11, fontWeight: 600, color: "var(--qm-subtle)", flex: 1 }}>الاشتراك السنوي</span>
                <span style={{ fontSize: 10.5, fontWeight: 700, color: "var(--qm-teal-deep)", background: "var(--qm-teal-tint)", padding: "2px 9px", borderRadius: 999 }}>مفعّل</span>
              </div>
              <div style={{ background: "var(--qm-surface)", border: "1px solid var(--qm-hairline)", borderRadius: 11, padding: "10px 12px", display: "flex", flexDirection: "column", gap: 7 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 11, fontWeight: 600, color: "var(--qm-subtle)" }}>استخدام الباقة</span>
                  <span style={{ fontSize: 10.5, fontWeight: 700, color: "var(--qm-primary)" }}>٦٤٪</span>
                </div>
                <div style={{ height: 7, borderRadius: 999, background: "var(--qm-surface-soft)", overflow: "hidden" }}>
                  <div style={{ width: "64%", height: "100%", borderRadius: 999, background: "linear-gradient(90deg,#58b3b3,#6b5fa0)", transformOrigin: "right center", animation: "qmFill 8s cubic-bezier(.22,.61,.36,1) infinite" }} />
                </div>
              </div>
              <div style={{ background: "var(--qm-surface)", border: "1px solid var(--qm-hairline)", borderRadius: 11, padding: "8px 12px", display: "flex", alignItems: "center", gap: 7, animation: "qmToast 8s ease infinite" }}>
                <span className="msr" aria-hidden="true" style={{ fontSize: 15, color: "var(--qm-teal-deep)" }}>check_circle</span>
                <span style={{ fontSize: 11, fontWeight: 600, color: "var(--qm-ink)", flex: 1 }}>تم سداد الفاتورة</span>
                <span style={{ fontSize: 10, color: "var(--qm-faint)" }}>الآن</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
                <span style={{ width: 38, height: 38, borderRadius: 12, background: "var(--qm-primary-tint)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span className="msr" aria-hidden="true" style={{ fontSize: 21, color: "var(--qm-primary)" }}>cloud</span>
                </span>
                <h3 style={{ margin: 0, fontSize: 17, fontWeight: 700 }}>منصات SaaS</h3>
              </div>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.75, color: "var(--qm-subtle)" }}>منصة يشترك فيها عملاؤك ويدفعون: اشتراكات وفواتير وصلاحيات وحسابات متعددة، جاهزة من أول يوم.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                <span style={{ fontSize: 11.5, fontWeight: 600, color: "var(--qm-subtle-2)", background: "var(--qm-surface-soft)", padding: "4px 10px", borderRadius: 999 }} dir="ltr">Multi-tenant</span>
                <span style={{ fontSize: 11.5, fontWeight: 600, color: "var(--qm-subtle-2)", background: "var(--qm-surface-soft)", padding: "4px 10px", borderRadius: 999 }}>مدى</span>
                <span style={{ fontSize: 11.5, fontWeight: 600, color: "var(--qm-subtle-2)", background: "var(--qm-surface-soft)", padding: "4px 10px", borderRadius: 999 }} dir="ltr">Apple Pay</span>
                <span style={{ fontSize: 11.5, fontWeight: 600, color: "var(--qm-subtle-2)", background: "var(--qm-surface-soft)", padding: "4px 10px", borderRadius: 999 }} dir="ltr">Auth</span>
              </div>
            </div>
          </div>
          <div className="hv-lift-shadow" style={{ flex: "1 1 300px", minWidth: 0, background: "var(--qm-surface)", border: "1px solid var(--qm-border)", borderRadius: 24, boxShadow: "var(--qm-shadow-card)", padding: 26, display: "flex", flexDirection: "column", gap: 16, transition: "transform var(--qm-dur-fast),box-shadow var(--qm-dur-fast)" }}>
            <div style={{ height: 176, background: "var(--qm-surface-row)", border: "1px solid var(--qm-hairline)", borderRadius: 16, padding: "14px 16px 0", display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 10.5, fontWeight: 600, color: "var(--qm-subtle)" }}>
                  <span style={{ width: 8, height: 8, borderRadius: 3, background: "var(--qm-primary)" }} />
                  هذا الربع
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 10.5, fontWeight: 600, color: "var(--qm-muted)" }}>
                  <span style={{ width: 8, height: 8, borderRadius: 3, background: "var(--qm-mint)" }} />
                  الربع الماضي
                </span>
              </div>
              <div style={{ flex: 1, display: "flex", alignItems: "flex-end", gap: 7, borderBottom: "1px solid var(--qm-hairline)" }}>
                <div style={{ flex: 1, height: 34, borderRadius: "6px 6px 0 0", background: "var(--qm-mint)", transformOrigin: "bottom center", animation: "qmGrow 6.5s cubic-bezier(.22,.61,.36,1) infinite" }} />
                <div style={{ flex: 1, height: 58, borderRadius: "6px 6px 0 0", background: "var(--qm-mint)", transformOrigin: "bottom center", animation: "qmGrow 6.5s cubic-bezier(.22,.61,.36,1) infinite", animationDelay: ".12s" }} />
                <div style={{ flex: 1, height: 42, borderRadius: "6px 6px 0 0", background: "var(--qm-mint)", transformOrigin: "bottom center", animation: "qmGrow 6.5s cubic-bezier(.22,.61,.36,1) infinite", animationDelay: ".24s" }} />
                <div style={{ flex: 1, height: 76, borderRadius: "6px 6px 0 0", background: "#58b3b3", transformOrigin: "bottom center", animation: "qmGrow 6.5s cubic-bezier(.22,.61,.36,1) infinite", animationDelay: ".36s" }} />
                <div style={{ flex: 1, height: 52, borderRadius: "6px 6px 0 0", background: "var(--qm-mint)", transformOrigin: "bottom center", animation: "qmGrow 6.5s cubic-bezier(.22,.61,.36,1) infinite", animationDelay: ".48s" }} />
                <div style={{ flex: 1, height: 96, borderRadius: "6px 6px 0 0", background: "var(--qm-primary)", transformOrigin: "bottom center", animation: "qmGrow 6.5s cubic-bezier(.22,.61,.36,1) infinite", animationDelay: ".6s" }} />
                <div style={{ flex: 1, height: 64, borderRadius: "6px 6px 0 0", background: "#58b3b3", transformOrigin: "bottom center", animation: "qmGrow 6.5s cubic-bezier(.22,.61,.36,1) infinite", animationDelay: ".72s" }} />
              </div>
              <div style={{ height: 8 }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
                <span style={{ width: 38, height: 38, borderRadius: 12, background: "var(--qm-teal-tint)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span className="msr" aria-hidden="true" style={{ fontSize: 21, color: "var(--qm-teal-deep)" }}>space_dashboard</span>
                </span>
                <h3 style={{ margin: 0, fontSize: 17, fontWeight: 700 }}>لوحات التحكم والتحليلات</h3>
              </div>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.75, color: "var(--qm-subtle)" }}>أرقامك واضحة من أول نظرة: مؤشرات لحظية وتقارير وتصدير جاهز للإدارة، بدل ملفات إكسل ما يفتحها أحد.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                <span style={{ fontSize: 11.5, fontWeight: 600, color: "var(--qm-subtle-2)", background: "var(--qm-surface-soft)", padding: "4px 10px", borderRadius: 999 }} dir="ltr">Charts</span>
                <span style={{ fontSize: 11.5, fontWeight: 600, color: "var(--qm-subtle-2)", background: "var(--qm-surface-soft)", padding: "4px 10px", borderRadius: 999 }} dir="ltr">BI</span>
              </div>
            </div>
          </div>
          <div className="hv-lift-shadow" style={{ flex: "1 1 300px", minWidth: 0, background: "var(--qm-surface)", border: "1px solid var(--qm-border)", borderRadius: 24, boxShadow: "var(--qm-shadow-card)", padding: 26, display: "flex", flexDirection: "column", gap: 16, transition: "transform var(--qm-dur-fast),box-shadow var(--qm-dur-fast)" }}>
            <div style={{ height: 176, background: "var(--qm-surface-row)", border: "1px solid var(--qm-hairline)", borderRadius: 16, padding: 14, display: "flex", flexDirection: "column", justifyContent: "center", gap: 8 }}>
              <div style={{ alignSelf: "flex-start", maxWidth: "85%", background: "var(--qm-surface)", border: "1px solid var(--qm-hairline)", borderRadius: 13, borderStartStartRadius: 4, padding: "8px 12px", fontSize: 12, fontWeight: 500, lineHeight: 1.7, color: "var(--qm-ink)", animation: "qmMsgA 9s ease infinite" }}>وش وضع مشروعي هذا الأسبوع؟</div>
              <div style={{ alignSelf: "flex-end", maxWidth: "88%", background: "var(--qm-primary-tint)", borderRadius: 13, borderStartEndRadius: 4, padding: "8px 12px", fontSize: 12, fontWeight: 600, lineHeight: 1.7, color: "var(--qm-primary)", animation: "qmMsgB 9s ease infinite" }}>خلّص الفريق ٨ من ١٠ مهام، والإطلاق في موعده.</div>
              <div style={{ alignSelf: "flex-end", background: "var(--qm-surface)", border: "1px solid var(--qm-hairline)", borderRadius: 13, padding: "9px 12px", display: "flex", alignItems: "center", gap: 4, animation: "qmMsgC 9s ease infinite" }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--qm-faint)", animation: "qmDot 1.3s ease-in-out infinite" }} />
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--qm-faint)", animation: "qmDot 1.3s ease-in-out infinite", animationDelay: ".18s" }} />
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--qm-faint)", animation: "qmDot 1.3s ease-in-out infinite", animationDelay: ".36s" }} />
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
                <span style={{ width: 38, height: 38, borderRadius: 12, background: "var(--qm-orange-tint)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span className="msr" aria-hidden="true" style={{ fontSize: 21, color: "var(--qm-orange-deep)" }}>smart_toy</span>
                </span>
                <h3 style={{ margin: 0, fontSize: 17, fontWeight: 700 }}>الذكاء الاصطناعي</h3>
              </div>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.75, color: "var(--qm-subtle)" }}>مساعد ذكي يفهم عميلك بلهجته، ويرد من بياناتك فقط، وإذا صعب عليه السؤال حوّله لموظف.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                <span style={{ fontSize: 11.5, fontWeight: 600, color: "var(--qm-subtle-2)", background: "var(--qm-surface-soft)", padding: "4px 10px", borderRadius: 999 }} dir="ltr">LLM</span>
                <span style={{ fontSize: 11.5, fontWeight: 600, color: "var(--qm-subtle-2)", background: "var(--qm-surface-soft)", padding: "4px 10px", borderRadius: 999 }} dir="ltr">RAG</span>
                <span style={{ fontSize: 11.5, fontWeight: 600, color: "var(--qm-subtle-2)", background: "var(--qm-surface-soft)", padding: "4px 10px", borderRadius: 999 }} dir="ltr">Automation</span>
              </div>
            </div>
          </div>
          <div className="hv-lift-shadow" style={{ flex: "1 1 100%", minWidth: 0, background: "var(--qm-surface)", border: "1px solid var(--qm-border)", borderRadius: 24, boxShadow: "var(--qm-shadow-card)", padding: 26, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 24, transition: "transform var(--qm-dur-fast),box-shadow var(--qm-dur-fast)" }}>
            <div style={{ flex: "1 1 280px", minWidth: 0, display: "flex", flexDirection: "column", gap: 11 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
                <span style={{ width: 38, height: 38, borderRadius: 12, background: "var(--qm-primary-tint)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span className="msr" aria-hidden="true" style={{ fontSize: 21, color: "var(--qm-primary)" }}>design_services</span>
                </span>
                <h3 style={{ margin: 0, fontSize: 17, fontWeight: 700 }}>تصميم المنتج</h3>
              </div>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.75, color: "var(--qm-subtle)" }}>نصمّم رحلة المستخدم وكل الشاشات قبل أول سطر كود. تجرّبها بنفسك، وتستلم منتجك بدون مفاجآت.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                <span style={{ fontSize: 11.5, fontWeight: 600, color: "var(--qm-subtle-2)", background: "var(--qm-surface-soft)", padding: "4px 10px", borderRadius: 999 }} dir="ltr">UI/UX</span>
                <span style={{ fontSize: 11.5, fontWeight: 600, color: "var(--qm-subtle-2)", background: "var(--qm-surface-soft)", padding: "4px 10px", borderRadius: 999 }} dir="ltr">Design System</span>
              </div>
            </div>
            <div data-rsp="svc-vis-b" style={{ flex: "1.5 1 420px", minWidth: 0, display: "flex", flexWrap: "wrap", gap: 12 }}>
              <div style={{ flex: "1 1 150px", minHeight: 112, background: "var(--qm-surface-row)", border: "1px solid var(--qm-hairline)", borderRadius: 16, padding: 14, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 9 }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 12, color: "var(--qm-ink)" }}>
                  <span style={{ fontSize: 26, fontWeight: 300, lineHeight: 1, animation: "qmQ 4.5s ease-in-out infinite" }}>ق</span>
                  <span style={{ fontSize: 26, fontWeight: 500, lineHeight: 1, animation: "qmQ 4.5s ease-in-out infinite", animationDelay: "1.5s" }}>ق</span>
                  <span style={{ fontSize: 26, fontWeight: 700, lineHeight: 1, animation: "qmQ 4.5s ease-in-out infinite", animationDelay: "3s" }}>ق</span>
                </div>
                <span style={{ fontSize: 10.5, color: "var(--qm-faint)" }} dir="ltr">IBM Plex Sans Arabic</span>
              </div>
              <div style={{ flex: "1 1 150px", minHeight: 112, background: "var(--qm-surface-row)", border: "1px solid var(--qm-hairline)", borderRadius: 16, padding: 14, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 11 }}>
                <div style={{ display: "flex", gap: 7 }}>
                  <span style={{ width: 26, height: 26, borderRadius: "50%", background: "var(--qm-primary)", border: "2px solid var(--qm-surface)", boxShadow: "var(--qm-shadow-card)", animation: "qmWave 3.6s ease-in-out infinite" }} />
                  <span style={{ width: 26, height: 26, borderRadius: "50%", background: "var(--qm-violet)", border: "2px solid var(--qm-surface)", boxShadow: "var(--qm-shadow-card)", animation: "qmWave 3.6s ease-in-out infinite", animationDelay: ".14s" }} />
                  <span style={{ width: 26, height: 26, borderRadius: "50%", background: "#58b3b3", border: "2px solid var(--qm-surface)", boxShadow: "var(--qm-shadow-card)", animation: "qmWave 3.6s ease-in-out infinite", animationDelay: ".28s" }} />
                  <span style={{ width: 26, height: 26, borderRadius: "50%", background: "#cf7a52", border: "2px solid var(--qm-surface)", boxShadow: "var(--qm-shadow-card)", animation: "qmWave 3.6s ease-in-out infinite", animationDelay: ".42s" }} />
                  <span style={{ width: 26, height: 26, borderRadius: "50%", background: "var(--qm-mint)", border: "2px solid var(--qm-surface)", boxShadow: "var(--qm-shadow-card)", animation: "qmWave 3.6s ease-in-out infinite", animationDelay: ".56s" }} />
                </div>
                <span style={{ fontSize: 10.5, color: "var(--qm-faint)" }}>لوحة الألوان</span>
              </div>
              <div style={{ flex: "1 1 150px", minHeight: 112, background: "var(--qm-surface-row)", border: "1px solid var(--qm-hairline)", borderRadius: 16, padding: 14, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 11 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                  <span style={{ background: "var(--qm-primary)", color: "#fff", borderRadius: 8, padding: "5px 12px", fontSize: 10.5, fontWeight: 600 }}>حفظ</span>
                  <span style={{ width: 30, height: 16, borderRadius: 999, background: "var(--qm-teal-deep)", display: "flex", alignItems: "center", justifyContent: "flex-end", padding: 2, animation: "qmTrack 5s ease infinite" }}>
                    <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#fff", animation: "qmKnob 5s cubic-bezier(.22,.61,.36,1) infinite" }} />
                  </span>
                  <span style={{ width: 24, height: 24, borderRadius: "50%", background: "var(--qm-violet)", color: "#fff", fontSize: 11, fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center" }}>س</span>
                </div>
                <span style={{ fontSize: 10.5, color: "var(--qm-faint)" }}>مكوّنات جاهزة</span>
              </div>
            </div>
          </div>
          <div className="hv-lift-shadow" style={{ flex: "1 1 100%", minWidth: 0, background: "var(--qm-surface)", border: "1px solid var(--qm-border)", borderRadius: 24, boxShadow: "var(--qm-shadow-card)", padding: 26, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 24, transition: "transform var(--qm-dur-fast),box-shadow var(--qm-dur-fast)" }}>
            <div style={{ flex: "1 1 300px", minWidth: 0, display: "flex", flexDirection: "column", gap: 11 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
                <span style={{ width: 38, height: 38, borderRadius: 12, background: "var(--qm-orange-tint)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span className="msr" aria-hidden="true" style={{ fontSize: 21, color: "var(--qm-orange-deep)" }}>restaurant</span>
                </span>
                <h3 style={{ margin: 0, fontSize: 17, fontWeight: 700 }}>حلول المطاعم والمقاهي</h3>
              </div>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.75, color: "var(--qm-subtle)" }}>كل ما يحتاجه مطعمك أو مقهاك من أنظمة، وباسمك أنت: من طلب الطاولة إلى تقرير آخر اليوم.</p>
              <ul style={{ listStyle: "none", margin: "6px 0 0", padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(max(210px,calc(50% - 9px)),1fr))", gap: "14px 18px" }}>
                {RESTAURANT_FEATURES.map((f) => (
                  <li key={f.title} style={{ display: "flex", alignItems: "flex-start", gap: 10, minWidth: 0 }}>
                    <span style={{ width: 30, height: 30, borderRadius: 9, background: "var(--qm-surface-soft)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span className="msr" aria-hidden="true" style={{ fontSize: 17, color: "var(--qm-orange-deep)" }}>{f.icon}</span>
                    </span>
                    <span style={{ display: "flex", flexDirection: "column", gap: 2, minWidth: 0 }}>
                      <span style={{ fontSize: 13.5, fontWeight: 700, color: "var(--qm-ink)" }}>{f.title}</span>
                      <span style={{ fontSize: 12.5, lineHeight: 1.7, color: "var(--qm-subtle)" }}>{f.text}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div aria-hidden="true" data-rsp="svc-vis-c" style={{ flex: "1.15 1 400px", minWidth: 0, alignSelf: "stretch", background: "var(--qm-surface-row)", border: "1px solid var(--qm-hairline)", borderRadius: 16, padding: 16, display: "flex", flexWrap: "wrap", alignItems: "center", alignContent: "center", gap: 12 }}>
              <div style={{ flex: "1.15 1 220px", minWidth: 0, background: "var(--qm-surface)", border: "1px solid var(--qm-hairline)", borderRadius: 14, boxShadow: "var(--qm-shadow-card)", padding: "12px 14px", display: "flex", flexDirection: "column", gap: 8 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                  <span style={{ width: 30, height: 30, borderRadius: 9, background: "var(--qm-orange-tint)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span className="msr" aria-hidden="true" style={{ fontSize: 17, color: "var(--qm-orange-deep)" }}>qr_code_2</span>
                  </span>
                  <span style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
                    <span style={{ fontSize: 12.5, fontWeight: 700, color: "var(--qm-ink)" }}>طاولة ٤</span>
                    <span style={{ fontSize: 10, color: "var(--qm-muted)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>طلب ١٢٨ من المنيو الرقمي</span>
                  </span>
                  <span style={{ position: "relative", marginInlineStart: "auto", width: 64, height: 19, flexShrink: 0 }}>
                    <span style={{ position: "absolute", inset: 0, display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: 999, background: "var(--qm-orange-tint)", color: "var(--qm-orange-deep)", fontSize: 10, fontWeight: 700, animation: "qmKitA 9s linear infinite" }}>طلب جديد</span>
                    <span style={{ position: "absolute", inset: 0, display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: 999, background: "var(--qm-teal-tint)", color: "var(--qm-teal-deep)", fontSize: 10, fontWeight: 700, animation: "qmKitB 9s linear infinite" }}>في المطبخ</span>
                  </span>
                </div>
                <span style={{ borderTop: "1px dashed var(--qm-border-ghost)" }} />
                <div style={{ display: "flex", flexDirection: "column", gap: 8, animation: "qmVeil 9s linear infinite" }}>
                  {TICKET_ITEMS.map((item, i) => (
                    <div key={item.name} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 11.5, animation: `qmBld${i + 1} 9s cubic-bezier(.22,.61,.36,1) infinite` }}>
                      <span style={{ width: 18, flexShrink: 0, fontWeight: 600, color: "var(--qm-muted)" }}>{item.qty}</span>
                      <span style={{ flex: 1, minWidth: 0, color: "var(--qm-ink)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.name}</span>
                      <span style={{ flexShrink: 0, color: "var(--qm-subtle)" }}>{item.price}</span>
                    </div>
                  ))}
                  <div style={{ display: "flex", flexDirection: "column", gap: 8, animation: "qmBld4 9s cubic-bezier(.22,.61,.36,1) infinite" }}>
                    <span style={{ borderTop: "1px dashed var(--qm-border-ghost)" }} />
                    <div style={{ display: "flex", alignItems: "center", fontSize: 12, fontWeight: 700, color: "var(--qm-ink)" }}>
                      <span>الإجمالي</span>
                      <span style={{ marginInlineStart: "auto" }}>٤٩ ر.س</span>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ flex: "1 1 180px", minWidth: 0, background: "var(--qm-surface)", border: "1px solid var(--qm-hairline)", borderRadius: 14, boxShadow: "var(--qm-shadow-card)", padding: "12px 14px", display: "flex", flexDirection: "column", gap: 10, animation: "qmFloat 7s ease-in-out infinite" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                  <span className="msr" aria-hidden="true" style={{ fontSize: 16, color: "var(--qm-orange-deep)" }}>loyalty</span>
                  <span style={{ fontSize: 11.5, fontWeight: 700, color: "var(--qm-ink)" }}>بطاقة الولاء</span>
                  <span style={{ position: "relative", marginInlineStart: "auto", width: 44, height: 16, flexShrink: 0 }}>
                    <span style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "flex-end", background: "var(--qm-surface)", fontSize: 10.5, fontWeight: 700, color: "var(--qm-muted)", animation: "qmKitA 9s linear infinite" }}>٦ من ٨</span>
                    <span style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "flex-end", background: "var(--qm-surface)", fontSize: 10.5, fontWeight: 700, color: "var(--qm-teal-deep)", animation: "qmKitB 9s linear infinite" }}>٧ من ٨</span>
                  </span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4,26px)", justifyContent: "space-between", rowGap: 8 }}>
                  {Array.from({ length: 6 }, (_, i) => (
                    <span key={i} style={{ width: 26, height: 26, borderRadius: "50%", background: "var(--qm-teal-tint)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span className="msr" aria-hidden="true" style={{ fontSize: 14, color: "var(--qm-teal-deep)" }}>local_cafe</span>
                    </span>
                  ))}
                  <span style={{ position: "relative", width: 26, height: 26, borderRadius: "50%", border: "1.5px dashed var(--qm-border-ghost)" }}>
                    <span style={{ position: "absolute", inset: -1.5, borderRadius: "50%", background: "var(--qm-teal-deep)", display: "flex", alignItems: "center", justifyContent: "center", animation: "qmStampIn 9s cubic-bezier(.22,.61,.36,1) infinite" }}>
                      <span className="msr" aria-hidden="true" style={{ fontSize: 14, color: "#fff" }}>local_cafe</span>
                    </span>
                  </span>
                  <span style={{ width: 26, height: 26, borderRadius: "50%", border: "1.5px dashed var(--qm-orange)", background: "var(--qm-orange-tint)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span className="msr" aria-hidden="true" style={{ fontSize: 14, color: "var(--qm-orange-deep)" }}>redeem</span>
                  </span>
                </div>
                <span style={{ fontSize: 10.5, color: "var(--qm-subtle)" }}>القهوة الثامنة علينا</span>
              </div>
            </div>
          </div>
          <div className="hv-lift-shadow" style={{ flex: "1 1 420px", minWidth: 0, background: "var(--qm-surface)", border: "1px solid var(--qm-border)", borderRadius: 24, boxShadow: "var(--qm-shadow-card)", padding: 26, display: "flex", flexDirection: "column", gap: 16, transition: "transform var(--qm-dur-fast),box-shadow var(--qm-dur-fast)" }}>
            <div aria-hidden="true" style={{ height: 176, background: "var(--qm-surface-row)", border: "1px solid var(--qm-hairline)", borderRadius: 16, padding: 14, display: "flex", flexDirection: "column", justifyContent: "center", gap: 8 }}>
              <div style={{ background: "var(--qm-surface)", border: "1px solid var(--qm-hairline)", borderRadius: 11, padding: "9px 12px", display: "flex", flexDirection: "column", gap: 7 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 11, fontWeight: 600, color: "var(--qm-subtle)", flex: 1 }}>حالة أنظمتك</span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 10.5, fontWeight: 700, color: "var(--qm-teal-deep)", background: "var(--qm-teal-tint)", padding: "2px 9px", borderRadius: 999 }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--qm-teal-deep)", animation: "qmDot 1.6s ease-in-out infinite" }} />
                    تعمل
                  </span>
                </div>
                <div style={{ display: "flex", gap: 3, height: 16 }}>
                  {Array.from({ length: 30 }, (_, i) => (
                    <span key={i} style={{ flex: 1, borderRadius: 3, background: "var(--qm-teal)", transformOrigin: "bottom center", animation: "qmGrow 9s cubic-bezier(.22,.61,.36,1) infinite", animationDelay: `${(i * 0.04 - 1.2).toFixed(2)}s` }} />
                  ))}
                </div>
                <div style={{ display: "flex", alignItems: "center", fontSize: 10, color: "var(--qm-faint)" }}>
                  <span>آخر ٣٠ يومًا</span>
                  <span style={{ marginInlineStart: "auto", fontWeight: 700, color: "var(--qm-teal-deep)" }}>جاهزية ٩٩٫٩٪</span>
                </div>
              </div>
              <div style={{ background: "var(--qm-surface)", border: "1px solid var(--qm-hairline)", borderRadius: 11, padding: "8px 12px 10px", display: "flex", flexDirection: "column", gap: 7 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span className="msr" aria-hidden="true" style={{ fontSize: 15, color: "var(--qm-primary)" }}>edit</span>
                  <span style={{ flex: 1, minWidth: 0, fontSize: 11, fontWeight: 600, color: "var(--qm-ink)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>طلب تعديل: صنف جديد في المنيو</span>
                  <span style={{ position: "relative", width: 66, height: 19, flexShrink: 0 }}>
                    <span style={{ position: "absolute", inset: 0, display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: 999, background: "var(--qm-orange-tint)", color: "var(--qm-orange-deep)", fontSize: 10, fontWeight: 700, animation: "qmSwapA 9s linear infinite" }}>قيد التنفيذ</span>
                    <span style={{ position: "absolute", inset: 0, display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: 999, background: "var(--qm-teal-tint)", color: "var(--qm-teal-deep)", fontSize: 10, fontWeight: 700, animation: "qmSwapB 9s linear infinite" }}>تم</span>
                  </span>
                </div>
                <span style={{ display: "block", height: 5, borderRadius: 999, background: "var(--qm-surface-soft)", overflow: "hidden" }}>
                  <span style={{ display: "block", height: "100%", borderRadius: 999, background: "linear-gradient(90deg,#58b3b3,#6b5fa0)", transformOrigin: "right center", animation: "qmFill 9s cubic-bezier(.22,.61,.36,1) infinite" }} />
                </span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
                <span style={{ width: 38, height: 38, borderRadius: 12, background: "var(--qm-teal-tint)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span className="msr" aria-hidden="true" style={{ fontSize: 21, color: "var(--qm-teal-deep)" }}>support_agent</span>
                </span>
                <h3 style={{ margin: 0, fontSize: 17, fontWeight: 700 }}>عقود التشغيل والدعم</h3>
              </div>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.75, color: "var(--qm-subtle)" }}>ما نختفي بعد الإطلاق. نستضيف نظامك ونراقبه ونصونه ونطوّره باشتراك شهري أو سنوي، للمطاعم والمقاهي والشركات.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                <span style={{ fontSize: 11.5, fontWeight: 600, color: "var(--qm-subtle-2)", background: "var(--qm-surface-soft)", padding: "4px 10px", borderRadius: 999 }}>استضافة ومراقبة</span>
                <span style={{ fontSize: 11.5, fontWeight: 600, color: "var(--qm-subtle-2)", background: "var(--qm-surface-soft)", padding: "4px 10px", borderRadius: 999 }}>صيانة وتحديثات</span>
                <span style={{ fontSize: 11.5, fontWeight: 600, color: "var(--qm-subtle-2)", background: "var(--qm-surface-soft)", padding: "4px 10px", borderRadius: 999 }}>دعم فني</span>
              </div>
            </div>
          </div>
          <div className="hv-lift-shadow" style={{ flex: "1 1 420px", minWidth: 0, background: "var(--qm-surface)", border: "1px solid var(--qm-border)", borderRadius: 24, boxShadow: "var(--qm-shadow-card)", padding: 26, display: "flex", flexDirection: "column", gap: 16, transition: "transform var(--qm-dur-fast),box-shadow var(--qm-dur-fast)" }}>
            <div aria-hidden="true" style={{ height: 176, background: "var(--qm-surface-row)", border: "1px solid var(--qm-hairline)", borderRadius: 16, padding: "14px 14px 20px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ position: "relative", background: "var(--qm-surface)", border: "1px solid var(--qm-hairline)", borderRadius: 11, padding: "10px 12px 22px", display: "flex", flexDirection: "column", gap: 8 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ display: "flex", flexShrink: 0 }}>
                    {TRAINEES.map((t, i) => (
                      <span key={t.initial} style={{ width: 22, height: 22, borderRadius: "50%", background: t.color, border: "2px solid var(--qm-surface)", marginInlineStart: i ? -7 : 0, color: "#fff", fontSize: 9.5, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", animation: "qmWave 3.6s ease-in-out infinite", animationDelay: `${i * 0.14}s` }}>{t.initial}</span>
                    ))}
                  </span>
                  <span style={{ fontSize: 10.5, fontWeight: 600, color: "var(--qm-subtle)", whiteSpace: "nowrap" }}>١٢ مشاركًا</span>
                  <span style={{ position: "relative", marginInlineStart: "auto", width: 84, height: 19, flexShrink: 0 }}>
                    <span style={{ position: "absolute", inset: 0, display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: 999, background: "var(--qm-primary-tint)", color: "var(--qm-primary)", fontSize: 10, fontWeight: 700, animation: "qmSwapA 9s linear infinite" }}>ورشة للشركات</span>
                    <span style={{ position: "absolute", inset: 0, display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: 999, background: "var(--qm-teal-tint)", color: "var(--qm-teal-deep)", fontSize: 10, fontWeight: 700, animation: "qmSwapB 9s linear infinite" }}>دورة للأفراد</span>
                  </span>
                </div>
                {TRAINING_SESSIONS.map((session, i) => (
                  <div key={session.title} style={{ display: "flex", alignItems: "center", gap: 7 }}>
                    <span style={{ position: "relative", width: 15, height: 15, flexShrink: 0 }}>
                      <span className="msr" aria-hidden="true" style={{ position: "absolute", inset: 0, fontSize: 15, color: "var(--qm-faint)" }}>radio_button_unchecked</span>
                      <span className="msr" aria-hidden="true" style={{ position: "absolute", inset: 0, fontSize: 15, color: "var(--qm-teal-deep)", background: "var(--qm-surface)", borderRadius: "50%", animation: `qmTick${i + 1} 9s cubic-bezier(.22,.61,.36,1) infinite` }}>check_circle</span>
                    </span>
                    <span style={{ flex: 1, minWidth: 0, fontSize: 11, fontWeight: 600, color: "var(--qm-ink)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{session.title}</span>
                    <span style={{ flexShrink: 0, fontSize: 10, color: "var(--qm-faint)" }}>{session.length}</span>
                  </div>
                ))}
                <div style={{ position: "absolute", bottom: -12, insetInlineEnd: 12, display: "inline-flex", alignItems: "center", gap: 5, background: "var(--qm-surface)", border: "1px solid var(--qm-border)", borderRadius: 999, boxShadow: "var(--qm-shadow-card)", padding: "4px 10px", animation: "qmToastB 9s cubic-bezier(.22,.61,.36,1) infinite" }}>
                  <span className="msr" aria-hidden="true" style={{ fontSize: 13, color: "var(--qm-primary)" }}>workspace_premium</span>
                  <span style={{ fontSize: 10, fontWeight: 700, color: "var(--qm-subtle)", whiteSpace: "nowrap" }}>شهادة إتمام</span>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
                <span style={{ width: 38, height: 38, borderRadius: 12, background: "var(--qm-primary-tint)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span className="msr" aria-hidden="true" style={{ fontSize: 21, color: "var(--qm-primary)" }}>school</span>
                </span>
                <h3 style={{ margin: 0, fontSize: 17, fontWeight: 700 }}>التدريب على أدوات الذكاء الاصطناعي</h3>
              </div>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.75, color: "var(--qm-subtle)" }}>ورش عملية لفرق الشركات ودورات للأفراد. نتدرّب على أدوات الذكاء الاصطناعي بمهام من عملك اليومي، وتخرج بمهارة تستخدمها من ثاني يوم.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                <span style={{ fontSize: 11.5, fontWeight: 600, color: "var(--qm-subtle-2)", background: "var(--qm-surface-soft)", padding: "4px 10px", borderRadius: 999 }}>ورش للشركات</span>
                <span style={{ fontSize: 11.5, fontWeight: 600, color: "var(--qm-subtle-2)", background: "var(--qm-surface-soft)", padding: "4px 10px", borderRadius: 999 }}>دورات للأفراد</span>
                <span style={{ fontSize: 11.5, fontWeight: 600, color: "var(--qm-subtle-2)", background: "var(--qm-surface-soft)", padding: "4px 10px", borderRadius: 999 }}>تطبيق عملي</span>
              </div>
            </div>
          </div>
          <div style={{ flex: "1 1 100%", minWidth: 0, position: "relative", overflow: "hidden", background: "linear-gradient(160deg,#5a5189,#453f6b)", borderRadius: 24, boxShadow: "var(--qm-shadow-raised)", padding: "clamp(24px,3.4vw,40px)", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "clamp(24px,4vw,52px)" }}>
            <div style={{ flex: "1.2 1 320px", minWidth: 0, display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 13 }}>
              <h3 style={{ margin: 0, fontSize: "clamp(21px,2.4vw,28px)", fontWeight: 700, color: "#fff", lineHeight: 1.35 }}>بطاقات NFC ذكية باسم علامتك</h3>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.85, color: "rgba(255,255,255,.82)", maxWidth: 460 }}>بطاقة واحدة تقرّبها من أي جوال، ويفتح ملفك كاملًا: أرقامك وموقعك وحساباتك. وإذا تغيّرت بياناتك عدّلها من لوحة التحكم، وتتحدّث البطاقة مباشرة بدون إعادة طباعة.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                <span style={{ fontSize: 11.5, fontWeight: 600, color: "#fff", background: "rgba(255,255,255,.12)", padding: "4px 12px", borderRadius: 999 }}>بدون تطبيق</span>
                <span style={{ fontSize: 11.5, fontWeight: 600, color: "#fff", background: "rgba(255,255,255,.12)", padding: "4px 12px", borderRadius: 999 }}>آيفون وأندرويد</span>
                <span style={{ fontSize: 11.5, fontWeight: 600, color: "#fff", background: "rgba(255,255,255,.12)", padding: "4px 12px", borderRadius: 999 }}>تحديث لحظي</span>
                <span style={{ fontSize: 11.5, fontWeight: 600, color: "#fff", background: "rgba(255,255,255,.12)", padding: "4px 12px", borderRadius: 999 }}>باركود احتياطي</span>
              </div>
              <a href="#brief" className="hv-bg-primary-tint qm-focus" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff", color: "var(--qm-primary)", borderRadius: 12, padding: "11px 20px", fontSize: 13.5, fontWeight: 600, cursor: "pointer", marginTop: 5, transition: "background var(--qm-dur-fast)" }}>
                اطلب بطاقتك
                <span className="msr" aria-hidden="true" style={{ fontSize: 17 }}>arrow_back</span>
              </a>
            </div>
            <div style={{ flex: "1 1 320px", minWidth: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div aria-hidden="true" style={{ position: "relative", width: "min(400px,100%)", height: 230 }}>
                <div style={{ position: "absolute", insetInlineStart: "2%", top: "50%", transform: "translateY(-58%) rotate(-6deg)", width: "min(206px,54%)", background: "var(--qm-surface)", borderRadius: 16, boxShadow: "0 24px 50px -18px rgba(20,16,40,.55)", padding: "15px 16px", display: "flex", flexDirection: "column", gap: 11 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                    <span style={{ width: 27, height: 27, borderRadius: 9, background: "var(--qm-primary)", color: "#fff", fontSize: 13, fontWeight: 700, display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }} />
                    <span className="msr" aria-hidden="true" style={{ fontSize: 19, color: "var(--qm-teal-deep)", marginInlineStart: "auto" }}>contactless</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <span style={{ width: "62%", height: 7, borderRadius: 4, background: "#d8d3ca" }} />
                    <span style={{ width: "40%", height: 7, borderRadius: 4, background: "#e7e2d9" }} />
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, borderTop: "1px solid var(--qm-hairline)", paddingTop: 9 }}>
                    <span className="msr" aria-hidden="true" style={{ fontSize: 14, color: "var(--qm-faint)" }}>qr_code_2</span>
                    <span dir="ltr" style={{ fontFamily: "var(--qm-font-mono)", fontSize: 9, letterSpacing: 0.4, color: "var(--qm-muted)" }}>qimma.cards/you</span>
                  </div>
                </div>
                <span style={{ position: "absolute", top: "34%", insetInlineStart: "44%", width: 34, height: 34, borderRadius: "50%", border: "2px solid rgba(255,255,255,.85)", animation: "qmNfcRing 9s ease-out infinite" }} />
                <span style={{ position: "absolute", top: "34%", insetInlineStart: "44%", width: 34, height: 34, borderRadius: "50%", border: "2px solid rgba(255,255,255,.55)", animation: "qmNfcRing 9s ease-out .3s infinite" }} />
                <div style={{ position: "absolute", insetInlineEnd: "4%", top: "6%", width: "min(118px,30%)", aspectRatio: "9 / 17.5", background: "var(--qm-surface)", borderRadius: 20, boxShadow: "0 24px 50px -18px rgba(20,16,40,.55)", padding: 6, animation: "qmNfcTap 9s cubic-bezier(.22,.61,.36,1) infinite" }}>
                  <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: 15, background: "var(--qm-surface-soft)", overflow: "hidden" }}>
                    <div style={{ position: "absolute", top: 6, left: "50%", transform: "translateX(-50%)", width: 26, height: 4, borderRadius: 999, background: "var(--qm-border)" }} />
                    <div style={{ position: "absolute", top: 16, insetInline: 6, display: "flex", justifyContent: "center" }}>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: 4, background: "var(--qm-surface)", borderRadius: 999, boxShadow: "var(--qm-shadow-card)", padding: "3px 8px", whiteSpace: "nowrap", animation: "qmNfcToast 9s ease infinite" }}>
                        <span className="msr" aria-hidden="true" style={{ fontSize: 11, color: "var(--qm-teal-deep)" }}>check_circle</span>
                        <span style={{ fontSize: 8.5, fontWeight: 700, color: "var(--qm-subtle)" }}>حُفظت جهة الاتصال</span>
                      </span>
                    </div>
                    <div style={{ position: "absolute", bottom: 0, insetInline: 0, background: "var(--qm-surface)", borderRadius: "13px 13px 0 0", boxShadow: "0 -6px 18px rgba(30,26,52,.12)", padding: "9px 9px 11px", display: "flex", flexDirection: "column", gap: 7, animation: "qmNfcSheet 9s cubic-bezier(.22,.61,.36,1) infinite" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        <span style={{ width: 18, height: 18, borderRadius: "50%", background: "var(--qm-primary-tint)", flexShrink: 0 }} />
                        <span style={{ width: "64%", height: 6, borderRadius: 4, background: "#e7e2d9" }} />
                      </div>
                      <div style={{ display: "flex", gap: 5 }}>
                        <span style={{ flex: 1, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 3, background: "var(--qm-teal-tint)", borderRadius: 7, padding: "4px 0" }}>
                          <span className="msr" aria-hidden="true" style={{ fontSize: 11, color: "var(--qm-teal-deep)" }}>call</span>
                        </span>
                        <span style={{ flex: 1, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 3, background: "var(--qm-primary-tint)", borderRadius: 7, padding: "4px 0" }}>
                          <span className="msr" aria-hidden="true" style={{ fontSize: 11, color: "var(--qm-primary)" }}>person_add</span>
                        </span>
                        <span style={{ flex: 1, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 3, background: "var(--qm-orange-tint)", borderRadius: 7, padding: "4px 0" }}>
                          <span className="msr" aria-hidden="true" style={{ fontSize: 11, color: "var(--qm-orange-deep)" }}>language</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
