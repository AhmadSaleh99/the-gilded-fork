import CustomerTestimonials from "@/components/CustomerTestimonials";
import FeaturedDishes from "@/components/FeaturedDishes";
import Hero from "@/components/Hero";
import Location from "@/components/Location";
import SpecialOffers from "@/components/SpecialOffers";

export default function Home() {
  return (

    // font-[family-name:var(--font-geist-mono)]

    <main>
      <Hero />
      <FeaturedDishes />
      <SpecialOffers />
      <CustomerTestimonials />
      <Location />
    </main>
  );
}
