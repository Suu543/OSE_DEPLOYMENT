import React, { Fragment, useState, useEffect } from 'react';
import { isAuth } from '../../../actions/authHelpers';
import { Nav, NavLink, Bars, NavMenu, NavLogo } from './NavElements';

const NavSection = ({ toggle }) => {
  const [auth, setAuth] = useState({
    check: false,
    role: '',
    name: '',
  });

  const { check, role, name } = auth;
  
  useEffect(() => {
    const checkAuth = isAuth();

    if (checkAuth) {
      setAuth({ check: true, role: checkAuth.role, name: checkAuth.name })
    }

  }, [])

  return (
    <Fragment>
      <Nav>
        <NavLogo>
          <NavLink to="/">
            <h1>OSE</h1>
          </NavLink>
        </NavLogo>
        <Bars onClick={toggle}/>
        <NavMenu>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/campaigns">Campaigns</NavLink>
          <NavLink to="/topics">Topics</NavLink>
          <NavLink to="/about-us">About Us</NavLink>
          {!check && <NavLink to="/signin">Sign in</NavLink>}
          {check && role === 'admin' && (
            <NavLink to="/admin">{name}</NavLink>
          )}
          {check && role === 'user' && (
            <NavLink to="/private">{name}</NavLink>
          )}
        </NavMenu>
      </Nav>
    </Fragment>
  );
};

export default NavSection;
