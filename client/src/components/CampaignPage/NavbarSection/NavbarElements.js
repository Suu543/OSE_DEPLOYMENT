import styled from "styled-components";
import { Link } from "react-router-dom";

export const CampaignNavbarContainer = styled.div`
    min-height: 80px;
    width: 100%;
    font-size: 1.6rem;
    position: sticky;
    z-index: 100;
    display: flex;
    align-items: center;
    top: 0;
    right: 0;
    overflow: hidden;
    background: white;
`

export const CampaignNavWrapper = styled.div`
    width: 95%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media all and (max-width: 850px) {
        width: 100%;
    }
`

export const CampaignNavbarLogo = styled(Link)`
  color: black;
  cursor: pointer;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;

  svg {
      font-size: 3rem;
      font-weight: 700;
  }
`

export const CampaignNavbarTitle = styled(Link)`
    font-size: 3rem;
    color: black;
    text-decoration: none;
    font-weight: bold;
    margin-left: 1.5rem;
`

export const CampaignNavbarRightLink = styled(Link)`
    color: black;
    font-weight: 500;
    font-size: 2rem;
    text-decoration: none;
`

export const CampaignNavSidebar = styled.ul`
    position: fixed;
    left: 0;
    transform: ${({ open }) => (open ? "translate(0, 0)" : "translate(-100vw, 0)")};
    /* left: ${({ open }) => (open ? "0" : "-100vw")}; */
    top: 8vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 90vh;    
    background: black;
    z-index: 1000;
    transition: transform 0.5s ease-in-out;
    padding: 5rem;
    list-style: none;
`

export const CampaignNavSidebarList = styled.li`
    cursor: pointer;
`

export const CampaignNavSidebarLink = styled(Link)`
        text-decoration: none;
        color: white;
        font-size: 4rem;
`;