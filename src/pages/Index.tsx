import { useEffect } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { Header } from "@/components/booking/Header";
import { Hero } from "@/components/booking/Hero";
import { ReassuranceBlock } from "@/components/booking/ReassuranceBlock";
import { PricingRequestForm } from "@/components/booking/PricingRequestForm";
import { OutcomeSection } from "@/components/booking/OutcomeSection";
import { Footer } from "@/components/booking/Footer";

const TestBooking = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t.meta.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", t.meta.description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", t.meta.title);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", t.meta.description);
    }
  }, [t]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        <Hero />
        <PricingRequestForm />
        <ReassuranceBlock />
        <OutcomeSection />
      </main>

      <Footer />
    </div>
  );
};

export default TestBooking;
