import styled from 'styled-components';

export const HeroContainer = styled.div`
  max-width: 1200px;
  margin: auto;
`;

export const HeroTopicWrapper = styled.div`
  display: flex;
  max-width: 1200px;
  width: 1200px;
  border-top: 1px solid #d1d4d7;
  border-bottom: 1px solid #d1d4d7;
  gap: 1rem;
  padding: 1.5rem 0;
`;

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

export const HeroEntryRow = styled.div`
  margin-top: 5vh;
  display: grid;
  width: 1200px;
  grid-template-columns: 6fr 6fr;
  grid-template-areas: 'column1 column2';
  box-shadow: 1px 1px 20px 1px #f9f9f9;
  transition: all 0.3s ease-in;

  &:hover {
    box-shadow: 2px 2px 20px 1px gray;
  }
`;

export const HeroEntryRowColumn1 = styled.div`
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const HeroEntryRowColumn2 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  justify-content: space-between;

  span {
    display: inline-block;
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
  }

  h1 {
    font-size: 3rem;
    font-weight: 700;
    font-family: sans-serif;
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
  height: 44vh;
`;

export const HeroPostCardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
`;

export const HeroPostCardImage = styled.div`
  img {
    display: block;
    width: 100%;
    height: 190px;
    object-fit: cover;
    object-position: 0 0;
  }
`;

export const HeroPostCardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;

  span {
    font-size: 1.5rem;
  }

  h1 {
    margin-top: 1.5rem;
    font-size: 2rem;
    font-weight: 600;
  }

  p {
    margin-top: 1.5rem;
    font-size: 1rem;
  }

  div {
    display: flex;
    margin-top: 1.5rem;

    span {
      font-size: 1.2rem;
    }
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
