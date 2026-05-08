import Link from "next/link";

const tags = [
  "AI Diagnosis",
  "Agriculture AI",
  "Senior-friendly Design",
  "Mini Program",
  "Trust Design",
  "Accessibility",
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

export default function AgricultureAiPage() {
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
          <h1 className="max-w-[660px] text-[28px] font-semibold leading-tight tracking-tight text-white md:text-[36px]">
            CropCare Doctor — AI Crop & Poultry Disease Diagnosis Tool
          </h1>

          <p className="mt-8 max-w-[660px] text-sm leading-7 text-neutral-300">
            An AI diagnosis tool designed for rural elderly users, helping them identify
            crop and poultry problems through photo-based diagnosis in a simple and
            trustworthy way.
          </p>

          <p className="mt-4 max-w-[660px] text-sm leading-7 text-neutral-400">
            The product focuses on reducing interaction burden, increasing trust, and
            turning complex AI recognition into an experience that elderly farmers can
            actually use in real-world agricultural scenarios.
          </p>

          {/* QR */}
          <div className="mt-10 flex flex-col items-center">
            <img
              src="/images/agriculture-ai/qr.png"
              alt="QR code"
              className="h-[120px] w-[120px] rounded-md border border-white/10 bg-white object-cover"
            />
            <p className="mt-4 text-sm text-white">Scan to Try</p>
            <p className="mt-2 text-xs text-neutral-500">
              WeChat mini program · prototype preview
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-neutral-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="mt-8 max-w-[660px] text-xs leading-6 text-neutral-500">
            Solo Project — Product Strategy · UX Design · Interaction Design · AI
            Workflow Thinking
          </p>
        </header>

        <div className="mt-14">
          <ImageBlock
            src="/images/agriculture-ai/hero.png"
            alt="CropCare Doctor hero screens"
          />
        </div>

        {/* The Problem */}
        <Section title="The Problem">
          <div className="space-y-5">
            <Paragraph>
              In rural agricultural scenarios, many elderly users still rely on
              experience, neighbors, or offline stores to deal with crop and poultry
              health issues. Once a disease appears, they often do not know what the
              problem is, whether it is urgent, or what to do first.
            </Paragraph>

            <Paragraph>
              Most AI products assume users are comfortable with complex interfaces,
              typing, and interpretation of machine output. But for older rural users,
              the problem is not only recognition accuracy — it is whether the product
              feels understandable, low-pressure, and trustworthy enough to use.
            </Paragraph>

            <Paragraph>
              The core challenge of this project was to design an AI diagnosis
              experience that reduces fear and uncertainty while making the system feel
              simple, supportive, and actionable.
            </Paragraph>
          </div>

          <ImageBlock
            src="/images/agriculture-ai/problem.png"
            alt="Problem illustration"
            className="mt-8"
          />
        </Section>

        {/* User Context & Design Principles */}
        <Section title="User Context & Design Principles">
          <div className="space-y-5">
            <Paragraph>
              The primary users are older farmers and rural households, often using
              low-end Android phones in outdoor or weak-network environments. They may
              have reduced vision, limited typing ability, and low tolerance for complex
              operations.
            </Paragraph>

            <Paragraph>
              Based on these constraints, the design followed several principles:
            </Paragraph>

            <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-neutral-400">
              <li>Minimize cognitive load through one-task-per-screen flows.</li>
              <li>Use familiar visual language and large, readable controls.</li>
              <li>Reduce the need for text input and abstract interpretation.</li>
              <li>
                Make AI feel like assistance rather than an authoritative black box.
              </li>
              <li>
                Keep the overall interaction calm, clear, and confidence-building.
              </li>
            </ul>
          </div>

          <ImageBlock
            src="/images/agriculture-ai/user-context.png"
            alt="User context and target user"
            className="mt-8"
          />
        </Section>

        {/* Core Design Decision */}
        <Section title="Core Design Decision">
          <div className="space-y-7">
            <Paragraph>
              The most important interaction decision in this project was changing the
              diagnosis flow from a “selection mode” to a “confirmation mode”.
            </Paragraph>

            <div>
              <h3 className="text-sm font-semibold text-white">
                Original approach · Selection mode
              </h3>
              <p className="mt-3 text-sm leading-7 text-neutral-400">
                In the early concept, users were asked to choose symptoms from a list.
                This created a high cognitive burden, because users first had to
                understand agricultural terminology and then map their own observation
                to the correct symptom.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">
                Revised approach · Confirmation mode
              </h3>
              <p className="mt-3 text-sm leading-7 text-neutral-400">
                Instead of asking users to identify symptoms by themselves, the AI first
                extracts visible features and proposes a possible understanding. Users
                only need to confirm whether the description matches what they see.
              </p>
            </div>

            <Paragraph>
              This shift dramatically lowers complexity and makes the product feel more
              like guided assistance rather than a test of the user&apos;s judgment.
            </Paragraph>
          </div>

          <ImageBlock
            src="/images/agriculture-ai/core-decision.png"
            alt="From selection to confirmation"
            className="mt-8"
          />
        </Section>

        {/* Core Flow */}
        <Section title="Core Flow">
          <Paragraph>
            The final diagnosis journey was simplified into a concise three-step flow:
          </Paragraph>

          <div className="mt-8 space-y-7">
            <div>
              <h3 className="text-sm font-semibold text-white">1 · Explore</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-400">
                The user takes a photo or uploads one, with lightweight guidance to
                help frame the problem clearly.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">2 · Confirm</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-400">
                The AI summarizes visible features and asks the user for simple
                confirmation, reducing the need for technical knowledge.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">3 · View Result</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-400">
                The system presents a structured diagnosis result with practical
                suggestions, follow-up actions, and supportive reassurance.
              </p>
            </div>
          </div>

          <ImageBlock
            src="/images/agriculture-ai/core-flow.png"
            alt="Core product flow"
            className="mt-8"
          />
        </Section>

        {/* AI Uncertainty & Trust Design */}
        <Section title="AI Uncertainty & Trust Design">
          <div className="space-y-7">
            <Paragraph>
              A major design challenge was handling AI uncertainty. In agricultural
              scenarios, a wrong answer can increase anxiety or lead to incorrect
              action, so the interface needed to communicate confidence carefully rather
              than pretending perfect certainty.
            </Paragraph>

            <div>
              <h3 className="text-sm font-semibold text-white">
                1 · Confidence-based result presentation
              </h3>
              <p className="mt-3 text-sm leading-7 text-neutral-400">
                Higher-confidence cases can be presented more directly, while lower
                confidence should be shown as preliminary judgment rather than a final
                diagnosis.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">
                2 · Multiple possible results instead of a single answer
              </h3>
              <p className="mt-3 text-sm leading-7 text-neutral-400">
                When the AI is uncertain, showing several possible interpretations helps
                users understand ambiguity and keeps the system honest.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">
                3 · Human fallback
              </h3>
              <p className="mt-3 text-sm leading-7 text-neutral-400">
                The design leaves room for expert consultation and encourages users to
                seek further help when needed, making the product a support tool rather
                than an all-knowing authority.
              </p>
            </div>
          </div>

          <ImageBlock
            src="/images/agriculture-ai/trust-design.png"
            alt="AI uncertainty and trust design"
            className="mt-8"
          />
        </Section>

        {/* Technical Implementation */}
        <Section title="Technical Implementation">
          <div className="space-y-5">
            <Paragraph>
              The product was designed as a lightweight mini program experience focused
              on accessibility and field usability. The design work emphasized clear
              page flow, readable visual hierarchy, and modular result presentation that
              can support future AI integration.
            </Paragraph>

            <Paragraph>
              The implementation direction considered real-world constraints such as
              weak network conditions, camera-based input, elderly-friendly interaction
              patterns, and the need for practical trust-building around AI output.
            </Paragraph>
          </div>
        </Section>

        {/* Reflection */}
        <Section title="Reflection">
          <div className="space-y-5">
            <Paragraph>
              This project helped me rethink what it means to design an AI product for
              real people in real-world scenarios.
            </Paragraph>

            <Paragraph>
              The most important insight was that accuracy alone does not make a useful
              product. For elderly rural users, usability, reassurance, and trust are
              just as important as the intelligence behind the system.
            </Paragraph>

            <Paragraph>
              Good AI product design is not only about making machines more capable, but
              about making complex systems feel understandable, supportive, and safe.
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