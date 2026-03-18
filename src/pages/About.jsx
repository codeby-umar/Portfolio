import React from "react";

function SectionEyebrow({ index, children }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
      <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", color: "#e8ff00", letterSpacing: "0.2em" }}>
        {index}
      </span>
      <span style={{ height: "1px", width: "24px", background: "#1e1e1e" }} />
      <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", color: "#222", letterSpacing: "0.25em", textTransform: "uppercase" }}>
        {children}
      </span>
    </div>
  );
}

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

const CONTACTS = [
  { label: "📱 Phone",    value: "+998 93 798 12 08",      href: "tel:+998937981208" },
  { label: "✈ Telegram", value: "@Shahriyor_frontend",     href: "https://t.me/Shahriyor_frontend" },
  { label: "✉ Email",    value: "shahkweb2008@gmail.com",  href: "mailto:shahkweb2008@gmail.com" },
  { label: "💬 Skype",   value: "Shaxriyor.T" },
];

function About() {
  return (
    <section id="about" style={{ padding: "96px 32px", borderTop: "1px solid #141414" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@700;800;900&display=swap');
        @keyframes pulse-dot {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.6); opacity: 0.4; }
        }
        .pulse-dot { animation: pulse-dot 2s ease infinite; }
        .about-row { transition: background 0.2s; }
        .about-row:hover { background: #0e0e0e !important; }
        .contact-link { transition: opacity 0.2s, color 0.2s !important; }
        .contact-link:hover { opacity: 0.6 !important; }
      `}</style>

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "64px", alignItems: "start" }}>

          {/* ── Left col ── */}
          <div>
            <SectionEyebrow index="04">about me</SectionEyebrow>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 900, fontSize: "clamp(1.8rem, 4.5vw, 3rem)", color: "#d0d0d0", marginBottom: "24px", marginTop: "4px" }}>
              Who I am
            </h2>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.72rem", color: "#363636", lineHeight: "2.1", marginBottom: "16px" }}>
              I'm a Freelancer Front-end Developer with over 2 years of experience. I like working with new people — new people are new experiences.
            </p>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.72rem", color: "#363636", lineHeight: "2.1", marginBottom: "40px" }}>
              I code and create web elements for amazing people around the world. Currently focused on building performant, accessible and visually stunning interfaces.
            </p>

            {/* Contact links */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "#131313" }}>
              {CONTACTS.map((c, i) => (
                <div key={i} className="about-row" style={{ background: "#080808", padding: "12px 18px", display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.56rem", color: "#242424", minWidth: "100px", letterSpacing: "0.05em" }}>
                    {c.label}
                  </span>
                  {c.href
                    ? <a href={c.href} className="contact-link" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.62rem", color: "#e8ff00", wordBreak: "break-all" }}>
                        {c.value}
                      </a>
                    : <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.62rem", color: "#3a3a3a" }}>
                        {c.value}
                      </span>
                  }
                </div>
              ))}
            </div>
          </div>

    
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "#131313" }}>
            {ABOUT_ROWS.map((row, i) => (
              <div key={i} className="about-row" style={{ background: "#080808", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", flexWrap: "wrap" }}>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.2em", color: "#1e1e1e", whiteSpace: "nowrap", textTransform: "uppercase" }}>
                  {row.label}
                </span>

                {row.dot ? (
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: "#e8ff00", display: "flex", alignItems: "center", gap: "7px" }}>
                    <span className="pulse-dot" style={{ width: "5px", height: "5px", background: "#e8ff00", borderRadius: "50%", display: "inline-block", flexShrink: 0 }} />
                    {row.value}
                  </span>
                ) : row.link ? (
                  <a href={row.href} className="contact-link" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: "#e8ff00", textDecoration: "underline", textUnderlineOffset: "4px", wordBreak: "break-all" }}>
                    {row.value}
                  </a>
                ) : (
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: "#5a5a5a", textAlign: "right", wordBreak: "break-all" }}>
                    {row.value}
                  </span>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;