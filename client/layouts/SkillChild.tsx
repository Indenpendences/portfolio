import React from "react";
import { motion } from "framer-motion";
type Props = {
  deractionLeft?: boolean;
};

const SkillChild = ({ deractionLeft }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: deractionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        src="https://avatars.githubusercontent.com/u/108068667?v=4"
        alt=""
        className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />

      <div className="absolute opacity-0 group-hover:opacity-80 transition rounded-full duration-300 ease-in-out hover:rounded-full group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
};
export default SkillChild;
