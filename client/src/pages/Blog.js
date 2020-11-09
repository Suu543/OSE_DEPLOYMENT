import React, { Fragment, useState } from 'react';
import NavSection from '../components/BlogPage/NavSection';
import HeroSection from '../components/BlogPage/HeroSection';
import InfoSection from '../components/BlogPage/InfoSection';
import FooterSection from '../components/Homepage/FooterSection';
import Sidebar from '../components/Homepage/Sidebar';
import ScrollToTop from "../components/ScrollToTop"
import DonationSection from '../components/Homepage/DonationSection';

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
      <DonationSection imgUrl="https://images.unsplash.com/photo-1582033584350-36463a17f8b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"/>
      <FooterSection />
    </Fragment>
  );
};

export default Blog;
