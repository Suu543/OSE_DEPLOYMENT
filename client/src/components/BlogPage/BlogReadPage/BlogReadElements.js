import styled from 'styled-components';

export const BlogContainer = styled.section`
  padding-top: 10vh;
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
    width: 85%;
    height: 70vh;
    margin: auto;
  }
`;

export const Blog = styled.section`
  width: 100%;
  position: absolute;
  top: 60%;
`;

export const BlogHeader = styled.section`
  width: 70%;
  margin: auto;
  background: white;

  hr {
    width: 90%;
    margin: auto;
    padding: 4rem;
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
  }
`;

export const BlogExcerptSection = styled.section`
  padding: 2rem;
  width: 90%;
  margin: auto;

  h2 {
    font-size: 2rem;
    color: #557eb9;
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
  width: 80%;
  margin: auto;
  /* height: 110vh;
  background: red; */
  display: flex;
  flex-direction: column;
`;

export const BlogBody = styled.section`
  width: 100%;
  margin: auto;
  height: 100vh;

  p {
    width: 60%;
    margin: auto;
    color: #555a6e;
    font-size: 2rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    width: 60%;
    margin: auto;
    font-size: 4rem;
  }

  img {
    width: 100%;
  }
`;
