import styled from "styled-components";

export const CampaignTopicContainer = styled.div`
    min-height: 6vh;
    border: 2px solid #E8E8E8;
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CampaignTopicWrapper = styled.ul`
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin: auto;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    list-style: none;
`;

export const CampaignTopicList = styled.li`
    font-size: 1.5rem;
    color: #034752;

    a {
        text-decoration: none;
        color: black;
        font-family: 'Noto Sans KR', sans-serif;
    }
`   
