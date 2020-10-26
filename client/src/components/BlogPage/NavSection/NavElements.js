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

  @media all and (max-width: 1100px ){
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

  &:active {
    color: #15cefc;
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

  a {
    &:nth-child(5) {
      background: #4bcc8c;
      color: white;
      padding: 1.5rem;

      &:hover {
        transition: all 0.3s ease-in-out;
        background: #0056b3;
      }
    }
  }
`;
