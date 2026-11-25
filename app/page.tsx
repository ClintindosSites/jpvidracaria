import HeroHome from "@/components/home/HeroHome";
import ServicesSection from "@/components/home/ServicesSection";
import AboutSection from "@/components/home/AboutSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import HowItWorksSection from "@/components/shared/HowItWorksSection";
import ReviewsSection from "@/components/home/ReviewsSection";
import FAQSection from "@/components/home/FAQSection";
import QuoteSection from "@/components/home/QuoteSection";

export default function Home() {
  return (
    <>
      <HeroHome />
      <ServicesSection />
      <AboutSection />
      <ProjectsSection />
      <HowItWorksSection />
      <ReviewsSection />
      <FAQSection />
      <QuoteSection />
    </>
  );
}
