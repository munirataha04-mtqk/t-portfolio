import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import Journey from "@/components/Journey";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Header />

      <Hero />

      <div className="grid grid-cols-1 border-b border-emerald-line/60 lg:grid-cols-2">
        <About />
        <Skills />
      </div>

      <div className="grid grid-cols-1 border-b border-emerald-line/60 lg:grid-cols-[1.15fr_0.95fr_0.7fr]">
        <Work />
        <Journey />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}