import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCampaigns } from "../../../actions/campaign"
import {
    CampaignSectionContainer,
    CampaignSectionHeader,
    CampaignSectionWrapper,
    CampaignSectionRow,
    CampaignSectionColumn,
    CampaignSectionColumnHeader,
    CampaignSectionColumnLink,
    CampaignSectionColumnParagraph,
    CampaignShowMore,
    CampaignShowMoreButton
} from "./CampaignSectionElements"

const CampaignSection = () => {

    const [campaigns, setCampaigns] = useState([]);
    
    const loadCampaign = async () => {
        const response = await getCampaigns();
        const splicedResponse = response.splice(0, 4);
        setCampaigns([...splicedResponse]);
    }

    useEffect(() => {
        loadCampaign();
    }, [])

    return (
        <Fragment>
            <CampaignSectionContainer>
                <CampaignSectionHeader>OSE 캠페인</CampaignSectionHeader>
                <CampaignSectionWrapper>
                    <CampaignSectionRow>
                        {campaigns && campaigns.map((c, i) => (
                            <CampaignSectionColumn imgUrl={c.image.url}>
                                <CampaignSectionColumnHeader>{c.title}</CampaignSectionColumnHeader>
                                <CampaignSectionColumnLink>
                                    <Link to={`/campaign/${c._id}`}>{c.buttonText}</Link>
                                </CampaignSectionColumnLink>
                            </CampaignSectionColumn>
                        ))}
                        <CampaignShowMore>
                            <CampaignShowMoreButton to='/campaigns'>더 보기</CampaignShowMoreButton>
                        </CampaignShowMore>
                    </CampaignSectionRow>
                </CampaignSectionWrapper>
            </CampaignSectionContainer>
        </Fragment>
    )
}

export default CampaignSection;