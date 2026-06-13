import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import ProblemSolution from "@/components/ProblemSolution";
import Platform from "@/components/Platform";
import FeatureDeepDive from "@/components/FeatureDeepDive";
import HowWeWork from "@/components/HowWeWork";
import Security from "@/components/Security";
import Team from "@/components/Team";
import Careers from "@/components/Careers";
import JournalClub from "@/components/JournalClub";
import NewsGrid from "@/components/NewsGrid";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <>
      <Banner />
      <Navbar />
      <main>
        <Hero />
        <section id="section-1">
          <SocialProof />
        </section>
        <section id="section-2">
          <ProblemSolution />
        </section>
        <section id="section-3">
          <Platform />
          <FeatureDeepDive />
        </section>
        <section id="section-4">
          <HowWeWork />
        </section>
        <Security />
        <section id="team">
          <Team />
        </section>
        <section id="careers">
          <Careers />
        </section>
        <section id="journal-club">
          <JournalClub />
        </section>
        <NewsGrid />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}
