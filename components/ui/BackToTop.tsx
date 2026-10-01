"use client";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const h = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  if (!show) return null;
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 h-10 w-10 flex items-center justify-center
        rounded-xl border border-[var(--border-active)] bg-[var(--accent-dim)]
        text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white
        shadow-lg shadow-[rgba(99,157,255,.25)] transition-all duration-200
        hover:-translate-y-1 hover:shadow-[rgba(99,157,255,.4)]">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        className="h-4 w-4"><path d="m18 15-6-6-6 6"/></svg>
    </button>
  );
}
