import type { NextPage } from "next";
import Meta from "../components/Meta";
import Header from "../layouts/Header";
import Hero from "../layouts/Hero";
import About from "../layouts/About";
import Experience from "../layouts/Experience";
import Skill from "../layouts/Skill";
import Project from "../layouts/Project";
import Contact from "../layouts/Contact";
const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 ">
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
      <section id="skill" className="snap-center">
        <Skill />
      </section>
      <section id="project" className="snap-center">
        <Project />
      </section>
      <section id="contact" className="snap-center">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
