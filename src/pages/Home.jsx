import { useState, useEffect, useRef } from "react";

const STATS = [
  { value: "2+", label: "years exp" },
  { value: "17", label: "years old" },
  { value: "∞", label: "lines of code", accent: true },
  { value: "100%", label: "passion driven" },
];

const PROJECTS = [
  {
    num: "01 / 2024",
    title: "E-Commerce UI",
    desc: "Modern e-commerce frontend with smooth animations, responsive layout and optimized performance across all devices.",
    tags: ["React", "Tailwind", "Framer Motion", "Next.js"],
  },
  {
    num: "02 / 2024",
    title: "Portfolio Template",
    desc: "Minimalist developer portfolio template used by 50+ developers. Clean design with dark/light mode support.",
    tags: ["HTML", "CSS", "JavaScript", "GSAP"],
  },
  {
    num: "03 / 2023",
    title: "Dashboard UI Kit",
    desc: "Admin dashboard component library with 40+ reusable components. Fully responsive and accessible.",
    tags: ["React", "TypeScript", "Recharts", "Tailwind"],
  },
  {
    num: "04 / 2023",
    title: "Landing Page Pack",
    desc: "Collection of high-converting landing pages for startups. Pixel-perfect design to code conversion.",
    tags: ["HTML", "CSS", "JavaScript", "Figma"],
  },
];

const SKILLS = [
  { icon: "</>", title: "HTML & CSS", desc: "Semantic HTML5, modern CSS3, animations, flexbox, grid. Pixel-perfect layouts from any design." },
  { icon: "⚛", title: "React & Next.js", desc: "Component-based UIs, hooks, state management, SSR/SSG with Next.js for production-ready apps." },
  { icon: "◈", title: "JavaScript", desc: "ES6+, async/await, DOM manipulation, REST APIs integration. Clean and maintainable code." },
  { icon: "⬡", title: "Tailwind CSS", desc: "Rapid UI development with utility-first CSS. Custom design systems and responsive layouts." },
  { icon: "◎", title: "Figma & Design", desc: "Design to code conversion, UI/UX principles, responsive design, prototyping and wireframing." },
  { icon: "⟳", title: "Git & Tools", desc: "Git, GitHub, VS Code, npm/yarn. Version control, collaboration and modern dev workflow." },
];

const ABOUT_ROWS = [
  { label: "FULL NAME", value: "Turg'unboyov Shaxriyor" },
  { label: "AGE", value: "17 Years" },
  { label: "BIRTHDAY", value: "April 12, 2008" },
  { label: "NATIONALITY", value: "Uzbekistan 🇺🇿" },
  { label: "LANGUAGES", value: "Uzbek · English · Russian" },
  { label: "ADDRESS", value: "Andijan, Street 45" },
  { label: "STATUS", value: "Available for freelance", dot: true },
  { label: "EMAIL", value: "shahkweb2008@gmail.com", link: true, href: "mailto:shahkweb2008@gmail.com" },
];





// ── Helpers ──────────────────────────────────────────────────────────────────
function useVisible(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
      },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

// ── Components ────────────────────────────────────────────────────────────────
function Tag({ children }) {
  return (
    <span className="font-mono text-[0.58rem] tracking-widest border border-[#222] text-[#444] px-2.5 py-0.5 rounded-sm transition-all duration-200 hover:border-[#e8ff00] hover:text-[#e8ff00] cursor-default">
      {children}
    </span>
  );
}

function SectionLabel({ children }) {
  return (
    <div className="font-mono text-[0.58rem] tracking-[0.25em] uppercase text-[#2e2e2e] mb-2.5">
      {children}
    </div>
  );
}

function NavLink({ href, children, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="font-mono text-[0.72rem] text-[#4a4a4a] hover:text-[#e8ff00] transition-colors duration-200 tracking-widest no-underline"
    >
      {children}
    </a>
  );
}

function ProjectCard({ project, delay = 0 }) {
  const [ref, visible] = useVisible();
  return (
    <div
      ref={ref}
      className="group border border-[#161616] hover:border-[#2a2a2a] bg-[#0c0c0c] relative overflow-hidden p-7 cursor-default"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.55s ease ${delay}s, transform 0.55s ease ${delay}s, border-color 0.3s`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(232,255,0,0.025)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="flex justify-between items-start mb-5">
        <span className="font-mono text-[0.62rem] text-[#e8ff00] tracking-widest">
          {project.num}
        </span>
        <svg
          className="w-3.5 h-3.5 text-[#333] group-hover:text-[#e8ff00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
        </svg>
      </div>

      <h3 className="text-lg font-bold mb-2.5 text-[#d8d8d8] group-hover:text-[#e8ff00] transition-colors duration-200">
        {project.title}
      </h3>
      <p className="text-[#444] text-[0.75rem] font-mono leading-relaxed mb-5">
        {project.desc}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((t) => <Tag key={t}>{t}</Tag>)}
      </div>
    </div>
  );
}

function SkillCard({ skill, delay = 0 }) {
  const [ref, visible] = useVisible();
  return (
    <div
      ref={ref}
      className="group border border-[#161616] hover:border-[#e8ff00] bg-[#0c0c0c] hover:bg-[#0e0e09] p-7 cursor-default transition-colors duration-300 hover:-translate-y-1"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.55s ease ${delay}s, transform 0.3s ease, border-color 0.3s, background 0.3s`,
      }}
    >
      <div className="font-mono text-[1.3rem] font-bold text-[#333] group-hover:text-[#e8ff00] mb-3.5 transition-colors duration-300">
        {skill.icon}
      </div>
      <h3 className="font-bold text-[#d8d8d8] mb-2 text-[0.95rem]">
        {skill.title}
      </h3>
      <p className="text-[#444] text-[0.75rem] font-mono leading-relaxed">
        {skill.desc}
      </p>
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function Portfolio() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
 

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 120);
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => { clearTimeout(t); window.removeEventListener("scroll", onScroll); };
  }, []);

  const fade = (delay = 0) => ({
    opacity: heroVisible ? 1 : 0,
    transform: heroVisible ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s`,
  });

  return (
    <div className="bg-[#080808] text-[#d8d8d8] min-h-screen font-[Syne,sans-serif] overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;500;700;800;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        a { text-decoration: none; color: inherit; }
        body { overflow-x: hidden; }

        @keyframes pulse-dot {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
        }
        @keyframes scrollLine {
          0%   { transform: scaleY(0); transform-origin: top; }
          50%  { transform: scaleY(1); transform-origin: top; }
          51%  { transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
        .scroll-line { animation: scrollLine 2s ease-in-out infinite; }
        .pulse-dot   { animation: pulse-dot 2s ease infinite; }
      `}</style>

      {/* Grid Background */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)`,
          backgroundSize: "55px 55px",
        }}
      />
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% -5%, rgba(232,255,0,0.05) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10">

        {/* ── NAV ── */}
      

        {/* ── HERO ── */}
        <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16">
          <div className="max-w-[1200px] mx-auto px-5 sm:px-8 w-full">
            <div className="relative z-10">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 border border-[#1a1a1a] px-3.5 py-1.5 mb-10 rounded-sm" style={fade(0.15)}>
                <span className="w-1.5 h-1.5 bg-[#e8ff00] rounded-full inline-block pulse-dot" />
                <span className="font-mono text-[0.62rem] text-[#444] tracking-[0.2em] uppercase">
                  Available for freelance — 2025
                </span>
              </div>

              <h1
                className="text-[clamp(2.8rem,10vw,8.5rem)] font-black leading-[0.88] text-[#d8d8d8] tracking-[-0.03em] mb-1"
                style={fade(0.3)}
              >
                SHAXRIYOR
              </h1>
              <h1
                className="text-[clamp(2.8rem,10vw,8.5rem)] font-black leading-[0.88] tracking-[-0.03em] mb-12"
                style={{ color: "transparent", WebkitTextStroke: "1px #252525", ...fade(0.45) }}
              >
                TURG'UNBOYOV
              </h1>

              <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-end justify-between gap-8">
                <div style={fade(0.6)}>
                  <div className="flex items-center gap-2.5 mb-3.5">
                    <span className="h-px w-7 bg-[#e8ff00] inline-block" />
                    <span className="font-mono text-[0.65rem] text-[#e8ff00] tracking-[0.2em] uppercase">
                      Front-end Developer
                    </span>
                  </div>
                  <p className="max-w-[440px] text-[#444] text-[0.78rem] font-mono leading-8">
                    Freelancer with <span className="text-[#d8d8d8]">2+ years</span> of experience.
                    I code and create web elements for amazing people around the world. 🇺🇿
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto" style={fade(0.75)}>
                  <a
                    href="#work"
                    className="bg-[#e8ff00] text-[#080808] font-mono text-[0.72rem] tracking-widest px-8 py-3.5 font-bold rounded-sm text-center hover:bg-[#d4eb00] transition-colors duration-200"
                  >
                    view work
                  </a>
                  <a
                    href="#contact"
                    className="border border-[#1e1e1e] text-[#444] font-mono text-[0.72rem] tracking-widest px-8 py-3.5 rounded-sm text-center hover:border-[#e8ff00] hover:text-[#e8ff00] transition-all duration-200"
                  >
                    get in touch
                  </a>
                </div>
              </div>
            </div>

            {/* Big watermark */}
            <div
              className="absolute right-[-1rem] top-1/2 -translate-y-1/2 font-mono leading-[0.85] select-none z-0 pointer-events-none"
              style={{
                fontSize: "clamp(5rem,15vw,15rem)",
                color: "transparent",
                WebkitTextStroke: "1px #141414",
              }}
            >
              ST
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5" style={fade(1.1)}>
            <span className="font-mono text-[0.55rem] text-[#2a2a2a] tracking-[0.25em] uppercase">scroll</span>
            <div className="w-px h-11 bg-[#1e1e1e] overflow-hidden relative">
              <div className="scroll-line absolute inset-0 bg-[#e8ff00]" />
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <div className="border-t border-b border-[#141414]">
          <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4">
              {STATS.map((s, i) => (
                <div
                  key={i}
                  className={`py-9 px-4 text-center ${i < STATS.length - 1 ? "border-r border-[#141414]" : ""}`}
                >
                  <div className={`font-mono text-[2rem] font-bold mb-1.5 ${s.accent ? "text-[#e8ff00]" : "text-[#d8d8d8]"}`}>
                    {s.value}
                  </div>
                  <div className="font-mono text-[0.55rem] tracking-[0.22em] uppercase text-[#2a2a2a]">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── PROJECTS ── */}
        <section id="work" className="py-28 px-5 sm:px-8">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
              <div>
                <SectionLabel>02 / selected work</SectionLabel>
                <h2 className="text-[clamp(1.8rem,4.5vw,3rem)] font-black text-[#d8d8d8]">Projects</h2>
              </div>
              <NavLink href="#">all projects →</NavLink>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#161616]">
              {PROJECTS.map((p, i) => <ProjectCard key={i} project={p} delay={i * 0.08} />)}
            </div>
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section id="skills" className="py-28 px-5 sm:px-8 border-t border-[#141414]">
          <div className="max-w-[1200px] mx-auto">
            <div className="mb-16">
              <SectionLabel>03 / capabilities</SectionLabel>
              <h2 className="text-[clamp(1.8rem,4.5vw,3rem)] font-black text-[#d8d8d8]">Stack</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#161616]">
              {SKILLS.map((s, i) => <SkillCard key={i} skill={s} delay={i * 0.07} />)}
            </div>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section id="about" className="py-28 px-5 sm:px-8 border-t border-[#141414]">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

              <div>
                <SectionLabel>04 / about me</SectionLabel>
                <h2 className="text-[clamp(1.8rem,4.5vw,3rem)] font-black text-[#d8d8d8] mb-7 mt-1">
                  Who I am
                </h2>
                <p className="text-[#404040] text-[0.78rem] font-mono leading-8 mb-5">
                  I'm a Freelancer Front-end Developer with over 2 years of experience.
                  I like working with new people — new people are new experiences.
                </p>
                <p className="text-[#404040] text-[0.78rem] font-mono leading-8 mb-8">
                  I code and create web elements for amazing people around the world.
                  Currently focused on building performant, accessible and visually stunning interfaces.
                </p>
                <div className="flex flex-col gap-2.5">
                  {[
                    { label: "📱 Phone", value: "+998 93 798 12 08", href: "tel:+998937981208" },
                    { label: "✈ Telegram", value: "@Shahriyor_frontend", href: "https://t.me/Shahriyor_frontend" },
                    { label: "✉ Email", value: "shahkweb2008@gmail.com", href: "mailto:shahkweb2008@gmail.com" },
                    { label: "💬 Skype", value: "Shaxriyor.T" },
                  ].map((c, i) => (
                    <div key={i} className="flex items-center gap-2.5 flex-wrap">
                      <span className="font-mono text-[0.62rem] text-[#2a2a2a] min-w-[95px]">{c.label}</span>
                      {c.href ? (
                        <a href={c.href} className="font-mono text-[0.65rem] text-[#e8ff00] hover:opacity-60 transition-opacity duration-200 break-all">
                          {c.value}
                        </a>
                      ) : (
                        <span className="font-mono text-[0.65rem] text-[#555]">{c.value}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Info table */}
              <div className="flex flex-col gap-px bg-[#141414]">
                {ABOUT_ROWS.map((row, i) => (
                  <div key={i} className="bg-[#080808] px-6 py-4 flex items-center justify-between gap-4 flex-wrap">
                    <span className="font-mono text-[0.58rem] tracking-[0.18em] text-[#272727] whitespace-nowrap">
                      {row.label}
                    </span>
                    {row.dot ? (
                      <span className="font-mono text-[0.62rem] text-[#e8ff00] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-[#e8ff00] rounded-full inline-block pulse-dot" />
                        {row.value}
                      </span>
                    ) : row.link ? (
                      <a href={row.href || "#"} className="font-mono text-[0.62rem] text-[#e8ff00] underline underline-offset-4 break-all">
                        {row.value}
                      </a>
                    ) : (
                      <span className="font-mono text-[0.62rem] text-[#888] text-right break-all">{row.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="py-28 px-5 sm:px-8 border-t border-[#141414]">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <SectionLabel>05 / contact</SectionLabel>
                <h2 className="text-[clamp(2rem,6vw,4.5rem)] font-black text-[#d8d8d8] leading-none mt-2">Let's work</h2>
                <h2
                  className="text-[clamp(2rem,6vw,4.5rem)] font-black leading-none"
                  style={{ color: "transparent", WebkitTextStroke: "1px #222" }}
                >
                  together
                </h2>
                <h2 className="text-[clamp(2rem,6vw,4.5rem)] font-black text-[#e8ff00] leading-none mb-8">now.</h2>
                <p className="text-[#3a3a3a] font-mono text-[0.78rem] leading-8 max-w-sm">
                  Have a project in mind? Need a landing page, web app or UI redesign?
                  I'm always open to new opportunities and collaborations.
                </p>
              </div>

              <div className="flex flex-col justify-end gap-3">
                {[
                  { label: "Send an email", value: "shahkweb2008@gmail.com", href: "mailto:shahkweb2008@gmail.com", primary: true },
                  { label: "Telegram", value: "@Shahriyor_frontend", href: "https://t.me/Shahriyor_frontend" },
                  { label: "Phone", value: "+998 93 798 12 08", href: "tel:+998937981208" },
                  { label: "Skype", value: "Shaxriyor.T", href: "#" },
                ].map((c, i) => (
                  <a
                    key={i}
                    href={c.href}
                    className={`flex items-center justify-between px-5 py-4 border rounded-sm transition-all duration-200 hover:border-[#e8ff00] hover:bg-[rgba(232,255,0,0.06)] group ${
                      c.primary ? "border-[#e8ff00] bg-[rgba(232,255,0,0.04)]" : "border-[#141414] bg-[#0a0a0a]"
                    }`}
                  >
                    <div className="min-w-0">
                      <div className="font-mono text-[0.55rem] text-[#2a2a2a] tracking-[0.15em] uppercase mb-1">
                        {c.label}
                      </div>
                      <div className={`font-mono text-[0.72rem] break-all ${c.primary ? "text-[#e8ff00]" : "text-[#555]"}`}>
                        {c.value}
                      </div>
                    </div>
                    <span className="text-[#2a2a2a] text-sm group-hover:text-[#e8ff00] transition-colors duration-200 ml-4 flex-shrink-0">→</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
       

      </div>
    </div>
  );
}