import React, { useRef } from "react";
import image1 from "../../assets/features/back1.jpg";
import arrow from "../../assets/arrow.svg";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);
function Showcase() {
  const showCaseRef = useRef(null);

  useGSAP(() => {
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: showCaseRef.current,
        start: "top 70%",
        end: "bottom 100%",
        // markers: true,
        scrub: true,
      },
    });

    tl.from('.showcase h2', {
      // duration: 0.5,
      x: 1000,
      opacity:0
      
    })
    tl.from('.showcase p', {
      // duration: 0.5,
      delay:0.5,
      x: 300,
      opacity:0
      
    }, '-=0.5')

  

  },{scope:showCaseRef.current});

  return (
    <div
      ref={showCaseRef}
      className="showcase bg-gray-00 min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="min-h-[85vh] sm:min-h-[75vh] w-full bg flex relative overflow-hidden">
        <div className="hidden sm:flex items-center justify-center w-[10vw] backdrop-blur-xl ">
          <img src={arrow} className="h-10 cursor-pointer rotate-180" alt="" />
        </div>
        <div className="w-full flex items-start justify-end">
          <div className="sm:w-[30vw] text-end my-10 mx-10 text-white">
            <h2 className="text-2xl">Launch Control</h2>
            <p className="text-base">
              Legendary Audi performace is at the heart of the Audi RS eTron GT,
              Featuring exhilarating launch control, boosting the power to
              achieve up to 637 HP.
            </p>
          </div>
        </div>
        <div className="hidden sm:flex items-center justify-center w-[10vw] backdrop-blur-xl">
          <img src={arrow} className="h-10 cursor-pointer" alt="" />
        </div>
        <img
          src={image1}
          className="object-cover h-full sm:h-max sm:w-full object-center absolute -z-10"
          alt=""
        />
      </div>
    </div>
  );
}

export default Showcase;
