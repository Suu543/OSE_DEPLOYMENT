import React, { Fragment } from 'react';
import {
    HeaderContainer,
    HeaderHeroWrapper,
    HeaderH1,
} from "./HeaderSectionElements"

const HeaderSection = () => (
        <Fragment>
            <HeaderContainer>
                <HeaderHeroWrapper>
                    <HeaderH1>
                        TOPIC
                    </HeaderH1>
                </HeaderHeroWrapper>
            </HeaderContainer>
        </Fragment>
)

export default HeaderSection;