import styled from "styled-components";

export const CampaignReadContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background: #EDF1F5;
`

export const CampaignInfoContainer = styled.div`
    width: 100%;
    min-height: 25vh;
    display: flex;
    flex-direction: column;
    background: rgb(245,161,1);
    background: linear-gradient(167deg, rgba(245,161,1,1) 0%, rgba(236,204,55,1) 100%);
`

export const CampaignInfoH1 = styled.h1`
    width: 85%;
    margin: auto;
    font-size: 4rem;
    padding: 1rem;
    color: #FFFFFF;
`

export const CampaignReadWrapper = styled.div`
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

export const CampaignTableH1 = styled.h1`
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

export const CampaignTable = styled.table`
    margin: 0 auto;
    margin-top: 2rem;
    width: 90%;
    margin-bottom: 5rem;
    text-align: center;

    tr:nth-child(even) {
        background-color: #F9FDFE;
    }
`;

export const CampaignTableRow = styled.tr``;

export const CampaignTableHeader = styled.th`
    padding: 12px;
    border: 1px solid #ddd;
    font-size: 2rem;
`;

export const CampaignTableRowData = styled.td`
    font-size: 1.8rem;
    padding: 10px;
`

export const CampaignTableButton = styled.button`
    border: none;
    padding: 1.4rem;
    color: white;
    font-weight: 9px;
    border-radius: 9px;
    outline: none;
    cursor: pointer;
`