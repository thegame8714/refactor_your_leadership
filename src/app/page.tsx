import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StuckSection from "@/components/StuckSection";
import DesireSection from "@/components/DesireSection";
import AboutProgram from "@/components/AboutProgram";
import CoachStory from "@/components/CoachStory";
import Curriculum from "@/components/Curriculum";
import Outcomes from "@/components/Outcomes";
import WhoItsFor from "@/components/WhoItsFor";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <StuckSection />
        <DesireSection />
        <AboutProgram />
        <CoachStory />
        <Curriculum />
        <Outcomes />
        <WhoItsFor />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
