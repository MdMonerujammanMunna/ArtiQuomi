import CTA from "@/components/CTA/CTA";
import FAQ from "@/components/Faq/FAQ";
import Hero from "@/components/HeroBannerSection/HeroBanner";
import Stats from "@/components/Status/Status";
import TopCreatorsPage from "@/components/TopCreator/TopCreator";
import WhyChooseUs from "@/components/WhyChooseUs/ChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <WhyChooseUs />
      <TopCreatorsPage />
      <FAQ />
      <CTA />
    </>
  );
}
