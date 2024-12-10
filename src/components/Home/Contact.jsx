import React, { useRef } from "react";
import image from "../../assets/contact-dealer/car.png";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);
function Contact() {
  const contactRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contactRef.current,
        start: "top 60%",
        end: "top -10%",
        // markers: true,
        scrub: true,
        
      }
    })

    tl.from('.contact h2', {
      y: 200,
      
    })
    tl.from('.contact button', {
      y: -10,
      opacity: 0,
      stagger: 0.2
    })
  }, {
    scope: contactRef.current,
  });

  return (
    <section
      ref={contactRef}
      className="contact min-h-screen flex items-center justify-center"
    >
      <div className="h-[80vh] w-[80vw] bg-late-700 flex flex-col items-center justify-between py-20 relative">
        <h2 className="text-3xl text-center sm:text-5xl">
          Shop the 2023 Audi RS e-Tron GT
        </h2>
        <div className="flex flex-row gap-2 z-20">
          <button className="cursor-pointer  border-2 border-black hover:text-black hover:bg-gray-300  hover:border-opacity-0   shadow-lg drop-shadow-2xl px-5 py-2 rounded-xl bg-black text-white">
            Build & Price
          </button>
          <button className="cursor-pointer  border-2 border-black hover:text-whit hover:bg-gray-300 shadow-lg drop-shadow-2xl hover:border-opacity-0 px-5 py-2 rounded-xl">
            Contact Dealer
          </button>
        </div>
        <img
          src={image}
          className="absolute top-48 h-[230px] sm:top-[5vh] sm:h-[90%] object-cover"
          alt=""
        />
      </div>
    </section>
  );
}

export default Contact;
