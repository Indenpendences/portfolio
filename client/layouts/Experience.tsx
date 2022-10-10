import { motion } from "framer-motion";
import React from "react";
import ExperienceCard from "../layouts/ExperienceCard";
type Props = {};
const Experience = function ({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{
        duration: 1.5,
      }}
      whileInView={{
        opacity: 1,
      }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        EXPERIENCE
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
};
export default Experience;
