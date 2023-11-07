import CtaHeadline from "@/sections/ctas/cta_headline";
import Hero from "@/sections/hero";
import ServiceCarousel from "@/sections/service_carousel/service_carousel";
import { BsRocketTakeoffFill } from "react-icons/bs";
import InRoundButton from "./button/inround";
import PaymentOptions from "@/sections/payment_options";
import ValueProp from "@/sections/value_proposition";
import styles from '@/components/page.module.css'
import Headline1 from "@/sections/ctas/headline1";
import Stats from "@/sections/stats";
import { QuickCampaign } from "./pricing/quick_campaign";

export default function Main() {
  return (
    <section className={styles.maincontainer}>
        <div className={styles.heroContainer}>
          <Hero/>
        </div>
      <Headline1/>
      <h2 className="pt-24 mb-1 text-3xl text-center text-muted-foreground font-bold leading-[1.15] lg:text-4xl">
        Check our main services.
      </h2>
      <p className="mx-auto text-lg md:text-xl text-muted-foreground text-center font-normal leading-relaxed p-4 lg:w-2/3">
        Here are awaj&apos;s four featured services categorized in our core digital marketing principles.
      </p>
      <ServiceCarousel/>
      <div className="h-12"></div>
      <InRoundButton url="/pricing/deals" text="Check Deals">
        <span><BsRocketTakeoffFill/></span>
      </InRoundButton>
      <Stats/>
      <ValueProp/>
      <PaymentOptions/>
      <br/>
      <section id='quick' className="w-full">
      <QuickCampaign/>
      </section>
    </section>
  );
}
