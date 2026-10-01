"use client";
import { useTheme } from "./ThemeProvider";
import { useEffect, useState } from "react";

export default function ThemeToggle({ small = false }: { small?: boolean }) {
  const { mode, set } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className={small ? "h-7 w-7" : "h-8 w-8"} />;

  const cycle = () => set(mode === "dark" ? "light" : mode === "light" ? "system" : "dark");
  const label = mode === "dark" ? "Switch to light mode" : mode === "light" ? "Switch to system mode" : "Switch to dark mode";

  const sz = small ? "h-7 w-7" : "h-8 w-8";
  const icon = mode === "dark"
    ? /* moon */ <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    : mode === "light"
    ? /* sun */ <>
        <circle cx="12" cy="12" r="4"/>
        <line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
        <line x1="2" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="22" y2="12"/>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
      </>
    : /* monitor */ <><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></>;

  return (
    <button onClick={cycle} aria-label={label} title={label}
      className={`${sz} flex items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--tx-2)] hover:text-[var(--tx-1)] hover:border-[var(--border-hover)] hover:bg-[var(--surface-hover)] transition-all duration-200`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        className="h-3.5 w-3.5">{icon}</svg>
    </button>
  );
}
