import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#42B0F5' : '#010606')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? 'white' : '#fff')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2 ease-in-out;
  font-family: 'Encode Sans Expanded', sans-serif;
  
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #42B0F5;
    font-weight: bold;
    background: ${({ primary }) => (primary ? '#fff' : '#01BF71')};
  }

  a {
    text-decoration: none;
    color: white;
  }
`;
