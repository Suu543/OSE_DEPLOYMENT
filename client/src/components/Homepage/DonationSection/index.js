import React, { Fragment } from 'react';
import {
    DonationContainer,
    DonationWrapper,
    DonationContent,
    DonationContenth1,
    DonationContenth2,
    DonationLinkWrapper,
    DonationLink
} from "./DonationElements"

const DonationSection = () => {
    
    return (
        <Fragment>
            <DonationContainer  imgUrl='https://images.unsplash.com/photo-1576870755431-edd028371a7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80'>
                <DonationWrapper>
                    <DonationContent>
                        <DonationContenth1>
                        후원으로 변화를 만드세요!
                        </DonationContenth1>
                        <DonationContenth2>
                        OSE는 정치, 재정적 독립성을 위해 개인의 후원으로만 운영됩니다. 여러분의 후원으로 주요 환경문제에 맞설 수 있습니다.
                        </DonationContenth2>
                    </DonationContent>
                    <DonationLinkWrapper>
                        <DonationLink to="/donation">
                            후원하기!
                        </DonationLink>
                    </DonationLinkWrapper>
                </DonationWrapper>
            </DonationContainer>
        </Fragment>
    )
}

export default DonationSection;