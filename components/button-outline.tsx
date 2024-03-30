import type { NextPage } from "next";
import Link from "next/link";
import { useRef } from "react";

const ButtonOutline: NextPage = () => {
  // const linkRef = useRef();

  return (
    <div className="rounded-xl flex flex-row items-start justify-center py-2.5 px-9 whitespace-nowrap text-center text-lg font-poppins border-[1px] border-solid border-radsomqornfas">
      <Link href="http://app.edit-ease.com">
        <div className="h-[27px] w-[99px] relative font-semibold text-transparent !bg-clip-text [background:linear-gradient(90deg,_#7679ff,_#c9fff2_33.33%,_#e69dff_66.67%,_#e089ff_74.5%,_#cf48ff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block [-webkit-text-stroke:0.5px_#000] min-w-[99px]">
          צפו בווידיאו
        </div>
      </Link>
    </div>
  );
};

export default ButtonOutline;
