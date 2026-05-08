import Link from "next/link";

const tags = [
  "Information Product",
  "Dashboard Design",
  "Market Observation",
  "ETF Comparison",
  "Macro Context",
  "Next.js",
];

function TopActions() {
  return (
    <div className="fixed right-8 top-7 z-20 flex items-center gap-3">
      <a
        href="#"
        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-neutral-300 backdrop-blur transition hover:bg-white/10"
      >
        ⇩ Download Resume
      </a>
      <button className="h-9 w-14 rounded-full border border-white/10 bg-white/5 text-neutral-300 backdrop-blur">
        ◐
      </button>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-white/10 py-14 md:py-16">
      <h2 className="text-[22px] font-semibold tracking-tight text-white md:text-[24px]">
        {title}
      </h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className="text-sm leading-7 text-neutral-400">{children}</p>;
}

function ImageBlock({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-full rounded-md border border-white/10 bg-white ${className}`}
    />
  );
}

export default function Ndx100Page() {
  return (
    <main className="min-h-screen bg-[#0d0d0d] text-white">
      <TopActions />

      <div className="mx-auto max-w-[760px] px-6 pb-24 pt-20 md:px-8 md:pt-24">
        <Link
          href="/"
          className="text-xs text-neutral-500 transition hover:text-white"
        >
          ← Back to Projects
        </Link>

        {/* Hero */}
        <header className="mt-14">
          <h1 className="max-w-[620px] text-[28px] font-semibold leading-tight tracking-tight text-white md:text-[36px]">
            Nasdaq-100 Information Observatory
          </h1>

          <p className="mt-8 max-w-[620px] text-sm leading-7 text-neutral-300">
            A structured information tool for Chinese investors tracking the Nasdaq-100
            — focused on index structure, valuation positioning, participation cost,
            and macro context, rather than scattered financial news.
          </p>

          <p className="mt-4 max-w-[620px] text-sm leading-7 text-neutral-400">
            Designed as a focused market dashboard that helps users answer two core
            questions: what is happening now, and how should I participate more
            rationally?
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-neutral-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="mt-8 max-w-[620px] text-xs leading-6 text-neutral-500">
            Solo Project — Product Strategy · Information Architecture · UI Design ·
            Front-end Build
          </p>
        </header>

        <div className="mt-14">
          <ImageBlock
            src="/images/ndx100/hero.png"
            alt="Nasdaq-100 dashboard hero"
          />
        </div>

        {/* The Problem */}
        <Section title="The Problem">
          <div className="space-y-5">
            <Paragraph>
              For many Chinese investors, Nasdaq-100 information is available
              everywhere but rarely organized in a way that supports actual
              decision-making. News apps, quote apps, ETF pages, and macro data all
              exist separately, forcing users to piece together their own view.
            </Paragraph>

            <Paragraph>
              Most tools either focus too narrowly on price movement or become too broad
              like a generic finance portal. The challenge was to design a more focused
              information product: not a comprehensive market website, but a structured
              observation interface centered specifically on the Nasdaq-100.
            </Paragraph>

            <Paragraph>
              The product needed to reduce noise, clarify the current state of the
              index, reveal participation cost through domestic ETF products, and place
              the index inside a larger macro context.
            </Paragraph>
          </div>
        </Section>

        {/* Information Architecture */}
        <Section title="Information Architecture">
          <Paragraph>
            The information architecture was organized into four dimensions, each
            answering a different layer of investor concern: current state, index
            structure, participation cost, and macro context.
          </Paragraph>

          <div className="mt-8 space-y-7">
            <div>
              <h3 className="text-sm font-semibold text-white">
                Dimension 1 · Current State (Main Homepage)
              </h3>
              <p className="mt-3 text-sm leading-7 text-neutral-400">
                A quick overview of the index level, daily change, and key summary
                signals, helping users understand the current market condition at a
                glance.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">
                Dimension 2 · Index Structure (Constituents Page)
              </h3>
              <p className="mt-3 text-sm leading-7 text-neutral-400">
                Weight distribution, constituent behavior, and the internal structure of
                the index, showing what is actually driving performance.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">
                Dimension 3 · Participation Cost (ETF Page)
              </h3>
              <p className="mt-3 text-sm leading-7 text-neutral-400">
                Domestic ETF comparison from the perspective of premium rate, tracking
                error, assets, and subscription status, helping investors evaluate the
                real cost of participation.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">
                Dimension 4 · Macro Context (Drivers & Interpretation Page)
              </h3>
              <p className="mt-3 text-sm leading-7 text-neutral-400">
                Macro indicators such as VIX, U.S. Treasury yields, and the dollar
                index, combined with event interpretation, provide a broader decision
                context beyond price alone.
              </p>
            </div>
          </div>

          <ImageBlock
            src="/images/ndx100/information-architecture.png"
            alt="Nasdaq-100 information architecture"
            className="mt-8"
          />
        </Section>

        {/* Core Modules */}
        <Section title="Core Modules">
          <div className="space-y-12">
            <div>
              <h3 className="text-sm font-semibold text-white">
                Daily Strategy Summary
              </h3>
              <p className="mt-3 text-sm leading-7 text-neutral-400">
                A lightweight summary card was designed to quickly synthesize the
                day&apos;s market context into an easy-to-read observation, helping users
                move from raw data to interpretation more naturally.
              </p>

              <ImageBlock
                src="/images/ndx100/daily-summary.png"
                alt="Daily strategy summary"
                className="mt-6"
              />
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">
                Index Drivers & Valuation Matrix
              </h3>
              <p className="mt-3 text-sm leading-7 text-neutral-400">
                The dashboard organizes key companies, performance contribution,
                valuation status, and selected driver metrics together, so users can
                understand the internal condition of the index rather than treating it
                as a single number.
              </p>

              <ImageBlock
                src="/images/ndx100/valuation-matrix.png"
                alt="Index drivers and valuation matrix"
                className="mt-6"
              />
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">
                ETF Cost Comparison
              </h3>
              <p className="mt-3 text-sm leading-7 text-neutral-400">
                A structured ETF comparison table helps Chinese investors compare
                multiple Nasdaq-related ETF products more rationally through premium
                rate, tracking deviation, scale, and trading convenience.
              </p>

              <ImageBlock
                src="/images/ndx100/etf-comparison.png"
                alt="ETF comparison table"
                className="mt-6"
              />
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">
                Event Interpretation Signals
              </h3>
              <p className="mt-3 text-sm leading-7 text-neutral-400">
                Instead of listing macro events as isolated headlines, the product turns
                them into structured interpretation signals, linking major events to
                possible market implications and helping users build contextual judgment.
              </p>

              <ImageBlock
                src="/images/ndx100/event-signals.png"
                alt="Event interpretation signals"
                className="mt-6"
              />
            </div>
          </div>
        </Section>

        {/* Design Decisions */}
        <Section title="Design Decisions">
          <div className="space-y-6">
            <Paragraph>
              Three key design decisions shaped this product into a focused information
              tool rather than a generic financial dashboard.
            </Paragraph>

            <div>
              <h3 className="text-sm font-semibold text-white">
                1 · Single-focus information architecture
              </h3>
              <p className="mt-3 text-sm leading-7 text-neutral-400">
                The product was intentionally scoped around a single target: the
                Nasdaq-100. This avoided the common trap of becoming a broad but shallow
                finance portal.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">
                2 · Easy layer switch with a clear user journey
              </h3>
              <p className="mt-3 text-sm leading-7 text-neutral-400">
                The information was arranged from “what is happening now” to “how can I
                participate” and finally to “what macro context matters,” creating a
                natural reading flow.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">
                3 · Context awareness for long-term investors
              </h3>
              <p className="mt-3 text-sm leading-7 text-neutral-400">
                The product was not designed for short-term trading signals. Instead, it
                helps long-term investors observe valuation, structure, and risk context
                more clearly before making decisions.
              </p>
            </div>
          </div>
        </Section>

        {/* Technical Implementation */}
        <Section title="Technical Implementation">
          <div className="mb-6 flex flex-wrap gap-2">
            {["Next.js", "React", "Tailwind CSS", "Vercel", "Visualization"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-neutral-300"
                >
                  {item}
                </span>
              )
            )}
          </div>

          <div className="space-y-5">
            <Paragraph>
              The site was built with Next.js and Tailwind CSS, allowing the product to
              stay lightweight, structured, and easy to iterate. Static content and UI
              modules were organized to support fast visual refinement and future data
              integration.
            </Paragraph>

            <Paragraph>
              The implementation focused on product clarity and communication value,
              making it suitable both as a public-facing information product and as a
              case study demonstrating structured information design.
            </Paragraph>
          </div>
        </Section>

        {/* Reflection */}
        <Section title="Reflection">
          <div className="space-y-5">
            <Paragraph>
              This project was an exploration of how an investment product can be
              designed as an information system rather than just a quote interface.
            </Paragraph>

            <Paragraph>
              Traditional finance tools often overload users with fragmented metrics.
              This project showed me that a better investor product is not necessarily
              the one with more data, but the one that arranges information into a
              clearer reasoning path.
            </Paragraph>

            <Paragraph>
              The real design value lies in helping users interpret complexity, reduce
              noise, and form more stable long-term judgment.
            </Paragraph>
          </div>
        </Section>

        <div className="border-t border-white/10 pt-10">
          <Link
            href="/"
            className="text-xs text-neutral-500 transition hover:text-white"
          >
            ← Back to Projects
          </Link>
        </div>
      </div>
    </main>
  );
}