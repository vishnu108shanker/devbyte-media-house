import React from "react";

export default function SectionHeader({
  eyebrow,
  title,
  description,
  accent = "blue",
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  accent?: "blue" | "emerald" | "amber" | "rose" | "purple";
  align?: "left" | "center";
  className?: string;
}) {
  const accentColorClass =
    accent === "emerald"
      ? "text-emerald-500"
      : accent === "amber"
      ? "text-amber-500"
      : accent === "rose"
      ? "text-rose-500"
      : accent === "purple"
      ? "text-purple-500"
      : "text-blue-500";

  return (
    <div
      className={`space-y-2 ${
        align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl"
      } ${className}`}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-semibold ${accentColorClass}`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-current"></span>
          <span>{eyebrow}</span>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--text-primary)] font-mono">
        {title}
      </h2>
      {description && (
        <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
