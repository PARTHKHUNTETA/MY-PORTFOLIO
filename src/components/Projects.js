import { FormattedMessage, useIntl } from "react-intl";
import { portfolio } from "../utils/content";
import { SectionLabel, useReveal } from "./SectionUtils";

function ProjectDiagram({ kind }) {
  if (kind === "kd") {
    return (
      <div className="diagram diagram-kd">
        <div className="diagram-col">
          <span className="node pill">dense · vectors</span>
          <span className="node pill">keyword · BM25</span>
        </div>
        <div className="wire">
          <span className="dot" />
        </div>
        <span className="node pulse">fuse</span>
        <div className="wire">
          <span className="dot dot-delay" />
        </div>
        <div className="diagram-col">
          <span className="node text">grounded answer</span>
          <span className="node muted">[1] 04:12 · [2] 11:38</span>
        </div>
      </div>
    );
  }

  if (kind === "pf") {
    return (
      <div className="diagram diagram-pf">
        <div className="diagram-col diagram-col-tight">
          <span className="node small">en · hi</span>
          <span className="node small">es · fr</span>
        </div>
        <div className="wire">
          <span className="dot" />
        </div>
        <span className="node pulse">i18n</span>
        <div className="wire">
          <span className="dot dot-delay" />
        </div>
        <div className="diagram-col">
          <span className="node text">theme</span>
          <span className="node muted">light · dark</span>
        </div>
      </div>
    );
  }

  if (kind === "dm") {
    return (
      <div className="diagram diagram-dm">
        <span className="node pulse">model decides</span>
        <div className="wire">
          <span className="dot" />
        </div>
        <div className="diagram-col">
          <span className="node pill">web_search()</span>
          <span className="node muted">searching… 3 sources</span>
        </div>
        <div className="wire">
          <span className="dot dot-delay" />
        </div>
        <span className="node text">
          streaming
          <br />
          answer <span className="caret" />
        </span>
      </div>
    );
  }

  return (
    <div className="diagram diagram-sa">
      <span className="node pulse">prompt</span>
      <div className="wire">
        <span className="dot" />
      </div>
      <div className="diagram-col diagram-col-tight">
        <span className="node small">OpenAI</span>
        <span className="node small">Gemini</span>
        <span className="node small">Mistral</span>
      </div>
      <div className="wire">
        <span className="dot dot-delay" />
      </div>
      <div className="diagram-col">
        <span className="node pulse">evaluator</span>
        <span className="node muted">→ one answer</span>
      </div>
    </div>
  );
}

export function Projects() {
  useReveal();
  const intl = useIntl();

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="projects-heading reveal">
          <div>
            <SectionLabel>
              <FormattedMessage id="projects.label" />
            </SectionLabel>
            <h2>
              <FormattedMessage id="projects.title" />
              <br />
              <em>
                <FormattedMessage id="projects.titleEm" />
              </em>
            </h2>
          </div>
          <p>
            <FormattedMessage id="projects.meta" />
          </p>
        </div>
        <div className="project-grid">
          {portfolio.projects.map((project) => (
            <article className="project-card tilt reveal" key={project.name}>
              <div className="diagram-band">
                <div className="diagram-dots">
                  <span className="light" />
                  <span />
                  <span />
                  <span className="diagram-tag">{project.tag}</span>
                </div>
                <ProjectDiagram kind={project.kind} />
              </div>
              <div className="project-content">
                <p className="project-category">
                  {intl.formatMessage({ id: project.categoryId })}
                </p>
                <h3>{project.name}</h3>
                <p>{intl.formatMessage({ id: project.descriptionId })}</p>
                <div className="tags">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.live ? (
                    <a
                      className="button"
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FormattedMessage id="projects.live" />
                    </a>
                  ) : null}
                  <a
                    className="button ghost"
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FormattedMessage id="projects.code" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
