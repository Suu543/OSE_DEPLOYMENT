
import React, { Fragment, useState } from 'react';
import Sidebar from '../components/Homepage/Sidebar';
import Navbar from '../components/Homepage/Navbar';
import HeroSection from '../components/Homepage/HeroSection';
import Services from '../components/Homepage/Services';
import InfoSection from '../components/Homepage/InfoSection';
import FooterSection from '../components/Homepage/FooterSection';

import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
} from '../components/Homepage/InfoSection/Data';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Fragment>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
      <Services />
      <FooterSection />
    </Fragment>
  );
};

export default Home;
