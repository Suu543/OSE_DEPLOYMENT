import styled from "styled-components";

export const AboutContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const AboutWrapper = styled.div`
    width: 60%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media all and (max-width: 1600px) and (min-width: 1350px) {
        width: 70%;
    } 

    @media all and (max-width: 1350px) and (min-width: 1170px) {
        width: 80%;
    }

    @media all and (max-width: 1169px) and (min-width: 1050px) {
        width: 90%;
    }

    @media all and (max-width: 1050px) {
        width: 95%;
    }
`

export const AboutFirstRow = styled.div`
    display: grid;
    grid-template-columns: 6fr 6fr;
    min-height: 35vh;
    width: 100%;

    @media all and (max-width: 1050px) {
        grid-template-columns: 12fr;
    }
`

export const AboutFirstColumn1 = styled.div`
    width: 100%;
    background: url("https://cdn-images-1.medium.com/max/800/1*jUyWClghm7KlQ7DJViLHBA.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 35vh;
    border-radius: 40px;
`

export const AboutSecondColumn1 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4rem;
    
    h1 {
        font-size: 2.5rem;
        color: black;
        padding-top: 5rem;
        font-family: 'Noto Sans KR', sans-serif;
        letter-spacing: 2px;

        span {
            font-size: 3rem;
            color: black;
        }
    }

    p {
        font-size: 2.5rem;
        color: black;
        font-family: 'Noto Sans KR', sans-serif;
    }

    @media all and (max-width: 800px) {
        h1 {
            font-size: 2rem;
            text-align: center;

            span {
                font-size: 2.5rem
            }
        }

        p {
            text-align: center;
            font-size: 2.5rem;
        }
    }
`

export const AboutHeader = styled.h1`
    font-size: 6rem;
    color: black;
    margin-bottom: 2vh;
    text-align: left;
    width: 100%;

    
    @media all and (max-width: 1050px) {
        text-align: center;
    }
`
