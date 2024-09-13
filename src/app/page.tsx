import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
      <main className="flex flex-col min-h-[100dvh] space-y-12">
        <Hero />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>
  );
}
