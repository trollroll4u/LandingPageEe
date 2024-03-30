import type { NextPage } from "next";
import { useState, FormEvent, ChangeEvent } from "react";
import SubscribeButton from "./subscribe-button";

const EmailForm: NextPage = () => {
  const [email, setEmail] = useState<string>(''); // State to hold the email value with type string

  // Function to handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault(); // Prevents the default form submit action
    console.log(email); // Here you can replace it with your actual submit logic
  };

  // Function to handle email input change
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value); // Updates the state with the new email value
  };

  return (
    <form onSubmit={handleSubmit} className="self-stretch h-[72px] flex flex-row items-center justify-center max-w-full text-left text-base text-darkslategray-200 font-poppins">
      <div className="self-stretch flex-1 rounded-xl overflow-hidden flex flex-row items-center justify-center relative gap-[10px] max-w-full position-relative">
        <img
          className="h-[72px] flex-1 relative max-w-full overflow-hidden"
          loading="lazy"
          alt=""
          src="/base.svg"
        />
        {/* Updated input field with absolute positioning */}
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className="absolute inset-0 w-full h-full px-4 py-2" // Adjust your input styles here along with absolute positioning
          placeholder="Your email address"
          aria-label="Email address"
        />
      </div>
      <SubscribeButton />
    </form>
  );
};

export default EmailForm;
