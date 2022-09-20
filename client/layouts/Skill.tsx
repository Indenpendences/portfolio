import React from "react";
import { motion } from "framer-motion";

import SkillChild from "../layouts/SkillChild";
type Props = {};

const Skill = function ({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col relative min-h-screen text-center md:text-left md:flex-row max-w-[2000px] xl:px-10 justify-evenly xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        SKILL
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        {" "}
        Hover over skill for currency profiency
      </h3>
      <div className="grid grid-cols-4 gap-5">
        <SkillChild />
        <SkillChild />
        <SkillChild />
        <SkillChild />
        <SkillChild />
        <SkillChild />
        <SkillChild />
        <SkillChild />
      </div>
    </motion.div>
  );
};
export default Skill;
