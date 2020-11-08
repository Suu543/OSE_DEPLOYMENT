import styled from 'styled-components';

export const HeroContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  margin-bottom: 20vh;
`;

export const HeroTopicWrapper = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
  /* load more */
  border-top: 1px solid #d1d4d7;
  border-bottom: 1px solid #d1d4d7;
  gap: 1rem;
  padding: 1.5rem 0;

  @media all and (max-width: 1250px ){
    display: none;
  }
`;

export const HeroTopicSelectWrapper = styled.div`
  display: none;

  @media all and (max-width: 1250px) {
    display: flex;
    width: 95%;
    margin: auto;
    border-top: 1px solid #d1d4d7;
    border-bottom: 1px solid #d1d4d7;
    gap: 1rem;
    padding: 1.5rem 0;
  }
`

export const HeroTopic = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  transition: all 0.7s ease-in;

  &:first-child {
    color: black;
  }

  a {
    text-decoration: none;
    color: #c4c8cc;

    &:hover {
      color: black;
    }
  }
`;

export const HeroSelect = styled.select`
  display: block;
  font-weight: bold;
  border: none;
  outline: none;
`

export const HeroEntryRow = styled.div`
  margin-top: 5vh;
  display: grid;
   /* ax0width: 1200px; */
  grid-template-columns: 6fr 6fr;
  grid-template-areas: 'column1 column2';
  box-shadow: 1px 1px 20px 1px #f9f9f9;
  transition: all 0.3s ease-in;

  &:hover {
    box-shadow: 2px 2px 20px 1px gray;
  }

  @media all and (max-width: 1100px ){
    width: 95%;
    margin: auto;
    margin-top: 2rem;
    grid-template-columns: 12fr;
    grid-template-areas: 
       "Image"
       "Content";
  }
`;

export const HeroEntryRowColumn1 = styled.div`
  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  @media all and (max-width: 1100px ){
    grid-area: Image;
  }
`;

export const HeroEntryRowColumn2 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  justify-content: space-between;

  span, a {
    display: inline-block;
    text-decoration: none;
    font-size: 1.5rem;
    padding-left: 5px;
    border-left: 2px solid #5f35d4;
    color: black;
    font-weight: bold;

    &:hover {
      transition: all 0.5s ease-in;
      color: white;
      background: linear-gradient(90deg, #5f35d4, #62ebff);
    }

    @media all and (max-width: 1100px ){
     grid-area: Content;
  }
  }

  h1 {
    font-size: 3rem;
    font-weight: 700;
    font-family: sans-serif;

    a {
      font-size: 3rem;
      font-weight: 700;
    }
  }

  p {
    font-size: 1.4rem;
  }

  div {
    display: flex;

    span {
      font-size: 1.6rem;
      background: none;
      color: black;
      border: none;

      &:hover {
        color: black;
        background: none;
      }
    }
  }
`;

export const HeroPostsRow = styled.div`
  max-width: 1200px;
  margin-top: 5vh;
`;

export const HeroPostsColumn = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;
`;

export const HeroPostCard = styled.div`
  display: flex;
  width: 30%;
  border: 3px solid #f9f9f9;
  min-height: 48vh;
  max-height: 48vh;
  -webkit-box-shadow: 3px 5px 15px 5px #D1D1D1;   
  box-shadow: 3px 5px 15px 5px #D1D1D1;
  

  @media all and (max-width: 1100px ){
    width: 45%;
    justify-content: space-evenly;
    margin: auto;
  }

  @media all and (max-width: 750px) {
    width: 90%;
    justify-content: center;
    margin: auto;
  }
`;

export const HeroPostCardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
`;

export const HeroPostCardImage = styled.div`
  img {
    display: block;
    width: 100%;
    height: 200px;
    object-fit: cover;
    object-position: 0 0;
  }
`;

export const HeroPostCardTopic = styled.div`
  display: flex;
  gap: 1rem;
  justify-self: flex-start;

  a {
    font-size: 2rem;
    font-weight: 700;
    font-family: 'Noto Sans KR', sans-serif;
  }
`

export const HeroPostCardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;

  h1 {
    margin-top: 1.5rem;

    a {
      font-size: 2rem;
      font-weight: bold;
      font-family: 'Noto Sans KR', sans-serif;
    }
  }

  p {
    margin-top: 1.5rem;
    font-size: 1.5rem;
    font-family: 'Noto Sans KR', sans-serif;
  }

  div {
    display: flex;
    margin-top: 1.5rem;

    span {
      font-size: 1.2rem;
      align-self: flex-end;
    }
  }

  a {
    text-decoration: none;
    color: black;
    font-size: 1.5rem;
  }

`;

export const HeroH1 = styled.h1`
  /* color: #fff; */
  color: #0f3057;
  font-size: 8rem;
  text-align: center;
  padding-bottom: 5rem;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
