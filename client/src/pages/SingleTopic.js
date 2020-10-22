import React, { Fragment } from 'react';
import Navbar from '../components/Homepage/Navbar';
import ScrollToTop from '../components/ScrollToTop';
import SingleTopicPage from '../components/TopicPage/ReadTopicPage';

const SingleTopic = () => {
  return (
    <Fragment>
      <ScrollToTop />
      <Navbar />
      <SingleTopicPage />
    </Fragment>
  );
};

export default SingleTopic;
