import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { useCursorEffects, useScrollFx } from "./components/SectionUtils";
import { useTheme } from "./hooks/useTheme";

function App() {
  useScrollFx();
  useCursorEffects();
  const [theme, toggleTheme] = useTheme();

  return (
    <>
      <div id="scrollbar" className="scroll-progress" />
      <div className="cursor-ring" />
      <div className="cursor-dot" />
      <Hero theme={theme} toggleTheme={toggleTheme} />
      <Marquee />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
