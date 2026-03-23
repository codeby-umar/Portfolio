import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const NAV_ITEMS = [
  { label: "work", to: "/projects", number: "01" },
  { label: "skills", to: "/skills", number: "02" },
  { label: "about", to: "/about", number: "03" },
  { label: "contact", to: "/contact", number: "04" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoverStyle, setHoverStyle] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const navRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const handleHover = (e) => {
    if (!navRef.current) return;
    const parentRect = navRef.current.getBoundingClientRect();
    const rect = e.currentTarget.getBoundingClientRect();

    setHoverStyle({
      left: rect.left - parentRect.left,
      width: rect.width,
      opacity: 1,
    });
  };

  const resetHover = () => {
    setHoverStyle((prev) => ({ ...prev, opacity: 0 }));
  };

  const navLinkBase =
    "relative z-10 px-4 py-2 text-[11px] uppercase tracking-[0.22em] transition-colors duration-300";
  const desktopText = "font-mono text-[#686868] hover:text-[#e8ff00]";
  const mobileText =
    "group flex items-center justify-between border-b border-white/5 py-5 text-[15px] uppercase tracking-[0.18em] text-[#bcbcbc] transition-all duration-300 hover:pl-2 hover:text-[#e8ff00]";

  return (
    <>
      <header
        className={[
          "fixed left-0 top-0 z-[1000] w-full transition-all duration-300",
          scrolled
            ? "border-b border-white/10 bg-[#080808]/85 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            : "bg-transparent",
        ].join(" ")}
      >
        <div className="mx-auto flex h-[72px] w-full max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <NavLink
            to="/"
            className="group flex items-center gap-1 font-mono text-[18px] font-bold tracking-[0.03em] text-white"
          >
            <span className="text-[#d9d9d9] transition-colors duration-300 group-hover:text-white">
              MuhammadUmar
            </span>
            <span className="text-[#e8ff00]">.</span>
          </NavLink>

          <div
            ref={navRef}
            onMouseLeave={resetHover}
            className="relative hidden items-center gap-1 md:flex"
          >
            <span
              className="pointer-events-none absolute top-1/2 h-[38px] -translate-y-1/2 rounded-full border border-[#e8ff00]/10 bg-[#e8ff00]/5 transition-all duration-300"
              style={{
                left: hoverStyle.left,
                width: hoverStyle.width,
                opacity: hoverStyle.opacity,
              }}
            />

            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onMouseEnter={handleHover}
                className={({ isActive }) =>
                  `${navLinkBase} ${desktopText} ${
                    isActive ? "text-[#e8ff00]" : ""
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <NavLink
              to="/contact"
              className="ml-3 inline-flex items-center justify-center rounded-full border border-[#e8ff00] bg-[#e8ff00] px-5 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d9ef00] hover:shadow-[0_12px_30px_rgba(232,255,0,0.22)]"
            >
              hire me
            </NavLink>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="relative flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] backdrop-blur md:hidden"
          >
            <span className="relative h-5 w-6">
              <span
                className={`absolute left-0 top-0 block h-[2px] w-6 rounded-full bg-white transition-all duration-300 ${
                  menuOpen ? "translate-y-[9px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[9px] block h-[2px] w-6 rounded-full bg-white transition-all duration-300 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[18px] block h-[2px] w-6 rounded-full bg-white transition-all duration-300 ${
                  menuOpen ? "-translate-y-[9px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[999] md:hidden transition-all duration-500 ${
          menuOpen
            ? "pointer-events-auto visible bg-black/60 opacity-100 backdrop-blur-sm"
            : "pointer-events-none invisible opacity-0"
        }`}
      >
        <div
          className={`absolute right-0 top-0 flex h-screen w-full max-w-[420px] flex-col bg-[#090909] px-6 pb-8 pt-24 transition-transform duration-500 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#6f6f6f]">
              Navigation
            </p>
          </div>

          <div className="flex flex-1 flex-col">
            {NAV_ITEMS.map((item, index) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `${mobileText} ${isActive ? "text-[#e8ff00]" : ""}`
                }
                style={{
                  transitionDelay: menuOpen ? `${index * 70}ms` : "0ms",
                }}
              >
                <span>{item.label}</span>
                <span className="font-mono text-[11px] text-[#5a5a5a] transition-colors duration-300 group-hover:text-[#e8ff00]/60">
                  {item.number}
                </span>
              </NavLink>
            ))}
          </div>

          <div className="border-t border-white/10 pt-6">
            <NavLink
              to="/contact"
              className="inline-flex w-full items-center justify-center rounded-full border border-[#e8ff00] bg-[#e8ff00] px-5 py-4 font-mono text-[12px] font-bold uppercase tracking-[0.18em] text-black transition-all duration-300 hover:scale-[1.01] hover:bg-[#d9ef00]"
            >
              hire me
            </NavLink>

            <p className="mt-4 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-[#5e5e5e]">
              Muhammad Umar Portfolio
            </p>
          </div>
        </div>
      </div>
    </>
  );
}