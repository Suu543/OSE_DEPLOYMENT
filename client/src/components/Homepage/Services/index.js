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
            환경정보제공
          </ServicesH2>
          <ServicesP>
          환경과 관련한 양질의 정보를 제공합니다.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>
            환경 캠페인
          </ServicesH2>
          <ServicesP>
          환경 보존을 위한 캠페인 및 모금 활동을 진행합니다.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>
            동아리 협업
          </ServicesH2>
          <ServicesP>
          환경과 관련한 동아리와 협업을 통해 다양한 친환경 제품을 홍보합니다.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
