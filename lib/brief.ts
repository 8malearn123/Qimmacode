/** Project-brief form: options, limits and validation shared by the form and the API route. */

export const BUDGET_OPTIONS = [
  { value: "", label: "لم أحدد بعد" },
  { value: "a", label: "أقل من 20 ألف ريال" },
  { value: "b", label: "20 – 60 ألف ريال" },
  { value: "c", label: "60 – 200 ألف ريال" },
  { value: "d", label: "أكثر من 200 ألف ريال" },
] as const;

export const TIMELINE_OPTIONS = [
  { value: "", label: "مرن" },
  { value: "a", label: "شهر أو أقل" },
  { value: "b", label: "1 – 3 أشهر" },
  { value: "c", label: "3 – 6 أشهر" },
] as const;

export type Brief = {
  name: string;
  email: string;
  phone: string;
  company: string;
  desc: string;
  budget: string;
  timeline: string;
};

export const EMPTY_BRIEF: Brief = { name: "", email: "", phone: "", company: "", desc: "", budget: "", timeline: "" };

export const MAX_LENGTH: Record<keyof Brief, number> = {
  name: 120,
  email: 200,
  phone: 40,
  company: 160,
  desc: 5000,
  budget: 1,
  timeline: 1,
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const MESSAGES = {
  required: "أكمل الاسم والبريد الإلكتروني ووصف المشروع.",
  email: "تأكد من كتابة البريد الإلكتروني بشكل صحيح.",
  tooLong: "بعض الحقول أطول من المسموح. اختصرها وحاول مرة أخرى.",
  invalid: "ما قدرنا نقرأ الطلب. حدّث الصفحة وحاول مرة أخرى.",
  failed: "ما قدرنا نرسل طلبك الآن. حاول بعد قليل، أو راسلنا مباشرة على واتساب أو البريد.",
} as const;

/** Returns an Arabic error message, or null when the brief is valid. */
export function validateBrief(b: Brief): string | null {
  if (!b.name.trim() || !b.email.trim() || !b.desc.trim()) return MESSAGES.required;
  if (!EMAIL_RE.test(b.email.trim())) return MESSAGES.email;
  for (const key of Object.keys(MAX_LENGTH) as (keyof Brief)[]) {
    if (b[key].length > MAX_LENGTH[key]) return MESSAGES.tooLong;
  }
  if (!BUDGET_OPTIONS.some((o) => o.value === b.budget)) return MESSAGES.invalid;
  if (!TIMELINE_OPTIONS.some((o) => o.value === b.timeline)) return MESSAGES.invalid;
  return null;
}

/** Coerces untrusted JSON into a Brief (missing / non-string fields become ""). */
export function toBrief(input: unknown): Brief {
  const src = (typeof input === "object" && input !== null ? input : {}) as Record<string, unknown>;
  const pick = (k: keyof Brief) => (typeof src[k] === "string" ? (src[k] as string) : "");
  return {
    name: pick("name"),
    email: pick("email"),
    phone: pick("phone"),
    company: pick("company"),
    desc: pick("desc"),
    budget: pick("budget"),
    timeline: pick("timeline"),
  };
}

export function labelOf(options: readonly { value: string; label: string }[], value: string) {
  return options.find((o) => o.value === value)?.label ?? value;
}
