"use client";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import { FaDownload } from "react-icons/fa";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["NextJS", "TailwindCSS", "Typescript"];
  const rightLists = ["Express.js", "Prisma", "GraphQL"];
  const leftLists2 = ["ReactJS", "Sentry", "JavaScript"];
  const rightLists2 = ["Node.js", "MongoDB", "REST API"];

  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("vk4biz@gmail.com");
    setCopied(true);
  };
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "./cv.pdf";
    link.download = "Kayode_Victor_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.2] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6}` && "flex justify-center h-full"}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div
            className={`font-sans  text-sm z-10 ${
              id === 3
                ? "text-white font-medium tracking-widest bg-purple/50"
                : "text-[#C1C2D3] font-light tracking-wide"
            }`}
          >
            {description}
          </div>
          <div
            className={`font-sans text-lg ${
              id === 2 ? " lg:text-2xl text-center" : "lg:text-3xl"
            } ${id === 5 ? "lg:max-w-96" : ""} max-w-100 font-bold z-10`}
          >
            {title}
          </div>

          {id === 2 && <GridGlobe />}
          {id === 3 && (
            <div className="flex gap-8 w-fit absolute items-center -left-20">
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-5">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="py-2 px-3 text-xs lg:text-md opacity-20 
                    lg:opacity-40 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className=" py-2 px-3 rounded-xs text-center bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-5">
                <span className=" py-2 px-3 rounded-xs text-center bg-[#10132E]"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="py-2 px-3 text-xs lg:text-md opacity-20 
                    lg:opacity-40 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-5">
                {leftLists2.map((item, i) => (
                  <span
                    key={i}
                    className="py-2 px-3 text-xs lg:text-md opacity-20 
                    lg:opacity-40 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className=" py-2 px-3 rounded-xs text-center bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-5">
                <span className=" py-2 px-3 rounded-xs text-center bg-[#10132E]"></span>
                {rightLists2.map((item, i) => (
                  <span
                    key={i}
                    className="py-2 px-3 text-xs lg:text-md opacity-20 
                    lg:opacity-40 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 4 && (
            <div className="mt-2">
              <MagicButton
                title="Download CV"
                position="right"
                icon={<FaDownload />}
                handleClick={handleDownloadCV}
                otherClasses={`bg-[#161A31]`}
              />
            </div>
          )}
          {id === 6 && (
            <div className="mt-4 relative">
              <div className={`absolute -bottom-5 right-0`}>
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData: animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                />
              </div>
              <MagicButton
                title={copied ? "Email copied" : "Copy my email"}
                icon={<IoCopyOutline />}
                position="left"
                otherClasses={`bg-[#161A31]`}
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
