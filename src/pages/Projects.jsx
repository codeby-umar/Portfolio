import { useEffect, useRef, useState } from "react";

const PROJECTS = [
  {
    id: 1,
    num: "01",
    year: "2024",
    title: "GreenShop",
    subtitle: "Plant Shop Website",
    desc: "Online plant shopping website with hero banner, categories, product listing, filters and blog-style sections.",
    tags: ["React", "Tailwind", "E-Commerce", "Responsive UI"],
    live: "https://my-shoppings.netlify.app/",
    accent: "from-[#e8ff00]/20 to-transparent",
  },
  {
    id: 2,
    num: "02",
    year: "2024",
    title: "Eco Bozor",
    subtitle: "Eco Marketplace",
    desc: "Eco-friendly marketplace concept built for clean shopping experience, product showcase and modern marketplace layout.",
    tags: ["React", "Marketplace", "Modern UI", "Clean Design"],
    live: "https://eco-bozor.netlify.app/",
    accent: "from-emerald-400/20 to-transparent",
  },
  {
    id: 3,
    num: "03",
    year: "2024",
    title: "Eating Foods",
    subtitle: "Food Delivery Website",
    desc: "Food delivery landing page with product cards, fast browsing flow and mobile-friendly ordering style interface.",
    tags: ["React", "Food Delivery", "Landing Page", "Responsive"],
    live: "https://eating-foods.netlify.app/",
    accent: "from-orange-400/20 to-transparent",
  },
  {
    id: 4,
    num: "04",
    year: "2024",
    title: "Uzum Teskor",
    subtitle: "Marketplace Clone",
    desc: "Large marketplace style website with category navigation, product cards, pricing blocks and shopping flow inspired layout.",
    tags: ["React", "Marketplace", "Catalog UI", "Shopping"],
    live: "https://uzumteskor.netlify.app/",
    accent: "from-fuchsia-400/20 to-transparent",
  },
];

function useVisible(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

function SectionEyebrow({ index, children }) {
  return (
    <div className="mb-3 flex items-center gap-3">
      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#e8ff00]">
        {index}
      </span>
      <span className="h-px w-7 bg-[#232323]" />
      <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#4d4d4d]">
        {children}
      </span>
    </div>
  );
}

function ProjectCard({ project, delay = 0 }) {
  const [ref, visible] = useVisible();

  return (
    <article
      ref={ref}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-[#2a2a2a] hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)] sm:p-6 lg:p-7"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s, border-color 0.35s ease, box-shadow 0.35s ease`,
      }}
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent_35%)] opacity-60" />

      <div className="relative z-10 mb-6 flex items-start justify-between gap-4">
        <div>
          <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.22em] text-[#e8ff00]">
            {project.num}
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#555]">
            {project.year}
          </p>
        </div>

        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[#7a7a7a] transition-all duration-300 hover:border-[#e8ff00]/40 hover:bg-[#e8ff00] hover:text-black"
          aria-label={project.title}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 17L17 7M17 7H8M17 7v9"
            />
          </svg>
        </a>
      </div>

      <div className="relative z-10">
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[#6d6d6d]">
          {project.subtitle}
        </p>

        <h3 className="mb-3 text-[22px] font-extrabold leading-tight text-[#f2f2f2] transition-colors duration-300 group-hover:text-[#e8ff00] sm:text-[24px]">
          {project.title}
        </h3>

        <p className="mb-6 max-w-[60ch] font-mono text-[12px] leading-7 text-[#909090] sm:text-[13px]">
          {project.desc}
        </p>

        <div className="mb-7 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-[#a3a3a3] transition-all duration-300 hover:border-[#e8ff00] hover:text-[#e8ff00]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-xl border border-[#e8ff00] bg-[#e8ff00] px-5 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d9ef00] hover:shadow-[0_12px_30px_rgba(232,255,0,0.18)] sm:w-auto"
          >
            Live Preview
          </a>

          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#555]">
            React Project
          </span>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden border-t border-white/5 bg-[#080808] py-16 sm:py-20 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:52px_52px] opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(232,255,0,0.06),transparent_40%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-5 sm:mb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionEyebrow index="02">selected work</SectionEyebrow>
            <h2 className="max-w-[700px] text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
              Real Projects I Built
            </h2>
            <p className="mt-4 max-w-2xl font-mono text-[12px] leading-7 text-[#8b8b8b] sm:text-[13px]">
              Responsive, clean and modern frontend projects with strong layout,
              product showcase and premium UI feeling.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[#d0d0d0] transition-all duration-300 hover:border-[#e8ff00] hover:text-[#e8ff00] sm:w-auto"
          >
            Let’s Work Together
          </a>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:gap-6">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={index * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}