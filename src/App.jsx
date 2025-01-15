import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavbarMain from './components/navbar/NavbarMain';
import HeroMain from './components/HeroSection.jsx/HeroMain';
import SubHeroSection from './components/HeroSection.jsx/SubHeroSection';
import AboutMeMain from './components/aboutme/AboutMeMain';
import SkillMain from './components/SkillSection/SkillMain';
import SubSkill from './components/SkillSection/SubSkill';
import ProjectMain from './components/projectSection/ProjectMain';
import ContactMeMain from './components/contactme/ContactMeMain';
import FooterMain from './components/footer/FooterMain';
import FooterLine from './components/footer/FooterLine';

function App() {

  return (
    <main className='font-body '>
      <NavbarMain/>
      <HeroMain/>
      <SubHeroSection/>
      <AboutMeMain/>
      <SkillMain/>
      <SubSkill/>
      <ProjectMain/>
      <ContactMeMain/>
      <FooterMain/>
      <FooterLine/>
    </main>
  )
}

export default App
