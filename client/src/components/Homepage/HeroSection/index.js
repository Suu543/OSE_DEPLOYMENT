import React, { useState } from 'react';
// import Video from '../../../videos/video.mp4';
import Test from '../../../videos/test.mp4';
import { Button } from '../../ButtonElements';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from './HeroElements';

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Test} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Our Sole Earth</HeroH1>
        <HeroBtnWrapper>
          <Button
            to="/topics"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            둘러보기 {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
