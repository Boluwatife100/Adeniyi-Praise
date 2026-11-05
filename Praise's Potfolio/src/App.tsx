import Sidebar from "./components/Sidebar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Skills from "./components/sections/Skills";
import Education from "./components/sections/Education";
import Certifications from "./components/sections/Certifications";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Values from "./components/sections/Values";
import Contact from "./components/sections/Contact";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <div className="min-h-screen bg-page text-ink">
      <Sidebar theme={theme} onToggleTheme={toggle} />
      <main className="pt-14 lg:ml-64 lg:pt-0">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Education />
        <Certifications />
        <Experience />
        <Projects />
        <Values />
        <Contact />
      </main>
    </div>
  );
}
