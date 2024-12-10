import React, { useEffect, useRef } from "react";
import sideView from "../../assets/configure/exterior.png";
import innerView from "../../assets/configure/interior.png";
import {
  color1,
  color4,
  color5,
  color2,
  color3,
  color6,
  color7,
  seat1,
  seat2,
  seat3,
  seat4,
  seat5,
} from "../../assets/configure/configure.js";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function Exterior() {
    const exteriorRef = useRef(null);

    function useLargeScreenEffect(callback, minWidth = 1024) {
        useEffect(() => {
          if (window.matchMedia(`(min-width: ${minWidth}px)`).matches) {
            callback();
          }
        }, [callback, minWidth]);
      }

//   useGSAP(
//     () => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: exteriorRef.current,
//           start: "top 75%",
//           end: "top -20%",
//           markers: true,
//           scrub: true,
//         },
//       });

//       tl.from(".sec-2 .exterior-txt", {
//         x: -150,
//       });
//       tl.from(".sec-2 #side-view-img", {
//         x: 1000,
//       });
//       tl.from(".sec-2 .ext-color-txt", {
//         y: 100,
//         opacity: 0,
//       });
//       tl.from(".sec-2 .ext-color", {
//         y: 100,
//         opacity: 0,
//       });
//       tl.from(".sec-2 .interior-view-img", {
//         y: 100,
//         opacity: 0,
//       });
//       tl.from(".sec-2 .interior-txt", {
//         x: -100,
//         opacity: 0,
//         scrollTrigger: {
//           trigger: ".sec-2 .interior-view-img",
//           start: "top 80%",
//           end: "top -20%",
//           markers: true,
//           scrub: true,
//         },
//       });
//     },
//     {
//       scope: exteriorRef.current,
//     }
//   );

  return (
    <div ref={exteriorRef} className="sec-2 px-2 sm:px-10 mt-5">
      <div>
        <h2 className="text-2xl exterior-txt">Exterior</h2>
        <img id="side-view-img" src={sideView} alt="" />
        <h3 className="text-xl mb-2 ext-color-txt">Exterior Colors</h3>
        <div className="ext-color overflow-scroll flex flex-nowrap gap-3">
          <img
            src={color1}
            className="border border-black rounded-lg h-14 object-cover"
            alt="exterior-color"
          />
          <img
            src={color2}
            className="border border-black rounded-lg h-14 object-cover"
            alt="exterior-color"
          />
          <img
            src={color3}
            className="border border-black rounded-lg h-14 object-cover"
            alt="exterior-color"
          />
          <img
            src={color4}
            className="border border-black rounded-lg h-14 object-cover"
            alt="exterior-color"
          />
          <img
            src={color5}
            className="border border-black rounded-lg h-14 object-cover"
            alt="exterior-color"
          />
          <img
            src={color6}
            className="border border-black rounded-lg h-14 object-cover"
            alt="exterior-color"
          />
          <img
            src={color7}
            className="border border-black rounded-lg h-14 object-cover"
            alt="exterior-color"
          />
        </div>
        <img
          src={innerView}
          className="interior-view-img my-5 rounded-lg object-cover"
          alt="interior"
        />
        <p className="text-sm interior-txt">
          Seats: Black, Dashboard: Black, Carpet: Black, Headliner: Black
        </p>
        <div className="overflow-scroll flex flex-nowrap gap-3 mt-1">
          <img src={seat1} className=" border-black h-14 object-cover" alt="" />
          <img src={seat2} className=" border-black h-14 object-cover" alt="" />
          <img src={seat3} className=" border-black h-14 object-cover" alt="" />
          <img src={seat4} className=" border-black h-14 object-cover" alt="" />
          <img src={seat5} className=" border-black h-14 object-cover" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Exterior;
