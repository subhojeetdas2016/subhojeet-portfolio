import React from "react";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { BiLogoRedux } from "react-icons/bi";
import { BiLogoTailwindCss } from "react-icons/bi";
import SingleSkill from "./SingleSkill";
import {motion} from 'framer-motion'
import {fadeIn} from '../../framerMotion/variants'
import { div } from "motion/react-client";
const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "ReactJs",
    icon: FaReact,
  },
  {
    skill: "NodeJs",
    icon: FaNodeJs,
  },
  {
    skill: "ExpressJs",
    icon: SiExpress,
  },
  {
    skill: "MongoDb",
    icon: SiMongodb,
  },
  {
    skill: "ExpressJs",
    icon: BiLogoRedux,
  },
  {
    skill: "TailwindCss",
    icon: BiLogoTailwindCss,
  },
];
const AllSkill = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div variants={fadeIn("up", `0.${index}`)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }} >
              <SingleSkill key={index} text={item.skill} imgSvg={<item.icon />} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkill;
