import type { NextPage } from "next";
import FeatureCard1 from "./feature-card1";
import FeatureCard from "./feature-card";

const FeatureList: NextPage = () => {
  return (
    <div className="self-stretch grid flex-row items-start justify-start gap-[29px] grid-cols-[repeat(4,_minmax(197px,_1fr))] text-right text-sm text-darkslategray-100 font-poppins mq450:grid-cols-[minmax(197px,_1fr)] mq900:justify-center mq900:grid-cols-[repeat(2,_minmax(197px,_342px))]">
      <FeatureCard1 />
      <FeatureCard
        bitmap="/bitmap@2x.png"
        uIUXDesignAgustCopy="תחסכו זמן יקר ומשאבים עם"
        redesignChannelWebCopy="זיהוי דוברים"
      />
      <FeatureCard
        bitmap="/bitmap-1@2x.png"
        uIUXDesignAgustCopy="תגיעו לקהלים חדשים בעזרת"
        redesignChannelWebCopy="שׁינוי שפה לפודקאסט"
        propTextTransform="capitalize"
      />
      <FeatureCard
        bitmap="/bitmap-2@2x.png"
        uIUXDesignAgustCopy="תעוררו יותר הבנה ומעורבות  עם "
        redesignChannelWebCopy="כתוביות אוטומטיות"
        propTextTransform="unset"
      />
    </div>
  );
};

export default FeatureList;
