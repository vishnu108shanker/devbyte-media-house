"use client";
import { useEffect, useState } from "react";

export default function TableOfContents({ items }: { items: { id: string; title: string }[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id || "");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActiveId(e.target.id);
        }
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    items.forEach((i) => {
      const el = document.getElementById(i.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  const NavContent = () => (
    <ul className="space-y-3">
      {items.map((i) => (
        <li key={i.id}>
          <a
            href={`#${i.id}`}
            onClick={(e) => {
              setOpen(false);
              // smooth scroll
              e.preventDefault();
              const el = document.getElementById(i.id);
              if (el) {
                const y = el.getBoundingClientRect().top + window.scrollY - 100;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
            className={`block text-sm transition-all duration-200 ${
              activeId === i.id
                ? "text-[var(--accent)] font-semibold translate-x-1"
                : "text-[var(--tx-3)] hover:text-[var(--tx-1)]"
            }`}
          >
            {i.title}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {/* Desktop TOC */}
      <nav className="hidden lg:block sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto w-64 pl-6 border-l border-[var(--border)]">
        <h4 className="mono text-[10px] font-bold tracking-widest text-[var(--tx-1)] uppercase mb-6">On this page</h4>
        <NavContent />
      </nav>

      {/* Mobile TOC Toggle */}
      <div className="lg:hidden mb-8">
        <button
          onClick={() => setOpen(!open)}
          className="flex w-full items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 text-sm font-semibold text-[var(--tx-1)] hover:bg-[var(--surface-hover)] transition-colors"
        >
          <span>Table of Contents</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
        {open && (
          <div className="mt-2 rounded-xl border border-[var(--border)] bg-[var(--bg-1)] p-4 shadow-xl">
            <NavContent />
          </div>
        )}
      </div>
    </>
  );
}
