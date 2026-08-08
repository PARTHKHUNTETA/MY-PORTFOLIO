import { portfolio } from "../utils/content";
import { SectionLabel, useReveal } from "./SectionUtils";

export function Skills() {
  useReveal();

  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <SectionLabel>Technical skills</SectionLabel>
        <div className="skills-grid">
          {portfolio.skills.map(([name, items]) => (
            <article className="skill-card reveal" key={name}>
              <h3>{name}</h3>
              <div>
                {items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
