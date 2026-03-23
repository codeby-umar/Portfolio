import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const FEATURED_PROJECTS = [
  {
    num: "01",
    year: "2024",
    title: "E-Commerce UI",
    desc: "Modern e-commerce frontend with smooth animations, responsive layout and optimized performance across all devices.",
    tags: ["React", "Tailwind", "Framer Motion", "Next.js"],
    href: "#",
  },
  {
    num: "02",
    year: "2024",
    title: "Portfolio Template",
    desc: "Minimalist developer portfolio template used by 50+ developers. Clean design with dark/light mode support.",
    tags: ["HTML", "CSS", "JavaScript", "GSAP"],
    href: "#",
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

function ProjectCard({ project, delay = 0 }) {
  const [ref, visible] = useVisible();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative overflow-hidden border border-[#151515] bg-[#0b0b0b] p-5 sm:p-6 transition-all duration-300 hover:border-[#2a2a2a]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s, border-color 0.3s ease`,
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_30%_0%,rgba(232,255,0,0.05)_0%,transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10 mb-5 flex items-start justify-between gap-3">
        <div>
          <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[#e8ff00]">
            {project.num}
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#3a3a3a]">
            {project.year}
          </p>
        </div>

        <a
          href={project.href}
          aria-label={project.title}
          className="inline-flex text-[#2a2a2a] transition-all duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] group-hover:text-[#e8ff00]"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 17L17 7M17 7H7M17 7v10"
            />
          </svg>
        </a>
      </div>

      <h3 className="relative z-10 mb-3 font-sans text-[20px] font-extrabold leading-[1.2] text-[#d6d6d6] transition-colors duration-300 group-hover:text-[#e8ff00]">
        {project.title}
      </h3>

      <p className="relative z-10 mb-5 font-mono text-[12px] leading-8 text-[#7e7e7e]">
        {project.desc}
      </p>

      <div className="relative z-10 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded border border-[#242424] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-[#8a8a8a] transition-colors duration-300 hover:border-[#e8ff00] hover:text-[#e8ff00]"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 120);
    return () => clearTimeout(timer);
  }, []);

  const fadeUp = (delay = 0) => ({
    opacity: heroVisible ? 1 : 0,
    transform: heroVisible ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s`,
  });

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#080808] text-[#d8d8d8]">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:55px_55px]" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-5%,rgba(232,255,0,0.06)_0%,transparent_65%)]" />

      <div className="relative z-10">
        <section className="relative flex min-h-screen items-center overflow-hidden px-0 py-24 sm:py-24 lg:py-20">
          <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-6">
            <div
              className="mb-8 inline-flex items-center gap-2 rounded border border-[#1a1a1a] bg-white/[0.01] px-3 py-2"
              style={fadeUp(0.1)}
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#e8ff00]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#7d7d7d]">
                Available for freelance — 2025
              </span>
            </div>

            <h1
              className="break-words font-sans text-[42px] font-black leading-[0.9] tracking-[-0.04em] text-[#f1f1f1] sm:text-[64px] md:text-[90px] lg:text-[120px]"
              style={fadeUp(0.25)}
            >
              MUHAMMAD
            </h1>

            <h1
              className="mb-8 font-sans text-[42px] font-black leading-[0.95] tracking-[-0.04em] text-transparent [text-stroke:1px_#2b2b2b] [-webkit-text-stroke:1px_#2b2b2b] sm:mb-10 sm:text-[64px] md:text-[90px] lg:mb-10 lg:text-[120px]"
              style={fadeUp(0.4)}
            >
              UMAR
            </h1>

            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div style={fadeUp(0.55)}>
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-[1px] w-8 bg-[#e8ff00]" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#e8ff00]">
                    Front-end Developer
                  </span>
                </div>

                <p className="max-w-[480px] font-mono text-[12px] leading-8 text-[#8d8d8d] sm:text-[13px]">
                  Freelancer with <strong className="text-[#efefef]">2+ years</strong> of
                  experience. I build responsive, modern and clean web
                  interfaces with strong focus on user experience and
                  performance. 🇺🇿
                </p>
              </div>

              <div
                className="flex w-full max-w-full flex-col gap-3 sm:max-w-[290px]"
                style={fadeUp(0.7)}
              >
                <NavLink
                  to="/projects"
                  className="w-full rounded border border-[#e8ff00] bg-[#e8ff00] px-5 py-4 text-center font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-[#080808] transition hover:bg-[#d8ec00] hover:shadow-[0_8px_28px_rgba(232,255,0,0.18)]"
                >
                  View Work
                </NavLink>

                <NavLink
                  to="/contact"
                  className="w-full rounded border border-[#242424] bg-transparent px-5 py-4 text-center font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-[#b3b3b3] transition hover:border-[#e8ff00] hover:text-[#e8ff00]"
                >
                  Get In Touch
                </NavLink>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute right-0 top-1/2 z-0 hidden -translate-y-1/2 select-none font-sans text-[10rem] font-black leading-none text-transparent [-webkit-text-stroke:1px_#141414] lg:block">
            MU
          </div>

          <div
            className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
            style={fadeUp(1)}
          >
            <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-[#2a2a2a]">
              Scroll
            </span>
            <div className="relative h-10 w-px overflow-hidden bg-[#1a1a1a]">
              <div className="absolute inset-0 origin-top animate-[scrollLine_2s_ease-in-out_infinite] bg-[#e8ff00]" />
            </div>
          </div>
        </section>

        <section className="border-t border-[#141414] px-0 py-16 sm:py-20 lg:py-24">
          <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-6">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4 sm:mb-10">
              <div>
                <div className="mb-2 flex items-center gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#e8ff00]">
                    02
                  </span>
                  <span className="h-px w-6 bg-[#232323]" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#4a4a4a]">
                    Featured Work
                  </span>
                </div>

                <h2 className="font-sans text-[32px] font-black text-[#e2e2e2] sm:text-[40px] md:text-[48px]">
                  Projects
                </h2>
              </div>

              <NavLink
                to="/projects"
                className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#5b5b5b] transition hover:text-[#e8ff00]"
              >
                All Projects →
              </NavLink>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              {FEATURED_PROJECTS.map((project, index) => (
                <ProjectCard
                  key={project.num}
                  project={project}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </section>
      </div>

      <style>
        {`
          @keyframes scrollLine {
            0% {
              transform: scaleY(0);
              transform-origin: top;
            }
            50% {
              transform: scaleY(1);
              transform-origin: top;
            }
            51% {
              transform-origin: bottom;
            }
            100% {
              transform: scaleY(0);
              transform-origin: bottom;
            }
          }
        `}
      </style>
    </div>
  );
}