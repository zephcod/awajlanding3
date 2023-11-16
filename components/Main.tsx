import Hero from "@/sections/hero";
import ServiceCarousel from "@/sections/service_carousel/service_carousel";
import { BsRocketTakeoffFill } from "react-icons/bs";
import InRoundButton from "./button/inround";
import ValueProp from "@/sections/value_proposition";
import styles from '@/components/page.module.css'
import Headline1 from "@/sections/ctas/headline1";
import Stats from "@/sections/stats";
import { QuickCampaign } from "./pricing/quick_campaign";
import DownloadSection from "@/sections/ctas/downloads";
import CasesSection from "@/sections/ctas/casestudies";

export default function Main() {
  return (
    <section className={styles.maincontainer}>
        <div className={styles.heroContainer}>
          <Hero/>
        </div>
      <Headline1/>
      <section id='case_sec'>
      <CasesSection/>
      </section>
      <h2 className="pt-24 mb-2 md:mb-8 text-3xl text-center text-muted-foreground font-bold leading-[1.15] lg:text-4xl">
        Check our main services.
      </h2>
      <ServiceCarousel/>
      <div className="h-12"></div>
      <InRoundButton url="/pricing/deals" text="Check Deals">
        <span><BsRocketTakeoffFill/></span>
      </InRoundButton>
      <Stats/>
      <ValueProp/>
      <DownloadSection/>
      <div className="h-24"></div>
      <section id='quick' className="w-full">
      <QuickCampaign/>
      </section>
    </section>
  );
}
