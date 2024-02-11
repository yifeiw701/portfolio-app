import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ContactMe from "@/components/Contact";

export default function Home() {
  return (
    <main className=" flex-grow mx-auto max-w-3xl px-5 sm:px-6 md:max-w-5xl lg:max-w-7xl ">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
