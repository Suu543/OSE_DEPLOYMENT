import styled from "styled-components";

export const BlogRelatedConatiner = styled.div`
    width: 80%;
    margin: auto;

    @media all and (max-width: 1200px) {
        width: 90%;
    }

    @media all and (max-width: 1000px) {
        width: 100%;
    }
`

export const BlogRelatedTitle = styled.h1`
    font-size: 5rem;
    padding: 5rem;
    text-align: center;
    font-family: 'Noto Sans KR', sans-serif;
`

export const BlogRelatedRow = styled.div`
    width: 90%;
    margin: auto;
    flex-wrap: wrap;
    display: flex;
    gap: 2rem;
`

export const BlogRelatedColumn = styled.div`
    flex: 1 1 30%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 2rem;


    @media all and (max-width: 1200px) {
        flex: 1 1 40%;
    }

    @media all and (max-width: 1000px) {
        flex: 1 1 70%;
        margin: auto;
    }
`

export const BlogRelatedImageWrapper = styled.div`
    min-height: 30vh;
    background-image: url(${props => props.imgUrl});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    font-family: 'Noto Sans KR', sans-serif;
`

export const BlogRelatedHeader = styled.h1`
    a {
        text-decoration: none;
        color: black;
        font-size: 1.5rem;
        font-family: 'Noto Sans KR', sans-serif;
    }
`

export const BlogRelatedParagraph = styled.p`
    font-size: 1rem;
    font-family: 'Noto Sans KR', sans-serif;
`