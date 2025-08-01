import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-dot-white/[0.1] bg-dot-black/[0.1] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h1 className="uppercase tracking-widest text-xs font-thin text-center text-blue-100 max-w-80">
            Crafting Web Magic
          </h1>
          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[27px] md:text-[38px] lg:text-[50px]"
          />
          <p className="text-center font-light md:tracking-wider lg:tracking-widest mb-4 text-sm md:text-md lg:text-lg">
            Hi! I&apos;m Kayode Victor, a Next.js Web Developer.
          </p>
          <a href="#about">
            <MagicButton
              position="right"
              icon={<FaLocationArrow />}
              title="View my work"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
