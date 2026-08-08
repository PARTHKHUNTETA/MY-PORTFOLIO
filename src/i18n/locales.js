import en from "./messages/en.json";
import hi from "./messages/hi.json";
import es from "./messages/es.json";
import fr from "./messages/fr.json";
import de from "./messages/de.json";

export const DEFAULT_LOCALE = "en";

export const SUPPORTED_LOCALES = [
  { code: "en", label: "EN" },
  { code: "hi", label: "HI" },
  { code: "es", label: "ES" },
  { code: "fr", label: "FR" },
  { code: "de", label: "DE" },
];

export const messages = {
  en,
  hi,
  es,
  fr,
  de,
};

export function isSupportedLocale(code) {
  return Object.prototype.hasOwnProperty.call(messages, code);
}

export function detectLocale() {
  if (typeof window === "undefined") return DEFAULT_LOCALE;

  const stored = window.localStorage.getItem("locale");
  if (isSupportedLocale(stored)) return stored;

  const browser = (window.navigator.language || DEFAULT_LOCALE)
    .slice(0, 2)
    .toLowerCase();

  return isSupportedLocale(browser) ? browser : DEFAULT_LOCALE;
}
