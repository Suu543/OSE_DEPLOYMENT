import styled from "styled-components";

export const BlogContainer = styled.div`
    min-width: 100%;
    min-height: 80vh;
    background-image: url("https://uxstudioteam.com/website/wp-content/themes/uxstudio-wordpress/dist/images/main-bg.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    overflow: hidden;
`

export const BlogHeader = styled.h1`
    font-size: 5rem;
    width: 80%;
    margin: auto;
    font-family: 'Encode Sans Expanded', sans-serif;
    /* font-family: 'Noto Sans KR', sans-serif; */
    /* font-family: 'Poor Story',cursive;   */
    /* font-family: 'Nanum Gothic Coding', monospace; */
    text-align: center;
    margin-top: 5rem;
    margin-bottom: 5rem;
`

export const BlogArrow = styled.div`
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

export const BlogArrowLeft = styled.div`
    margin-bottom: 2rem;
    cursor: pointer;
`

export const BlogArrowRight = styled.div`
    margin-bottom: 2rem;
    cursor: pointer;
`

export const BlogSlider = styled.div`
    position: relative;
    max-width: 400px;
    min-width: 400px;
    margin: 0 auto;
`

export const BlogSliderWrapper = styled.div`
    display: flex;
    min-width: 100%;
    position: relative;
    z-index: 5;
    transition: transform 400ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
    transform: translateX(
      ${(props) => `-${props.idx * (props.dividedBy / props.length)}%`}
    );
`

export const BlogCard = styled.div`
  flex: 1;
  min-width: 400px;
  max-width: 400px;
  min-height: 45vh;
  opacity: ${(props) => (props.idx === props.blogIdx ? '1' : '0.5')};
  transform: scale(${(props) => (props.idx === props.blogIdx ? '1' : '0.6')});
  transition: all 500ms linear;
  -webkit-box-shadow: 2px 5px 15px 5px #D1D1D1; 
  box-shadow: 2px 5px 15px 5px #D1D1D1;
`

export const BlogCardImageWrapper = styled.div`
  min-height: 25vh;
  max-height: 25vh;
  background: url(${props => props.imgUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

export const BlogCardInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  min-height: 20vh;
  padding: 1rem;
  justify-content: center;
`

export const BlogCardName = styled.div`
    font-size: 3rem;
    /* font-family: 'Poor Story',cursive;   */
    /* font-family: 'Nanum Gothic Coding', monospace; */
    font-family: 'Encode Sans Expanded', sans-serif;
    font-weight: 600;
`;

export const BlogCardExcerpt = styled.div`
    font-size: 2rem;
    text-align: center;
    /* font-family: 'Poor Story',cursive;   */
    /* font-family: 'Nanum Gothic Coding', monospace; */
    font-family: 'Noto Sans KR', sans-serif;
`
