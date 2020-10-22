import React, { Fragment } from 'react';
import Navbar from '../components/Homepage/Navbar';
import ReadBlog from '../components/BlogPage/BlogReadPage';

const SingleBlog = () => {
  return (
    <Fragment>
      <Navbar />
      <ReadBlog />
    </Fragment>
  );
};

export default SingleBlog;
