import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Services from "../components/Services";
import WhyMe from "../components/WhyMe";
import Contact from "../components/Contact";

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        // Use requestAnimationFrame for smoother timing
        const scrollTask = () => {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        };

        // Delay slightly to ensure page is rendered
        const timer = setTimeout(scrollTask, 100);
        return () => clearTimeout(timer);
      }
    }
  }, [hash]);

  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Services />
      <WhyMe />
      <Contact />
    </>
  );
}
