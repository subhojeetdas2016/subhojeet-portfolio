import React from 'react';
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import {motion} from 'framer-motion'
import {fadeIn} from '../../framerMotion/variants'
const SingleProject = ({ name, stack, align, image, link }) => {
  return (
    <motion.div
    variants={fadeIn('up', 0.2)} initial='hidden' whileInView='show' viewport={{once:false, amount:0}}
      className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-end`}
    >
      {/* Project Text Section */}
      <div>
        <h2 className="md:text-3xl sm:text-2xl text-orange">{name}</h2>
        <h2
          className={`text-xl font-thin text-white font-special sm:text-center ${
            align === "left" ? "md:text-right" : "md:text-left"
          }`}
        >
          {stack}
        </h2>
        {/* View Button */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer ${
            align === "left" ? "md:justify-self-end" : "md:justify-self-start"
          }`}
        >
          View <BiSolidRightTopArrowCircle />
        </a>
      </div>

      {/* Image Section */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative max-h-[250px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 border border-white cursor-pointer"
      >
        <div className="absolute inset-0 bg-cyan opacity-50 hover:opacity-0 transition-all duration-500 z-10"></div>
        <img
          className="h-[250px] w-full object-cover z-0"
          src={image}
          alt={name}
        />
      </a>
    </motion.div>
  );
};

export default SingleProject;
