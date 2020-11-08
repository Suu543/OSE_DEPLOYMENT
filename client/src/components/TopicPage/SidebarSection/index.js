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
} from '../../Homepage/Sidebar/SidebarElements';

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
      <Icon onClick={toggle} isOpen={isOpen}>
        <CloseIcon onClick={toggle} />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/" onClick={toggle}>
            Home
          </SidebarLink>
          <SidebarLink to="/blogs" onClick={toggle}>
            Blogs
          </SidebarLink>
          <SidebarLink to="/campaigns" onClick={toggle}>
            Campaigns
          </SidebarLink>
          <SidebarLink to="/donation" onClick={toggle}>
            Donation
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
