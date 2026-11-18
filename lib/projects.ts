/**
 * Projects shown in the "مشاريع أُطلقت فعلًا" (work) section.
 *
 * Screenshots are optional. Drop images into public/projects/ and reference them
 * here, e.g. `screens: ["/projects/pm-desktop.png"]`. Desktop projects use one
 * image (shown in a browser frame, ~16:9); phone projects use two (shown in two
 * phone frames, ~9:17). Without screenshots a built-in illustrated preview is
 * shown instead.
 */
export type ProjectMetric = { v: string; l: string };

export type Project = {
  /** Two-digit Arabic-Indic number shown on the tab. */
  num: string;
  name: string;
  tag: string;
  url: string;
  meta: string;
  device: "desktop" | "phone";
  /** Which illustrated preview to show when there are no screenshots. */
  preview: "pm" | "delivery" | "analytics" | "assistant";
  metrics: ProjectMetric[];
  screens?: string[];
};

export const PROJECTS: Project[] = [
  {
    num: "٠١",
    name: "منصة إدارة مشاريع",
    tag: "SaaS · ويب",
    url: "pm.qimma.demo",
    meta: "٨ أسابيع · ٢٠٢٥",
    device: "desktop",
    preview: "pm",
    metrics: [
      { v: "8 أسابيع", l: "من الفكرة للإطلاق" },
      { v: "3x", l: "سرعة إنجاز الفريق" },
      { v: "99.9%", l: "جهوزية الخدمة" },
    ],
  },
  {
    num: "٠٢",
    name: "تطبيق توصيل للجوال",
    tag: "جوال · iOS + أندرويد",
    url: "delivery.qimma.demo",
    meta: "١٠ أسابيع · ٢٠٢٥",
    device: "phone",
    preview: "delivery",
    metrics: [
      { v: "منصتان", l: "من كود واحد" },
      { v: "4.8", l: "تقييم المتجر" },
      { v: "35%-", l: "زمن التوصيل" },
    ],
  },
  {
    num: "٠٣",
    name: "لوحة تحليلات لوجستية",
    tag: "لوحات تحكم · بيانات",
    url: "metrics.qimma.demo",
    meta: "٦ أسابيع · ٢٠٢٤",
    device: "desktop",
    preview: "analytics",
    metrics: [
      { v: "12M", l: "صف بيانات" },
      { v: "أقل من ثانية", l: "زمن التقرير" },
      { v: "6", l: "تكاملات" },
    ],
  },
  {
    num: "٠٤",
    name: "مساعد ذكي لخدمة العملاء",
    tag: "ذكاء اصطناعي",
    url: "ai.qimma.demo",
    meta: "٥ أسابيع · ٢٠٢٥",
    device: "desktop",
    preview: "assistant",
    metrics: [
      { v: "70%", l: "ردود آلية" },
      { v: "24/7", l: "استجابة" },
      { v: "عربي", l: "فهم أصلي للهجات" },
    ],
  },
];
