import { FormattedMessage, useIntl } from "react-intl";
import { portfolio } from "../utils/content";
import { SUPPORTED_LOCALES } from "../i18n/locales";
import { useLocale } from "../i18n/LocaleProvider";

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

export function Hero({ theme, toggleTheme }) {
  const intl = useIntl();
  const { locale, setLocale } = useLocale();
  const { linkedin, github, email } = portfolio.contact;

  return (
    <section className="hero" id="home">
      <div className="hero-frame">
        <div className="glow-orb hero-orb-1" />
        <div className="glow-orb hero-orb-2" />
        <div className="grain" />

        <div className="hero-cube hero-cube-lg" style={{ "--r": "-12deg" }}>
          <Cube size={96} light="#F09155" mid="#D9622C" dark="#B04A1E" />
        </div>
        <div className="hero-cube hero-cube-md" style={{ "--r": "18deg" }}>
          <Cube size={64} light="#F09155" mid="#D9622C" dark="#B04A1E" />
        </div>
        <div className="hero-cube hero-cube-sm" style={{ "--r": "-8deg" }}>
          <Cube size={40} light="#F0A56E" mid="#E86A33" dark="#C4551F" />
        </div>

        <header className="hero-topbar">
          <button
            aria-label={intl.formatMessage({ id: "a11y.menu" })}
            className="hero-menu"
          >
            <span />
            <span />
            <span className="short" />
          </button>
          <a
            className="brand"
            href="#home"
            aria-label={intl.formatMessage({ id: "a11y.home" })}
          >
            Parth<span>Khunteta</span>
          </a>
          <nav
            className="nav"
            aria-label={intl.formatMessage({ id: "nav.primary" })}
          >
            {portfolio.nav.map(({ id, labelId }) => (
              <a key={id} href={`#${id}`} className="nav-link" data-target={id}>
                <FormattedMessage id={labelId} />
              </a>
            ))}
          </nav>
          <div className="hero-controls">
            <label className="locale-switch">
              <span className="sr-only">
                <FormattedMessage id="a11y.language" />
              </span>
              <select
                value={locale}
                onChange={(event) => setLocale(event.target.value)}
                aria-label={intl.formatMessage({ id: "a11y.language" })}
              >
                {SUPPORTED_LOCALES.map(({ code, label }) => (
                  <option key={code} value={code}>
                    {label}
                  </option>
                ))}
              </select>
            </label>
            <button
              type="button"
              className={`theme-toggle${theme === "light" ? " is-on" : ""}`}
              aria-label={intl.formatMessage({
                id: theme === "dark" ? "a11y.themeToLight" : "a11y.themeToDark",
              })}
              onClick={toggleTheme}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <path
                  d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.8 1 .8 1.6v.5h5.4v-.5c0-.6.3-1.2.8-1.6A6 6 0 0 0 12 3Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
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
              <FormattedMessage id="hero.hello" />
            </div>
            <h1 className="hero-anim" style={{ animationDelay: "0.18s" }}>
              <FormattedMessage
                id="hero.title"
                values={{
                  name: (
                    <strong>
                      Parth
                      <br />
                      Khunteta
                    </strong>
                  ),
                }}
              />
            </h1>
            <p
              className="hero-tagline hero-anim"
              style={{ animationDelay: "0.32s" }}
            >
              <FormattedMessage id="hero.tagline" />
            </p>
            <div
              className="hero-actions hero-anim"
              style={{ animationDelay: "0.46s" }}
            >
              <a className="button" href="#contact" data-magnetic="">
                <FormattedMessage id="hero.cta" />
              </a>
              <a className="text-link" href="#experience" data-magnetic="">
                <FormattedMessage id="hero.viewWork" />{" "}
                <span aria-hidden="true">→</span>
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
          <span>
            <FormattedMessage id="hero.scroll" />
          </span>
          <div className="scroll-cue-track">
            <span />
          </div>
        </div>
      </div>
    </section>
  );
}
