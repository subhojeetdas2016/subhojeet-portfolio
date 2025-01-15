import React from "react";
import SkillText from "./SkillText";
import AllSkill from "./AllSkill";
import AllSkillSm from "./AllSkillSm";
import {motion} from 'framer-motion'
import {fadeIn} from '../../framerMotion/variants'
const SkillMain = () => {
  return (
    <div id="skills">
      <div className="max-w-[1300px] px-5 mx-auto min-h-[500px] relative overflow-hidden">
        <motion.div variants={fadeIn('down', 0.2)} initial='hidden' whileInView='show' viewport={{once:false, amount:0}} >
        <SkillText />
        </motion.div>
        <div className=" bottom-[50px] absolute left-[50%] -translate-x-[50%] lg:block sm:hidden">
          <AllSkill />
        </div>
      <div className="sm:block lg:hidden">
        <AllSkillSm/>
      </div>
    </div>
    </div>
  );
};

export default SkillMain;
