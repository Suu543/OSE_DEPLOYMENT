import React, { Fragment, useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { Link } from "react-router-dom";
import { isAuth, signout } from '../../../actions/authHelpers';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon, 
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  NavDropdown,
  NavDropdownUl,
} from './NavbarElements';

const Navbar = ({ toggle, isOpen }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const [auth, setAuth] = useState({
    check: false,
    role: '',
    name: '',
  });

  const { check, role, name } = auth;

  useEffect(() => {
    const checkAuth = isAuth();
    console.log(checkAuth);
    if (checkAuth)
      setAuth({ check: true, role: checkAuth.role, name: checkAuth.name });
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  return (
    <Fragment>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome} scrollNav={scrollNav}>
              OSE
            </NavLogo>
            <MobileIcon scrollNav={scrollNav} onClick={toggle} isOpen={isOpen}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to="/about" scrollNav={scrollNav}>
                  About Us
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/topics" scrollNav={scrollNav}>
                  Topics
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/blogs" scrollNav={scrollNav}>
                  Blogs
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/campaigns" scrollNav={scrollNav}>
                  Campaigns
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              {!check && <NavBtnLink  scrollNav={scrollNav} to="/signin">Sign in</NavBtnLink>}
              {check && role === 'admin' && (
                <NavDropdown>
                  <NavBtnLink  scrollNav={scrollNav} to="/admin">
                    {name}
                  </NavBtnLink>
                  <NavDropdownUl>
                    <li onClick={() => {
                      signout(() => window.location.reload(false))
                    }}>Sign Out</li>
                  </NavDropdownUl>
                </NavDropdown>
              )}
              {check && role === 'user' && (
                <NavDropdown>
                  <NavBtnLink  scrollNav={scrollNav} to="/private">{name}</NavBtnLink>
                  <NavDropdownUl>
                    <li onClick={() => {
                      signout(() => window.location.reload(false))
                    }}>Sign Out</li>
                  </NavDropdownUl>
                </NavDropdown>
              )}
            </NavBtn>
          </NavbarContainer>
        </Nav>
    </Fragment>
  );
};

export default Navbar;
