import React, { Fragment } from "react";
import { CampaignReadContainer, CampaignInfoContainer, CampaignInfoH1 } from "./CampaignReadElements";

const CampaignReadPage = () => (
        <Fragment>
            <CampaignReadContainer>
                <CampaignInfoContainer>
                    <CampaignInfoH1>Admin Campaigns</CampaignInfoH1>
                </CampaignInfoContainer>
            </CampaignReadContainer>
        </Fragment>
)

export default CampaignReadPage;