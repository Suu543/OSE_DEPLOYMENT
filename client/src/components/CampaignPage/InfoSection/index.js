import React, { Fragment, useState, useEffect } from "react";
import { getCampaigns } from "../../../actions/campaign";
import { Link } from "react-router-dom";
import {
    CampaignInfoContainer,
    CampaignInfoHeader,
    CampaignInfoWrapper,
    CampaignInfoRow,
    CampaignInfoColumn,
    CampaignInfoColumnImage,
    CampaignInfoColumnContent
} from "./InfoSectionElements"

const CampaignInfoSection = () => {
    
    const [campaigns, setCampaigns] = useState([]);

    const loadCampaigns = async () => {
        try {
            const response = await getCampaigns();
            setCampaigns([...response]);
        } catch (error) {
            console.log("error", error);
        }
    }

    useEffect(() => {
        loadCampaigns();
    }, [])

    return (
        <CampaignInfoContainer>
            <CampaignInfoHeader>캠페인</CampaignInfoHeader>
            <CampaignInfoWrapper>
                <CampaignInfoRow>
                    {campaigns && campaigns.map((c, i) => (
                    <Link to={`/campaign/${c._id}`}>
                        <CampaignInfoColumn>
                               <CampaignInfoColumnImage imgUrl={c.image.url} />
                               <CampaignInfoColumnContent>
                                   <h1>{c.title}</h1>
                                   <p>{c.description}</p>
                                   <button>
                                      <Link to={`/campaign/${c._id}`}>{c.buttonText}</Link>
                                   </button>
                               </CampaignInfoColumnContent>
                        </CampaignInfoColumn>
                    </Link>
                    ))}
                </CampaignInfoRow>
            </CampaignInfoWrapper>
        </CampaignInfoContainer>
    )    
}

export default CampaignInfoSection;