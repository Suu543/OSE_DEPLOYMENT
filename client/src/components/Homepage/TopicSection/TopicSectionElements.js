import styled from "styled-components";

export const TopicSectionContainer = styled.div`
    max-width: 100%;
    min-height: 50vh;
    background-image: url("https://uxstudioteam.com/website/wp-content/themes/uxstudio-wordpress/dist/images/main-bg.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    /* -webkit-box-shadow: 0px 2px 5px 5px #EDEDED; 
    box-shadow: 0px 2px 5px 5px #EDEDED; */
    overflow: hidden;
    padding: 2rem;
`

export const TopicSectionHeader = styled.h1`
    width: 100%;
    font-size: 5rem;
    /* font-family: 'Noto Sans KR', sans-serif; */
    /* font-family: 'Poor Story', cursive; */
    /* font-family: 'Nanum Gothic Coding', monospace; */
    font-family: 'Encode Sans Expanded', sans-serif;
    color: #172735;
    text-align: center;   
`

export const TopicSectionSubHeader = styled.h3`
    font-size: 3rem;
    /* font-family: 'Noto Sans KR', sans-serif; */
    /* font-family: 'Poor Story', cursive; */
    /* font-family: 'Nanum Gothic Coding', monospace; */
    font-family: 'Encode Sans Expanded', sans-serif;
    color: #172735;
    text-align: center;  
    padding: 6rem;
`


export const TopicSectionWrapper = styled.div`
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`

export const TopicSectionElement = styled.span`
    padding: 1rem;
    border: 2px solid #01BF71;
    border-radius: 10px;

    a {
        font-size: 2rem;
        color: black;
        /* font-family: 'Noto Sans KR', sans-serif; */
        font-family: 'Nanum Gothic Coding', monospace;
        text-decoration: none;
        color: black;
    }
`