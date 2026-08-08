import { portfolio } from "../utils/content";
import { SectionLabel, useReveal } from "./SectionUtils";

export function Contact() {
  useReveal();
  const { email, phone, linkedin, github } = portfolio.contact;
  const [school, date] = portfolio.education;

  return (
    <footer className="contact" id="contact">
      <div className="container">
        <div className="contact-grid reveal">
          <div>
            <SectionLabel>Education</SectionLabel>
            <h3>{school}</h3>
            <p>{date}</p>
          </div>
          <div>
            <SectionLabel>Get in touch</SectionLabel>
            <h2>
              Let’s build
              <br />
              <em>something.</em>
            </h2>
            <div className="contact-links">
              <a href={`mailto:${email}`}>
                <span>Email</span>
                {email}
              </a>
              <a href={`tel:${phone.replace(/\s/g, "")}`}>
                <span>Phone</span>
                {phone}
              </a>
              <a href={linkedin.href} target="_blank" rel="noreferrer">
                <span>LinkedIn</span>
                {linkedin.label}
              </a>
              <a href={github.href} target="_blank" rel="noreferrer">
                <span>GitHub</span>
                {github.label}
              </a>
            </div>
          </div>
        </div>
        <div className="footer-line">
          <span>© {new Date().getFullYear()} Parth Khunteta</span>
          <a className="brand" href="#home">
            Parth<span>Khunteta</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
