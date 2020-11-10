import React from "react";
import { 
    AboutContainer, 
    AboutWrapper,
    AboutFirstRow,
    AboutFirstColumn1,
    AboutSecondColumn1,
    AboutHeader
} from "./AboutPageElements";

const About = () => {
    return (
        <AboutContainer>
            <AboutWrapper>
                <AboutHeader>About Us</AboutHeader>
                <AboutFirstRow>
                    <AboutSecondColumn1>
                        <h1><span>OSE</span>는 <span>Our Sole Earth</span>의 약자로 <br/> "하나뿐인지구" 라는 의미를 가지고 있습니다.</h1>
                        <p>OSE는 대구대건고등학교 정보융합동아리 멤버가 <br /> 환경 보호를 목적으로 창작한 프로젝트입니다. </p>
                    </AboutSecondColumn1>
                    <AboutFirstColumn1 />
                </AboutFirstRow>
            </AboutWrapper>
        </AboutContainer>
    )
}

export default About;