import type { NextPage } from "next";

const SubscribeButton: NextPage = () => {
  return (
    <button className="cursor-pointer [border:none] py-2.5 px-10 bg-[transparent] rounded-xl [background:linear-gradient(180deg,_rgba(84,_9,_142,_0.82),_rgba(109,_64,_144,_0.85))] shadow-[0px_6px_20px_rgba(112,_111,_229,_0.5)] flex flex-row items-start justify-center whitespace-nowrap z-[2] ml-[-98px]">
      <div className="w-[114px] relative text-lg font-semibold font-poppins text-white text-center inline-block min-w-[114px]">
        פרטים נוספים
      </div>
    </button>
  );
};

export default SubscribeButton;
