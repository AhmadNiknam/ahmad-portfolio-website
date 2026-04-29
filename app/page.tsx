import { About } from "@/components/about";
import { Certifications } from "@/components/certifications";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Resume } from "@/components/resume";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
