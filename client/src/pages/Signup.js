import React, { Fragment } from 'react';
import ScrollToTop from '../components/ScrollToTop';
import Signup from '../components/AuthPage/Signup';

const SignupPage = () => {
  return (
    <Fragment>
      <ScrollToTop />
      <Signup />
    </Fragment>
  );
};

export default SignupPage;
