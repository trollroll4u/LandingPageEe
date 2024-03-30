import type { NextPage } from "next";

export type EmailInputType = {
  label?: string;
};

const EmailInput: NextPage<EmailInputType> = ({ label }) => {
  return (
    <div className="absolute !m-[0] top-[calc(50%_-_12px)] left-[57px] text-base font-poppins text-darkslategray-200 text-left z-[1]">
      {label}
    </div>
  );
};

export default EmailInput;
