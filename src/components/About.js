import { portfolio } from "../utils/content";
import { Count, SectionLabel, useReveal } from "./SectionUtils";

export function About() {
  useReveal();

  return (
    <section className="section about" id="about">
      <div className="container about-grid reveal">
        <div>
          <SectionLabel>About me</SectionLabel>
          <h2>
            Thoughtful systems.
            <br />
            <em>Useful</em> outcomes.
          </h2>
        </div>
        <div>
          <p>{portfolio.about}</p>
          <div className="stats">
            {portfolio.stats.map(([value, suffix, label]) => (
              <div key={label}>
                <strong>
                  <Count value={value} suffix={suffix} />
                </strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
