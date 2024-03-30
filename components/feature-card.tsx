import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FeatureCardType = {
  bitmap?: string;
  uIUXDesignAgustCopy?: string;
  redesignChannelWebCopy?: string;

  /** Style props */
  propTextTransform?: CSSProperties["textTransform"];
};

const FeatureCard: NextPage<FeatureCardType> = ({
  bitmap,
  uIUXDesignAgustCopy,
  redesignChannelWebCopy,
  propTextTransform,
}) => {
  const redesignChannelWebStyle: CSSProperties = useMemo(() => {
    return {
      textTransform: propTextTransform,
    };
  }, [propTextTransform]);

  return (
    <div className="h-[254px] flex flex-col items-end justify-start gap-[10px] text-right text-sm text-darkslategray-100 font-poppins">
      <img
        className="self-stretch h-[188px] relative max-w-full overflow-hidden shrink-0 object-cover"
        loading="lazy"
        alt=""
        src={bitmap}
      />
      <div className="relative leading-[26px] mix-blend-normal">
        {uIUXDesignAgustCopy}
      </div>
      <b
        className="self-stretch relative text-lg leading-[20px] text-second-color"
        style={redesignChannelWebStyle}
      >
        {redesignChannelWebCopy}
      </b>
    </div>
  );
};

export default FeatureCard;
