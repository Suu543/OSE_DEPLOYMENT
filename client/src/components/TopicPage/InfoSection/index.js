import React, { Fragment, useState, useEffect } from 'react';
import { getTopics } from "../../../actions/topic";
import { FaAngleLeft, FaAngleRight, FaCrow } from "react-icons/fa";
import smartTrim from "../../../helpers/smartTrim"
import { Link } from "react-router-dom";
import {
    InfoSectionContainer,
    InfoSectionHeader,
    InfoSectionArrow,
    InfoSectionArrowLeft,
    InfoSectionArrowRight,
    InfoSectionSlider,
    InfoSectionSliderWrapper,
    InfoSectionCard,
    InfoSectionImageWrapper,
    InfoSectionCardHeader,
    InfoSectionDetailWrapper,
    InfoSectionDetailCard,
    InfoSectionDetailImage,
    InfoSectionDetailContent
} from "./InfoSectionElements";

const InfoSection = () => {
    const [topics, setTopics] = useState([]);
    const [topic, setTopic] = useState("");

    const loadTopics = async () => {
        try {
            const response = await getTopics();
            const indexedResponse = response.map((t, idx) => {
                return { ...t, index: idx}
            });
            setTopics([...indexedResponse]);
            setTopic(indexedResponse[2] ? indexedResponse[2] : indexedResponse[0]);
        } catch (error) {
            console.log('error', error);
        }
    }

    const prevProperty = () => {
        let newIndex = topic.index - 1;
        if (newIndex < 0) {
            newIndex = topics.length - 1;
            setTopic(topics[newIndex]);
        } else {
            setTopic(topics[newIndex]);
        }
    }

    const nextProperty = () => {
        let newIndex = topic.index + 1;
        if (newIndex > topics.length - 1) {
            newIndex = 0;
            setTopic(topics[newIndex]);
        } else {
            setTopic(topics[newIndex]);
        }
    };

    useEffect(() => {
        loadTopics()
    }, []);

    return (
        <Fragment>
            <InfoSectionContainer>
                <InfoSectionHeader>요약</InfoSectionHeader>
                <InfoSectionArrow>
                    <InfoSectionArrowLeft>
                        <FaAngleLeft onClick={() => prevProperty()} />
                    </InfoSectionArrowLeft>
                    <InfoSectionArrowRight>
                        <FaAngleRight onClick={() => nextProperty()} />    
                    </InfoSectionArrowRight>
                </InfoSectionArrow>
                <InfoSectionSlider>
                    <InfoSectionSliderWrapper
                        idx={topics.length > 0 && topic.index}
                        dividedBy={topics.length * 100}
                        length={topics.length}
                    >
                        {topics && topics.map((t, i) => (
                            <InfoSectionCard key={t._id} topicIdx={topic.index} idx={t.index} index={i}>
                                <Link to={`/topic/${t.slug}`}>
                                    <InfoSectionImageWrapper imgUrl={t.image.url} />
                                    <InfoSectionCardHeader>
                                        {t.name}
                                    </InfoSectionCardHeader>
                                </Link>
                            </InfoSectionCard>
                        ))}
                    </InfoSectionSliderWrapper>
                </InfoSectionSlider>
                <InfoSectionHeader>OSE 토픽</InfoSectionHeader>
                <InfoSectionDetailWrapper>
                    {topics && topics.map((t, i) => (
                        <Link key={t._id} to={`/topic/${t.slug}`}>
                            <InfoSectionDetailCard>
                                <InfoSectionDetailImage>
                                    <img src={t.image.url} />
                                </InfoSectionDetailImage>
                                <InfoSectionDetailContent>
                                    <h1>{t.name}</h1>
                                    <p>&nbsp;{smartTrim(t.description, 50, " ", "...")}</p>
                                    <button>
                                        더보기 <FaCrow />
                                    </button>
                                </InfoSectionDetailContent>
                            </InfoSectionDetailCard>                        
                        </Link>
                    ))}
                </InfoSectionDetailWrapper>
            </InfoSectionContainer>
        </Fragment>
    )
}

export default InfoSection;