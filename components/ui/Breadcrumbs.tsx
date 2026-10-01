"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();
  if (!pathname || pathname === "/") return null;
  const parts = pathname.split("/").filter(Boolean);
  
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 mono text-[10px] uppercase tracking-widest text-[var(--tx-3)] mb-8">
      <Link href="/" className="hover:text-[var(--tx-1)] transition-colors">Home</Link>
      {parts.map((p, i) => {
        const isLast = i === parts.length - 1;
        const href = "/" + parts.slice(0, i + 1).join("/");
        const title = p.replace(/-/g, " ");
        return (
          <div key={p} className="flex items-center gap-1.5">
            <span className="text-[var(--border-hover)]">/</span>
            {isLast ? (
              <span className="text-[var(--accent)] font-semibold">{title}</span>
            ) : (
              <Link href={href} className="hover:text-[var(--tx-1)] transition-colors">{title}</Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
