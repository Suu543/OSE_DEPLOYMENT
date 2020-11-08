import React, { Fragment, useState, useEffect } from 'react';
import { getTopics } from "../../../actions/topic";
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
                        OSE 주제보기
                    </HeaderH1>
                </HeaderHeroWrapper>
            </HeaderContainer>
        </Fragment>
)

export default HeaderSection;