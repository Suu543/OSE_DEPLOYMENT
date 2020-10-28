import React, { useState, useEffect } from 'react';
import { isAuth } from '../../../actions/authHelpers';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from './SidebarElements';

// url을 추적해서 url이 변경되면 isOpen을 false로 변경하는 방식을 이용할 수 있지 않을까?
const Sidebar = ({ isOpen, toggle }) => {
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
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/about" onClick={toggle}>
            About Us
          </SidebarLink>
          <SidebarLink to="/contact" onClick={toggle}>
            Contact
          </SidebarLink>
          <SidebarLink to="/blogs" onClick={toggle}>
            Blogs
          </SidebarLink>
          <SidebarLink to="/community" onClick={toggle}>
            Community
          </SidebarLink>
          <SidebarLink to="/donate" onClick={toggle}>
            Donate
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          {!check && <SidebarRoute to="/signin" onClick={toggle}>Sign In</SidebarRoute>}
          {check && role === 'admin' && <SidebarRoute to="/admin">{name}</SidebarRoute>}
          {check && role === 'user' && <SidebarRoute to="/private">{name}</SidebarRoute>}
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
