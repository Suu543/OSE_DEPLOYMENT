import styled from "styled-components";

export const CampaignInfoContainer = styled.div`
    width: 100%;
    margin-bottom: 20vh;
`

export const CampaignInfoHeader = styled.h1`
    font-size: 5rem;
    text-align: center;
    font-family: 'Noto Sans KR', sans-serif;
    margin: 6rem;
`

export const CampaignInfoWrapper = styled.div`
    width: 90%;
    margin: auto;
`

export const CampaignInfoRow = styled.div`
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 2.3rem;
`

export const CampaignInfoColumn = styled.div`
    min-width: 75%;
    max-width: 75%;
    flex: 1 1 70%;
    margin: auto;
    min-height: 40vh;
    display: grid;
    grid-template-columns: 6fr 6fr;
`

export const CampaignInfoColumnImage = styled.div`
    min-width: 100%;
    background-image: url(${(props) => props.imgUrl});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

export const CampaignInfoColumnContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    min-height: 100%;
    margin: auto;
    gap: 1rem;
    justify-content: space-around;

    h1 {
        font-size: 3rem;
        font-family: 'Noto Sans KR', sans-serif;
    }

    p {
        font-size: 2rem;
        font-family: 'Noto Sans KR', sans-serif;
    }

    button {
        padding: 2rem;
        border: none;
        border-radius: 10px;
        outline: none;
        background: #4BCC8C;

        a {
            text-decoration: none;
            font-size: 1.7rem;
            font-family: 'Noto Sans KR', sans-serif;
            color: white;
        }
    }
`