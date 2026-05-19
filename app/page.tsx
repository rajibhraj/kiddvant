import FunForAllAges from "@/components/FunForAllAges";
import HomeHero from "@/components/HomeHero";
import ProductSlider from "@/components/ProductSlider";
import ShopByCategory from "@/components/ShopByCategory";
import BestSellers from "@/components/BestSellers";
import NewsletterPromo from "@/components/NewsletterPromo";

export default function Home() {
  return (
    <div>
      <HomeHero/>
      <ProductSlider/>
      <FunForAllAges/>
      {/* <ShopByCategory/> */}
      <BestSellers/>
      <NewsletterPromo/>
    </div>
  );
}
