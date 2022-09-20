import React from "react";
import { motion } from "framer-motion";
type Props = {};

const BackgroundCircles = function ({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="flex relative items-center justify-center"
    >
      <div className="border border-red-500 rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="rounded-full border border-[#333333] absolute w-[300px] h-[300px] mt-52 animate-pulse" />
      <div className="absolute rounded-full border border-[#333333] w-[500px] h-[500px] mt-52" />
      <div className="rounded-full opacity-20 border border-[#F7AB0A] absolute w-[650px] h-[650px] mt-52 animate-pulse" />
      <div className="absolute rounded-full border border-[#333333] w-[800px] h-[800px] mt-52" />
    </motion.div>
  );
};
export default BackgroundCircles;
