import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import SignupPage from './pages/Signup';
import SigninPage from './pages/Signin';
import blog from './pages/Blog';
import SingleTopic from './pages/SingleTopic';
import SingleBlog from './pages/SingleBlog';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/signup" component={SignupPage} exact />
      <Route path="/signin" component={SigninPage} exact />
      <Route path="/blogs" component={blog} exact />
      <Route path="/topic/:slug" component={SingleTopic} exact />
      <Route path="/blog/:slug" component={SingleBlog} exact />
    </Switch>
  </BrowserRouter>
);

export default Routes;
