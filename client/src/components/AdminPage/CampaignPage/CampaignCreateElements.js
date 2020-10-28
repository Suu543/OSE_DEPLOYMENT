import styled from "styled-components";

export const CampaignContainer = styled.div`
    width: 100%;
    height: 100%;
`;

export const CampaignToolContainer = styled.div`
    width: 30vh;
    min-height: 100vh;
    background: gray;
    display: flex;
    flex-direction: column;
`;

export const CampaignToolWrapper = styled.div`
    width: 90%;
    margin: 2rem auto;
`

export const CampaignToolLabel = styled.label`
    display: inline-block;
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
`

export const CampaignToolInput = styled.input`
    width: 100%;
    padding: 1rem;

    &:active {
        outline: none;
    }

    &:focus {
        outline: none;
    }
`

