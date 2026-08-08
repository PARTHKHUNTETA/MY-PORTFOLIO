import { portfolio } from "../utils/content";
import { SectionLabel, useReveal } from "./SectionUtils";

export function Experience() {
  useReveal();

  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionLabel>Experience</SectionLabel>
        <div className="experience-list">
          {portfolio.jobs.map((job) => (
            <article className="job reveal" key={job.company}>
              <div className="job-company">
                <h3>{job.company}</h3>
                <p>{job.location}</p>
              </div>
              <div className="job-detail">
                <div className="roles">
                  {job.roles.map(([title, dates]) => (
                    <div key={title}>
                      <h4>{title}</h4>
                      <p>{dates}</p>
                    </div>
                  ))}
                </div>
                <ul>
                  {job.points.map((point) => (
                    <li key={point}>
                      <span className="bullet" aria-hidden="true">
                        ▸
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                {job.stack && (
                  <p className="job-stack">
                    <span>Stack:</span> {job.stack}
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
