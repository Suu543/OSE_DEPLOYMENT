import styled from 'styled-components';

export const BlogContainer = styled.section`
  width: 100%;
`;

export const BlogWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const BlogImage = styled.section`
  img {
    display: block;
    width: 70%;
    height: 70vh;
    margin: auto;
  }

  @media all and (max-width: 1250px) and (min-width: 900px) {
    img {
      width: 90%;
    }
  }
  
  @media all and (max-width: 900px) {
    img {
      width: 100%;
    }
  }
`;

export const Blog = styled.section`
  width: 100%;
  position: relative;
  z-index: 2;
  top: -15vh;
`;

export const BlogHeader = styled.section`
  width: 50%;
  margin: auto;
  background: white;

  hr {
    width: 80%;
    margin: auto;
    margin-top: 1rem;
    margin-bottom: 4rem;
  }

  @media all and (max-width: 1250px) {
    width: 90%;
  }

  @media all and (max-width: 900px) {
     width: 100%;
  }
`;

export const BlogTopicAndTagWrapper = styled.section`
  display: grid;
  grid-template-columns: 6fr 6fr;
`;

export const BlogTopicSection = styled.section`
  display: flex;
  padding: 2rem;

  span {
    color: #555a6e;
    font-weight: 600;
    font-size: 1.5rem;
  }
`;
export const BlogTagSection = styled.section`
  display: flex;
  padding: 2rem;
  justify-content: flex-end;

  span {
    color: #555a6e;
    font-weight: 600;
    font-size: 1.5rem;
  }
`;

export const BlogTitleSection = styled.section`
  padding: 2rem;
  width: 90%;
  margin: auto;

  h1 {
    font-size: 4rem;
    color: #555a6e;
    text-transform: capitalize;
    font-weight: 500;
  }
`;

export const BlogExcerptSection = styled.section`
  padding: 2rem;
  width: 90%;
  margin: auto;

  h2 {
    font-size: 2rem;
    font-weight: lighter;
    color: #555A6E;
    font-family: sans-serif;
  }
  
`;

export const BlogCreateDateSNSSection = styled.section`
  display: grid;
  width: 90%;
  margin: auto;
  padding: 2rem;
  grid-template-columns: 6fr 6fr;
`;

export const BlogDateSection = styled.section`
  display: flex;
  gap: 2rem;

  span:first-child {
    font-size: 1.7rem;
    color: #555a6e;
    font-weight: 700;
  }

  span:nth-child(2) {
    font-size: 1.7rem;
    color: #555a6e;
  }
`;

export const BlogBodyWrapper = styled.section`
  width: 60%;
  margin: auto;
  /* height: 110vh;
  background: red; */
  display: flex;
  flex-direction: column;

  @media all and (max-width: 1250px) {
    width: 100%;
  }
`;

export const BlogBody = styled.section`
  width: 100%;
  margin: auto;
  height: 100vh;

  p {
    width: 60%;
    margin: auto;
    color: #555a6e;
    font-size: 1.8rem;
  }

  a {
    color: black;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    width: 60%;
    margin: 2rem auto;
    color: #555A6E;
    font-size: 2.8rem;
    font-weight: 500;
  }

  img {
    width: 100%;
  }

  @media all and (max-width: 1250px) {
    p, h1, h2, h3, h4, h5, h6 {
      width: 90%;
    }

    width: 90%;
  }
`;
