import type { NextPage } from "next";
import HeadingH from "./heading-h";
import ButtonOutline from "./button-outline";
import Button from "./button";

const SectionOne: NextPage = () => {
  return (
    <section className="self-stretch box-border overflow-hidden flex flex-row flex-wrap items-start justify-start max-w-full [row-gap:20px] text-center text-31xl text-main-color-1 font-poppins border-b-[3px] border-solid border-black">
      <div className="flex-1 flex flex-row items-start justify-start pt-0 px-0 pb-[1.900000000000091px] box-border min-w-[468px] max-w-full mq675:min-w-full">
        <div className="self-stretch w-[720px] relative hidden max-w-full" />
        <div className="h-[395.1px] flex-1 flex flex-col items-center justify-center relative bg-[url('/artboard-1-2@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full z-[1]">
          <img
            className="self-stretch h-[395.1px] relative max-w-full overflow-hidden shrink-0 object-cover hidden z-[0]"
            alt=""
            src="/artboard-1-2@2x.png"
          />
          <div className="w-[106.7px] absolute !m-[0] top-[91.9px] left-[560.4px] h-[60.5px] [transform:_rotate(-8.67deg)] [transform-origin:0_0] z-[1]" />
        </div>
      </div>
      <div className="flex-1 overflow-hidden flex flex-col items-center justify-between pt-[5px] px-0 pb-2.5 box-border min-w-[468px] max-w-full mq450:h-auto mq675:min-w-full">
        <div className="self-stretch flex flex-row items-center justify-center py-0 px-0.5 box-border max-w-full shrink-0">
          <HeadingH />
        </div>
        <div className="self-stretch h-[225px] relative text-xl leading-[36px] text-darkslategray-100 flex items-center mix-blend-normal mq450:text-base mq450:leading-[29px]">
          <span>
            <p className="m-0">
              בעולם שבו תוכן הוא המלך, לא פלא שתוכן גורר הרבה עבודה
            </p>
            <p className="m-0">
              <span>{`הפלטפורמה שלנו נבנתה כדי לעזור לך לשדרג את התוכן שלך `}</span>
              <b className="font-poppins">בקלות ובמהירות</b>
            </p>
            <p className="m-0">
              איתנו תעניק חיים חדשים לתכנים שלך תוך חסכון בזמן ובכסף
            </p>
          </span>
        </div>
        <div className="[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] flex flex-row items-start justify-center py-0 px-5 box-border gap-[45px] max-w-full mq450:flex-wrap mq450:gap-[45px_22px]">
          <button className="cursor-pointer [border:none] py-0 px-0 bg-[transparent] flex flex-row items-center justify-center">
            <ButtonOutline />
          </button>
          <button className="cursor-pointer [border:none] py-0 px-[1.5px] bg-[transparent] flex flex-row items-center justify-center">
            <Button />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
