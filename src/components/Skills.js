import { FormattedMessage, useIntl } from "react-intl";
import { portfolio } from "../utils/content";
import { SectionLabel, useReveal } from "./SectionUtils";

export function Skills() {
  useReveal();
  const intl = useIntl();

  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <SectionLabel>
          <FormattedMessage id="skills.label" />
        </SectionLabel>
        <div className="skills-grid">
          {portfolio.skills.map(({ categoryId, items }) => (
            <article className="skill-card reveal" key={categoryId}>
              <h3>{intl.formatMessage({ id: categoryId })}</h3>
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
