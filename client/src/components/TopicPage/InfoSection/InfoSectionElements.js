import styled from "styled-components";

export const InfoSectionContainer = styled.div`
    min-height: 60vh;
    width: 100%;
    justify-content: flex-start;
    overflow: hidden;
    margin-bottom: 5vh;
`

export const InfoSectionHeader = styled.h1`
    font-size: 5rem;
    color: black;
    width: 60%;
    margin: auto;
    margin-top: 6vh;
    margin-bottom: 3vh;
    font-family: 'Noto Sans KR', sans-serif;
    /* font-family: 'Encode Sans Expanded', sans-serif; */

    @media all and (max-width: 1150px) {
       font-size: 3.2rem;
    }
`

export const InfoSectionArrow = styled.div`
    width: 60%;
    margin: auto;
    text-align: right;
    display: flex;
    gap: 5rem;
    justify-content: flex-end;
    margin-bottom: 2rem;

    svg {
        font-size: 2.5rem;
    }

    @media all and (max-width: 1150px) {
        text-align: center;
        justify-content: center;
    }
`

export const InfoSectionArrowLeft = styled.div`
    margin-bottom: 2rem;
    cursor: pointer;
`

export const InfoSectionArrowRight = styled.div`
    margin-bottom: 2rem;
    cursor: pointer;
`

export const InfoSectionSlider = styled.div`
    position: relative;
    max-width: 400px;
    min-width: 400px;
    margin: 0 auto;    
`

export const InfoSectionSliderWrapper = styled.div`
    display: flex;
    min-width: 100%;
    position: relative;
    z-index: 5;
    transition: transform 400ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
    transform: translateX(
      ${(props) => `-${props.idx * (props.dividedBy / props.length)}%`}
    );
`

export const InfoSectionCard = styled.div`
  flex: 1;
  min-width: 400px;
  max-width: 400px;
  opacity: ${(props) => (props.idx === props.topicIdx ? '1' : '0.5')};
  transform: scale(${(props) => (props.idx === props.topicIdx ? '1' : '0.6')});
  transition: all 500ms linear;
  -webkit-box-shadow: 2px 5px 15px 5px #D1D1D1; 
  box-shadow: 2px 5px 15px 5px #D1D1D1;
  position: relative;

  a {
        text-decoration: none;
        font-size: 2.5rem;
        font-family: 'Encode Sans Expanded', sans-serif;
        /* font-family: 'Noto Serif KR', serif; */
        color: white;
    }
`

export const InfoSectionImageWrapper = styled.div`
  min-height: 30vh;
  max-height: 30vh;
  background: url(${props => props.imgUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

export const InfoSectionCardHeader = styled.h1`
    text-align: center;
    padding: 1rem;

    position: absolute;
    top: 0;
`

export const InfoSectionDetailWrapper = styled.div`
    width: 90%;
    margin: auto;
    margin-top: 3rem;
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;

    min-height: 120vh;
    max-height: 120vh;
    overflow: auto;

  ::-webkit-scrollbar {
    width: 1rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #2f3542;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: rgba(46, 49, 49, 0.3);
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }

  a {
      text-decoration: none;
      color: black;
  }

`

export const InfoSectionDetailCard = styled.div`
    width: 60%;
    margin: auto;
    display: grid;
    grid-template-columns: 5fr 7fr;
    min-height: 35vh;
    -webkit-box-shadow: 0px 5px 15px 5px #D6D6D6; 
    box-shadow: 0px 5px 15px 5px #D6D6D6;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px; 

    &:hover {
        transform: scale(1.1);
        transition: transform 0.5s ease-in-out;
    }

    @media all and (max-width: 1150px) {
        width: 80%;
        grid-template-columns: 12fr;
    }
`

export const InfoSectionDetailImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    img {
        width: 90%;
        height: 80%;
        margin: auto;
        border-radius: 15px;
    }

    @media all and (max-width: 1150px) {
        img {
           width: 100%;
           border-top-left-radius: 15px;
           border-top-right-radius: 15px; 
           border-bottom-left-radius: 0;
           border-bottom-right-radius: 0;
        }
    }
`

export const InfoSectionDetailContent = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 80%;
    justify-content: space-around;
    padding: 3rem;
    gap: 1.4rem;

    h1 {
        font-size: 3rem;
        font-family: 'Encode Sans Expanded', sans-serif;
        /* font-family: 'Noto Serif KR', serif; */
    }

    p {
        font-size: 2rem;
        /* font-family: 'Noto Sans KR', sans-serif; */
        font-family: 'Encode Sans Expanded', sans-serif;
        font-weight: 300;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60%;
        margin-right: auto;
        padding: 1rem;
        border: none;
        border-radius: 10px;
        background: rgb(66,176,245);
        background: linear-gradient(90deg, rgba(66,176,245,1) 0%, rgba(80,154,250,0.9668242296918768) 100%);        outline: none;
        cursor: pointer;

        svg {
            font-size: 1.5rem;
        }
    }

    a {
        font-size: 2rem;
        /* font-family: 'Noto Serif KR', serif; */
        font-family: 'Encode Sans Expanded', sans-serif;
        color: white;
        text-decoration: none;
    }
`
