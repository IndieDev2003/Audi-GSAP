import React from "react";
import car from "../../assets/contact-dealer/car.png";

import heroBack from "../../assets/configure/heroBackConfig.jpg";

function Hero() {
  return (
    <div className="w-screen min-h-screen  sm:px-10 flex items-center relative">
      {/* Left Side */}
      <div className="sm:max-w-[50vw] px-5 flex flex-col gap-1 relative">
        <h2 className="text-3xl">2023 Audi RS eTron GT</h2>
        <h3 className="text-xl">Notice</h3>
        <p className="text-sm">
          Due to ongoing parts shortage issues impacting global production, the
          availability of some equipment, options or features may be limited.
          Please contact your local Audi Dealer for more information, and be
          sure to verify the vehicle you purchase includes all expected features
          and equipment. Thank you for your patience as we work to navigate
          these limitations.
        </p>
        <h3 className="mt-10 text-2xl">Base</h3>
        <p>Starting at $143,999</p>
        <div className="rounded-2xl border-black border w-[340px] px-3 py-7 text-start">
          <h3 className="text-xl">RS eTron GT quattro</h3>
          <p>$ 143,999</p>
        </div>
      </div>
      {/* Right Side */}
      <div className="relative hidden sm:block">
        <img src={car} className="scale-110" alt="" />
        <div className="absolute bg-black h-[230px] w-[230px] top-0 right-0 -z-10 rounded-[20px]"></div>
      </div>
      <img
        src={heroBack}
        className="absolute object-cover object-center h-full opacity-30 -z-10 sm:hidden"
        alt=""
      />
    </div>
  );
}

export default Hero;
