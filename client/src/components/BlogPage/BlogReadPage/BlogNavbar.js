import React, { Fragment, useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { isAuth, signout } from '../../../actions/authHelpers';
import {
  NavBlog,
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
} from '../../Homepage/Navbar/NavbarElements';

const BlogNavbar = ({ toggle }) => {
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
      <IconContext.Provider value={{ color: '#fff' }}>
        <NavBlog scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              OSE
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to="/topics">
                  Topics
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/Blogs">
                  Blogs
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/campaigns">
                  Campaigns
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/donation">
                  Donate
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              {!check && <NavBtnLink to="/signin">Sign in</NavBtnLink>}
              {check && role === 'admin' && (
                <NavDropdown>
                  <NavBtnLink to="/admin">{name}</NavBtnLink>
                  <NavDropdownUl>
                    <li onClick={() => {
                      signout(() => window.location.reload(false))
                    }}>Sign Out</li>
                  </NavDropdownUl>
                </NavDropdown>
              )}
              {check && role === 'user' && (
                <NavDropdown>
                  <NavBtnLink to="/private">{name}</NavBtnLink>
                  <NavDropdownUl>
                    <li onClick={() => {
                      signout(() => window.location.reload(false))
                    }}>Sign Out</li>
                  </NavDropdownUl>
                </NavDropdown>
              )}
            </NavBtn>
          </NavbarContainer>
        </NavBlog>
      </IconContext.Provider>
    </Fragment>
  );
};

export default BlogNavbar;
