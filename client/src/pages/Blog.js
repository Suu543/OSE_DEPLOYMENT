import React, { Fragment } from 'react';
import NavSection from '../components/BlogPage/NavSection';
import HeroSection from '../components/BlogPage/HeroSection';
import InfoSection from '../components/BlogPage/InfoSection';
import FooterSection from '../components/Homepage/FooterSection';

const Blog = () => {
  return (
    <Fragment>
      <NavSection />
      <HeroSection />
      <InfoSection />
      <FooterSection />
    </Fragment>
  );
};

export default Blog;
