
import React, { Fragment, useState } from 'react';
import Sidebar from '../components/Homepage/Sidebar';
import Navbar from '../components/Homepage/Navbar';
import HeroSection from '../components/Homepage/HeroSection';
import Services from '../components/Homepage/Services';
import InfoSection from '../components/Homepage/InfoSection';
import FooterSection from '../components/Homepage/FooterSection';


import TopicSection from '../components/Homepage/TopicSection';
import CampaignSection from '../components/Homepage/CampaignSection';
import DonationSection from '../components/Homepage/DonationSection';
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
      <BlogSection />
      <CampaignSection />
      <DonationSection imgUrl="https://images.unsplash.com/photo-1576870755431-edd028371a7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80" />
      <FooterSection />
    </Fragment>
  );
};

export default Home;
