import { portfolio } from "../utils/content";

function MarqueeSet() {
  return (
    <>
      {portfolio.marquee.map((item, index) => (
        <span className="marquee-item" key={`${item}-${index}`}>
          <span className="marquee-text">{item}</span>
          <span className="marquee-dot" aria-hidden="true">
            ◆
          </span>
        </span>
      ))}
    </>
  );
}

export function Marquee() {
  return (
    <div className="marquee-wrap" aria-hidden="true">
      <div className="marquee-track">
        <MarqueeSet />
        <MarqueeSet />
      </div>
    </div>
  );
}
