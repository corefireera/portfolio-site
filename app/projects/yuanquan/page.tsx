import Link from "next/link";

const tags = [
  "B2B Design",
  "AI Platform",
  "Workflow Design",
  "Multi-role System",
  "Enterprise UX",
  "Agent Builder",
];

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

export default function YuanquanPage() {
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
            Yuanquan — Enterprise AI Annotation & Operations Platform
          </h1>

          <p className="mt-8 max-w-[620px] text-sm leading-7 text-neutral-300">
            Designing a scalable operating system for enterprise AI data production.
          </p>

          <p className="mt-4 max-w-[620px] text-sm leading-7 text-neutral-400">
            Maintaining structural consistency across a complex, multi-role AI platform
            through multiple product transitions.
          </p>

          <div className="mt-8">
            <Link
              href="/projects/yuanquan-screens"
              className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-neutral-300 transition hover:bg-white/10 hover:text-white"
            >
              View More Screens ↗
            </Link>
          </div>

          <p className="mt-8 text-sm font-medium text-neutral-300">
            Internal Enterprise Product
          </p>

          <p className="mt-8 max-w-[620px] text-sm leading-7 text-neutral-400">
            A complex B2B platform for enterprise AI training and operations, covering
            task workflows, annotation production, prompt management, knowledge base
            operations, and agent building.
          </p>

          <div className="mt-8 flex max-w-[620px] flex-wrap justify-start gap-2">
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
            UX Design Expert — Interaction Design · Information Architecture · Workflow
            Design · Cross-functional Collaboration
          </p>
        </header>

        <div className="mt-14">
          <ImageBlock
            src="/images/yuanquan/hero.png"
            alt="Yuanquan platform overview"
          />
        </div>

        {/* Project Overview */}
        <Section title="Project Overview">
          <div className="space-y-5">
            <Paragraph>
              Yuanquan is an internal enterprise AI annotation and operations platform
              designed for large-scale language model training and evaluation. The
              platform supports the full production workflow from data collection, task
              configuration, annotation production, quality review, and operational
              dashboards to prompt management, knowledge base configuration, and agent
              application building.
            </Paragraph>

            <Paragraph>
              As annotation scenarios expanded from simple labeling to multi-modal and
              LLM-related tasks, the design challenge was to maintain a clear, consistent,
              and scalable product structure across different roles, workflows, and
              product phases. My design approach focused on modularizing complex
              workflows, separating role-based permissions, and maintaining structural
              consistency across multiple product transitions.
            </Paragraph>
          </div>
        </Section>

        {/* Challenge */}
        <Section title="The Challenge">
          <div className="space-y-7">
            <div>
              <h3 className="text-sm font-semibold text-white">
                Challenge 01 · Higher data quality requirements
              </h3>
              <p className="mt-3 text-sm leading-7 text-neutral-400">
                LLM training required large-scale, high-quality annotated data, making it
                necessary to standardize task configuration, annotation rules, and review
                workflows.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">
                Challenge 02 · More complex annotation scenarios
              </h3>
              <p className="mt-3 text-sm leading-7 text-neutral-400">
                Annotation scenarios expanded from text labeling to image, video, audio,
                rich-text formats, ChatGPT distillation, synchronized review, and data
                visualization.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">
                Challenge 03 · Workflow efficiency and ecosystem expansion
              </h3>
              <p className="mt-3 text-sm leading-7 text-neutral-400">
                The platform needed to support different roles and business partners,
                including internal operators, employees, suppliers, and brand merchants,
                while keeping permissions, data, and workflows clearly separated.
              </p>
            </div>
          </div>
        </Section>

        {/* System Architecture */}
        <Section title="System Architecture">
          <Paragraph>
            A five-layer structure was used to organize roles, permissions, task
            configuration, production workflows, and operational visibility.
          </Paragraph>

          <ImageBlock
            src="/images/yuanquan/system-architecture.png"
            alt="Yuanquan system architecture"
            className="mt-8"
          />
        </Section>

        {/* Selected Product Modules */}
        <Section title="Selected Product Modules">
          <Paragraph>
            The following modules represent the core areas where the most intensive
            workflow and interaction design work happened.
          </Paragraph>

          <div className="mt-10 space-y-12">
            <div>
              <h3 className="text-sm font-semibold text-white">Task Management</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-400">
                Supports task creation, workflow configuration, review routing, and
                sampling setup across different business scenarios.
              </p>
              <ImageBlock
                src="/images/yuanquan/task-management.png"
                alt="Task management workflow configuration"
                className="mt-6"
              />
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">
                Annotation Workspace
              </h3>
              <p className="mt-3 text-sm leading-7 text-neutral-400">
                The core production interface for daily annotation work, designed to
                balance efficiency, accuracy, and operational stability in high-frequency
                scenarios.
              </p>
              <ImageBlock
                src="/images/yuanquan/annotation-workspace.png"
                alt="Annotation workspace interface"
                className="mt-6"
              />
            </div>
          </div>
        </Section>

        {/* Key Contributions */}
        <Section title="Key Design Contributions">
          <div className="space-y-14">
            <div>
              <h3 className="text-sm font-semibold text-white">
                5.1 Role-based Access Structure
              </h3>
              <p className="mt-3 text-sm leading-7 text-neutral-400">
                I designed a role-based access structure for annotation vendors, internal
                operations teams, and ecosystem partners. By defining different module
                visibility and navigation scope for each role, I reduced unnecessary
                complexity and made the system easier to understand, use, and scale.
              </p>

              <ImageBlock
                src="/images/yuanquan/role-based-access.png"
                alt="Role-based module visibility"
                className="mt-6"
              />

              <p className="mt-5 text-sm font-medium leading-7 text-neutral-300">
                Different user roles were given different module visibility and access
                scope, helping simplify the platform experience while maintaining
                structural clarity.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">
                5.2 Configurable Workflow System
              </h3>
              <p className="mt-3 text-sm leading-7 text-neutral-400">
                I designed a configurable workflow system that allowed operations teams to
                assemble reusable multi-stage annotation processes for different business
                scenarios.
              </p>
              <p className="mt-3 text-sm leading-7 text-neutral-400">
                This helped reduce repeated configuration work and made workflow setup
                more scalable across projects.
              </p>

              <ImageBlock
                src="/images/yuanquan/configurable-workflow.png"
                alt="Configurable workflow system"
                className="mt-6"
              />
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">
                5.3 High-efficiency Annotation Workspace
              </h3>
              <p className="mt-3 text-sm leading-7 text-neutral-400">
                The annotation workspace was the core production interface used daily by
                300+ annotators. I focused on separating source content from operation
                panels, reducing unnecessary actions, clarifying task feedback, and
                improving submission flow to support high-frequency execution with better
                efficiency and stability.
              </p>
              <p className="mt-3 text-sm leading-7 text-neutral-400">
                This module had a direct impact on production efficiency and daily
                usability, and it was one of the areas where I made the most detailed
                design decisions.
              </p>

              <ImageBlock
                src="/images/yuanquan/high-efficiency-workspace.png"
                alt="High-efficiency annotation workspace"
                className="mt-6"
              />

              <div className="mt-6 rounded-xl border border-white/10 bg-white/5 px-5 py-4">
                <p className="text-sm font-semibold text-white">
                  Key interaction decisions:
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-neutral-400">
                  <li>
                    Separated source content, annotation fields, and task actions into
                    stable zones.
                  </li>
                  <li>
                    Reduced unnecessary page switching for high-frequency annotation
                    work.
                  </li>
                  <li>
                    Kept task feedback and submission status visible to avoid repeated
                    checks.
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">
                5.4 AI Capabilities as Structured Tools
              </h3>
              <p className="mt-3 text-sm leading-7 text-neutral-400">
                I approached Prompt Management, Knowledge Base, and Agent Builder as a
                unified set of structured operational tools for AI capabilities.
              </p>
              <p className="mt-3 text-sm leading-7 text-neutral-400">
                The goal was not to present AI as an abstract concept, but to make it
                operable through configuration, debugging, publishing, execution, and
                tracking.
              </p>

              <ImageBlock
                src="/images/yuanquan/ai-capabilities-tools.png"
                alt="AI capabilities as structured tools"
                className="mt-6"
              />
            </div>
          </div>
        </Section>

        {/* Reflection */}
        <Section title="Reflection">
          <div className="space-y-5">
            <p className="text-sm font-semibold leading-7 text-white">
              Designing enterprise AI platforms is fundamentally about designing
              workflows, not just interfaces.
            </p>

            <Paragraph>
              The real challenge was not polishing a button or form, but maintaining
              long-term structural consistency across roles, workflows, permissions, and
              changing requirements.
            </Paragraph>

            <Paragraph>
              My value was not only designing screens, but helping the platform stay
              understandable, scalable, and operationally stable as it evolved.
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
