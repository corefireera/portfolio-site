import Link from "next/link";

const tags = ["AI Agent", "Decision System", "Streamlit", "Python", "Prompt Engineering"];

function TopActions() {
  return (
    <div className="fixed right-8 top-7 z-20 flex items-center gap-3">
      <a
        href="/resume.pdf"
        download
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

export default function ASharePage() {
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
            A-Share Short-Term Decision Support System
          </h1>

          <p className="mt-8 max-w-[620px] text-sm leading-7 text-neutral-300">
            Turning subjective market intuition into a structured, explainable
            decision-support system.
          </p>

          <p className="mt-4 max-w-[620px] text-sm leading-7 text-neutral-400">
            A personal AI-assisted market observation tool that transforms years of
            short-term trading experience into reusable rules, metrics, and decision
            workflows.
          </p>

          <div className="mt-8">
            <a
              href="https://ashare-decision-prototype.streamlit.app"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-neutral-300 transition hover:bg-white/10 hover:text-white"
            >
              Open Live Prototype ↗
            </a>
          </div>

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
            Solo Project — Product Thinking · Data Modeling · Python Development ·
            AI-assisted Decision Framework
          </p>
        </header>

        <div className="mt-14">
          <ImageBlock
            src="/images/a-share/hero.png"
            alt="A-Share decision support system overview"
          />
        </div>

        {/* The Problem */}
        <Section title="The Problem">
          <div className="space-y-5">
            <Paragraph>
              Short-term market decisions are often driven by experience, intuition,
              and emotional judgement. After years of manual market review, I realized
              that many of my trading decisions relied on subjective pattern recognition
              that was difficult to explain, repeat, or compare.
            </Paragraph>

            <Paragraph>
              The core problem was not whether I could observe the market, but whether
              I could turn scattered market signals into a structured system that helps
              reduce emotional bias and supports more consistent decision-making.
            </Paragraph>
          </div>
        </Section>

        {/* System Architecture */}
        <Section title="System Architecture">
          <Paragraph>
            I organized the system into four layers: data foundation, structured market
            indicators, decision rules, and AI-assisted interpretation. This made it
            possible to transform subjective market observation into a repeatable and
            explainable workflow.
          </Paragraph>

          <div className="mt-8 space-y-7">
            <div>
              <h3 className="text-sm font-semibold text-white">
                Layer 1 · Data Foundation
              </h3>
              <p className="mt-3 text-sm leading-7 text-neutral-400">
                Historical market review records, daily emotional indicators, limit-up
                and limit-down counts, board structures, and similar trading-day data.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">
                Layer 2 · Structured Analysis
              </h3>
              <p className="mt-3 text-sm leading-7 text-neutral-400">
                Market breadth, limit-up structure, emotional temperature, similar-day
                comparison, and short-term risk signals are converted into visible
                indicators.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">
                Layer 3 · Decision Rules
              </h3>
              <p className="mt-3 text-sm leading-7 text-neutral-400">
                Rules such as entry timing, risk control, stop-loss, take-profit, and
                market condition filtering are organized into a decision framework.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">
                Layer 4 · AI Agent
              </h3>
              <p className="mt-3 text-sm leading-7 text-neutral-400">
                AI is used as an interpretation layer that helps summarize market state,
                identify risk, and generate next-day observation suggestions.
              </p>
            </div>
          </div>

          <ImageBlock
            src="/images/a-share/system-architecture.png"
            alt="A-Share system architecture"
            className="mt-8"
          />
        </Section>

        {/* Human-AI Decision Flow */}
        <Section title="Human-AI Decision Flow">
          <Paragraph>
            The system was designed as a human-AI collaborative process rather than an
            automatic trading machine. Human judgement remains responsible for final
            decisions, while the system provides structured observation, historical
            comparison, and risk reminders.
          </Paragraph>

          <ImageBlock
            src="/images/a-share/human-ai-flow.png"
            alt="Human AI decision flow"
            className="mt-8"
          />
        </Section>

        {/* Core Modules */}
        <Section title="Core Modules">
          <div className="space-y-12">
            <div>
              <h3 className="text-sm font-semibold text-white">
                Trading Score System
              </h3>
              <p className="mt-3 text-sm leading-7 text-neutral-400">
                The score system condenses multiple indicators into a single reference
                score, helping users quickly understand whether the current market
                environment is suitable for action.
              </p>

              <ImageBlock
                src="/images/a-share/trading-score.png"
                alt="Trading score module"
                className="mt-6"
              />
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">
                Market Structure Monitoring
              </h3>
              <p className="mt-3 text-sm leading-7 text-neutral-400">
                Market breadth, limit-up and limit-down counts, board height, and
                emotional indicators are displayed together to support a more complete
                understanding of short-term market structure.
              </p>

              <ImageBlock
                src="/images/a-share/market-structure.png"
                alt="Market structure monitoring"
                className="mt-6"
              />
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">
                Risk Filter
              </h3>
              <p className="mt-3 text-sm leading-7 text-neutral-400">
                The risk filter helps identify moments when the market is too emotional,
                too fragmented, or too close to a high-risk phase, reducing the chance
                of making decisions based purely on excitement.
              </p>

              <ImageBlock
                src="/images/a-share/risk-filter.png"
                alt="Risk filter module"
                className="mt-6"
              />
            </div>
          </div>
        </Section>

        {/* Design Decisions */}
        <Section title="Design Decisions">
          <div className="space-y-5">
            <Paragraph>
              The most important design decision was to avoid turning the tool into a
              dashboard full of disconnected numbers. Instead, I designed it as a
              decision funnel: market state first, emotional structure second, similar
              historical days third, and action suggestions last.
            </Paragraph>

            <Paragraph>
              This top-down structure prevents users from selectively picking indicators
              that confirm their existing bias. It also creates a single decision source
              that keeps observation, judgment, and risk control in one continuous flow.
            </Paragraph>

            <Paragraph>
              The product does not replace human judgement. Its value lies in helping
              the user slow down, compare conditions, and make decisions based on
              structured evidence rather than emotional impulse.
            </Paragraph>
          </div>
        </Section>

        {/* Technical Implementation */}
        <Section title="Technical Implementation">
          <div className="space-y-5">
            <Paragraph>
              The system was built with Python, pandas, and Streamlit. Historical
              trading review records were cleaned and structured into reusable datasets,
              allowing the interface to display daily indicators, similar-day comparison,
              and decision summaries.
            </Paragraph>

            <Paragraph>
              The implementation focused on quick iteration and explainability rather
              than complex modeling. This allowed the system to become both a personal
              decision-support tool and a portfolio project demonstrating product,
              data, and AI workflow thinking.
            </Paragraph>
          </div>
        </Section>

        {/* Reflection */}
        <Section title="Reflection">
          <div className="space-y-5">
            <p className="text-sm font-semibold leading-7 text-white">
              This project helped me understand that AI Agent design is not just about
              connecting tools, but about structuring decision logic.
            </p>

            <Paragraph>
              In a high-uncertainty environment like the stock market, the value of AI
              is not to give a magical answer, but to help organize information, reduce
              emotional noise, and make the reasoning process more transparent.
            </Paragraph>

            <Paragraph>
              The deeper design question is how to divide responsibility between human
              judgement and AI assistance. This project became my first practical
              exploration of human-AI decision collaboration.
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
