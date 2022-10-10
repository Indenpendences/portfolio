import react from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

const Header = function (props: Props) {
  return (
    <header className="sticky flex top-0 items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://github.com/IndependenceNguyen"
          bgColor="transparent"
          fgColor="gray"
        />
        <SocialIcon
          url="https://www.facebook.com/nguyenkhanh17112003"
          bgColor="transparent"
          fgColor="gray"
        />
        <SocialIcon
          url="https://youtube.com"
          bgColor="transparent"
          fgColor="gray"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center text-gray-300 cursor-pointerS"
      >
        <SocialIcon
          className="cursor-pointer hover:text-[#F7AB0A]"
          network="email"
          bgColor="transparent"
          fgColor="gray"
        />
        <SocialIcon
          className="cursor-pointer"
          network="twittere"
          bgColor="transparent"
          fgColor="gray"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          GET IN TOUCH
        </p>
      </motion.div>
    </header>
  );
};
export default Header;
