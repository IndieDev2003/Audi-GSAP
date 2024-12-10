import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="h-[30vh] flex flex-col gap-3 w-full items-center justify-between">
      <div className="px-10 grid sm:grid-cols-[0.5fr_1.5fr_1fr_1fr_1fr] items-center justify-start gap-6 w-full">
        <img src={logo} className="h-20" alt="" />
        <p className="text-[10px]">
          Audi of America takes efforts to ensure the accuracy of information on
          the general vehicle information pages. Models are shown for
          illustration purposes only and may include features that are not
          available on the US model. As errors may occur or availability may
          change, please see dealer for complete details and current model
          specifications.
        </p>
        <ul>
          <li className="text-lg">Explore More</li>
          <li>Models</li>
          <li>Audi Sport</li>
        </ul>
        <ul>
          <li className="text-lg">Support</li>
          <li>contact us</li>
          <li>Help</li>
        </ul>
        <ul>
          <Link target="_blank" to='https://github.com/indiedev2003'><li>Github</li></Link>
          <Link target="_blank" to='https://instagram.com/_gagansuman_'><li>Instagram</li></Link>
          <Link target="_blank" to='https://linkedin.com/in/gagan-suman'><li>LinkedIn</li></Link>
        </ul>
      </div>
      <div className="text-sm sm:text-lg border-t w-full text-center py-3">
        <p>2024 Audi of America - All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
