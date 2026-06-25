import CTA from "@/components/CTA/CTA";
import FAQ from "@/components/Faq/FAQ";
import Hero from "@/components/HeroBannerSection/HeroBanner";
import HeroCard from "@/components/HeroCard/HeroCard";
import ReviewCard from "@/components/ReviewForHome/HomeReview";
import Stats from "@/components/Status/Status";
import TopCreatorsPage from "@/components/TopCreator/TopCreator";
import WhyChooseUs from "@/components/WhyChooseUs/ChooseUs";
import { GetReviews, HerogetPrompts } from "@/lib/api/HeroBanner";

export default async function Home() {
  const response = await HerogetPrompts()
  const ReviewData = await GetReviews()
  return (
    <>
      <Hero />
      <Stats />
      <HeroCard result={response} />
      <WhyChooseUs />
      {/* <TopCreatorsPage /> */}
      <FAQ />
      <ReviewCard reviews={ReviewData} />
      <CTA />
    </>
  );
}
