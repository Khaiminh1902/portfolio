import { FaLocationArrow } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="flex flex-col items-center justify-center">
        <a href="mailto:khaiminhnguyen1902@gmail.com">
          <MagicButton
            title="Contact Me"
            icon={<IoIosMail />}
            position="right"
          />
        </a>
      </div>
      <div className="gap-2 flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-sm text-sm md:font-normal font-light">
          Copyright © 2024 Tony Nguyen
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              href={info.link}
              key={info.id}
              className="rounded-[10px] w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;