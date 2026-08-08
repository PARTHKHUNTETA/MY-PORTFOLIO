import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { IntlProvider } from "react-intl";
import {
  DEFAULT_LOCALE,
  detectLocale,
  isSupportedLocale,
  messages,
} from "./locales";

const LocaleContext = createContext(null);

export function LocaleProvider({ children }) {
  const [locale, setLocaleState] = useState(detectLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem("locale", locale);
  }, [locale]);

  const setLocale = useCallback((next) => {
    if (!isSupportedLocale(next)) return;
    setLocaleState(next);
  }, []);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
    }),
    [locale, setLocale],
  );

  return (
    <LocaleContext.Provider value={value}>
      <IntlProvider
        locale={locale}
        messages={messages[locale]}
        defaultLocale={DEFAULT_LOCALE}
        onError={() => {}}
      >
        {children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
}
