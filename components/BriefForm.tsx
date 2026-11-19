"use client";

import { useState, type ChangeEvent, type CSSProperties, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { BUDGET_OPTIONS, EMPTY_BRIEF, MAX_LENGTH, MESSAGES, TIMELINE_OPTIONS, validateBrief, type Brief } from "@/lib/brief";

const labelText: CSSProperties = { display: "block", fontSize: 12.5, fontWeight: 600, color: "var(--qm-subtle)", marginBottom: 6 };
const twoCols: CSSProperties = { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))", gap: 12 };

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label style={{ display: "block", marginBottom: 14 }}>
      <span style={labelText}>{label}</span>
      {children}
    </label>
  );
}

type Status = "idle" | "sending" | "sent";

export function BriefForm() {
  const [form, setForm] = useState<Brief>(EMPTY_BRIEF);
  const [website, setWebsite] = useState(""); // honeypot — humans never see it
  const [error, setError] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const set = (key: keyof Brief) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const value = e.target.value;
    setForm((f) => ({ ...f, [key]: value }));
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    const problem = validateBrief(form);
    if (problem) {
      setError(problem);
      return;
    }
    setError("");
    setStatus("sending");
    try {
      const res = await fetch("/api/brief", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, website }),
      });
      if (!res.ok) {
        const data: { error?: string } = await res.json().catch(() => ({}));
        setError(data.error || MESSAGES.failed);
        setStatus("idle");
        return;
      }
      setStatus("sent");
    } catch {
      setError(MESSAGES.failed);
      setStatus("idle");
    }
  }

  function reset() {
    setForm(EMPTY_BRIEF);
    setError("");
    setStatus("idle");
  }

  if (status === "sent") {
    return (
      <div role="status" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 14, padding: "36px 10px" }}>
        <span className="msr" aria-hidden="true" style={{ fontSize: 52, color: "var(--qm-teal-deep)" }}>check_circle</span>
        <h3 style={{ margin: 0, fontSize: 20, fontWeight: 700 }}>وصلنا طلبك</h3>
        <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.8, color: "var(--qm-subtle)", maxWidth: 320 }}>نقرؤه اليوم ونرد عليك خلال 24 ساعة بإذن الله. وإذا كان الموضوع مستعجلًا، راسلنا على واتساب.</p>
        <Button variant="soft" icon="edit" onClick={reset}>إرسال طلب آخر</Button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} aria-labelledby="brief-form-title">
      <h3 id="brief-form-title" style={{ margin: "0 0 4px", fontSize: 19, fontWeight: 700 }}>طلب مشروع</h3>
      <p style={{ margin: "0 0 20px", fontSize: 13, color: "var(--qm-muted)" }}>الحقول التي عليها * مطلوبة.</p>

      <Field label="الاسم الكامل *">
        <input className="qm-control" name="name" maxLength={MAX_LENGTH.name} autoComplete="name" aria-required="true" placeholder="مثال: سارة العبدالله" value={form.name} onChange={set("name")} />
      </Field>

      <div style={twoCols}>
        <Field label="البريد الإلكتروني *">
          <input className="qm-control" type="email" name="email" maxLength={MAX_LENGTH.email} autoComplete="email" aria-required="true" dir="ltr" placeholder="name@company.com" value={form.email} onChange={set("email")} />
        </Field>
        <Field label="الجوال / واتساب">
          <input className="qm-control" type="tel" name="phone" maxLength={MAX_LENGTH.phone} autoComplete="tel" dir="ltr" placeholder="+966 5X XXX XXXX" value={form.phone} onChange={set("phone")} />
        </Field>
      </div>

      <Field label="الشركة / الجهة">
        <input className="qm-control" name="company" maxLength={MAX_LENGTH.company} autoComplete="organization" placeholder="اسم شركتك (اختياري)" value={form.company} onChange={set("company")} />
      </Field>

      <Field label="وصف المشروع *">
        <textarea className="qm-control" name="desc" maxLength={MAX_LENGTH.desc} aria-required="true" placeholder="ما الذي تريد بناءه؟ ولمن؟ وما أهم شيء يهمّك فيه؟" value={form.desc} onChange={set("desc")} />
      </Field>

      <div style={twoCols}>
        <Field label="الميزانية التقريبية">
          <select className="qm-control" name="budget" value={form.budget} onChange={set("budget")}>
            {BUDGET_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </Field>
        <Field label="الجدول الزمني">
          <select className="qm-control" name="timeline" value={form.timeline} onChange={set("timeline")}>
            {TIMELINE_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </Field>
      </div>

      <div aria-hidden="true" className="sr-only">
        <label>
          اترك هذا الحقل فارغًا
          <input tabIndex={-1} autoComplete="off" name="website" value={website} onChange={(e) => setWebsite(e.target.value)} />
        </label>
      </div>

      {error && (
        <div role="alert" style={{ display: "flex", alignItems: "center", gap: 8, background: "var(--qm-orange-tint)", color: "var(--qm-orange-deep)", borderRadius: 12, padding: "11px 14px", fontSize: 13, fontWeight: 600, marginBottom: 14 }}>
          <span className="msr" aria-hidden="true" style={{ fontSize: 18 }}>error</span>
          {error}
        </div>
      )}

      {/* 48px row around the 42px button — reproduces the spacing of the approved design. */}
      <div style={{ height: 48 }}>
        <Button type="submit" icon="send" block disabled={status === "sending"}>
          {status === "sending" ? "جارٍ الإرسال…" : "أرسل الطلب"}
        </Button>
      </div>
      <p style={{ margin: "12px 0 0", fontSize: 11.5, color: "var(--qm-faint)", textAlign: "center" }}>بإرسال الطلب توافق على أن نتواصل معك بخصوص مشروعك فقط.</p>
    </form>
  );
}
