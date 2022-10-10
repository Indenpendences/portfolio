import React from "react";
import Image from "next/image";
import Link from "next/link";
import BackgroundCircles from "./BackgroundCircles";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Avatar from "../assets/images/IDP.png";

type Props = {};

const Hero = function ({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name is Nguyễn Khánh !",
      "<HelloWorld !!!/>",
      "I love Hoa ! ^.^",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="flex flex-col h-screen space-y-0 items-center justify-center text-center overflow-hidden ">
      <BackgroundCircles />
      <div className="cursor-pointer relative -top-[210px]">
        <Image
          className="relative flex items-center rounded-full w-[32px] h-[32px] my-auto object-cover -top-36 shadow-lg"
          src={Avatar}
          alt="Avatar"
        />
      </div>

      <h2 className="relative -top-[210px] text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
        SoftWare Enginer
      </h2>
      <h1 className="relative -top-[210px] text-5xl lg:text-6xl font-semibold px-10">
        <span className="mr-3">{text}</span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>
      <div className="mt-5 flex relative -top-[200px] transition-shadow cursor-pointer z-100">
        <Link href="#about">
          <div className="heroButton ">ABOUT</div>
        </Link>
        <Link href="#experience">
          <div className="heroButton ">EXPERIENCE</div>
        </Link>
        <Link href="#skill">
          <div className="heroButton">SKILL</div>
        </Link>
        <Link href="#project">
          <div className="heroButton ">PROJECT</div>
        </Link>
        <Link href="#contact">
          <div className="heroButton ">CONTACT</div>
        </Link>
      </div>
    </div>
  );
};
export default Hero;
