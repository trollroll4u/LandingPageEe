import type { NextPage } from "next";

const FeatureCard1: NextPage = () => {
  return (
    <div className="h-[254px] flex flex-col items-end justify-start gap-[10px] text-right text-sm text-darkslategray-100 font-poppins">
      <div className="self-stretch flex-1 rounded-11xl bg-aliceblue-100 flex flex-row items-start justify-start">
        <div className="self-stretch w-[263px] relative rounded-11xl bg-aliceblue-100 hidden" />
        <img
          className="h-[188px] flex-1 relative rounded-11xl max-w-full overflow-hidden object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/image-10@2x.png"
        />
      </div>
      <div className="relative leading-[26px] mix-blend-normal">
        תשמרו על קו עיצובי אחיד בעזרת
      </div>
      <b className="self-stretch relative text-lg leading-[20px] text-second-color">
        אפקטים אוטומטיים
      </b>
    </div>
  );
};

export default FeatureCard1;
