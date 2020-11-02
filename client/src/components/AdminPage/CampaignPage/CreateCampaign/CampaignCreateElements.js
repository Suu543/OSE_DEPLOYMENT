import styled from "styled-components";

/*
Campaign Container
    - CampaignNavbar Container

*/

export const CampaignContainer = styled.div`
    background: #F0F0F0;
`;

export const CampaignH1 = styled.h1`
    font-size: 5rem;
    width: 70%;
    margin: auto;
    margin-top: 5rem;
    margin-bottom: 3rem;
`

export const CampaignNavbarWrapper = styled.div`
    height: 8vh;
    width: 100%;
    display: flex;
    position: sticky;
    top: 0;
    z-index: 9999;
    background: #21252A;
    align-items: center;
`

export const CampaignNavbarIcon = styled.div`
    padding: 2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 2rem;
    

    svg {
        color: white;
        font-size: 3rem;
    }    

    h1 {
        color: white;

        a {
            font-size: 3rem;
            text-decoration: none;
            color: white;
        }
    }
`

export const CampaignRenderWrapper = styled.div`
    width: 100%;
    height: 100%;
`

export const CampaignRenderContentWrapper = styled.div`
    width: 70%;
    margin: auto;
    height: 60%;
    display: flex;
    flex-direction: column;
    background: #FBFBFA;
`

export const CampaignRenderImageWrapper = styled.div`
    width: 100%;
    min-height: 50vh;
    /* margin: 7.2rem auto; */
    background: url(${(props)=> props.imgUrl});  
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

export const CampaignRenderTitleWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin: auto;
    margin-bottom: 2vh;
    margin-top: 2vh;
    background: #FBFBFA;
    color: #282828;

    h1 {
        font-size: 3rem;
    }

     p {
         font-size: 2rem;
     }
`

export const CampaignRenderInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: auto;
    padding: 4rem;
    gap: 3.5rem;
    border-top: 10px solid #385FCC;

    h1 {
        font-size: 3rem;
        font-weight: 600;
    }

    h3 {
        font-size: 2.5rem;
        font-weight: 300;
    }

    button {
        display: block;
        width: 80%;
        margin: auto;
        padding: 1.5rem;
        color: black;
        background: #CAF7CB;
        outline: none;
        border: none;
    }

    a {
        text-decoration: none;
        font-size: 2rem;
        color: black;
    }

    svg {
        font-size: 2.2rem;
    }
`

export const CampaignSidebarWrapper = styled.form`
    width: 30vw;
    min-height: 90vh;
    background: white;
    padding: 1.5rem;
    position: fixed;
    top: 8vh;
    left: ${({ open }) => open ? "-100%" : "0.4vw%"};
    display: flex;
    flex-direction: column;
    gap: 3rem;
    z-index: 9999;
`

export const CampaignLabel = styled.label`
    display: block;
    width: auto;
    margin: auto;
    padding-left: 1rem;
    font-size: 2.5rem;
    font-weight: 700;
    color: #385FCC;
`

export const CampaignInput = styled.input`
    display: block;
    width: 80%;
    padding: 0.8rem;
    margin: 0.5rem auto;
    border: 0;
    outline: none;
    font-size: 1.5rem;
`

export const CampaignImageInput = styled.input`
    display: block;
    width: 100%;
    padding-left: 1rem;;
    margin-top: 1rem;
    border: 0;
    outline: none;
    font-size: 1.5rem;
`;

export const CampaignImage = styled.div`
    color: white;
    width: auto;
`;

export const CampaignTitle = styled.div`
    color: white;
`;

export const CampaignDescription = styled.div`
    color: white;
`;

export const CampaignButtonText = styled.div`
    color: white;
`;

export const CampaignAmount = styled.div`
    color: white;
`;

export const CampaignDate = styled.div`
    color: white;
`

export const CampaignLink = styled.div`
    color: white;
`

export const CampaignDetailWrapper = styled.div`
    max-width: 70%;
    min-height: 100vh;
    margin: auto;
    margin-top: 5vh;
`

export const CampaignDetailH1 = styled.h1`
   font-size: 4rem;
   text-align: center;
   margin-bottom: 5vh;
`