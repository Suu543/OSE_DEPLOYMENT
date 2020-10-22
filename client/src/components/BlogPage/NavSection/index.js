import React, { Fragment } from 'react';
import { Nav, NavLink, Bars, NavMenu, NavLogo } from './NavElements';

const NavSection = () => {
  return (
    <Fragment>
      <Nav>
        <NavLogo>
          <NavLink to="/">
            <h1>OSE</h1>
          </NavLink>
        </NavLogo>
        <Bars />
        <NavMenu>
          <NavLink to="/about-us">About Us</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/community">Community</NavLink>
          <NavLink to="/donate">Donate</NavLink>
          <NavLink to="/signin">Sign in</NavLink>
        </NavMenu>
      </Nav>
    </Fragment>
  );
};

export default NavSection;
