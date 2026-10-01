import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PagePager from "@/components/ui/PagePager";

const PRINCIPLES = [
  {
    n: "01",
    title: "DevByte is a media organization, not a content tool.",
    body: `A content tool produces output. A media organization discovers what is happening in the world, evaluates it editorially, and decides what is worth publishing. DEVLAR is built as the latter. Every architectural decision — the four-source collector, the two-pass editorial engine, the category rotation system — exists because a real newsroom would make the same decisions. The automation is the journalist, not the typewriter.`,
  },
  {
    n: "02",
    title: "Code determines what is allowed. Gemini determines what is worth publishing.",
    body: `Hard-coded rules handle the things rules should handle: structural validity, noise removal, deduplication, staleness. The LLM handles the editorial judgment that rules cannot: is this story important enough to be the lead today? The two systems are deliberately non-overlapping. A Gemini hallucination cannot cause a tutorial to pass the signal filter. A blacklisted keyword cannot cause a genuine breakthrough to be discarded by the LLM.`,
  },
  {
    n: "03",
    title: "Zero UI in the loop.",
    body: `A pipeline is not autonomous if it requires a human to click 'Approve' before publishing. The system must make its own editorial decisions, handle its own failures, and recover from API errors without human intervention. The only human touchpoint in the current architecture is the initial cron schedule — everything else is automated. The Control Center on this site is an observer dashboard, not an intervention panel.`,
  },
  {
    n: "04",
    title: "Facts over formatting.",
    body: `LLMs perform poorly when asked to evaluate content cluttered with HTML tags, CSS classes, and navigation chrome. Before passing any candidate to Gemini, the system strips all markup and renders the content as clean plain text. Gemini reads the article, not the website. This single decision dramatically reduced hallucination rates in Pass 1 evaluation.`,
  },
  {
    n: "05",
    title: "Stateless execution with decoupled persistence.",
    body: `The EC2 worker maintains no local state between runs. Each cron trigger is a fresh execution. Candidates, evaluation scores, and publishing records are persisted to PostgreSQL (pipeline truth) and MongoDB Atlas (presentation layer). The pipeline can be restarted, migrated, or replaced without data loss because it never owns its own data — the databases do.`,
  },
  {
    n: "06",
    title: "Video is just code.",
    body: `By treating video as a React component tree (Remotion), the visual design of every frame is version-controlled, composable, and debuggable like any other UI. A typography bug is a CSS fix, not an After Effects re-render. Animation timing is a function of audio metadata, not a manually keyframed timeline. This enables the same engineer who wrote the pipeline to also update the visual template without learning a new tool.`,
  },
];

export default function PhilosophyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12">
      <Breadcrumbs />

      <header className="mb-16">
        <div className="pill pill-accent mb-4">Core Principles</div>
        <h1 className="heading-xl text-[var(--tx-1)]">Philosophy</h1>
        <p className="mt-4 text-lg text-[var(--tx-2)] leading-relaxed max-w-2xl">
          The architectural decisions behind DEVLAR are not arbitrary. They stem from a set of principles about what autonomous media systems should be — and what they shouldn't.
        </p>
      </header>

      {/* Mission statement */}
      <div className="card p-8 mb-14 border-[var(--border-active)] bg-[var(--accent-dim)] text-center">
        <div className="mono text-[10px] uppercase tracking-widest text-[var(--tx-3)] mb-4">Editorial Mission</div>
        <p className="text-lg font-medium text-[var(--tx-1)] leading-relaxed italic max-w-2xl mx-auto">
          "DevByte covers products, releases, tools, developer infrastructure, AI breakthroughs, and major engineering announcements — not essays, tutorials, opinion pieces, or long-form discussions."
        </p>
      </div>

      {/* Principles */}
      <div className="space-y-6">
        {PRINCIPLES.map((p) => (
          <article key={p.n} className="card p-7 hover:-translate-y-0.5 transition-transform duration-200">
            <div className="flex items-start gap-5">
              <span className="mono text-2xl font-extrabold text-[var(--border-hover)] shrink-0 mt-0.5">{p.n}</span>
              <div>
                <h3 className="heading-md text-[var(--tx-1)] mb-3">{p.title}</h3>
                <p className="text-sm text-[var(--tx-2)] leading-relaxed">{p.body}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* The end goal */}
      <div className="mt-16 rounded-2xl border border-[var(--border)] bg-[var(--bg-1)] p-10 text-center">
        <div className="mono text-[10px] uppercase tracking-widest text-[var(--tx-3)] mb-5">The Larger Goal</div>
        <blockquote className="text-xl font-medium text-[var(--tx-1)] leading-relaxed italic max-w-2xl mx-auto mb-6">
          "To prove that a software engineer can build a media company that operates itself — scaling production infinitely without scaling headcount."
        </blockquote>
        <p className="text-sm text-[var(--tx-2)] max-w-xl mx-auto leading-relaxed">
          YouTube videos are simply the first product. The same underlying discovery and editorial infrastructure could produce journal articles, newsletters, research publications, or social posts. DevByte Media House is the programmable media organization — DevByte Engine is one of its production lines.
        </p>
      </div>

      <PagePager
        prev={{ href: "/technology", label: "Technology Stack" }}
      />
    </div>
  );
}
