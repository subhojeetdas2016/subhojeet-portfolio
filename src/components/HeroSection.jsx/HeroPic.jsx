import React from 'react';
import { PiHexagonThin } from "react-icons/pi";
import {motion} from 'framer-motion'
import {fadeIn} from '../../framerMotion/variants'

const HeroPic = () => {
  return (
    <div className="h-[400px] flex items-center justify-center relative">
      <motion.img variants={fadeIn('left', 0.2)} initial='hidden' whileInView='show' viewport={{once:false, amount:0}}  className="max-h-[300px] w-auto animate-bounce-low-slow cursor-pointer" src="images/croped.jpg" alt="" />
      <div className="absolute -z-10 flex justify-center items-center animate-spin-slow">
        <PiHexagonThin className="h-[430px] w-auto text-[#8902ce] blur-sm" />
      </div>
    </div>
  );
};

export default HeroPic;
