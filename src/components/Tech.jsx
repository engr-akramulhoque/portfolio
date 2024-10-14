import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant(0.1)} className="pt-14">
        <p className={styles.sectionSubText}>Technologies I know</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>

      <div className="mt-10 sm:mt-20 flex flex-wrap justify-center gap-5 sm:gap-10">
        {technologies.map((technology) => (
          <div
            className="w-16 h-16 sm:w-28 sm:h-28 flex justify-center items-center"
            key={technology.name}
          >
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
