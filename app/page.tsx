import { Brief } from "@/components/Brief";
import { ClientLogos } from "@/components/ClientLogos";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Guarantees } from "@/components/Guarantees";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { ProjectsProvider } from "@/components/ProjectsProvider";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <ProjectsProvider>
      <div style={{ background: "var(--qm-sand)", minHeight: "100vh", fontFamily: "var(--qm-font-sans)", color: "var(--qm-ink)" }}>
        <Header />
        <main>
          <Hero />
          <ClientLogos />
          <Guarantees />
          <Services />
          <Work />
          <Process />
          <Testimonials />
          <Faq />
          <Brief />
        </main>
        <Footer />
      </div>
      <RevealOnScroll />
    </ProjectsProvider>
  );
}
