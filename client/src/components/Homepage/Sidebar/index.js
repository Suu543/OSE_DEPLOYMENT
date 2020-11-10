import React, { useState, useEffect, Fragment } from 'react';
import { isAuth, signout } from '../../../actions/authHelpers';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
  SidebarBtn
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle, about }) => {
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

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle} isOpen={isOpen}>
        <CloseIcon onClick={toggle} />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {
            about ? 
            <SidebarLink to="/about" onClick={toggle}>
              About Us
            </SidebarLink> :
            <SidebarLink to="/" onClick={toggle}>
              Home
            </SidebarLink>
          }
          <SidebarLink to="/blogs" onClick={toggle}>
            Blogs
          </SidebarLink>
          <SidebarLink to="/topics" onClick={toggle}>
            Topics
          </SidebarLink>
          <SidebarLink to="/campaigns" onClick={toggle}>
            Campaigns
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          {!check && <SidebarRoute to="/signin" onClick={toggle}>Sign In</SidebarRoute>}
          {check && role === 'admin' && 
          <Fragment>
            <SidebarRoute to="/admin">{name}</SidebarRoute>
            <SidebarBtn onClick={() => signout(() => window.location.reload(false))}>Sign Out</SidebarBtn>
          </Fragment>
          }
          {check && role === 'user' && 
          <Fragment>
            <SidebarRoute to="/private">{name}</SidebarRoute>
            <SidebarBtn onClick={() => signout(() => window.location.reload(false))}>Sign Out</SidebarBtn>
          </Fragment>
          }
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
