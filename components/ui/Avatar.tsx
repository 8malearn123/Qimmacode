const PALETTE = [
  "var(--qm-avatar-1)",
  "var(--qm-avatar-2)",
  "var(--qm-avatar-3)",
  "var(--qm-avatar-4)",
  "var(--qm-avatar-5)",
  "var(--qm-avatar-6)",
  "var(--qm-avatar-7)",
  "var(--qm-avatar-8)",
];

/**
 * Circular initial-based avatar: a single Arabic initial on a brand color picked
 * from the name, exactly like the design-system Avatar.
 */
export function Avatar({ name, size = 40 }: { name: string; size?: number }) {
  const initial = name.trim().charAt(0) || "?";
  const background = PALETTE[initial.charCodeAt(0) % PALETTE.length];
  return (
    <div
      aria-hidden="true"
      title={name}
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 600,
        lineHeight: 1,
        background,
        color: "#fff",
        fontSize: Math.round(size * 0.38),
        flexShrink: 0,
      }}
    >
      {initial}
    </div>
  );
}
