import styled from "styled-components";
import { Link } from "react-router-dom";

export const CampaignSectionContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background-image: url("https://uxstudioteam.com/website/wp-content/themes/uxstudio-wordpress/dist/images/main-bg.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
`

export const CampaignSectionHeader = styled.h1`
    font-size: 5rem;
    color: #172735;
    /* font-family: 'Noto Sans KR', sans-serif; */
    /* font-family: 'Poor Story', cursive; */
    font-family: 'Encode Sans Expanded', sans-serif;
    text-align: center;
    margin-bottom: 5rem;
`

export const CampaignSectionWrapper = styled.div`
    width: 100%;
`

export const CampaignSectionRow = styled.div`
    width: 60%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;

    @media all and (max-width: 900px) {
        width: 90%;
        margin: auto;
    }
`  

export const CampaignSectionColumn = styled.div`
    display: grid;
    grid-template-columns: 7fr 5fr;
    width: 45%;
    margin: auto;
    min-height: 35vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 20px;
    -webkit-box-shadow: 1px 5px 15px -15px rgba(209,209,209,0.17); 
    box-shadow: 1px 5px 15px -15px rgba(209,209,209,0.17);

    &:hover {
        transform: scale(1.2);
        transition: transform 0.3s ease-in-out;
    }

    
    @media all and (max-width: 1150px) {
        grid-template-columns: 12fr;
        width: 80%;
    }

    a {
        text-decoration: none;
        color: black;
    }
`

export const CampaignSectionColumnImage = styled.div`
    background-image: url(${props => props.imgUrl});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 25vh;
`

export const CampaignSectionColumnContent = styled.div`
    display: grid;
    grid-template-columns: 10fr 2fr;
    width: 100%;
    align-items: center;
    padding: 1rem;

    svg {
        font-size: 3rem;
    }
`

export const CampaignSectionColumnHeader = styled.h1`
    font-size: 2rem;
    font-weight: 600;
    /* font-family: 'Noto Sans KR', sans-serif; */
    /* font-family: 'Poor Story', cursive; */
    font-family: 'Encode Sans Expanded', sans-serif;
    color: #172735;
`

export const CampaignSectionColumnParagraph = styled.p`
    font-size: 2rem;
    /* font-family: 'Noto Sans KR', sans-serif; */
    /* font-family: 'Poor Story', cursive; */
    font-family: 'Encode Sans Expanded', sans-serif;
    padding: 1rem;
    color: #172735;
`

export const CampaignSectionColumnLink = styled.button`
    padding: 2rem;
    border: none;
    border-radius: 20px;
    min-width: 30%;
    background: #42b0f5;

    a {
        text-decoration: none;
         color: white;
         font-size: 2rem;
         font-family: 'Noto Sans KR', sans-serif;
     }
`

export const CampaignShowMore = styled.div`
    flex: 1 1 45%;
    min-height: 5vh;
    background: linear-gradient(hsla(200,7%,91%,.62),#fff);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CampaignShowMoreButton = styled(Link)`
    font-size: 2rem;
    padding: 1rem;
    border-radius: 10px;
    text-decoration: none;
    font-family: 'Noto Sans KR', sans-serif;
    color: white;
    background: #4BCC8C;
`