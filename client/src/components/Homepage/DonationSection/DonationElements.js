import styled from "styled-components";
import { Link } from "react-router-dom";

export const DonationContainer = styled.div`
    width: 100%;
    min-height: 70vh;
    background: linear-gradient(rgba(0, 0, 10, 0.7), transparent), url(${props => props.imgUrl});
    background-position: 50% 57%;
    background-size: cover;
    background-repeat: no-repeat;
`

export const DonationWrapper = styled.div`
    min-height: 60vh;
    width: 100%;
    display: grid;
    grid-template-columns: 7fr 5fr;
`

export const DonationContent = styled.div`
    width: 60%;
    margin: auto;
    display: flex;
    flex-direction: column;   
    justify-content: center;
    align-items: center;
    gap: 3rem;
`

export const DonationContenth1 = styled.h1`
    font-size: 5rem;
    /* font-family: 'Poor Story', cursive; */
    font-family: 'Encode Sans Expanded', sans-serif;
    color: white;
`

export const DonationContenth2 = styled.h1`
    font-size: 3.5rem;
    /* font-family: 'Poor Story', cursive; */
    font-family: 'Encode Sans Expanded', sans-serif;
    color: white;   
`

export const DonationLinkWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    margin: auto;
`

export const DonationLink = styled(Link)`
    font-size: 4rem;
    font-weight: 700;
    text-decoration: none;
    padding: 3rem;
    background: #42B0F5;
    text-align: center;
    color: white;
    border-radius: 20px;
    /* font-family: 'Poor Story', cursive; */
    font-family: 'Encode Sans Expanded', sans-serif;
`