import styled from "styled-components";

export const TopicContainer = styled.section`
  width: 100%;
  background: white;
  padding-top: 10vh;
`;

export const TopicTitleH1 = styled.h1`
  font-size: 5rem;
  font-weight: 700;
  text-align: center;
  margin-top: 4rem;
`;

export const TopicForm = styled.form`
  width: 100%;
  margin: auto;

  input {
    display: block;
    margin: auto;
    margin-top: 2rem;
    font-size: 1.5rem;
    text-align: center;
  }
  img {
    display: block;
    margin: 2rem auto;
    width: 180px;
    height: 180px;
  }
`;

export const TopicImageInput = styled.input``;

export const TopicTitleInput = styled.input`
  width: 30%;
  font-size: 1rem;
  padding: 1.3rem;
`;

export const TopicSubmitBtn = styled.button`
  display: block;
  margin: auto;
  margin-top: 2rem;
  font-size: 2rem;
  padding: 1rem;
  width: 200px;
  background: #12b886;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  opacity: 0.7;
  :hover {
    opacity: 0.9;
  }
  :active {
    opacity: 1;
  }
`;
