import { portfolio } from "../utils/content";

function Cube({ size, light, mid, dark, style }) {
  const s = size;
  return (
    <div
      className="cube"
      style={{ width: s, height: s * 1.15, ...style }}
      aria-hidden="true"
    >
      <div
        className="cube-face cube-top"
        style={{ width: s, height: s * 0.58, background: light }}
      />
      <div
        className="cube-face cube-left"
        style={{
          top: s * 0.29,
          width: s * 0.5,
          height: s * 0.86,
          background: dark,
        }}
      />
      <div
        className="cube-face cube-right"
        style={{
          top: s * 0.29,
          left: s * 0.5,
          width: s * 0.5,
          height: s * 0.86,
          background: mid,
        }}
      />
    </div>
  );
}

export function Hero() {
  const { linkedin, github, email } = portfolio.contact;

  return (
    <section className="hero" id="home">
      <div className="hero-frame">
        <div className="glow-orb hero-orb-1" />
        <div className="glow-orb hero-orb-2" />
        <div className="grain" />

        <div
          className="hero-cube hero-cube-lg"
          style={{ "--r": "-12deg" }}
        >
          <Cube size={96} light="#F09155" mid="#D9622C" dark="#B04A1E" />
        </div>
        <div
          className="hero-cube hero-cube-md"
          style={{ "--r": "18deg" }}
        >
          <Cube size={64} light="#F09155" mid="#D9622C" dark="#B04A1E" />
        </div>
        <div
          className="hero-cube hero-cube-sm"
          style={{ "--r": "-8deg" }}
        >
          <Cube size={40} light="#F0A56E" mid="#E86A33" dark="#C4551F" />
        </div>

        <header className="hero-topbar">
          <button aria-label="Menu" className="hero-menu">
            <span />
            <span />
            <span className="short" />
          </button>
          <a className="brand" href="#home" aria-label="Parth Khunteta home">
            Parth<span>Khunteta</span>
          </a>
          <nav className="nav" aria-label="Primary">
            {portfolio.nav.map(([label, id]) => (
              <a key={id} href={`#${id}`} className="nav-link" data-target={id}>
                {label}
              </a>
            ))}
          </nav>
        </header>

        <div className="hero-body">
          <div className="hero-social">
            <a href={linkedin.href} target="_blank" rel="noreferrer">
              in
            </a>
            <a href={github.href} target="_blank" rel="noreferrer">
              GH
            </a>
            <a href={`mailto:${email}`}>@</a>
          </div>

          <div className="hero-copy">
            <div className="eyebrow hero-anim" style={{ animationDelay: "0.05s" }}>
              <span />
              Hello
            </div>
            <h1 className="hero-anim" style={{ animationDelay: "0.18s" }}>
              I'm <strong>Parth
              <br />
              Khunteta</strong>
            </h1>
            <p className="hero-tagline hero-anim" style={{ animationDelay: "0.32s" }}>
              Senior Software Engineer — full-stack across React &amp;
              TypeScript, Node.js, Python and Java. Based in Hyderabad, India.
            </p>
            <div className="hero-actions hero-anim" style={{ animationDelay: "0.46s" }}>
              <a className="button" href="#contact" data-magnetic="">
                Get in touch
              </a>
              <a className="text-link" href="#experience" data-magnetic="">
                View work <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div className="hero-photo">
            <div className="hero-photo-inner">
              <div className="hero-photo-glow" />
              <img
                className="hero-photo-img"
                src="/hero-photo.png"
                alt="Parth Khunteta"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                  event.currentTarget.parentElement.classList.add(
                    "hero-photo-empty",
                  );
                }}
              />
            </div>
          </div>
        </div>

        <div className="scroll-cue">
          <span>Scroll down</span>
          <div className="scroll-cue-track">
            <span />
          </div>
        </div>
      </div>
    </section>
  );
}
