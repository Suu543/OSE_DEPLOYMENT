import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9999;
`

export const Navbar = styled.div`
    background-color: #FFFFFF;
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
`
export const MenuBars = styled(Link)`
    margin-left: 2rem;
    font-size: 3rem;
    background: none;
    display: flex;
    align-items: center;
    gap: 2rem;     
    text-decoration: none;
    color: black;

    h1 {
        font-weight: 700;
        font-size: 3.4rem;

        a {
            text-decoration: none;
            font-weight: 700;
            font-size: 3.4rem;
            color: black;
        }
    }
`
export const Sidebar = styled.nav`
    background-color: #FFFFFF;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => sidebar ? '0' : '-100%' };
    transition: ${({ sidebar }) => sidebar ? '350ms' : '850ms'};
`
export const SidebarMenuItems = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 60vh;
`
export const SidebarToggle = styled.li`
    background-color: #FFFFFF;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
`
export const SidebarBars = styled(Link)`
    margin-left: 2rem;
    font-size: 3rem;
    background: none;
`

export const SidebarText = styled.li`
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 8px 0px 8px 16px;
    list-style: none;
    height: 60px;

    a {
        text-decoration: none;
        color: black;
        font-size: 25px;
        width: 95%;
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 16px;
        border-radius: 4px;

        &:hover {
            background-color: #1a83ff;
        }
    }

    span {
        font-size: 25px;
        margin-left: 16px;
    }
`
