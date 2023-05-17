"use client";

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
import {
  About,
  AtmBooth,
  Banks,
  CarouselImage,
  Download,
  Features,
} from "./components";

const HomePage = () => {
 
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    
      <div className=" w-full overflow-hidden ">
        <CarouselImage />
        <Features />
        <About />
        <Banks />
        <AtmBooth />
        <Download />
      </div>
    
  );
};

export default HomePage;
