import React, { useContext, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import logo from "../assets/logo.svg";
import { AudiContext } from "../context/AudiContext";
import { Link } from "react-router-dom";

// gsap.registerPlugin(useGSAP);
function Header() {
  const header = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(header.current, {
      y: -100,
      duration: 1.5,
      ease: "power2.inOut",
      stagger: {
        amount: 0.2,
      },
    });

    tl.from(".nav h3", {
      y: -100,
      opacity: 0,
      stagger: 0.2,
    });
  });

  return (
    <header
      ref={header}
      className="nav flex w-screen items-center justify-between px-2 top-0 z-50 sm:px-10 fixed bg-opacity-50 bg-gray-100 backdrop-blur-sm"
    >
      <img src={logo} className="h-14 sm:h-12" alt="" />
      <div className="nav-in sm:flex gap-5 hidden text-gray-600">
        <Link to={"/"}>
          <h3 className="link cursor-pointer hover:text-black hover:scale-125">
            RS-eTron
          </h3>
        </Link>
        <Link to={"/"}>
          <h3 className="link cursor-pointer hover:text-black hover:scale-125">
            Models
          </h3>
        </Link>
        <Link to={"/"}>
          <h3 className="link cursor-pointer hover:text-black hover:scale-125">
            Discover
          </h3>
        </Link>
        <Link to={"/"}>
          <h3 className="link cursor-pointer hover:text-black hover:scale-125">
            myAudiLogin
          </h3>
        </Link>
        <Link to={"https://github.com/indiedev2003"} target="_blank">
          <h3 className="link cursor-pointer hover:text-black hover:scale-125">
            Github
          </h3>
        </Link>
      </div>
      <Link to={"https://github.com/indiedev2003"} className="block sm:hidden" target="_blank">
        <h3 className="block sm:hidden text-lg cursor-pointer hover:text-black hover:scale-125">
          Github
        </h3>
      </Link>
    </header>
  );
}

export default Header;
