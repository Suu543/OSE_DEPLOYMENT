import React, { useState, useEffect } from "react";
import { CampaignTopicContainer, CampaignTopicWrapper } from "./TopicSectionElements"
import { getTopics } from "../../../actions/topic"

const CampaignTopicSection = () => {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        loadTopics();
    }, []);

    const loadTopics = async () => {
        try {
          let response = await getTopics();
          setTopics([...topics, ...response]);
        } catch (error) {
          console.log('Error', error);
        }
    };
    
    return (
        <CampaignTopicContainer>
            <CampaignTopicWrapper>
                {topics && topics.map((t, i) => (

                ))}
            </CampaignTopicWrapper>
        </CampaignTopicContainer>
    )
}

export default CampaignTopicSection;

// https://www.digitalocean.com/community/tutorials/how-to-build-custom-pagination-with-react