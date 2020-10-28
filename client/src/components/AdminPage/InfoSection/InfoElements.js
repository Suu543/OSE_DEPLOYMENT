import styled from "styled-components";
import { Link } from "react-router-dom";

export const InfoContainer = styled.div`
`

export const InfoWrapper = styled.div`
`

export const InfoHeroRow = styled.div`
    width: 100vw;
    height: 35vh;
    background: linear-gradient(#165AED, #165AED ,#3D41E2);
    padding: 2rem;
`

export const InfoHeaderH1 = styled.h1`
    max-width: 85%;
    margin: auto;
    font-size: 4rem;
    color: #E7EFFE;

    @media all and (max-width: 650px) {
        font-size: 3rem;
    }
`

export const InfoFeatureH1 = styled.h1`
    max-width: 80%;
    margin: 5vh auto;
    font-size: 4rem;
    color: #E7EFFE;
    font-weight: bold;

    @media all and (max-width: 650px) {
        font-size: 2.5rem;
    }
`

export const InfoFeatureWrapper = styled.div`
    position: relative;
    top: -23vh;
`

export const InfoFeatureRow = styled.div`
    display: flex;
    width: 80%;
    flex-wrap: wrap;
    margin: auto;
    justify-content: space-between;

    @media all and (max-width: 1350px) and (min-width: 650px) {
        gap: 2rem;
    }

    @media all and (max-width: 650px) {
        gap: 3rem;
    }
`

export const InfoFeatureColumn = styled.div`
    width: 24%;
    height: 20vh;
    background: red;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media all and (max-width: 1350px) {
        width: 48%;
    }

    @media all and (max-width: 650px) {
        width: 95%;   
    }
`

export const InfoFeatureh1 = styled.h1`
    font-size: 2.5rem;
    padding: 1rem;
    color: white;
`

export const InfoFeatureColumnDetail = styled(Link)`
    align-self: flex-end;
    display: block;
    border-top: 3px solid white;
    color: white;
    font-weight: bold;
    width: 90%;
    margin: auto;
    text-decoration: none;
    font-size: 2rem;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`
