import CtaHeadline from "@/sections/ctas/cta_headline";
import Hero from "@/sections/hero";
import GlassModal from "./modal/modal";
import ServiceCarousel from "@/sections/service_carousel/service_carousel";
import { BsRocketTakeoffFill } from "react-icons/bs";
import Subscribe from "@/sections/subscribe";
import InRoundButton from "./button/inround";
import Headline1 from "@/sections/ctas/headline1";
import PaymentOptions from "@/sections/payment_options";
import ValueProp from "@/sections/value_proposition";
import styles from '@/components/page.module.css'
import Neumorph_sliders from "./UI/Neumorph_sliders";

export default function Main() {
  return (
    <section className={styles.maincontainer}>
        <div className={styles.heroContainer}>
          <Hero/>
        </div>
      <Headline1/>
      <h2 className="pt-40 mb-1 text-2xl font-semibold tracking-tighter text-center lg:text-7xl md:text-6xl">
        Check our main services.
      </h2>
      <p className="mx-auto text-xl text-center font-normal leading-relaxed p-4 lg:w-2/3">
        Here is our collection of free to use templates made with Next.js &
        styled with Tailwind CSS.
      </p>
      <div className="m-auto max-w-4xl py-4">
      <ServiceCarousel/>
      <InRoundButton url="/pricing/deals" text="Check Deals">
        <span><BsRocketTakeoffFill/></span>
      </InRoundButton>
      <Neumorph_sliders/>
      <ValueProp/>
      </div>
      <PaymentOptions/><br/>
      <CtaHeadline/>
    </section>
  );
}
