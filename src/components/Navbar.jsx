import React, { useState, useEffect, useRef } from "react";

const NAV_ITEMS = [
  { label: "work", href: "#work" },
  { label: "skills", href: "#skills" },
  { label: "about", href: "#about" },
  { label: "contact", href: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [hoverPos, setHoverPos] = useState({ x: 0, width: 0, opacity: 0 });
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = (e, label) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const navRect = navRef.current?.getBoundingClientRect();
    setActiveItem(label);
    setHoverPos({
      x: rect.left - (navRect?.left || 0),
      width: rect.width,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setActiveItem(null);
    setHoverPos((p) => ({ ...p, opacity: 0 }));
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');

        .st-nav-link {
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          text-transform: lowercase;
          color: #2e2e2e;
          text-decoration: none;
          padding: 6px 12px;
          position: relative;
          transition: color 0.2s;
          z-index: 1;
        }
        .st-nav-link:hover { color: #e8ff00; }

        .st-mobile-link {
          font-family: 'Space Mono', monospace;
          font-size: 0.7rem;
          letter-spacing: 0.18em;
          text-transform: lowercase;
          color: #2a2a2a;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 32px;
          border-bottom: 1px solid #0f0f0f;
          transition: color 0.2s, background 0.2s;
        }
        .st-mobile-link:hover {
          color: #e8ff00;
          background: rgba(232,255,0,0.02);
        }
        .st-mobile-link .idx {
          font-size: 0.45rem;
          color: #1a1a1a;
          letter-spacing: 0.1em;
          transition: color 0.2s;
        }
        .st-mobile-link:hover .idx { color: rgba(232,255,0,0.4); }

        .st-hamburger { display: flex; }
        .st-desktop-nav { display: none; }

        @media (min-width: 768px) {
          .st-hamburger { display: none !important; }
          .st-desktop-nav { display: flex; }
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-4px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .menu-item-enter {
          animation: slideDown 0.25s ease forwards;
        }
      `}</style>

      {/* Navbar */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "background 0.3s, border-color 0.3s, box-shadow 0.3s",
          background: scrolled ? "rgba(8,8,8,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: `1px solid ${scrolled ? "#161616" : "transparent"}`,
          boxShadow: scrolled ? "0 1px 40px rgba(0,0,0,0.5)" : "none",
          fontFamily: "'Space Mono', monospace",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "0 32px",
            height: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <a
            href="#"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "1rem",
              fontWeight: "700",
              color: "#555",
              letterSpacing: "0.05em",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "1px",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#888")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
          >
            ST<span style={{ color: "#e8ff00" }}>.</span>
          </a>

          {/* Desktop nav */}
          <div
            ref={navRef}
            className="st-desktop-nav"
            style={{
              alignItems: "center",
              gap: "4px",
              position: "relative",
            }}
            onMouseLeave={handleMouseLeave}
          >
            {/* Sliding highlight */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: hoverPos.x,
                width: hoverPos.width,
                height: "28px",
                background: "rgba(232,255,0,0.06)",
                border: "1px solid rgba(232,255,0,0.1)",
                borderRadius: "2px",
                transition: "left 0.2s cubic-bezier(.4,0,.2,1), width 0.2s cubic-bezier(.4,0,.2,1), opacity 0.15s",
                opacity: hoverPos.opacity,
                pointerEvents: "none",
              }}
            />

            {NAV_ITEMS.slice(0, 3).map((n) => (
              <a
                key={n.label}
                href={n.href}
                className="st-nav-link"
                onMouseEnter={(e) => handleMouseEnter(e, n.label)}
              >
                {n.label}
              </a>
            ))}

            <a
              href="#contact"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.6rem",
                fontWeight: "700",
                letterSpacing: "0.15em",
                textTransform: "lowercase",
                background: "#e8ff00",
                color: "#080808",
                padding: "8px 18px",
                borderRadius: "2px",
                textDecoration: "none",
                marginLeft: "12px",
                transition: "background 0.2s, transform 0.15s, box-shadow 0.2s",
                boxShadow: "0 0 0 rgba(232,255,0,0)",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#d4eb00";
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(232,255,0,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#e8ff00";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 0 0 rgba(232,255,0,0)";
              }}
            >
              hire me
            </a>
          </div>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="st-hamburger"
            style={{
              background: "transparent",
              border: "1px solid #1a1a1a",
              borderRadius: "2px",
              padding: "8px 10px",
              cursor: "pointer",
              flexDirection: "column",
              gap: "5px",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#2a2a2a")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#1a1a1a")}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: "18px",
                  height: "1px",
                  background: menuOpen ? "#e8ff00" : "#444",
                  transformOrigin: "center",
                  transition: "transform 0.3s, opacity 0.3s, background 0.2s",
                  transform:
                    menuOpen
                      ? i === 0
                        ? "rotate(45deg) translateY(6px)"
                        : i === 2
                        ? "rotate(-45deg) translateY(-6px)"
                        : "scaleX(0)"
                      : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        style={{
          position: "fixed",
          top: "64px",
          left: 0,
          right: 0,
          zIndex: 99,
          background: "rgba(8,8,8,0.98)",
          backdropFilter: "blur(20px)",
          borderBottom: menuOpen ? "1px solid #141414" : "none",
          maxHeight: menuOpen ? "360px" : "0",
          overflow: "hidden",
          transition: "max-height 0.35s cubic-bezier(.4,0,.2,1), border-color 0.2s",
        }}
      >
        <div style={{ padding: "8px 0" }}>
          {NAV_ITEMS.map((n, i) => (
            <a
              key={n.label}
              href={n.href}
              className="st-mobile-link menu-item-enter"
              style={{ animationDelay: `${i * 0.05}s` }}
              onClick={() => setMenuOpen(false)}
            >
              <span>{n.label}</span>
              <span className="idx">0{i + 1}</span>
            </a>
          ))}

          <div style={{ padding: "16px 32px 20px" }}>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.62rem",
                fontWeight: "700",
                letterSpacing: "0.18em",
                textTransform: "lowercase",
                textAlign: "center",
                background: "#e8ff00",
                color: "#080808",
                padding: "12px",
                borderRadius: "2px",
                textDecoration: "none",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#d4eb00")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#e8ff00")}
            >
              hire me
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;