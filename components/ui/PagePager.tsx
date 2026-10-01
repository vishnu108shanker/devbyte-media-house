import Link from "next/link";

export default function PagePager({
  prev,
  next,
}: {
  prev?: { href: string; label: string };
  next?: { href: string; label: string };
}) {
  return (
    <div className="mt-20 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row gap-4 justify-between">
      {prev ? (
        <Link
          href={prev.href}
          className="group flex flex-1 flex-col items-start gap-1 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 hover:border-[var(--border-active)] hover:bg-[var(--surface-hover)] hover:-translate-y-1 transition-all duration-200"
        >
          <span className="mono text-[10px] uppercase tracking-widest text-[var(--tx-3)] group-hover:text-[var(--accent)] transition-colors">
            Previous
          </span>
          <span className="text-lg font-semibold text-[var(--tx-1)] group-hover:text-[var(--accent-bright)] transition-colors">
            {prev.label}
          </span>
        </Link>
      ) : <div className="flex-1" />}

      {next ? (
        <Link
          href={next.href}
          className="group flex flex-1 flex-col items-end gap-1 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 text-right hover:border-[var(--border-active)] hover:bg-[var(--surface-hover)] hover:-translate-y-1 transition-all duration-200"
        >
          <span className="mono text-[10px] uppercase tracking-widest text-[var(--tx-3)] group-hover:text-[var(--accent)] transition-colors">
            Next
          </span>
          <span className="text-lg font-semibold text-[var(--tx-1)] group-hover:text-[var(--accent-bright)] transition-colors">
            {next.label}
          </span>
        </Link>
      ) : <div className="flex-1" />}
    </div>
  );
}
