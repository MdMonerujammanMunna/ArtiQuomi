import CTA from "@/components/CTA/CTA";
import FAQ from "@/components/Faq/FAQ";
import Hero from "@/components/HeroBannerSection/HeroBanner";
import HeroCard from "@/components/HeroCard/HeroCard";
import Stats from "@/components/Status/Status";
import TopCreatorsPage from "@/components/TopCreator/TopCreator";
import WhyChooseUs from "@/components/WhyChooseUs/ChooseUs";
import { getUserPrompts } from "@/lib/api/User";

export default async function Home() {
  const response = await getUserPrompts();
  return (
    <>
      <Hero />
      <Stats />
      <HeroCard result={response} />
      <WhyChooseUs />
      <TopCreatorsPage />
      <FAQ />
      <CTA />
    </>
  );
}
