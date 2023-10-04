import React from "react";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";

const SideBar = () => {
  return (
    <div className="z-[999] flex flex-row gap-5 mt-28 items-center h-[4rem] lg:flex-col lg:fixed lg:right-[4%] lg:h-[50%]">
      <hr className="lg:bg-black lg:h-32 lg:w-0.5" />
      <a
        href="https://www.linkedin.com/in/chunyou-su-267225250/"
        className="p-2 rounded-full bg-[#2b2a2f] text-white focus:scale-110 outline-none hover:scale-110 hover:bg-gray-950"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/chunsu2019"
        className="p-2 rounded-full bg-[#2b2a2f] focus:scale-110 text-white outline-none hover:scale-110 hover:bg-gray-950"
      >
        <BsGithub />
      </a>

      <a
        href="#twitter"
        className="p-2 rounded-full bg-[#2b2a2f] focus:scale-110 text-white outline-none hover:scale-110 hover:bg-gray-950"
      >
        <BsTwitter />
      </a>
      <hr className="lg:bg-black lg:h-32 lg:w-0.5" />
    </div>
  );
};

export default SideBar;
