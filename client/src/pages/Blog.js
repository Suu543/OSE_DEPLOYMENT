import React, { Fragment, useState } from 'react';
import NavSection from '../components/BlogPage/NavSection';
import HeroSection from '../components/BlogPage/HeroSection';
import InfoSection from '../components/BlogPage/InfoSection';
import FooterSection from '../components/Homepage/FooterSection';
import Sidebar from '../components/Homepage/Sidebar';
import ScrollToTop from "../components/ScrollToTop"

const Blog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Fragment>
      <ScrollToTop />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavSection toggle={toggle} />
      <HeroSection />
      <InfoSection />
      <FooterSection />
    </Fragment>
  );
};

export default Blog;
