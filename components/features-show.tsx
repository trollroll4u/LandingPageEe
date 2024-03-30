import type { NextPage } from "next";
import FeatureList from "./feature-list";

const FeaturesShow: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[11px] box-border max-w-full text-left text-21xl text-main-color-1 font-poppins">
      <div className="w-[1139px] flex flex-col items-start justify-start gap-[28.5px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[773px] flex flex-col items-start justify-start gap-[10px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-center text-xl text-darkslategray-100">
              <b className="h-[50px] relative leading-[25px] inline-block [text-shadow:0px_4px_10px_rgba(0,_0,_0,_0.15)] mix-blend-normal">
                <p className="m-0">
                  יש לנו את כל הכלים שיעזרו לך לגדול, לגלות ולהגיע לקהלים חדשים
                </p>
                <p className="m-0 text-mini">
                  ויש לנו גם תמיכה אישית ברמה יוצאת דופן *
                </p>
              </b>
            </div>
          </div>
        </div>
        <FeatureList />
      </div>
    </section>
  );
};

export default FeaturesShow;
