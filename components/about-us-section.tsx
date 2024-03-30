import type { NextPage } from "next";

const AboutUsSection: NextPage = () => {
  return (
    <div className="flex-1 box-border overflow-hidden flex flex-row items-center justify-center py-[25px] px-0 max-w-full text-center text-21xl text-midnightblue font-poppins border-b-[1px] border-solid border-radsomqornfas mq450:pt-5 mq450:pb-5 mq450:box-border">
      <div className="flex-1 flex flex-col items-center justify-center mix-blend-luminosity max-w-full">
        <h1 className="m-0 self-stretch relative text-inherit capitalize font-extrabold font-inherit [text-shadow:0px_4px_10px_rgba(0,_0,_0,_0.25)] mq450:text-5xl mq900:text-13xl">
          ?מי אנחנו ומה המטרה
        </h1>
        <div className="self-stretch flex flex-row items-center justify-center py-[5px] px-5 box-border max-w-full text-base text-darkgreen">
          <div className="w-[626px] relative inline-block shrink-0 max-w-full">
            <p className="[margin-block-start:0] [margin-block-end:25px]">
              <span className="whitespace-pre-wrap">
                EditEas
                <br />
                חברה קטנה, 5 אנשים סה״כ
                <br />
                התחלנו את עבודתנו מתמיכה במרכזי
                הסברה ישראלים
                <br />
                בעבודתם המפרכת ביצירה, שכתוב, ושימוש מחודש
                בתכנים
                <br />
                <br />

              </span>
              <b className="font-poppins">
                ועם הרבה נחישות הפכנו את המורכב לפשוט
              </b>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:25px]">
              עכשיו אנחנו רוצים לעשות אותו הדבר גם עבורכם
            </p>
            <p className="m-0">בקצרה - פיתחנו פלטפורמה שתעזור לכם ליצר תוכן בצורה קלה ומהירה
              <br />
              אנחנו עובדים בלי קץ על שיפור הטכנולוגיה והתאמתה לצרכים של הלקוחות שלנו
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
