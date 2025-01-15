import React from 'react';
import HeroText from './HeroText';
import HeroRadient from './HeroRadient';
import HeroPic from './HeroPic';

const HeroMain = () => {
  return (
    <div className="pt-40 pb-16">
      <div className="flex md:flex-row sm:flex-col-reverse w-full max-w-[90%] lg:max-w-[1300px] mx-auto justify-between items-center relative px-4">
        <HeroText />
        <div className="flex-grow-0 flex-shrink-0 md:w-[50%] w-full">
          <HeroPic />
          <HeroRadient />
        </div>
      </div>
    </div>
  );
};

export default HeroMain;
