import styled from "styled-components";

export const DonationHeaderWrapper = styled.div`
    width: 100%;
    background: #42B0F5;

    h1 {
        width: 70%;
        font-size: 5rem;
        text-align: center;
        color: white;
        padding: 3rem;

        @media all and (max-width: 1150px) {
           font-size: 3.5rem;
           width: 60%;
        }

        @media all and (max-width: 850px) {
            font-size: 4rem;
            width: 100%;
        }

        @media all and (max-width: 500px) {
            font-size: 3rem;
        }
    }
`

export const DonationContainer = styled.div`
    width: 100%;
    min-height: 91vh;    
    background: #42B0F5;

    @media all and (max-width: 850px) {
        display: grid;
        grid-template-columns: 10fr;
        align-items: center;
        justify-content: center;       
    }
`

export const DonationInfoWrapper = styled.div`
    width: 70%;

    @media all and (max-width: 1150px) {
        width: 60%;
    }

    @media all and (max-width: 850px) {
        width: 90%;
        margin: auto;
    }

    @media all and (max-width: 500px) {
        width: 100%;
    }
`

export const DonationInfoRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 70%;
    margin: auto;
    gap: 2rem;    

    @media all and (max-width: 1150px) {
        width: 60%;
    }

    @media all and (max-width: 850px) {
        width: 90%;
        margin: auto;
    }

    @media all and (max-width: 500px) {
        width: 95%;
        margin: auto;
    }
`

export const DonationInfoColumn = styled.div`
    flex: 1 1 25rem;
    display: flex;
    min-height: 20vh;
    flex-direction: column;
    background: white;
    gap: 1.5rem;

    @media all and (max-width: 1150px) {
        flex: 1 1 20rem;
    }

    @media all and (max-width: 850px) {
        flex: 1 1 30rem;
    }

`

export const DonationInfoColumnImage = styled.div`
    width: 100%;
    min-height: 25vh;
    background: url(${props => props.imgUrl});
    background-repeat: none;
    background-size: cover;
    background-position: center;
`

export const DonationInfoColumnHeader = styled.h1`
    font-size: 2.5rem;
    color: #42B0F5;
    font-family: 'Noto Sans KR', sans-serif;
    padding: 1.3rem;
`

export const DonationInfoColumnContent = styled.p`
    font-size: 1.8rem;
    color: #42B0F5;
    font-family: 'Noto Sans KR', sans-serif;
    padding: 1.3rem;
`

export const DonationForm = styled.form`
    position: fixed;
    right: 0;
    top: 8vh;
    min-width: 30%;
    max-width: 31%;
    max-height: 70vh;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    background: #010101;
    padding: 2rem;
    border-radius: 10px;

    @media all and (max-width: 1150px) {
        min-width: 40%;
        max-width: 41%;
    }   

    @media all and (max-width: 850px) {
        position: static;
        min-width: 70%;
        max-width: 70%;
        margin: auto;
        margin-top: 4rem;
    }

    @media all and (max-width: 850px) {
        min-width: 80%;
        max-width: 80%;
    }

    @media all and (max-width: 500px) {
        max-width: 95%;
        min-width: 95%;
        margin: auto;
        margin-top: 3rem;
    }
`

export const DonationH1 = styled.h1`
    font-size: 3rem;
    color: white;
    text-align: center;
    font-family: 'Noto Sans KR', sans-serif;
`

export const DonationLabel = styled.label`
    width: 100%;
    font-size: 2rem;
    color: white;
    text-align: left;
    font-family: 'Noto Sans KR', sans-serif;
`

export const DonationInput = styled.input`
    padding: 1.2rem;
    border: none;
    border-radius: 10px;
    outline: none;
`

export const DonationButton = styled.button`
    padding: 1.1rem;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 2rem;
    border: none;
    border-radius: 10px;
    margin-top: 1rem;
`
