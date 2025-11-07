import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/sections/About";
import Expertise from "@/components/sections/Expertise";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Expertise />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
