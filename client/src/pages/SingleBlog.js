import React, { Fragment, useEffect, useState } from 'react';
import ReadBlog from '../components/BlogPage/BlogReadPage';
import Sidebar from '../components/Homepage/Sidebar';
import ScrollToTop from '../components/ScrollToTop';
import BlogNavbar from "../components/BlogPage/BlogReadPage/BlogNavbar";
import BlogRelated from '../components/BlogPage/BlogReadPage/BlogRelated';
import FooterSection from '../components/Homepage/FooterSection';
import DonationSection from '../components/Homepage/DonationSection';

const SingleBlog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };


  return (
    <Fragment>
      <ScrollToTop />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <BlogNavbar toggle={toggle} />
      <ReadBlog  isOpen={isOpen} toggle={toggle} />
      <BlogRelated />
      <DonationSection imgUrl="https://images.unsplash.com/photo-1584267695448-fc19894d579e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
      <FooterSection />
    </Fragment>
  );
};

export default SingleBlog;
