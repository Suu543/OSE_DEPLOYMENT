import styled from 'styled-components';

export const SingleTopicContainer = styled.section`
  width: 100%;

  hr {
    width: 70%;
    margin: auto;
    padding: 0.5rem;
    margin-top: 10vh;

    @media all and (max-width: 1000px) {
      width: 90%;
    }
  }

  a {
    text-decoration: none;
  }
`;

export const SingleTopicHeaderContainer = styled.section`
  width: 100%;
  display: grid;
  background: #ffd3d5;
  min-height: 70vh;
  grid-template-columns: 6fr 6fr;

  @media all and (max-width: 1000px) {
    grid-template-columns: 12fr;
  }
`;

export const SingleTopicHeaderLeft = styled.section`
  display: flex;
  width: 70%;
  margin-left: auto;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4rem;

  h1 {
    font-size: 3.5rem;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
    color: rgb(70, 45, 75);
  }

  p {
    font-size: 1.7rem;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
    color: rgb(70, 45, 75);
  }

  section {
    width: 100%;
    display: flex;

    input {
      width: 40%;
      height: 5rem;
      margin-right: 5%;
      border: none;
      border-radius: 2%;
      padding: 0.5rem;
      font-size: 2rem;

      :focus {
        outline: none;
      }

      ::placeholder {
        color: grey;
        font-size: 2rem;
        text-align: center;
        padding-bottom: 0.3rem;
      }
    }

    button {
      width: 30%;
      height: 5rem;
      background: #004e5f;
      border: none;
      border-radius: 2%;
      color: white;
      font-size: 2rem;
      text-transform: uppercase;
    }
  }

  @media all and (max-width: 1000px) {
    width: 100%;
    justify-content: center;
    align-items: center;

    h1 {
      margin-top: 5rem;
      font-size: 5rem;
    }

    p {
      width: 80%;
      margin: auto;
    }

    section {
      display: none;
      align-items: center;
      justify-content: center;

      input {
        width: 65%;
      }

      button {
        width: 25%;
      }
    }
  }
`;

export const SingleTopicHeaderRight = styled.section`
  display: flex;
  width: 70%;
  margin: auto;
  align-items: center;
  justify-content: flex-start;

  img {
    display: block;
    width: 50%;
    height: 50%;
  }

  @media all and (max-width: 1000px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const SingleTopicLatestContainer = styled.section`
  width: 70%;
  margin: auto;

  h1 {
    margin-top: 10vh;
    margin-bottom: 5vh;
    font-size: 4rem;
  }
`;

export const SingleTopicLatestWrapper = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 6fr 6fr;
  grid-template-areas:
    'FirstCard FirstCard'
    'SecondCard ThirdCard';
  gap: 3rem;

  @media all and (max-width: 1000px) {
    grid-template-columns: 12fr;
    grid-template-areas:
      'FirstCard'
      'SecondCard'
      'ThirdCard';
  }
`;

export const SingleTopicLatestFirstCard = styled.section`
  grid-area: FirstCard;
  display: grid;
  grid-template-columns: 6fr 6fr;
  width: 100%;
  background-color: white;
  border-radius: 1px solid white;

  @media all and (max-width: 1000px) {
    grid-template-columns: 12fr;
    grid-template-areas:
      'Image'
      'Content';
  }
`;

export const SingleTopicLatestFirstCardContent = styled.section`
  width: 95%;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  font-family: PlainLight, Arial, sans-serif;
  gap: 3rem;

  h6 {
    color: rgb(85, 90, 110);
    font-size: 1.5rem;
  }

  h1 {
    font-size: 3rem;
    margin: 0;
    color: rgb(85, 90, 110);
  }

  p {
    font-size: 1.6rem;
    color: rgb(85, 90, 110);
  }

  a {
    color: black;
  }

  @media all and (max-width: 1000px) {
    width: 100%;
    grid-area: Content;

    h1 {
      font-size: 3.5rem;
      text-transform: capitalize;
    }

    p {
      font-size: 2.2rem;
    }

    h6 {
      display: none;
    }
  }
`;

export const SingleTopicLatestFirstCardImage = styled.section`
  width: 100%;

  img {
    display: block;
    width: 93%;
    margin-left: auto;
  }

  @media all and (max-width: 1000px) {
    img {
      width: 100%;
      grid-area: Image;
    }
  }
`;

export const SingleTopicLatestSecondCard = styled.section`
  grid-area: SecondCard;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  img {
    display: block;
    width: 95%;
    margin-right: auto;
  }

  h1 {
    font-size: 2.8rem;
    margin: 0;
    color: rgb(85, 90, 110);
  }

  p {
    font-size: 1.5rem;
    color: rgb(85, 90, 110);
  }

  a {
    color: black;
  }

  @media all and (max-width: 1000px) {
    h1,
    p,
    img {
      width: 100%;
    }

    h1 {
      font-size: 3.5rem;
      text-transform: capitalize;
    }

    p {
      font-size: 2.2rem;
    }
  }
`;

export const SingleTopicLatestThirdCard = styled.section`
  grid-area: ThirdCard;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  img {
    display: block;
    width: 95%;
    margin-left: auto;
  }

  h1 {
    font-size: 2.8rem;
    width: 95%;
    margin: 0;
    margin-left: auto;
    color: rgb(85, 90, 110);
  }

  p {
    font-size: 1.5rem;
    color: rgb(85, 90, 110);
    width: 95%;
    margin-left: auto;
  }

  a {
    color: black;
  }

  @media all and (max-width: 1000px) {
    h1,
    p,
    img {
      width: 100%;
    }

    h1 {
      font-size: 3.5rem;
      text-transform: capitalize;
    }

    p {
      font-size: 2.2rem;
    }
  }
`;

export const SingleTopicBlogsContainer = styled.section`
  width: 70%;
  margin: auto;
  margin-top: 2vh;
  min-height: 10vh;

  @media all and (max-width: 1000px) {
    width: 90%;
  }
`;

export const SingleTopicBlogsTitle = styled.h1`
  font-size: 3.5rem;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  color: black;
  margin-bottom: 8vh;

  @media all and (max-width: 1000px) {
    font-size: 5rem;
    width: 80%;
  }
`;

export const SingleTopicBlogWrapper = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 4fr 4fr 4fr;
  gap: 4rem;
  justify-content: space-around;

  @media all and (max-width: 1150px) and (min-width: 1001px) {
    display: grid;
    grid-template-columns: 6fr 6fr;
  }

  @media all and (max-width: 1000px) {
    display: grid;
    grid-template-columns: 12fr;
    justify-content: center;
  }
`;

export const SingleTopicBlogCard = styled.section`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  a {
    color: black;
    /*    text-decoration: none; */
  }

  img {
    display: block;
    width: 100%;
  }

  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1.2rem;
  }

  @media all and (min-width: 1151px) {
    img {
      max-height: 165px;
    }
  }

  @media all and (max-width: 1150px) and (min-width: 1001px) {
    h1 {
      font-size: 2.5rem;
      text-transform: capitalize;
    }

    p {
      font-size: 1.5rem;
      opacity: 0.7;
    }
  }

  @media all and (max-width: 1000px) {
    width: 100%;

    h1 {
      font-size: 3rem;
      text-transform: capitalize;
    }

    p {
      font-size: 2rem;
      opacity: 0.7;
    }
  }
`;