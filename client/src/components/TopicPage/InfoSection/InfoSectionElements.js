import styled from "styled-components";

export const InfoSectionContainer = styled.div`
    min-height: 60vh;
    width: 100%;
    justify-content: flex-start;
    overflow: hidden;
    margin-bottom: 5vh;
`

export const InfoSectionHeader = styled.h1`
    font-size: 4rem;
    color: black;
    width: 60%;
    margin: auto;
    margin-top: 6vh;
    font-family: 'Noto Sans KR', sans-serif;
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
        font-family: 'Noto Serif KR', serif;
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
`

export const InfoSectionDetailCard = styled.div`
    width: 60%;
    margin: auto;
    display: grid;
    grid-template-columns: 7fr 5fr;
    min-height: 35vh;
    -webkit-box-shadow: 0px 5px 15px 5px #D6D6D6; 
    box-shadow: 0px 5px 15px 5px #D6D6D6;
    border-radius: 15px;

    &:hover {
        transform: scale(1.2);
        transition: transform 1s ease-in-out;
    }
`

export const InfoSectionDetailImage = styled.div`
    background-image: url(${(props) => props.imgUrl});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 15px;
`

export const InfoSectionDetailContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    gap: 1rem;

    h1 {
        font-size: 4rem;
        font-family: 'Noto Serif KR', serif;
    }

    p {
        font-size: 2rem;
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: 300;
    }

    button {
        width: 80%;
        margin: auto;
        padding: 2rem;
        border: none;
        background: #64686D;
        outline: none;
        cursor: pointer;
    }

    a {
        font-size: 2rem;
        font-family: 'Noto Serif KR', serif;
        color: white;
        text-decoration: none;
    }
`
