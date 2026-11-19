/**
 * Projects shown in the "من أعمالنا" (work) section, in display order.
 *
 * Screenshots live in public/projects/. Desktop projects use one 16:9 image
 * (shown in a browser frame; capture the live site at 1440×810 @2x and save it
 * as WebP at 1920×1080); phone projects use two, shown side by side in phone
 * frames (capture at 390×760 @2x and save as WebP at 780×1520).
 */
export type ProjectMetric = { v: string; l: string };

/** A chat message shown beside a phone project's screens: how its link reaches people. */
export type ProjectMessage = { lines: string[]; link: string; time: string };

export type Project = {
  /** Two-digit Arabic-Indic number shown on the tab. */
  num: string;
  name: string;
  tag: string;
  /** Address shown in the frame's top bar. Left out while the client hasn't announced the project. */
  url?: string;
  /** Link to the live product; opened by the front card and a «زيارة الموقع» button next to the metrics. */
  href?: string;
  /** Built, but the client hasn't announced it: a «قيد الإطلاق» badge stands in for the visit button. */
  upcoming?: boolean;
  /** Status or date shown at the end of the frame's top bar. */
  meta: string;
  device: "desktop" | "phone";
  metrics: ProjectMetric[];
  screens: string[];
  /** Side of a desktop screenshot kept in view when a narrow card (phones) crops it. Default: the centre. */
  focus?: "right";
  message?: ProjectMessage;
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
    name: "هيت قهوة مختصة",
    tag: "مقاهي · ويب",
    // The new site is still on its Vercel address: heetcoffee.com serves the old one (Nov 2026).
    url: "heet-website.vercel.app",
    href: "https://heet-website.vercel.app/",
    meta: "يعمل الآن",
    device: "desktop",
    // From the live site, Nov 2026: 70 items across the sections of /menu,
    // 3 branches on /branches (2 in Riyadh, 1 in Jazan), and an English version.
    metrics: [
      { v: "70", l: "صنفًا في المنيو" },
      { v: "3", l: "فروع" },
      { v: "لغتان", l: "عربي وإنجليزي" },
    ],
    screens: ["/projects/heet.webp"],
  },
  {
    num: "٠٣",
    name: "منصة فرصة",
    tag: "مبادرة مجتمعية · ويب",
    url: "forsajobs.org",
    href: "https://www.forsajobs.org/",
    meta: "يعمل الآن",
    device: "desktop",
    // From the live site, Nov 2026: all 17 governorates of Jazan in its filter,
    // 21 talents listed, and free with no commission.
    metrics: [
      { v: "17", l: "محافظة في جازان" },
      { v: "21", l: "موهبة" },
      { v: "0%", l: "عمولة" },
    ],
    screens: ["/projects/forsa.webp"],
    focus: "right",
  },
  {
    num: "٠٤",
    name: "دعوات افتتاح هود",
    tag: "دعوات وحجوزات · جوال",
    // Every invitation link is personal, so there is nothing public to link to.
    url: "hood.qimmakud.com",
    meta: "نوفمبر ٢٠٢٦",
    device: "phone",
    metrics: [
      { v: "دعوة", l: "باسم كل ضيف" },
      { v: "موعد", l: "يختاره بنفسه" },
      { v: "باركود", l: "للدخول" },
    ],
    // Captured with a sample guest in the app's local mode: no real invitee, and nothing written to its database.
    screens: ["/projects/hood-invite.webp", "/projects/hood-ticket.webp"],
    // The invitation as the system words it for WhatsApp, for the same sample guest.
    message: {
      lines: ["خالد الحربي، يسعدنا حضورك افتتاح هود ☕", "لك ولرفيقك متّسع", "هذه دعوتك الشخصية، اختر وقتك من هنا:"],
      link: "hood.qimmakud.com/index.html?i=eyJ2IjoxLCJpZCI6…",
      time: "٧:٣٠ م",
    },
  },
  {
    num: "٠٥",
    name: "بينك كيك",
    tag: "متجر حلويات · ويب",
    // The client hasn't announced the store yet: no address or link until they do.
    upcoming: true,
    meta: "قيد الإطلاق",
    device: "desktop",
    metrics: [
      { v: "صمّم كيكتك", l: "خطوة بخطوة" },
      { v: "توصيل", l: "في نفس اليوم" },
    ],
    screens: ["/projects/pinkcake.webp"],
    focus: "right",
  },
];
