
import React, { Fragment, useState } from 'react';
import Sidebar from '../components/Homepage/Sidebar';
import Navbar from '../components/Homepage/Navbar';
import HeroSection from '../components/Homepage/HeroSection';
import Services from '../components/Homepage/Services';
import InfoSection from '../components/Homepage/InfoSection';
import FooterSection from '../components/Homepage/FooterSection';


import TopicSection from '../components/Homepage/TopicSection';
import CampaignSection from '../components/Homepage/CampaignSection';
import BlogSection from "../components/Homepage/BlogSection";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Fragment>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar  isOpen={isOpen} toggle={toggle} />
      <HeroSection />
      <Services />
      <TopicSection />
      <CampaignSection />
      <BlogSection />
      <FooterSection />
    </Fragment>
  );
};

export default Home;
