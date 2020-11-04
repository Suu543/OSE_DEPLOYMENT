import styled from "styled-components";

export const HeroContainer = styled.div`
    width: 100%;
    min-height: 75vh;
    border: 2px solid #E8E8E8;
    padding-top: 3rem;
`;

export const HeroWrapper = styled.div`
`;

export const HeroRow = styled.div`
    width: 70%;
    margin: auto;
    display: grid;
    min-height: 65vh;
    grid-template-columns: 6.5fr 5.5fr;
    align-items: center;
    justify-content: center;

    @media all and (max-width: 1450px) {
        width: 80%;
    }

    @media all and (max-width: 1100px) {
        width: 90%;
    }

    @media all and (max-width: 1000px) {
        width: 95%;
    }

    @media all and (max-width: 900px) {
        grid-template-columns: 12fr;
    }
`;

export const HeroColumn1 = styled.div`
    display: flex;
    flex-direction: column;
    padding: 3rem;
    justify-content: center;
    gap: 2rem;
    border-right: 2px solid #E8E8E8;
    max-height: 60vh;
    margin: auto;
`;

export const HeroColumn2 = styled.div`
    margin-left: 3rem;
    /* display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 2rem; */
    max-height: 60vh;
    display: grid;
    grid-template-rows: 7fr 5fr;

    @media all and (max-width: 900px) {
        margin-top: 5rem;
    }
`;

export const HeroColumn1Header = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    font-family: 'Noto Sans KR', sans-serif;
    border-bottom: 2px solid black;
    padding-bottom: 1rem;
`;

export const HeroColumn1ImageWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const HeroColumn1Image = styled.div`
    background: ${props => `url(${props.imgURL}) no-repeat center center`};
    background-size: cover;
    width: 100%;
    height: 40vh;
`

export const HeroColumn1Ttile = styled.h1`

    a {
        text-decoration: none;
        font-size: 2.5rem;
        font-weight: 700;
        font-family: 'Noto Sans KR', sans-serif;
        color: black;
    }
`;

export const HeroColumnParagraph = styled.p`
    font-size: 2rem;
    font-family: 'Noto Sans KR', sans-serif;
`;

export const HeroColumn2Title = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    font-family: 'Noto Sans KR', sans-serif;
    border-bottom: 2px solid black;
    padding-bottom: 1rem;
`;

export const HeroColumn2Wrapper = styled.div`
    min-height: 50vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const HeroColumn2Cards = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 60vh;
    gap: 2rem;
`

export const HeroColumnCard = styled.div`
    display: grid;
    grid-template-columns: 5fr 7fr;
`

export const HeroColumn2CardContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.3rem;

    h1 {

        a {
            text-decoration: none;
            color: black;
            font-size: 1.6rem;
            font-weight: 700;
            font-family: 'Noto Sans KR', sans-serif;
        }
    }

    p {
        font-size: 1.3rem;
        font-family: 'Noto Sans KR', sans-serif;
    }
`

export const HeroColumnCardImage = styled.div`
    width: 100%;
`;

export const HeroColumnCardImg = styled.div`
    background: ${props => `url(${props.imgURL}) no-repeat center center`};
    width: 90%;
    margin: auto;
    min-height: 12vh;
    background-size: cover;
`

export const HeroColumn2PaginationNavbar = styled.nav`
    width: 100%;
`

export const HeroColumn2PaginationLists = styled.ul`
    display: flex;
    width: 100%;
    justify-content: center;
    list-style: none;
    margin-top: 2rem;
    align-items: center;
    color: #8A99AE;
`

export const HeroColumn2PaginationList = styled.li`
    font-size: 2rem;
    padding: 1.5rem;
    color: black;
    cursor: pointer;
`

export const HeroColumn2PaginationActiveList = styled.li`
    font-size: 3rem;
    padding: 1.5rem;
    color: black;
    border:  1px solid #E8E8E8;
    font-weight: 600;
`