import type { NextPage } from "next";

const Logo: NextPage = () => {
  return (
    <div className="self-stretch h-9 relative text-left text-5xl text-main-color-1 font-poppins">
      <b className="absolute top-[0px] left-[0px] tracking-[0.08px] inline-block w-full [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] h-full mq450:text-lgi">
        EditEase
      </b>
      <div className="absolute top-[23px] left-[93.9px] rounded-[50%] [background:linear-gradient(180deg,_rgba(84,_9,_142,_0.82),_rgba(109,_64,_144,_0.85))] w-1.5 h-1.5 z-[1]" />
    </div>
  );
};

export default Logo;
