import { FormattedMessage, useIntl } from "react-intl";
import { portfolio } from "../utils/content";
import { Count, SectionLabel, useReveal } from "./SectionUtils";

export function About() {
  useReveal();
  const intl = useIntl();

  return (
    <section className="section about" id="about">
      <div className="container about-grid reveal">
        <div>
          <SectionLabel>
            <FormattedMessage id="about.label" />
          </SectionLabel>
          <h2>
            <FormattedMessage id="about.title" />
            <br />
            <em>
              <FormattedMessage id="about.titleEm" />
            </em>
            <FormattedMessage id="about.titleRest" />
          </h2>
        </div>
        <div>
          <p>
            <FormattedMessage id="about.body" />
          </p>
          <div className="stats">
            {portfolio.stats.map(({ value, suffix, labelId }) => (
              <div key={labelId}>
                <strong>
                  <Count value={value} suffix={suffix} />
                </strong>
                <span>{intl.formatMessage({ id: labelId })}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
