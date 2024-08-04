import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "@/components/ui/MagicButton";

const Footer = () => {
  return (
    <footer
      className="w-full pt-20 lg:h-[520px] relative overflow-hidden mt-auto"
      id="contact"
    >
      <div className="w-full absolute left-0 bottom-0">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-70"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Elevate <span className="text-purple">your</span> digital presence.
        </h1>
        <p className="text-white-200 md:mt-10 my-3 text-center">
          Contact me today to explore how we can work together to achieve your
          objectives.
        </p>

        <a href="mailto:kv4biz@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
        <p className="my-3">or</p>
        <div className="flex items-center md:gap-5 gap-6 mt-3">
          {socialMedia.map((social) => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <social.icon />
            </a>
          ))}
        </div>
      </div>

      <div className="flex mt-10 mb-4 md:mb-0 md:flex-row flex-col justify-center items-center">
        <p className="md:text-sm text-xs md:font-normal font-light">
          Copyright © 2024 Kayode Victor
        </p>
      </div>
    </footer>
  );
};

export default Footer;
