import styled from "styled-components";
import { Link } from "react-router-dom";

export const CampaignNavbarContainer = styled.div`
    min-height: 80px;
    width: 100%;
    font-size: 1.6rem;
    position: sticky;
    z-index: 9999;
    display: flex;
    align-items: center;
    top: 0;
    right: 0;
    overflow: hidden;
    background: #000000;
`

export const CampaignNavWrapper = styled.div`
    width: 95%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const CampaignNavbarLogo = styled(Link)`
  color: #fff;
  cursor: pointer;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;

  svg {
      font-size: 4rem;
  }
`

export const CampaignNavbarTitle = styled(Link)`
    font-size: 4rem;
    color: white;
    text-decoration: none;
`

export const CampaignNavbarSignin = styled(Link)`
    color: white;
    font-size: 4rem;
    text-decoration: none;
`