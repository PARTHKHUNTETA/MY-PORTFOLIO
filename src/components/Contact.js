import { FormattedMessage } from "react-intl";
import { portfolio } from "../utils/content";
import { SectionLabel, useReveal } from "./SectionUtils";

export function Contact() {
  useReveal();
  const { email, phone, linkedin, github } = portfolio.contact;
  const { school } = portfolio.education;

  return (
    <footer className="contact" id="contact">
      <div className="container">
        <div className="contact-grid reveal">
          <div>
            <SectionLabel>
              <FormattedMessage id="contact.education" />
            </SectionLabel>
            <h3>{school}</h3>
            <p>
              <FormattedMessage id="contact.graduated" />
            </p>
          </div>
          <div>
            <SectionLabel>
              <FormattedMessage id="contact.getInTouch" />
            </SectionLabel>
            <h2>
              <FormattedMessage id="contact.title" />
              <br />
              <em>
                <FormattedMessage id="contact.titleEm" />
              </em>
            </h2>
            <div className="contact-links">
              <a href={`mailto:${email}`}>
                <span>
                  <FormattedMessage id="contact.email" />
                </span>
                {email}
              </a>
              <a href={`tel:${phone.replace(/\s/g, "")}`}>
                <span>
                  <FormattedMessage id="contact.phone" />
                </span>
                {phone}
              </a>
              <a href={linkedin.href} target="_blank" rel="noreferrer">
                <span>
                  <FormattedMessage id="contact.linkedin" />
                </span>
                {linkedin.label}
              </a>
              <a href={github.href} target="_blank" rel="noreferrer">
                <span>
                  <FormattedMessage id="contact.github" />
                </span>
                {github.label}
              </a>
            </div>
          </div>
        </div>
        <div className="footer-line">
          <span>
            <FormattedMessage
              id="footer.copyright"
              values={{ year: new Date().getFullYear() }}
            />
          </span>
          <a className="brand" href="#home">
            Parth<span>Khunteta</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
