import Link from "next/link";

const sections = [
  {
    title: "Task Management",
    description:
      "Designed to standardize complex annotation setup through reusable task templates, configurable workflows, and role-based task distribution.",
    images: [
      "task-management-01.png",
      "task-management-02.png",
      "task-management-03.png",
      "task-management-04.png",
    ],
  },
  {
    title: "Data Operations",
    description:
      "Designed to make large-scale annotation progress, quality, efficiency, and cost visible to operators and business stakeholders.",
    images: [
      "data-operations-01.png",
      "data-operations-02.png",
      "data-operations-03.png",
    ],
  },
  {
    title: "Project Space",
    description:
      "Designed to separate projects, roles, assets, and permissions into independent workspaces for different business scenarios.",
    images: [
      "project-space-01.png",
      "project-space-02.png",
    ],
  },
  {
    title: "Prompt Management",
    description:
      "Designed to support prompt templates, preview, optimization, and scheduled delivery for LLM-related annotation workflows.",
    images: [
      "prompt-management-01.png",
      "prompt-management-02.png",
      "prompt-management-03.png",
    ],
  },
  {
    title: "Knowledge Base",
    description:
      "Designed to transform scattered business information into structured, reusable knowledge for AI production tasks.",
    images: [
      "knowledge-base-01.png",
      "knowledge-base-02.png",
      "knowledge-base-03.png",
    ],
  },
  {
    title: "Agent Builder / Tools",
    description:
      "Designed to make agent capabilities configurable through application lists, tool orchestration, and MCP-style workflow composition.",
    images: [
      "agent-tools-01.png",
      "agent-tools-02.png",
      "agent-tools-03.png",
    ],
  },
  {
    title: "Design System",
    description:
      "Designed to maintain structural consistency across multiple product phases through layout rules, icon principles, and visualization standards.",
    images: [
      "design-system-01.png",
      "design-system-02.png",
      "design-system-03.png",
      "design-system-04.png",
    ],
  },
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

function ScreenImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <img
      src={src}
      alt={alt}
      className="w-full rounded-md border border-white/10 bg-white"
    />
  );
}

export default function YuanquanScreensPage() {
  return (
    <main className="min-h-screen bg-[#0d0d0d] text-white">
      <TopActions />

      <div className="mx-auto max-w-[760px] px-6 pb-24 pt-20 md:px-8 md:pt-24">
        <Link
          href="/projects/yuanquan"
          className="text-xs text-neutral-500 transition hover:text-white"
        >
          ← Back to Case Study
        </Link>

        <header className="mt-14 border-t border-white/10 pt-12 text-center">
          <h1 className="text-[28px] font-semibold leading-tight tracking-tight text-white md:text-[34px]">
            Yuanquan — More Screens
          </h1>

          <p className="mx-auto mt-8 max-w-[620px] text-sm leading-7 text-neutral-400">
            A supplemental screen gallery for the Yuanquan internal enterprise AI
            platform, showing additional interface details across task management,
            data operations, project space, prompt management, knowledge base, agent
            builder, and design system.
          </p>

          <p className="mx-auto mt-4 max-w-[620px] text-xs leading-6 text-neutral-500">
            Best viewed on desktop for detailed interface review.
          </p>
        </header>

        <div className="mt-14 space-y-16">
          {sections.map((section) => (
            <section
              key={section.title}
              className="border-t border-white/10 pt-14"
            >
              <div>
                <h2 className="text-[22px] font-semibold tracking-tight text-white md:text-[24px]">
                  {section.title}
                </h2>

                <p className="mt-5 max-w-[620px] text-sm leading-7 text-neutral-400">
                  {section.description}
                </p>
              </div>

              <div className="mt-8 space-y-8">
                {section.images.map((image, index) => (
                  <ScreenImage
                    key={image}
                    src={`/images/yuanquan/screens/${image}`}
                    alt={`${section.title} screen ${index + 1}`}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-20 border-t border-white/10 pt-10">
          <Link
            href="/projects/yuanquan"
            className="text-xs text-neutral-500 transition hover:text-white"
          >
            ← Back to Case Study
          </Link>
        </div>
      </div>
    </main>
  );
}
