/**
 * Projects shown in the "من أعمالنا" (work) section, in display order.
 *
 * Screenshots live in public/projects/. Desktop projects use one 16:9 image
 * (shown in a browser frame; capture the live site at 1440×810 @2x and save it
 * as WebP at 1920×1080); phone projects use two (shown in two phone frames,
 * ~9:17). Without screenshots the illustrated `preview` is shown instead.
 */
export type ProjectMetric = { v: string; l: string };

export type Project = {
  /** Two-digit Arabic-Indic number shown on the tab. */
  num: string;
  name: string;
  tag: string;
  /** Address shown in the browser frame. */
  url: string;
  /** Link to the live product; opened by the front card and a «زيارة الموقع» button next to the metrics. */
  href?: string;
  meta: string;
  device: "desktop" | "phone";
  /** Illustrated stand-in, used only when the project has no `screens`. */
  preview?: "pm" | "delivery" | "analytics" | "assistant";
  metrics: ProjectMetric[];
  screens?: string[];
};

export const PROJECTS: Project[] = [
  {
    num: "٠١",
    name: "منصة قِمّة التعليمية",
    tag: "تعليم إلكتروني · ويب",
    url: "8ma.sa",
    href: "https://www.8ma.sa/",
    meta: "يعمل الآن",
    device: "desktop",
    // From the live catalogue (8ma.sa/in-person-courses), Nov 2026: 55 course
    // explanations across 6 universities + 2 colleges; 4.93 average over the 12 rated ones.
    metrics: [
      { v: "55", l: "شرحًا جامعيًا" },
      { v: "8", l: "جامعات وكليات" },
      { v: "4.9", l: "تقييم الطلاب" },
    ],
    screens: ["/projects/8ma.webp"],
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
      { v: "عربي", l: "يفهم اللهجات المحلية" },
    ],
  },
];
