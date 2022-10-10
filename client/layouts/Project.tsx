import React from "react";

import { motion } from "framer-motion";
type Props = {};
const Project = function ({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
    initial={{
      opacity: 0
    }}
    whileInView= {{
      opacity: 1
    }}
    transition= {{
      duration:1.5
    }}
    className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        PROJECT
      </h3>
      <div className="relative ư-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thumb-rounded">
        {projects.map((project, index) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center  justify-center p-20 md:p-44 h-screen">
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1.5,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              src="https://avatars.githubusercontent.com/u/108068667?v=4"
              alt=""
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-orange-500">
                  Case study {index + 1} of {projects.length}
                </span>
                : UPS clone{" "}
              </h4>
              <p className='text-lg text-center md:text-left'>
                This includes a React component which can be used within your
                project. You can pass in a onInit function which will be called
                with the instance of the typewriter so you can use the
                typewriter core API.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
};

export default Project;
