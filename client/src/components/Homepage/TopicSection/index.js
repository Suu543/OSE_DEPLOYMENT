import React, { Fragment, useState, useEffect } from "react";
import { getTopics }  from "../../../actions/topic";
import { Link } from "react-router-dom";
import {
    TopicSectionContainer,
    TopicSectionHeader,
    TopicSectionSubHeader,
    TopicSectionWrapper,
    TopicSectionElement
} from "./TopicSectionElements"

const TopicSection = () => {

    const [topics, setTopics] = useState([]);

    const loadTopics = async () => {
        const response = await getTopics();
        setTopics([...response]);
    }

    useEffect(() => {
        loadTopics();
    }, [])

    return (
        <Fragment>
            <TopicSectionContainer>
                <TopicSectionHeader>어떤 환경 문제에 관심이 있나요?</TopicSectionHeader>
                <TopicSectionSubHeader>관심 있는 문제를 클릭하시면 더 많은 정보를 확인할 수 있습니다!</TopicSectionSubHeader>
                <TopicSectionWrapper>
                    {topics.map((t, i) => (
                        <TopicSectionElement key={t._id}>
                            <Link to={`/topic/${t.slug}`}>
                            {t.name}
                            </Link>
                        </TopicSectionElement>
                    ))}
                </TopicSectionWrapper>
            </TopicSectionContainer>
        </Fragment>
    )
}

export default TopicSection;