import styled from "styled-components";

export const TopicReadContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background: #EDF1F5;
`;

export const TopicInfoContainer = styled.div`
    width: 100%;
    min-height: 25vh;
    display: flex;
    flex-direction: column;
    /* background: rgb(149,129,254);
    background: linear-gradient(87deg, rgba(149,129,254,1) 0%, rgba(51,202,255,1) 100%); */
    background: rgb(232,21,0);
    background: linear-gradient(167deg, rgba(232,21,0,1) 0%, rgba(236,161,55,1) 100%);
`

export const TopicInfoH1 = styled.h1`
    width: 85%;
    margin: auto;
    font-size: 4rem;
    padding: 1rem;
    color: #FFFFFF;
`

export const TopicReadWrapper = styled.div`
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
`;

export const TopicTable = styled.table`
    margin: 0 auto;
    margin-top: 2rem;
    width: 90%;
    margin-bottom: 5rem;
    text-align: center;

    tr:nth-child(even) {
        background-color: #F9FDFE;
    }
`;

export const TopicTableH1 = styled.h1`
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

export const TopicTableRow = styled.tr`
`;

export const TopicTableHeader = styled.th`
  padding: 12px;
  border: 1px solid #ddd;
  font-size: 2rem;
`;

export const TopicTableRowData = styled.td`
    font-size: 1.8rem;
    padding: 10px;
`;

export const TopicTableButton = styled.button`
    border: none;
    padding: 1.4rem;
    color: white;
    font-weight: 700;
    border-radius: 9px;
    outline: none;
    cursor: pointer;
`