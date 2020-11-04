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
`

export const CampaignDetailHeroContentColumn1 = styled.div`
    background-image: url(${props => props.imgUrl});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

export const CampaignDetailHeroContentColumn2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 80%;
    height: 100%;
    margin: auto;
    gap: 1rem;
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
`

export const CampaignDetailColumn2StartDate = styled.h1`
    font-size: 2rem;
`

export const CampaignDetailColumn2SEndDate = styled.h1`
    font-size: 2rem;
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
`

export const CampaignBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 65%;
    margin: auto;
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