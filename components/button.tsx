import type { NextPage } from "next";

const Button: NextPage = () => {
  return (
    <div className="rounded-xl [background:linear-gradient(180deg,_rgba(84,_9,_142,_0.82),_rgba(109,_64,_144,_0.85))] flex flex-row items-start justify-center py-2.5 px-[39px] whitespace-nowrap text-center text-lg text-white font-poppins">
      <div className="h-[27px] w-[88px] relative font-semibold inline-block min-w-[88px]">
        דברו איתנו
      </div>
    </div>
  );
};

export default Button;
