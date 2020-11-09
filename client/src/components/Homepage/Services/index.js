import React from 'react';
import Icon1 from '../../../images/svg-1.svg';
import Icon2 from '../../../images/svg-2.svg';
import Icon3 from '../../../images/svg-3.svg';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer>
      <ServicesH1>핵심가치</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>
            환경보호 정보제공
          </ServicesH2>
          <ServicesP>
            We Help reduce your fess and increase your overall revenue.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>
            환경 단체 후원
          </ServicesH2>
          <ServicesP>
            You can access our platform online anywhere in the world.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>
            친환경 제품소개
          </ServicesH2>
          <ServicesP>
            We Help reduce your fess and increase your overall revenue.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
