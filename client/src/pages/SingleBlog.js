import React, { Fragment, useEffect, useState } from 'react';
import ReadBlog from '../components/BlogPage/BlogReadPage';
import Sidebar from '../components/Homepage/Sidebar';
import ScrollToTop from '../components/ScrollToTop';
import BlogNavbar from "../components/BlogPage/BlogReadPage/BlogNavbar";
import BlogRelated from '../components/BlogPage/BlogReadPage/BlogRelated';

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
    </Fragment>
  );
};

export default SingleBlog;
