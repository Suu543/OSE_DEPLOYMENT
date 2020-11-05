import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCampaigns } from "../../../../actions/campaign";
import { useParams } from 'react-router';
import {
    RelatedCampaignContainer,
    RelatedCampaignHeader,
    RelatedCampaignRow,
    RelatedCampaignColumn,
    RelatedCampaignColumnImage,
    RelatedCampaignColumnHeader,
    RelatedCampaignColumnParagraph
} from "./RelatedCampaignElements";

const RelatedCampaignSection = () => {
    const { id } = useParams();
    const [relatedCampaigns, setRelatedCampaigns] = useState([]);

    const loadRelatedCampaigns = async () => {
        try {
            // 해당 캠페인 제외
            const response = await getCampaigns();
            const filteredCampaign = response.filter((f, i) => f._id !== id);
            setRelatedCampaigns([...filteredCampaign]);
        } catch (error) {
            console.log("Error", error); 
        }
    }

    const paramChange = (changedParam) => () => {
        if (id !== changedParam) {
            setTimeout(() => {
                window.location.reload(false)            
            }, 0)    
        }
    }

    useEffect(() => {
        loadRelatedCampaigns();
    }, [])


    return (
        <Fragment>
            <RelatedCampaignContainer>
                <RelatedCampaignHeader>
                    관련 캠페인
                </RelatedCampaignHeader>
                <RelatedCampaignRow>
                    {relatedCampaigns && relatedCampaigns.map((r, i) => (
                        <RelatedCampaignColumn>
                            <RelatedCampaignColumnImage imgUrl={r.image.url} />
                            <RelatedCampaignColumnHeader>
                                <Link onClick={paramChange(r._id)} to={`/campaign/${r._id}`}>{r.title}</Link>
                            </RelatedCampaignColumnHeader>
                            <RelatedCampaignColumnParagraph>
                                {r.description}
                            </RelatedCampaignColumnParagraph>
                        </RelatedCampaignColumn>
                    ))}
                </RelatedCampaignRow>
            </RelatedCampaignContainer>
        </Fragment>
    )
}

export default RelatedCampaignSection;