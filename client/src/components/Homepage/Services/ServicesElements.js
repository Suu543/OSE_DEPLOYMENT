import styled from 'styled-components';

export const ServicesContainer = styled.div`
  min-height: 65vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background: #010606; */
  background-image: url("https://uxstudioteam.com/website/wp-content/themes/uxstudio-wordpress/dist/images/main-bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 2rem;

  @media screen and (max-width: 768px) {
    min-height: 70vh;
  }

  @media screen and (max-width: 480px) {
    min-height: 80vh;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }

`;

export const ServicesCard = styled.div`
  background: #42b0f5;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  border-radius: 10px;
  /* max-height: 340px; */
  min-height: 30vh;
  padding: 35px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
    transition: all 1s ease-in-out;
    cursor: pointer;
  }

  @media all and (max-width: 1100px) {
  }
`;

export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
  background: white;
  font-weight: 600;
  border-radius: 10px;
  padding: 1rem;
`;

export const ServicesH1 = styled.h1`
  font-size: 7rem;
  color: #172735;
  margin-bottom: 64px;
  font-family: 'Encode Sans Expanded', sans-serif;
  /* font-family: 'Noto Sans KR', sans-serif; */
  /* font-family: 'Poor Story', cursive; */
  /* font-family: 'Nanum Gothic Coding', monospace; */

  @media screen and (max-width: 900px) {
    font-size: 5rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 3rem;
  margin-bottom: 10px;
  color: white;
  /* font-family: 'Noto Sans KR', sans-serif; */
  /* font-family: 'Poor Story', cursive; */
  font-family: 'Nanum Gothic Coding', monospace;
  font-weight: 700;

`;

export const ServicesP = styled.p`
  font-size: 1.3rem;
  color: white;
  text-align: center;
`;
