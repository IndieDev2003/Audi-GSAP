import React from "react";
import Hero from "../components/Home/Hero";
import Features from "../components/Home/Features";
import Showcase from "../components/Home/Showcase";
import Contact from "../components/Home/Contact";

function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Showcase />
      <Contact/>
    </div>
  );
}

export default Home;
