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

// ✅ UPDATED DATA
const ABOUT_ROWS = [
  { label: "FULL NAME", value: "Turg'unboyov Muhammad Umar" },
  { label: "AGE", value: "18 Years" },
  { label: "BIRTHDAY", value: "April 12, 2008" },
  { label: "NATIONALITY", value: "Uzbekistan 🇺🇿" },
  { label: "LANGUAGES", value: "Uzbek · English · Russian" },
  { label: "ADDRESS", value: "Andijan, Uzbekistan" },
  { label: "STATUS", value: "Available for freelance", dot: true },
  { label: "EMAIL", value: "shahkweb2008@gmail.com", link: true, href: "mailto:shahkweb2008@gmail.com" },
];

// ✅ UPDATED CONTACT
const CONTACTS = [
  { label: "📱 Phone", value: "+998 50 712 12 08", href: "tel:+998507121208" },
  { label: "✈ Telegram", value: "@byumardev", href: "https://t.me/byumardev" },
  { label: "✉ Email", value: "shahkweb2008@gmail.com", href: "mailto:shahkweb2008@gmail.com" },
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
        .contact-link:hover { opacity: 0.6 !important; }
      `}</style>

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "64px" }}>

          {/* LEFT */}
          <div>
            <SectionEyebrow index="04">about me</SectionEyebrow>

            <h2 style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(1.8rem, 4.5vw, 3rem)",
              color: "#d0d0d0",
              marginBottom: "24px"
            }}>
              Who I am
            </h2>

            {/* ✅ CHOTKI TEXT */}
            <p style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.72rem",
              color: "#555",
              lineHeight: "2.1",
              marginBottom: "16px"
            }}>
              I'm a Front-end Developer with 2+ years of experience from Uzbekistan. I build modern, responsive and clean websites.
            </p>

            <p style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.72rem",
              color: "#555",
              lineHeight: "2.1",
              marginBottom: "40px"
            }}>
              I enjoy working with new people and creating useful web projects. My focus is on UI quality, performance and user experience.
            </p>

            {/* CONTACT */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "#131313" }}>
              {CONTACTS.map((c, i) => (
                <div key={i} className="about-row" style={{ background: "#080808", padding: "12px 18px", display: "flex", gap: "12px" }}>
                  <span style={{ fontSize: "0.56rem", color: "#242424", minWidth: "100px" }}>
                    {c.label}
                  </span>

                  <a href={c.href} className="contact-link" style={{ fontSize: "0.62rem", color: "#e8ff00" }}>
                    {c.value}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "#131313" }}>
            {ABOUT_ROWS.map((row, i) => (
              <div key={i} className="about-row" style={{
                background: "#080808",
                padding: "16px 24px",
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap"
              }}>
                <span style={{ fontSize: "0.5rem", color: "#1e1e1e", textTransform: "uppercase" }}>
                  {row.label}
                </span>

                {row.dot ? (
                  <span style={{ fontSize: "0.6rem", color: "#e8ff00", display: "flex", gap: "6px" }}>
                    <span className="pulse-dot" style={{ width: "5px", height: "5px", background: "#e8ff00", borderRadius: "50%" }} />
                    {row.value}
                  </span>
                ) : row.link ? (
                  <a href={row.href} style={{ fontSize: "0.6rem", color: "#e8ff00" }}>
                    {row.value}
                  </a>
                ) : (
                  <span style={{ fontSize: "0.6rem", color: "#5a5a5a" }}>
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