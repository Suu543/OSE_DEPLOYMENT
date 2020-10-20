import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import SigninPage from './pages/Signin';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/signin" component={SigninPage} exact />
    </Switch>
  </BrowserRouter>
);

export default Routes;
