import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  position: sticky;
  z-index: 10;
  top: 0;
  right: 0;
  overflow: hidden;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavBlog = styled.nav`
  background: black;
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  position: sticky;
  z-index: 10;
  top: 0;
  right: 0;
  overflow: hidden;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;


export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(Link)`
  color: ${({ scrollNav }) => (scrollNav ? 'white': 'black')};
  cursor: pointer;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    /* display: block; */
    display: ${({ isOpen }) => (isOpen ? "none": "block")};
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 95%);
    font-size: 2.3rem;
    cursor: pointer;
    color: ${({ scrollNav }) => (scrollNav ? 'white': 'black')};  
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(Link)`
  color: ${({ scrollNav }) => (scrollNav ? 'white': 'black')};  
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavDropdown = styled.div`
  position: relative;

  &:hover {
    ul {
      display: flex;
    }
  }
`

export const NavBtnLink = styled(Link)`
  border-radius: 50px;
  color: ${({ scrollNav }) => (scrollNav ? 'black': 'white')};  
  background: ${({ scrollNav }) => (scrollNav ? 'white': 'black')};  
  white-space: nowrap;
  padding: 10px 22px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const NavDropdownUl = styled.ul`
  display: none;
  position: fixed;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  min-width: 100px;
  max-width: 100px;
  list-style: none;
  padding: 1.3rem;
  font-size: 1.3rem;
  border-radius: 15px;
  top: 60px;
  z-index: 9999;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);

  li {
      font-size: 1.3rem;
      color: black;
      cursor: pointer;
  }
`

export const NavLogoutBtn = styled.button`
  padding: 10px 22px;
  color: white;
  background: #42B0F5;
`