import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCookie } from "../../../../actions/authHelpers";
import { getCampaigns, deleteCampaign } from "../../../../actions/campaign";
import smartTrim from "../../../../helpers/smartTrim";
import { ToastContainer, toast } from 'react-toastify';
import { 
    CampaignReadContainer, 
    CampaignInfoContainer, 
    CampaignInfoH1,
    CampaignReadWrapper,
    CampaignTableH1,
    CampaignTable,
    CampaignTableRow,
    CampaignTableHeader,
    CampaignTableRowData,
    CampaignTableButton
} from "./CampaignReadElements";
import 'react-toastify/dist/ReactToastify.min.css';

const CampaignReadPage = () => {
        const [campaigns, setCampaigns] = useState([]);
        const token = getCookie("token");

        const loadCampaigns = async () => {
            try {
              const response = await getCampaigns();
              setCampaigns([... response]);
            } catch (error) {
                console.log("error", error)
            }
        }

        const deleteCampaignAndUpdateCampaign = async (title, token) => {
            const response = await deleteCampaign(title, token);
            toast.info(`🦄 ${response.message} `);

            const updateCampaigns = await getCampaigns();
            setCampaigns([...updateCampaigns]);
        }

        useEffect(() => {
            loadCampaigns();
        }, [])


        return (
            <Fragment>
                <CampaignReadContainer>
                    <ToastContainer
                    position="top-center"
                    autoClose={3000}
                    pauseOnFocusLoss
                    pauseOnHover
                    style={{ fontSize: '1.5rem' }}
                    />
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
                            {
                                campaigns && campaigns.map((c, i) => (
                                    <CampaignTableRow key={i}>
                                        <CampaignTableRowData>{c.title}</CampaignTableRowData>
                                        <CampaignTableRowData>{smartTrim(c.description, 50, ' ', '...')}</CampaignTableRowData>
                                        <CampaignTableRowData>
                                            <CampaignTableButton style={{ background: "#D1ECF1", color: "#487AB0" }} >Update</CampaignTableButton>
                                        </CampaignTableRowData>
                                        <CampaignTableRowData>
                                            <CampaignTableButton onClick={() => deleteCampaignAndUpdateCampaign(c.title, token)} style={{ background: "#F8D7DA", color: "#B67B81" }} >Delete</CampaignTableButton>
                                        </CampaignTableRowData>
                                    </CampaignTableRow>
                                ))
                            }
                        </CampaignTable>
                    </CampaignReadWrapper>
                </CampaignReadContainer>
            </Fragment>
        )
};

export default CampaignReadPage;