import type { NextPage } from "next";
import Header from "../components/header";
import SectionOne from "../components/section-one";
import AboutUsSection from "../components/about-us-section";
import FeaturesShow from "../components/features-show";
import ContactUsSection from "../components/contact-us-section";
import Footer from "../components/footer";

const PowerAgency: NextPage = () => {
  return (
    <div className="w-full relative [background:linear-gradient(201.96deg,_#f0f8ff,_#fff_32.5%,_#fbe6ff)] overflow-hidden flex flex-col items-start justify-start pt-[31px] px-0 pb-0 box-border gap-[10px] tracking-[normal] text-center text-xl text-main-color-1 font-poppins">
      <Header />
      <SectionOne />
      <div className="self-stretch bg-slateblue overflow-hidden hidden flex-col items-center justify-center max-w-full">
        <div className="w-[761px] h-[77px] relative tracking-[0.2px] leading-[24px] capitalize font-semibold inline-block shrink-0 max-w-full box-border pl-5 pr-5 mq450:text-base mq450:leading-[19px]">
          בין לקוחותינו
        </div>
      </div>
      <section id="AboutUsSection" className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[12.5px] box-border max-w-full">
        <AboutUsSection />
      </section>
      <FeaturesShow />
      <ContactUsSection />
      <Footer />
    </div>
  );
};

export default PowerAgency;
