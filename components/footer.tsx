import type { NextPage } from "next";
import AllRightsReserved from "./all-rights-reserved";

const Footer: NextPage = () => {
  return (
    <footer className="self-stretch bg-main-color-1 overflow-hidden flex flex-col items-end justify-start pt-2.5 px-[150px] pb-[5px] box-border gap-[3px] max-w-full text-center text-sm text-white font-poppins mq450:pl-5 mq450:pr-5 mq450:box-border mq900:pl-[75px] mq900:pr-[75px] mq900:box-border">
      <div className="w-[1127.3px] flex flex-row items-start justify-center pt-0 px-0 pb-[7px] box-border max-w-full text-left text-5xl">
        <div className="flex flex-row items-start justify-start">
          <div className="flex flex-row items-start justify-start relative">
            <b className="relative tracking-[0.08px] inline-block min-w-[102.29999999999929px] whitespace-nowrap mq450:text-lgi">
              EditEase
            </b>
            <div className="h-4 w-4 absolute !m-[0] bottom-[-2px] left-[-12.7px] rounded-[50%] [background:linear-gradient(180deg,_rgba(84,_9,_142,_0.82),_rgba(109,_64,_144,_0.85))] z-[1]" />
          </div>
          <div className="flex flex-col items-start justify-start pt-[23px] px-0 pb-0">
            <div className="w-1.5 h-1.5 relative rounded-[50%] [background:linear-gradient(180deg,_rgba(84,_9,_142,_0.82),_rgba(109,_64,_144,_0.85))] z-[1]" />
          </div>
        </div>
      </div>
      <div className="w-44 hidden flex-row items-center justify-end gap-[16px] font-abeezee">
        <div className="h-12 flex-1 relative">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-1981xl [background:linear-gradient(180deg,_rgba(84,_9,_142,_0.82),_rgba(109,_64,_144,_0.85))]" />
          <div className="absolute top-[calc(50%_-_7px)] left-[18px]">
            instagram
          </div>
        </div>
        <div className="h-12 flex-1 relative">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-1981xl [background:linear-gradient(180deg,_rgba(84,_9,_142,_0.82),_rgba(109,_64,_144,_0.85))]" />
          <div className="absolute top-[calc(50%_-_7px)] left-[17px]">
            facebook
          </div>
        </div>
        <div className="h-12 flex-1 relative">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-1981xl [background:linear-gradient(180deg,_rgba(84,_9,_142,_0.82),_rgba(109,_64,_144,_0.85))]" />
          <div className="absolute top-[calc(50%_-_7px)] left-[18px]">
            twitter
          </div>
        </div>
      </div>
      <div className="self-stretch h-px relative bg-aliceblue-200 mix-blend-normal" />
      <div className="self-stretch flex flex-row items-start justify-center">
        <div className="w-[257px] flex flex-col items-start justify-start gap-[3px]">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[71px] pl-[71.5px] mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="h-px flex-1 relative bg-aliceblue-200 mix-blend-normal" />
          </div>
          <AllRightsReserved />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
