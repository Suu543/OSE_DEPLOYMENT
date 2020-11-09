import React, { Fragment, useState, useEffect } from 'react';
import { isAuth, signout } from '../../../actions/authHelpers';
import { Link } from "react-router-dom";
import { 
  Nav, 
  NavLink, 
  Bars, 
  NavMenu, 
  NavLogo, 
  NavDropdown,
  NavDropdownUl 
} from './NavElements';

const NavSection = ({ toggle }) => {
  const [auth, setAuth] = useState({
    check: false,
    role: '',
    name: '',
  });

  const [dropdown, setDropdown] = useState(false);

  const dropdownToggle = () => {
    setDropdown(!dropdown);
  }

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
            <NavDropdown onClick={dropdownToggle}>
              <h4 to="/admin">{name}</h4>
              <NavDropdownUl dropdown={dropdown}>
                <Link to="/admin">{name}</Link>
                <li onClick={() => signout(() => window.location.reload(false))}>Sign Out</li>
              </NavDropdownUl>
            </NavDropdown>
          )}
          {check && role === 'user' && (
            <NavDropdown onClick={dropdownToggle}>
              <Link to="/private">{name}</Link>
              <NavDropdownUl dropdown={dropdown}>
                <li onClick={() => signout(() => window.location.reload(false))}>Sign Out</li>
              </NavDropdownUl>
            </NavDropdown>
          )}
        </NavMenu>
      </Nav>
    </Fragment>
  );
};

export default NavSection;
