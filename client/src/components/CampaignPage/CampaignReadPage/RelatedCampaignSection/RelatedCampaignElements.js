import styled from "styled-components";

export const RelatedCampaignContainer = styled.div`
    width: 90%;
    margin: auto;

    @media all and (max-width: 1200px) {
        width: 95%;
    }

    @media all and (max-width: 1000px) {
        width: 100%;
    }
`;

export const RelatedCampaignHeader = styled.h1`
    font-size: 5rem;
    text-align: center;
    font-family: 'Noto Sans KR', sans-serif;
`;

export const RelatedCampaignRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    margin: auto;
    margin-top: 5rem;
    gap: 2rem;
    justify-content: center;
    align-items: center;
`;

export const RelatedCampaignColumn = styled.div`
    max-width: 30%;
    flex: 1 1 30%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    @media all and (max-width: 1200px) {
        flex: 1 1 45%;
        max-width: 45%;
        margin: auto;
    }

    @media all and (max-width: 1000px) {
        flex: 1 1 80%;
        margin: auto;
        max-width: 80%;
    }
`;

export const RelatedCampaignColumnImage = styled.div`
    min-height: 30vh;
    background-image: url(${props => props.imgUrl});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

export const RelatedCampaignColumnHeader = styled.h1`

    a {
        font-size: 3rem;
        font-family: 'Noto Sans KR', sans-serif;
        text-decoration: none;
        color: black;
    }
`;

export const RelatedCampaignColumnParagraph = styled.p`
    font-size: 2rem;
    font-family: 'Noto Sans KR', sans-serif;
`