import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap/gsap-core";

gsap.registerPlugin(ScrollTrigger, SplitText);

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  return (
   <main>
    <Navbar />
    <Hero/>
    <div className="h-dvh bg-black" />
   </main>
  );
};

export default App;
