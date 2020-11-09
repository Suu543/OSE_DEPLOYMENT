import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
  /* background: #000; */
  max-width: 1200px;
  margin: auto;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8vh 0;
  z-index: 10;

  @media all and (max-width: 1100px){
    width: 95%;
    margin: auto;
  }
`;

export const NavLogo = styled.div`
  flex: 1 1 auto;

  a {
    font-size: 2.5rem;
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #172735;
  opacity: 0.8;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 1.4rem;
  font-family: sans-serif;
  font-weight: 700;
  transition: all 0.2s ease-in-out;

  &:active {
    color: #15cefc;
  }

  &:hover {
    padding: 2px;
    border-bottom: 2px solid #6FD6A3;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: black;

  @media screen and (max-width: 768px) {
    display: block;
    margin-right: 2rem;
    /* transform: translate(-100%, 75%); */
    font-size: 3rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  flex: 1 1 auto;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavDropdown = styled.div`
  position: relative;

  a {
    font-size: 1.4rem;
    color: #172735;
    font-family: sans-serif;
    font-weight: 700;
    text-decoration: none;
  }

  h4 {
    font-size: 2rem;
    cursor: pointer;
  }
`;

export const NavDropdownUl = styled.ul`
  position: absolute;
  display: ${({ dropdown }) => (dropdown ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  min-width: 100px;
  max-width: 100px;
  min-height: 10vh;
  top: 24px;
  bottom: -20px;
  right: 0;
  background: black;
  color: white;
  list-style: none;

  a {
    text-decoration: none;
    color: white;
  }

  li {
    font-size: 1.4rem;
    font-weight: 700;
    color: white;
    font-family: sans-serif;
    cursor: pointer;
  }

`