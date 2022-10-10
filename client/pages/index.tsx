import type { NextPage } from "next";
import Meta from "../components/Meta";
import Header from "../layouts/Header";
import Hero from "../layouts/Hero";
import About from "../layouts/About";
import Experience from "../layouts/Experience";
import Skill from "../layouts/Skill";
import Project from "../layouts/Project";
import Contact from "../layouts/Contact";
import Link from "next/link";

const Home: NextPage = function () {
  return (
    <div className="bg-[#15202b] text-white h-screen snap-y snap-mandatory overflow-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 ">
      <Meta title="Khanh's Portfolio" />
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      <section id="skill" className="snap-start">
        <Skill />
      </section>
      <section id="project" className="snap-start">
        <Project />
      </section>
      <section id="contact" className="snap-start">
        <Contact />
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src="https://avatars.githubusercontent.com/u/108068667?v=4"
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;
