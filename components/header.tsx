import type { NextPage } from "next";
import Logo from "./logo";
import OurProducts from "./our-products";
import HomeButton from "./home-button";

const Header: NextPage = () => {
  return (
    <div className="w-[1233.5px] flex flex-row items-start justify-start pt-0 px-[35px] pb-[5px] box-border max-w-full text-left text-5xl text-main-color-1 font-poppins">
      <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq675:flex-wrap">
        <div className="w-[208.5px] flex flex-row items-end justify-start gap-[2.100000000000364px]">
          <div className="h-4 w-4 relative rounded-[50%] [background:linear-gradient(180deg,_rgba(84,_9,_142,_0.82),_rgba(109,_64,_144,_0.85))]" />
          <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-0.5">
            <Logo />
          </div>
        </div>
        <div className="w-48 flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border text-right text-base font-inter">
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
            <OurProducts />
            <HomeButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
