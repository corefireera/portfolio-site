import Link from "next/link";

const projects = [
  {
    label: "Featured Project",
    title: "Yuanquan — Enterprise AI Annotation & Operations Platform",
    description:
      "Experience design for a complex enterprise AI platform focused on workflow efficiency, multi-role collaboration, and structural clarity.",
    href: "/projects/yuanquan",
    image: "/images/home/yuanquan.png",
  },
  {
    label: "Selected Projects",
    title: "A-Share Short-Term Decision Support System",
    description:
      "A human-AI collaborative decision system that turns subjective market intuition into structured trading support.",
    href: "/projects/a-share",
    image: "/images/home/a-share.png",
  },
  {
    label: "",
    title: "Nasdaq-100 Information Dashboard",
    description:
      "An independently built market dashboard for tracking valuation, ETFs, and key signals around the Nasdaq-100.",
    href: "/projects/ndx100",
    image: "/images/home/ndx100.png",
  },
  {
    label: "",
    title: "Agricultural Diagnosis Mini App",
    description:
      "A senior-friendly mini app designed to simplify agricultural diagnosis through minimal interaction and accessible workflows.",
    href: "/projects/agriculture-ai",
    image: "/images/home/agri-ai.png",
  },
];

const experiences = [
  {
    title: "Alibaba",
    subtitle: "Interaction Design / AI-related business experience",
    description:
      "Worked on interaction design in AI-related business scenarios, focusing on complex workflows, platform experience, and cross-functional collaboration.",
  },
  {
    title: "Hikvision",
    subtitle: "Enterprise product and complex business scenario design",
    description:
      "Contributed to product experience design in enterprise and complex business environments, with a focus on structure, usability, and workflow clarity.",
  },
  {
    title: "Independent Projects",
    subtitle: "Information websites, decision support systems, and mini product explorations",
    description:
      "Built and explored independent projects across financial information tools, decision-support systems, and scenario-based mini programs.",
  },
];

const strengths = [
  {
    title: "Complex System Thinking",
    description:
      "Skilled at organizing high-density information, multi-role workflows, and complicated business structures into clearer product experiences.",
  },
  {
    title: "B2B Product Experience",
    description:
      "Focused on usability, efficiency, consistency, and real workflow experience in enterprise environments.",
  },
  {
    title: "AI & Data Practice",
    description:
      "Continuously exploring AI products, decision-support systems, data structuring, and lightweight prototyping.",
  },
  {
    title: "Independent Building",
    description:
      "Able to move from product idea to structure, interface, and basic implementation with strong self-direction.",
  },
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

function Avatar() {
  return (
    <div className="mx-auto flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-[#171717] ring-1 ring-white/10">
      {/* 后面你有真人头像，就把 public/images/home/avatar.png 放进去，并取消下面 img 注释 */}
      {/* <img src="/images/home/avatar.png" alt="Shundong Liu" className="h-full w-full object-cover" /> */}
      <span className="text-xl font-semibold text-neutral-300">SL</span>
    </div>
  );
}

function Section({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="grid grid-cols-1 gap-8 py-16 md:grid-cols-[120px_1fr] md:gap-12">
      <h2 className="text-sm font-semibold text-white">{label}</h2>
      <div>{children}</div>
    </section>
  );
}

function ProjectCard({
  title,
  description,
  href,
  image,
}: {
  title: string;
  description: string;
  href: string;
  image: string;
}) {
  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-xl border border-white/10 bg-[#151515] transition hover:border-white/25"
    >
      <div className="aspect-[16/9] overflow-hidden bg-[#e8e8e8]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
        />
      </div>

      <div className="border-t border-white/10 bg-[#151515] px-4 py-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-[15px] font-semibold leading-snug text-white md:text-base">
              {title}
            </h3>
            <p className="mt-2 text-[13px] leading-5 text-neutral-400 md:text-sm md:leading-6">
              {description}
            </p>
          </div>
          <span className="text-sm text-neutral-500 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white">
            ↗
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0d0d0d] text-white">
      <TopActions />

      <div className="mx-auto max-w-[760px] px-6 pb-24 pt-24 md:px-8">
        {/* Hero */}
        <header className="text-center">
          <Avatar />

          <h1 className="mt-6 text-[22px] font-semibold tracking-tight text-white">
            Shundong Liu
          </h1>
          <p className="mt-2 text-sm text-neutral-400">刘顺东</p>

          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#111] px-4 py-2 text-xs font-medium text-neutral-300">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Open to Opportunities
          </div>

          <div className="mx-auto mt-6 flex max-w-[620px] flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-neutral-400">
            <span>▣ B2B UX Design / AI Product Practice</span>
            <span>⌖ Hangzhou / Remote</span>
            <a href="mailto:liushundong2026@gmail.com" className="hover:text-white">
              ✉ Email
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              🔗 LinkedIn
            </a>
          </div>
        </header>

        {/* About */}
        <div className="mt-20 border-t border-white/10">
          <Section label="About">
            <div className="space-y-5 text-[13px] leading-6 text-neutral-400 md:text-sm md:leading-7">
              <p>
                I have worked across complex B2B systems and enterprise product design,
                while continuing to build independent tools around AI, data, and
                decision support.
              </p>
              <p>
                My work combines product thinking, system structure, and practical
                execution — from workflow-heavy platforms to small tools shaped by
                real-world needs.
              </p>
            </div>
          </Section>
        </div>

        {/* Projects */}
        <div className="border-t border-white/10">
          <Section label="Projects">
            <div className="space-y-10">
              {projects.map((project, index) => (
                <div key={project.title}>
                  {project.label && (
                    <p
                      className={`mb-4 text-sm font-medium text-neutral-400 ${
                        index > 0 ? "mt-2" : ""
                      }`}
                    >
                      {project.label}
                    </p>
                  )}

                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    href={project.href}
                    image={project.image}
                  />
                </div>
              ))}
            </div>
          </Section>
        </div>

        {/* Experience */}
        <div className="border-t border-white/10">
          <Section label="Experience">
            <div className="space-y-5">
              {experiences.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-white/10 bg-[#151515] px-5 py-5 md:px-6 md:py-6"
                >
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-neutral-400">{item.subtitle}</p>
                  <p className="mt-4 text-sm leading-7 text-neutral-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </Section>
        </div>

        {/* What I Bring */}
        <div className="border-t border-white/10">
          <Section label="What I Bring">
            <div className="space-y-6">
              {strengths.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <span className="mt-[7px] text-neutral-500">•</span>
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-neutral-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </div>

        {/* Contact */}
        <div className="border-t border-white/10">
          <Section label="Contact">
            <div className="space-y-3 text-sm text-neutral-400">
              <p>
                <span className="font-semibold text-white">Email:</span>{" "}
                <a
                  href="mailto:liushundong2026@gmail.com"
                  className="hover:text-white"
                >
                  liushundong2026@gmail.com
                </a>
              </p>
              <p>
                <span className="font-semibold text-white">LinkedIn:</span>{" "}
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  View LinkedIn ↗
                </a>
              </p>

              <a
                href="#"
                className="mt-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-neutral-300 transition hover:bg-white/10"
              >
                ⇩ Download Resume
              </a>
            </div>
          </Section>
        </div>
      </div>
    </main>
  );
}