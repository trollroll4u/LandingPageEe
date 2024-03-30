import type { NextPage } from "next";
import EmailForm from "./email-form";

const ContactUsSection: NextPage = () => {
  return (
    <section className="self-stretch overflow-hidden flex flex-row items-center justify-center py-[5px] px-0 box-border max-w-full text-center text-21xl text-main-color-1 font-poppins">
      <div className="flex-1 flex flex-row items-center justify-center py-0 px-5 box-border max-w-full mq450:gap-[84px_21px] mq675:gap-[84px_42px]">
        <div className="w-[587px] overflow-hidden shrink-0 flex flex-col items-center justify-center gap-[25px] max-w-full">
          <div className="overflow-hidden flex flex-col items-center justify-center py-[26px] px-0 box-border max-w-full">
            <h1 className="m-0 w-[252px] relative text-inherit tracking-[0.2px] leading-[52px] capitalize font-bold font-inherit flex items-center justify-center [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] mq450:text-5xl mq450:leading-[31px] mq900:text-13xl mq900:leading-[42px]">
              גישה למערכת
            </h1>
            <div className="h-[72px] relative text-xl leading-[36px] text-gray inline-block mix-blend-normal mq450:text-base mq450:leading-[29px]">
              <p className="m-0">?רוצים לקבל גישה לפלטפורמה לפני כולם</p>
              <p className="m-0">השאירו פרטים ונדאג לחזור אליכם</p>
            </div>
          </div>
          <EmailForm />
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
