import { createRoot } from "react-dom/client";
import App from "./App";
import { LocaleProvider } from "./i18n/LocaleProvider";
import "./styles/global.css";

createRoot(document.getElementById("root")).render(
  <LocaleProvider>
    <App />
  </LocaleProvider>,
);
