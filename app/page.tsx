import { Hero } from "@/components/sections/Hero";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { DoctorHighlights } from "@/components/sections/DoctorHighlights";
import { Testimonials } from "@/components/sections/Testimonials";
import { EmergencyBanner } from "@/components/sections/EmergencyBanner";
import { FAQ } from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <EmergencyBanner />
      <DoctorHighlights />
      <Testimonials />
      <FAQ />
    </>
  );
}
