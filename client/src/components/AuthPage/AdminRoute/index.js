import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuth } from '../../../actions/authHelpers';

const AdminRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuth() && isAuth().role === 'admin' ? (
        <Component {...props} />
      ) : isAuth() && isAuth().role === 'user' ? (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      ) : (
        <Redirect
          to={{
            pathname: '/signin',
            state: { from: props.location },
          }}
        />
      )
    }
  ></Route>
);

export default AdminRoute;
