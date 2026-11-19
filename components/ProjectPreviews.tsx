import type { CSSProperties, ReactNode } from "react";
import type { Project } from "@/lib/projects";

/*
 * Illustrated stand-ins for project screenshots, drawn in the same skeleton-UI
 * language as the hero mockups. Shown in the work deck whenever a project has
 * no `screens` (see lib/projects.ts). Purely decorative: the deck cards are
 * aria-hidden.
 */

const SKELETON = "#e7e2d9";
const SKELETON_DARK = "#d8d3ca";

type Tone = "teal" | "primary" | "orange" | "neutral";
const TONES: Record<Tone, [bg: string, fg: string]> = {
  teal: ["var(--qm-teal-tint)", "var(--qm-teal-deep)"],
  primary: ["var(--qm-primary-tint)", "var(--qm-primary)"],
  orange: ["var(--qm-orange-tint)", "var(--qm-orange-deep)"],
  neutral: ["var(--qm-surface-soft)", "var(--qm-muted)"],
};

const fill: CSSProperties = { position: "absolute", inset: 0 };
const ellipsis: CSSProperties = { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", minWidth: 0 };
const card: CSSProperties = { background: "var(--qm-surface)", border: "1px solid var(--qm-hairline)", borderRadius: 10 };

function Line({ w, h = 6, c = SKELETON }: { w: number | string; h?: number; c?: string }) {
  return <span style={{ display: "block", width: w, height: h, borderRadius: h / 2, background: c, flexShrink: 0 }} />;
}

function Pill({ tone, children }: { tone: Tone; children: ReactNode }) {
  const [bg, fg] = TONES[tone];
  return (
    <span style={{ fontSize: 9, fontWeight: 700, lineHeight: 1.5, color: fg, background: bg, borderRadius: 999, padding: "1px 7px", whiteSpace: "nowrap", flexShrink: 0 }}>
      {children}
    </span>
  );
}

function Icon({ name, size, color }: { name: string; size: number; color: string }) {
  return (
    <span className="msr" style={{ fontSize: size, color }}>
      {name}
    </span>
  );
}

function Dot({ size, color, ring }: { size: number; color: string; ring?: boolean }) {
  return <span style={{ width: size, height: size, borderRadius: "50%", background: color, flexShrink: 0, border: ring ? "2px solid var(--qm-surface)" : undefined }} />;
}

function Progress({ value, height = 6 }: { value: number; height?: number }) {
  return (
    <span style={{ display: "block", flex: "1 1 auto", minWidth: 0, height, borderRadius: 999, background: "var(--qm-surface-soft)", overflow: "hidden" }}>
      <span style={{ display: "block", width: `${value}%`, height: "100%", borderRadius: 999, background: "var(--qm-gradient-progress)" }} />
    </span>
  );
}

export function DesktopPreview({ kind }: { kind: Project["preview"] }) {
  if (kind === "analytics") return <AnalyticsPreview />;
  if (kind === "assistant") return <AssistantPreview />;
  return <BoardPreview />;
}

export function PhonePreview({ kind, screen }: { kind: Project["preview"]; screen: number }) {
  if (kind !== "delivery") return <div style={{ ...fill, background: "var(--qm-surface-row)" }} />;
  return screen === 0 ? <TrackingScreen /> : <OrdersScreen />;
}

/* ── Project-management board ─────────────────────────────────────────────── */

type Task = { title: string; tag?: [string, Tone]; progress?: number; done?: boolean; who?: string };
const BOARD: { title: string; dot: string; count: string; tasks: Task[] }[] = [
  {
    title: "للتنفيذ",
    dot: "var(--qm-faint)",
    count: "٤",
    tasks: [
      { title: "ربط بوابة الدفع", tag: ["عاجل", "orange"], who: "var(--qm-avatar-7)" },
      { title: "صفحة التقارير", tag: ["تصميم", "primary"], who: "var(--qm-avatar-3)" },
      { title: "تصدير البيانات", tag: ["واجهة خلفية", "teal"], who: "var(--qm-avatar-2)" },
    ],
  },
  {
    title: "قيد العمل",
    dot: "var(--qm-teal)",
    count: "٣",
    tasks: [
      { title: "صلاحيات الفريق", progress: 64, who: "var(--qm-avatar-1)" },
      { title: "إشعارات لحظية", progress: 38, who: "var(--qm-avatar-6)" },
      { title: "شاشة المحطات", progress: 82, who: "var(--qm-avatar-4)" },
    ],
  },
  {
    title: "مكتمل",
    dot: "var(--qm-violet)",
    count: "١٢",
    tasks: [
      { title: "تسجيل الدخول", done: true },
      { title: "لوحة المهام", done: true },
      { title: "دعوة الأعضاء", done: true },
    ],
  },
];

function BoardPreview() {
  return (
    <div style={{ ...fill, display: "flex", background: "var(--qm-surface-soft)" }}>
      <div style={{ width: 54, flexShrink: 0, background: "var(--qm-surface)", borderInlineEnd: "1px solid var(--qm-hairline)", padding: "12px 9px", display: "flex", flexDirection: "column", gap: 6 }}>
        <span style={{ width: 28, height: 28, borderRadius: 9, background: "var(--qm-primary)", color: "#fff", fontSize: 13, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 8px" }}>ق</span>
        {["space_dashboard", "view_kanban", "calendar_month", "group", "settings"].map((name, i) => (
          <span key={name} style={{ height: 30, borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center", background: i === 1 ? "var(--qm-primary-tint)" : "transparent" }}>
            <Icon name={name} size={16} color={i === 1 ? "var(--qm-primary)" : "var(--qm-faint)"} />
          </span>
        ))}
      </div>
      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 9, padding: "11px 16px", background: "var(--qm-surface)", borderBottom: "1px solid var(--qm-hairline)" }}>
          <span style={{ fontSize: 12.5, fontWeight: 700, color: "var(--qm-ink)", ...ellipsis }}>إطلاق النسخة الثانية</span>
          <Pill tone="teal">حسب الخطة</Pill>
          <span style={{ display: "flex", marginInlineStart: "auto" }}>
            {["var(--qm-avatar-1)", "var(--qm-avatar-2)", "var(--qm-avatar-7)"].map((c, i) => (
              <span key={c} style={{ marginInlineStart: i ? -6 : 0, display: "flex" }}>
                <Dot size={22} color={c} ring />
              </span>
            ))}
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 16px 0" }}>
          <span style={{ fontSize: 10.5, fontWeight: 600, color: "var(--qm-subtle)", whiteSpace: "nowrap" }}>تقدّم المرحلة</span>
          <Progress value={72} />
          <span style={{ fontSize: 10.5, fontWeight: 700, color: "var(--qm-primary)" }}>٧٢٪</span>
        </div>
        <div style={{ flex: 1, minHeight: 0, overflow: "hidden", padding: "12px 16px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: 10, alignContent: "start" }}>
          {BOARD.map((col) => (
            <div key={col.title} style={{ display: "flex", flexDirection: "column", gap: 7, minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "0 2px" }}>
                <Dot size={7} color={col.dot} />
                <span style={{ fontSize: 10.5, fontWeight: 700, color: "var(--qm-ink)" }}>{col.title}</span>
                <span style={{ fontSize: 9.5, fontWeight: 600, color: "var(--qm-faint)" }}>{col.count}</span>
              </div>
              {col.tasks.map((task) => (
                <div key={task.title} style={{ ...card, padding: "8px 9px", display: "flex", flexDirection: "column", gap: 7 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                    {task.done && <Icon name="check_circle" size={13} color="var(--qm-teal-deep)" />}
                    <span style={{ fontSize: 10.5, fontWeight: 600, color: task.done ? "var(--qm-muted)" : "var(--qm-ink)", ...ellipsis }}>{task.title}</span>
                  </div>
                  {task.done ? (
                    <Line w="55%" h={5} />
                  ) : (
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      {task.tag && <Pill tone={task.tag[1]}>{task.tag[0]}</Pill>}
                      {task.progress !== undefined && <Progress value={task.progress} height={5} />}
                      {task.who && (
                        <span style={{ marginInlineStart: "auto", display: "flex" }}>
                          <Dot size={16} color={task.who} />
                        </span>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Logistics analytics dashboard ────────────────────────────────────────── */

const KPIS: { label: string; value: string; delta: string; up: boolean; good: boolean }[] = [
  { label: "التكلفة لكل رحلة", value: "٨٧ ر.س", delta: "٦٪", up: false, good: true },
  { label: "الرحلات هذا الشهر", value: "١٢٬٤٨٠", delta: "١٢٪", up: true, good: true },
  { label: "التسليم في الوقت", value: "٩٤٪", delta: "٣٪", up: true, good: true },
  { label: "المركبات النشطة", value: "٣١٨", delta: "٢٪", up: false, good: false },
];
const TRIPS = [38, 52, 44, 61, 57, 70, 64, 78, 72, 85, 80, 92];
const COST = [72, 70, 71, 64, 62, 58, 60, 53, 50, 47, 45, 41];
const ROUTES: { route: string; value: number; label: string }[] = [
  { route: "الرياض ← جدة", value: 82, label: "٨٢٪" },
  { route: "الدمام ← الرياض", value: 64, label: "٦٤٪" },
  { route: "جدة ← مكة", value: 51, label: "٥١٪" },
  { route: "الرياض ← القصيم", value: 37, label: "٣٧٪" },
];

function AnalyticsPreview() {
  const costLine = COST.map((v, i) => `${(i + 0.5) * (100 / COST.length)},${100 - v}`).join(" ");
  return (
    <div style={{ ...fill, display: "flex", flexDirection: "column", background: "var(--qm-surface-soft)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 9, padding: "10px 16px", background: "var(--qm-surface)", borderBottom: "1px solid var(--qm-hairline)" }}>
        <span style={{ fontSize: 12.5, fontWeight: 700, color: "var(--qm-ink)", ...ellipsis }}>مؤشرات الأسطول</span>
        <Pill tone="teal">مباشر</Pill>
        <span style={{ marginInlineStart: "auto", display: "inline-flex", alignItems: "center", gap: 4, fontSize: 9.5, fontWeight: 600, color: "var(--qm-subtle)", border: "1px solid var(--qm-border)", borderRadius: 8, padding: "4px 8px", whiteSpace: "nowrap" }}>
          <Icon name="calendar_month" size={12} color="var(--qm-faint)" />
          آخر ٣٠ يومًا
        </span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 9.5, fontWeight: 600, color: "#fff", background: "var(--qm-primary)", borderRadius: 8, padding: "5px 9px", whiteSpace: "nowrap" }}>
          <Icon name="download" size={12} color="#fff" />
          تصدير
        </span>
      </div>
      <div style={{ flex: 1, minHeight: 0, overflow: "hidden", padding: "12px 16px", display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(118px, 1fr))", gap: 8 }}>
          {KPIS.map((k) => (
            <div key={k.label} style={{ ...card, padding: "9px 10px", display: "flex", flexDirection: "column", gap: 4 }}>
              <span style={{ fontSize: 9.5, color: "var(--qm-muted)", ...ellipsis }}>{k.label}</span>
              <span style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                <span style={{ fontSize: 15, fontWeight: 700, color: "var(--qm-ink)", whiteSpace: "nowrap" }}>{k.value}</span>
                <span style={{ display: "inline-flex", alignItems: "center", fontSize: 9, fontWeight: 700, color: k.good ? "var(--qm-teal-deep)" : "var(--qm-orange-deep)" }}>
                  <Icon name={k.up ? "arrow_upward" : "arrow_downward"} size={10} color="currentColor" />
                  {k.delta}
                </span>
              </span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          <div style={{ ...card, flex: "1.7 1 260px", minWidth: 0, padding: "10px 12px", display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 10.5, fontWeight: 700, color: "var(--qm-ink)", ...ellipsis }}>الرحلات والتكلفة أسبوعيًا</span>
              <span style={{ marginInlineStart: "auto", display: "inline-flex", alignItems: "center", gap: 4, fontSize: 9, color: "var(--qm-subtle)", whiteSpace: "nowrap" }}>
                <span style={{ width: 7, height: 7, borderRadius: 2, background: "#58b3b3" }} />
                الرحلات
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 9, color: "var(--qm-subtle)", whiteSpace: "nowrap" }}>
                <span style={{ width: 10, height: 2, borderRadius: 1, background: "var(--qm-primary)" }} />
                التكلفة
              </span>
            </div>
            <div style={{ position: "relative", height: 116, borderBottom: "1px solid var(--qm-hairline)" }}>
              <div dir="ltr" style={{ ...fill, display: "flex", alignItems: "flex-end", gap: "2.4%", padding: "0 1.2%" }}>
                {TRIPS.map((v, i) => (
                  <span key={i} style={{ flex: 1, height: `${v}%`, borderRadius: "4px 4px 0 0", background: i === TRIPS.length - 1 ? "#58b3b3" : "var(--qm-mint)" }} />
                ))}
              </div>
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ ...fill, width: "100%", height: "100%", overflow: "visible" }}>
                <polyline points={costLine} fill="none" stroke="var(--qm-primary)" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
              </svg>
            </div>
          </div>
          <div style={{ ...card, flex: "1 1 170px", minWidth: 0, padding: "10px 12px", display: "flex", flexDirection: "column", gap: 9 }}>
            <span style={{ fontSize: 10.5, fontWeight: 700, color: "var(--qm-ink)" }}>أعلى المسارات</span>
            {ROUTES.map(({ route, value, label }) => (
              <div key={route} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 9.5 }}>
                  <span style={{ fontWeight: 600, color: "var(--qm-subtle)", ...ellipsis }}>{route}</span>
                  <span style={{ marginInlineStart: "auto", fontWeight: 700, color: "var(--qm-primary)" }}>{label}</span>
                </span>
                <Progress value={value} height={5} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── AI customer-service assistant ────────────────────────────────────────── */

const CONVERSATIONS: { color: string; mode: [string, Tone]; active?: boolean }[] = [
  { color: "var(--qm-avatar-2)", mode: ["آلي", "teal"], active: true },
  { color: "var(--qm-avatar-7)", mode: ["موظف", "orange"] },
  { color: "var(--qm-avatar-3)", mode: ["آلي", "teal"] },
  { color: "var(--qm-avatar-5)", mode: ["آلي", "teal"] },
  { color: "var(--qm-avatar-4)", mode: ["آلي", "teal"] },
];

function Bubble({ from, children }: { from: "customer" | "bot"; children: ReactNode }) {
  const customer = from === "customer";
  return (
    <div style={{ alignSelf: customer ? "flex-start" : "flex-end", maxWidth: "82%", background: customer ? "var(--qm-surface)" : "var(--qm-primary-tint)", border: customer ? "1px solid var(--qm-hairline)" : "none", borderRadius: 12, ...(customer ? { borderStartStartRadius: 4 } : { borderStartEndRadius: 4 }), padding: "7px 10px", fontSize: 10.5, fontWeight: customer ? 500 : 600, lineHeight: 1.7, color: customer ? "var(--qm-ink)" : "var(--qm-primary)" }}>
      {children}
    </div>
  );
}

function AssistantPreview() {
  return (
    <div className="qm-pv" style={{ ...fill, display: "flex", background: "var(--qm-surface)" }}>
      <div className="qm-pv-wide" style={{ width: "31%", flexShrink: 0, background: "var(--qm-surface-row)", borderInlineEnd: "1px solid var(--qm-hairline)", padding: "12px 10px", display: "flex", flexDirection: "column", gap: 7 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "0 2px 2px" }}>
          <span style={{ fontSize: 11.5, fontWeight: 700, color: "var(--qm-ink)" }}>المحادثات</span>
          <Pill tone="primary">٢٤</Pill>
        </div>
        <div style={{ height: 26, borderRadius: 8, background: "var(--qm-surface)", border: "1px solid var(--qm-hairline)", display: "flex", alignItems: "center", gap: 5, padding: "0 8px" }}>
          <Icon name="search" size={12} color="var(--qm-faint)" />
          <Line w="45%" h={5} />
        </div>
        {CONVERSATIONS.map((c, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 7, padding: "7px 7px", borderRadius: 10, background: c.active ? "var(--qm-surface)" : "transparent", boxShadow: c.active ? "var(--qm-shadow-card)" : "none" }}>
            <Dot size={22} color={c.color} />
            <span style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 5 }}>
              <Line w="62%" c={SKELETON_DARK} />
              <Line w="88%" h={5} />
            </span>
            <Pill tone={c.mode[1]}>{c.mode[0]}</Pill>
          </div>
        ))}
      </div>
      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "9px 14px", borderBottom: "1px solid var(--qm-hairline)" }}>
          <span style={{ width: 28, height: 28, borderRadius: 9, background: "var(--qm-primary)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <Icon name="smart_toy" size={16} color="#fff" />
          </span>
          <span style={{ display: "flex", flexDirection: "column", gap: 2, minWidth: 0 }}>
            <span style={{ fontSize: 11.5, fontWeight: 700, color: "var(--qm-ink)", ...ellipsis }}>مساعد خدمة العملاء</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 9, color: "var(--qm-teal-deep)" }}>
              <Dot size={6} color="var(--qm-teal-deep)" />
              متصل الآن
            </span>
          </span>
          <span style={{ marginInlineStart: "auto", display: "flex" }}>
            <Icon name="more_horiz" size={18} color="var(--qm-faint)" />
          </span>
        </div>
        <div style={{ flex: 1, minHeight: 0, overflow: "hidden", background: "var(--qm-surface-row)", padding: "12px 14px", display: "flex", flexDirection: "column", gap: 8 }}>
          <Bubble from="customer">السلام عليكم، وين وصل طلبي؟</Bubble>
          <Bubble from="bot">
            وعليكم السلام! طلبك رقم ٤٨٢١ خرج للتوصيل، ويوصلك اليوم قبل ٦ مساءً.
          </Bubble>
          <span style={{ alignSelf: "flex-end", display: "inline-flex", alignItems: "center", gap: 4, fontSize: 9, fontWeight: 600, color: "var(--qm-muted)", background: "var(--qm-surface)", border: "1px solid var(--qm-hairline)", borderRadius: 999, padding: "2px 8px", marginTop: -3 }}>
            <Icon name="description" size={11} color="var(--qm-primary)" />
            المصدر: سياسة الشحن
          </span>
          <Bubble from="customer">أبغى أغيّر عنوان التوصيل لو سمحت</Bubble>
          <span style={{ alignSelf: "center", display: "inline-flex", alignItems: "center", gap: 5, fontSize: 9.5, fontWeight: 700, color: "var(--qm-orange-deep)", background: "var(--qm-orange-tint)", borderRadius: 999, padding: "4px 10px", whiteSpace: "nowrap" }}>
            <Icon name="support_agent" size={13} color="var(--qm-orange-deep)" />
            تحوّلت المحادثة لموظف مع كل التفاصيل
          </span>
          <div style={{ alignSelf: "flex-end", ...card, borderRadius: 12, padding: "8px 11px", display: "flex", alignItems: "center", gap: 4 }}>
            {[0, 0.18, 0.36].map((delay) => (
              <span key={delay} style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--qm-faint)", animation: "qmDot 1.3s ease-in-out infinite", animationDelay: `${delay}s` }} />
            ))}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "9px 14px", borderTop: "1px solid var(--qm-hairline)" }}>
          <span style={{ flex: 1, height: 30, borderRadius: 999, background: "var(--qm-surface-soft)", display: "flex", alignItems: "center", padding: "0 12px", fontSize: 10, color: "var(--qm-faint)" }}>اكتب رسالتك…</span>
          <span style={{ width: 30, height: 30, borderRadius: "50%", background: "var(--qm-primary)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transform: "scaleX(-1)" }}>
            <Icon name="send" size={15} color="#fff" />
          </span>
        </div>
      </div>
    </div>
  );
}

/* ── Delivery app: live tracking + orders ─────────────────────────────────── */

function TrackingScreen() {
  return (
    <div style={{ ...fill, background: "#e6eeee" }}>
      <svg viewBox="0 0 200 360" preserveAspectRatio="xMidYMid slice" style={{ ...fill, width: "100%", height: "100%" }}>
        <rect x="-10" y="-10" width="220" height="380" fill="#e6eeee" />
        <rect x="14" y="40" width="70" height="88" rx="10" fill="#dbe6e5" />
        <rect x="118" y="36" width="78" height="64" rx="10" fill="#d3ebe4" />
        <rect x="10" y="168" width="64" height="70" rx="10" fill="#dbe6e5" />
        <rect x="112" y="140" width="84" height="96" rx="10" fill="#dbe6e5" />
        <rect x="20" y="276" width="90" height="80" rx="10" fill="#d3ebe4" />
        <g stroke="#ffffff" strokeLinecap="round" fill="none">
          <path d="M-10 150 H210" strokeWidth="12" />
          <path d="M100 -10 V370" strokeWidth="10" />
          <path d="M-10 258 C60 250 120 262 210 250" strokeWidth="9" />
          <path d="M40 -10 V150" strokeWidth="6" />
          <path d="M160 150 V370" strokeWidth="6" />
          <path d="M100 40 H210" strokeWidth="6" />
        </g>
        <path d="M152 70 H100 V150 H160 V212 H136" stroke="var(--qm-teal-deep)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="152" cy="70" r="7" fill="var(--qm-orange)" stroke="#fff" strokeWidth="3" />
        <circle cx="136" cy="212" r="7" fill="var(--qm-primary)" stroke="#fff" strokeWidth="3" />
        <circle cx="130" cy="150" r="13" fill="var(--qm-teal)" opacity=".25" style={{ transformBox: "fill-box", transformOrigin: "center", animation: "qmPing 2.8s cubic-bezier(.22,.61,.36,1) infinite" }} />
        <circle cx="130" cy="150" r="7" fill="var(--qm-teal-deep)" stroke="#fff" strokeWidth="3" />
      </svg>
      <span style={{ position: "absolute", top: 10, insetInline: 0, margin: "0 auto", width: "fit-content", display: "flex", alignItems: "center", gap: 5, background: "var(--qm-surface)", borderRadius: 999, boxShadow: "var(--qm-shadow-card)", padding: "4px 10px", fontSize: 9, fontWeight: 700, color: "var(--qm-subtle)", whiteSpace: "nowrap" }}>
        <Dot size={6} color="var(--qm-teal-deep)" />
        طلبك في الطريق
      </span>
      <div style={{ position: "absolute", bottom: 0, insetInline: 0, background: "var(--qm-surface)", borderRadius: "14px 14px 0 0", boxShadow: "0 -6px 18px rgba(30,26,52,.12)", padding: "10px 11px 22px", display: "flex", flexDirection: "column", gap: 8 }}>
        <div style={{ width: 26, height: 3, borderRadius: 999, background: "var(--qm-border)", margin: "0 auto" }} />
        <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
          <span style={{ display: "flex", flexDirection: "column", gap: 1, minWidth: 0 }}>
            <span style={{ fontSize: 8.5, color: "var(--qm-muted)", ...ellipsis }}>الوصول المتوقع</span>
            <span style={{ fontSize: 13, fontWeight: 700, color: "var(--qm-ink)", whiteSpace: "nowrap" }}>١٢ دقيقة</span>
          </span>
          <span style={{ marginInlineStart: "auto", width: 24, height: 24, borderRadius: "50%", background: "var(--qm-teal-tint)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <Icon name="call" size={13} color="var(--qm-teal-deep)" />
          </span>
          <span style={{ width: 24, height: 24, borderRadius: "50%", background: "var(--qm-avatar-5)", color: "#fff", fontSize: 10, fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>م</span>
        </div>
        <div style={{ display: "flex", gap: 4 }}>
          {["var(--qm-teal-deep)", "var(--qm-teal-deep)", "var(--qm-track)"].map((c, i) => (
            <span key={i} style={{ flex: 1, height: 4, borderRadius: 2, background: c }} />
          ))}
        </div>
        <span style={{ fontSize: 9, color: "var(--qm-subtle)", ...ellipsis }}>المندوب على بُعد ٢٫٤ كم منك</span>
      </div>
    </div>
  );
}

const ORDERS: { id: string; meta: string; icon: string; tone: Tone; status: [string, Tone] }[] = [
  { id: "طلب ٤٨٢١", meta: "٣ منتجات · ٤٥ ر.س", icon: "two_wheeler", tone: "teal", status: ["في الطريق", "teal"] },
  { id: "طلب ٤٨١٧", meta: "منتجان · ٢٨ ر.س", icon: "storefront", tone: "primary", status: ["يتجهّز", "primary"] },
  { id: "طلب ٤٧٩٠", meta: "٥ منتجات · ٩٢ ر.س", icon: "check_circle", tone: "neutral", status: ["وصل", "neutral"] },
  { id: "طلب ٤٧٥٢", meta: "منتج واحد · ١٩ ر.س", icon: "check_circle", tone: "neutral", status: ["وصل", "neutral"] },
];

function OrdersScreen() {
  return (
    <div style={{ ...fill, background: "var(--qm-surface-row)", display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", alignItems: "center", padding: "12px 11px 8px" }}>
        <span style={{ fontSize: 12, fontWeight: 700, color: "var(--qm-ink)" }}>طلباتي</span>
        <span style={{ position: "relative", marginInlineStart: "auto", display: "inline-flex" }}>
          <Icon name="notifications" size={15} color="var(--qm-muted)" />
          <span style={{ position: "absolute", top: 0, insetInlineEnd: 0, width: 5, height: 5, borderRadius: "50%", background: "var(--qm-orange)" }} />
        </span>
      </div>
      <div style={{ margin: "0 11px", display: "flex", gap: 3, padding: 3, borderRadius: 9, background: "var(--qm-surface-soft)" }}>
        <span style={{ flex: 1, textAlign: "center", fontSize: 9.5, fontWeight: 700, color: "var(--qm-ink)", background: "var(--qm-surface)", borderRadius: 7, padding: "4px 0", boxShadow: "var(--qm-shadow-card)" }}>الحالية</span>
        <span style={{ flex: 1, textAlign: "center", fontSize: 9.5, fontWeight: 600, color: "var(--qm-muted)", padding: "4px 0" }}>السابقة</span>
      </div>
      <div style={{ flex: 1, minHeight: 0, overflow: "hidden", padding: "10px 11px", display: "flex", flexDirection: "column", gap: 7 }}>
        {ORDERS.map((o) => (
          <div key={o.id} style={{ ...card, borderRadius: 11, padding: "8px 9px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: 7 }}>
            <span style={{ width: 24, height: 24, borderRadius: 7, background: TONES[o.tone][0], display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Icon name={o.icon} size={13} color={TONES[o.tone][1]} />
            </span>
            <span style={{ flex: "1 1 48px", minWidth: 0, display: "flex", flexDirection: "column", gap: 2 }}>
              <span style={{ fontSize: 9.5, fontWeight: 700, color: "var(--qm-ink)", ...ellipsis }}>{o.id}</span>
              <span style={{ fontSize: 8, color: "var(--qm-muted)", ...ellipsis }}>{o.meta}</span>
            </span>
            <span style={{ marginInlineStart: "auto", display: "flex" }}>
              <Pill tone={o.status[1]}>{o.status[0]}</Pill>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
