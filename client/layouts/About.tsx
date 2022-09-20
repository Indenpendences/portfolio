import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
type Props = {};

const About = function ({}: Props) {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        ABOUT
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        src="https://avatars.githubusercontent.com/u/108068667?v=4"
        alt=""
        className=" -mb-20 md:mb-0 flex-shrink-0 w-[200px] h-[200px] rounded-full object-cover md:rounded-full md:w-64 md:h-95 xl:w-[430px] xl:h-[550px] xl:rounded-lg cursor-pointer shadow-2xl"
      />
      <motion.div
        initial={{
          x: 200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        className="space-y-10 px-0 md:px-10"
      >
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]">litle</span>{" "}
          background
        </h4>
        <p className="text-base">
          Hi, my name is Nguyen Duy Khanh. Born on November 17, 2003. In Tu Ky -
          Hai Duong. Currently living in Hanoi and single. 2nd year student at
          Hai Noi University of Transport and Communications.
        </p>
      </motion.div>
    </div>
  );
};
export default About;
