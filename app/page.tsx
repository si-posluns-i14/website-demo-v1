import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import ProblemSolution from "@/components/ProblemSolution";
import Platform from "@/components/Platform";
import FeatureDeepDive from "@/components/FeatureDeepDive";
import HowWeWork from "@/components/HowWeWork";
import Security from "@/components/Security";
import NewsGrid from "@/components/NewsGrid";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";

export default function Home() {
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
        <NewsGrid />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}
