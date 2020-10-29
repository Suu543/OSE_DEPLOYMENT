import styled from "styled-components";

/*
Campaign Container
    - CampaignNavbar Container

*/

export const CampaignContainer = styled.div`
`;

export const CampaignNavbarWrapper = styled.div`
    height: 8vh;
    width: 100%;
    display: flex;
    position: sticky;
    top: 0;
    z-index: 9999;
    background: #21252A;
    align-items: center;
`

export const CampaignNavbarIcon = styled.div`
    padding: 2rem;
    cursor: pointer;

    svg {
        color: white;
        font-size: 2rem;
    }    
`