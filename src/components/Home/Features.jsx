import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";


gsap.registerPlugin(ScrollTrigger,useGSAP)
function Features() {

  const featureRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: featureRef.current,
        // markers: true,
        start: 'top 75%',
        end: 'top 50%',
        // toggleActions: 'play reverse play',
        scrub: 0.5,
      }
    })

    tl.from('.feature-con .feature', {
      x: 1000,
      opacity: 0,
      stagger:1
    })
  },{scope:featureRef.current})

  return (
    <div ref={featureRef} className="feature-con min-h-[25vh] flex flex-col sm:flex-row items-center justify-center py-10 gap-10 sm:gap-40">
      <div className="feature flex flex-col items-center justify-center">
        <h3 className="text-xl">Power</h3>
        <h2 className="text-3xl font-semibold">637HP</h2>
        <p className="text-sm">With Power Engaged</p>
      </div>
      <div className="feature flex flex-col items-center justify-center sm:border-r-2 sm:border-l-2 sm:px-20">
        <h3 className="text-xl">Battery Size</h3>
        <h2 className="text-3xl font-semibold">93kWh</h2>
        <p className="text-sm">Gross</p>
      </div>
      <div className="feature flex flex-col items-center justify-center">
        <h3 className="text-xl">0-60 mph in</h3>
        <h2 className="text-3xl  font-semibold">3.1 sec</h2>
        <p className="text-sm">With Boost Engaged</p>
      </div>
    </div>
  );
}

export default Features;
