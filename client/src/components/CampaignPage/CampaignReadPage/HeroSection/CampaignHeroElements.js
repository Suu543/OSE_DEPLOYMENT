import styled from "styled-components";

export const CampaignDetailContainer = styled.div`
    width: 100%;
    background: #FBFBFA;
`;

export const CampaignDetailHeroWrapper = styled.div`
    width: 100%;
    padding: 4rem;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
    /* background: red; */
`

export const CampaignDetailHeroH1 = styled.h1`
    font-size: 4rem;
    font-family: 'Noto Sans KR', sans-serif;
`

export const CampaignDetailParagraph = styled.p`
    font-size: 2rem;
    font-family: 'Noto Sans KR', sans-serif;
`

export const CampaignDetailHeroContentRow = styled.div`
    width: 80%;
    margin: auto;
    display: grid;
    grid-template-columns: 7fr 5fr;
    min-height: 50vh; 

    @media all and (max-width: 1250px) and (min-width: 890px) {
        width: 100%;
    }

    @media all and (max-width: 889px) {
        grid-template-columns: 12fr;
    }

`

export const CampaignDetailHeroContentColumn1 = styled.div`
    background-image: url(${props => props.imgUrl});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    @media all and (max-width: 889px) {
        min-height: 35vh;
    }
`

export const CampaignDetailHeroContentColumn2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 80%;
    height: 100%;
    margin: auto;
    gap: 1rem;

    @media all and (max-width: 889px) {
        width: 100%;
    }
`

export const CampaignDetailColumn2Amount = styled.h1`
    font-size: 3rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;

    img {
        width: 30px;
        height: 30px;          
    }

    
    @media all and (max-width: 889px) {
        padding-top: 1rem;
    }
`

export const CampaignDetailColumn2Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    button {
        width: 100%;
        font-size: 2rem;
        padding: 2rem;
        background: #028858;
        color: white;
        border: none;
    }

    a {
        text-decoration: none;
        color: white;
    }

    @media all and (max-width: 889px) {
        padding-top: 2rem;
    }
`

export const CampaignDetailColumn2StartDate = styled.h1`
    font-size: 2rem;

    @media all and (max-width: 889px) {
        padding-top: 2rem;
    }
`

export const CampaignDetailColumn2SEndDate = styled.h1`
    font-size: 2rem;

    @media all and (max-width: 889px) {
        padding-top: 2rem;
    }
`

export const CampaignBodyWrapper = styled.div`
    min-height: 60vh;
    width: 80%;
    margin: auto;
`

export const CampaignBodyH1 = styled.h1`
    font-size: 5rem;
    text-align: center;
    margin: 5rem;
    font-family: 'Noto Sans KR', sans-serif;

    @media all and (max-width: 889px) {
        font-size: 4rem;
    }
`

export const CampaignBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 65%;
    margin: auto;
    margin-bottom: 3rem;
    gap: 1.5rem;

    h1 {
        font-size: 5rem;
        font-family: 'Noto Sans KR', sans-serif;
    }

    p {
        font-size: 2rem;
        font-family: 'Noto Sans KR', sans-serif;
    }

    img {
        width: 100%;
    }

`

export const CampaignDisqusWrapper = styled.div`
    width: 65%;
    margin: auto;
    margin-bottom: 2vh;
`