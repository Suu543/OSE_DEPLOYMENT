import styled from "styled-components";

export const BlogReadContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background: #EDF1F5;
`;

export const BlogInfoContainer = styled.div`
    width: 100%;
    min-height: 25vh;
    display: flex;
    flex-direction: column;
    background: rgb(2,0,36);
    background: linear-gradient(167deg, rgba(2,0,36,1) 0%, rgba(0,97,240,1) 1%, rgba(0,212,255,1) 80%);
`

export const BlogInfoH1 = styled.h1`
    width: 85%;
    margin: auto;
    font-size: 4rem;
    padding: 1rem;
    color: #FFFFFF;
`

export const BlogReadWrapper = styled.div`
    width: 85%;
    margin: auto;
    display: flex;
    min-height: 70vh;
    flex-direction: column;
    justify-content: flex-start;
    background: white;
    border-radius: 15px;
    align-items: center;
    position: relative;
    top: -7.5vh;
`

export const BlogTableH1 = styled.h1`
    font-size: 3rem;
    margin: 4rem auto;
    cursor: pointer;
    width: 90%;
    text-align: left;

    a {
        display: inline-block;
        width: 100%;
        text-decoration: none;
        color: gray;
        transition: all 0.5s ease-in-out;

        &:hover {
            color: black;
        }
    }
`

export const BlogTable = styled.table`
    margin: 0 auto;
    margin-top: 2rem;
    width: 90%;
    margin-bottom: 5rem;
    text-align: center;

    tr:nth-child(even) {
        background-color: #F9FDFE;
    }
`

export const BlogTableRow = styled.tr``;

export const BlogTableHeader = styled.th`
    padding: 12px;
    border: 1px solid #ddd;
    font-size: 2rem;
`