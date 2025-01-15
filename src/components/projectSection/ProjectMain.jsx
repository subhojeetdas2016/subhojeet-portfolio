import React from "react";
import ProjectText from "./ProjectText";
import SingleProject from "./SingleProject";
import {motion} from 'framer-motion'
import {fadeIn} from '../../framerMotion/variants'
const projects = [
    {
        name: "JobHunt",
        stack: "MERN, Vite, shadcn.ui, Authentication",
        align: "right",
        image: "/images/jobhunt.jpg",
        link: "https://github.com/subhojeetdas2016/JobHunt",
      },
  {
    name: "Chat App",
    stack: "MERN, Socket.io, TailwindCSS, Daisy UI",
    align: "left",
    image: "/images/chat.jpeg",
    link: "https://github.com/subhojeetdas2016/chatApplication",
  },
  {
    name: "Weather App",
    stack: "Html, CSS, JavaScript, API",
    align: "right",
    image: "/images/weather.png",
    link: "https://subhojeetdas2016.github.io/Weather-App/",
  },
];

const ProjectMain = () => {
  return (
    <div id='projects' className="max-w-[1300px] ms-auto px-4">
      <motion.div
      variants={fadeIn('up', 0.2)} initial='hidden' whileInView='show' viewport={{once:false, amount:0}} 
      >
      <ProjectText />
      </motion.div>
      <div className="flex flex-col gap-20 mx-auto mt-12">
        {projects.map((item,index)=>{
            return <SingleProject 
            key={index} 
            name={item.name} 
            stack={item.stack} 
            align={item.align} 
            image={item.image}
            link={item.link} />
        })}
      </div>
    </div>
  );
};

export default ProjectMain;
