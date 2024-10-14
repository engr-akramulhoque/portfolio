import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="w-full sm:w-[250px]">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-8 sm:px-12 min-h-[240px] sm:min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt={title}
          className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
        />
        <h3 className="text-white text-[18px] sm:text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="pt-14">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[14px] sm:text-[16px] max-w-full sm:max-w-2xl leading-[22px] sm:leading-[30px] text-justify"
      >
        I'm a skilled software developer with extensive experience in PHP and
        Laravel, specializing in building robust REST APIs and scalable backend
        systems. I also have a strong front-end background with expertise in
        JavaScript frameworks like React.js and Vue.js. I'm a quick learner and
        work closely with clients to deliver efficient, maintainable, and
        user-friendly applications that address real-world challenges. Let's
        collaborate to turn your ideas into high-performing solutions!
      </motion.p>

      <div className="mt-10 sm:mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {services.map((service, index) => (
          <ServiceCard key={service.id} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
