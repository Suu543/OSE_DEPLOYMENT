import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { 
    CampaignReadContainer, 
    CampaignInfoContainer, 
    CampaignInfoH1,
    CampaignReadWrapper,
    CampaignTableH1,
    CampaignTable,
    CampaignTableRow,
    CampaignTableHeader
} from "./CampaignReadElements";

const CampaignReadPage = () => (
        <Fragment>
            <CampaignReadContainer>
                <CampaignInfoContainer>
                    <CampaignInfoH1>Admin Campaigns</CampaignInfoH1>
                </CampaignInfoContainer>
                <CampaignReadWrapper>
                    <CampaignTableH1>
                        <Link to="/admin/campaign/create">Create Campaign</Link>
                    </CampaignTableH1>
                    <CampaignTable>
                        <CampaignTableRow>
                            <CampaignTableHeader>Name</CampaignTableHeader>
                            <CampaignTableHeader>Description</CampaignTableHeader>
                            <CampaignTableHeader>Update</CampaignTableHeader>
                            <CampaignTableHeader>Delete</CampaignTableHeader>
                        </CampaignTableRow>
                    </CampaignTable>
                </CampaignReadWrapper>
            </CampaignReadContainer>
        </Fragment>
)

export default CampaignReadPage;