import { FormattedMessage, useIntl } from "react-intl";
import { portfolio } from "../utils/content";
import { SectionLabel, useReveal } from "./SectionUtils";

export function Experience() {
  useReveal();
  const intl = useIntl();

  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionLabel>
          <FormattedMessage id="experience.label" />
        </SectionLabel>
        <div className="experience-list">
          {portfolio.jobs.map((job) => (
            <article className="job reveal" key={job.company}>
              <div className="job-company">
                <h3>{job.company}</h3>
                <p>{intl.formatMessage({ id: job.locationId })}</p>
              </div>
              <div className="job-detail">
                <div className="roles">
                  {job.roles.map(({ titleId, datesId }) => (
                    <div key={titleId}>
                      <h4>{intl.formatMessage({ id: titleId })}</h4>
                      <p>{intl.formatMessage({ id: datesId })}</p>
                    </div>
                  ))}
                </div>
                <ul>
                  {job.pointIds.map((pointId) => (
                    <li key={pointId}>
                      <span className="bullet" aria-hidden="true">
                        ▸
                      </span>
                      <span>{intl.formatMessage({ id: pointId })}</span>
                    </li>
                  ))}
                </ul>
                {job.stack && (
                  <p className="job-stack">
                    <span>
                      <FormattedMessage id="experience.stack" />
                    </span>{" "}
                    {job.stack}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
