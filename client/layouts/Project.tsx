import React from "react";
type Props = {};
const Project = function ({}: Props) {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        PROJECT
      </h3>
    </div>
  );
};

export default Project;