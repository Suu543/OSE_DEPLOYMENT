import React from "react";
import axios from "axios";
import { CampaignContainer, CampaignToolContainer, CampaignToolWrapper, CampaignToolLabel, CampaignToolInput } from "./CampaignCreateElements"
import { ToastContainer, toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import 'react-toastify/dist/ReactToastify.min.css';

// Context API 한 번 써보자


const CampaignCreatePage = () => {
    
    return (
        <CampaignContainer>
            <CampaignToolContainer>
                <CampaignToolWrapper>
                    <CampaignToolLabel>+Image</CampaignToolLabel>
                    <CampaignToolInput />
                </CampaignToolWrapper>
                <CampaignToolWrapper>
                    <CampaignToolLabel>+Title</CampaignToolLabel>
                    <CampaignToolInput />
                </CampaignToolWrapper>
                <CampaignToolWrapper>
                    <CampaignToolLabel>+Description</CampaignToolLabel>
                    <CampaignToolInput />
                </CampaignToolWrapper>
                <CampaignToolWrapper>
                    <CampaignToolLabel>+Button Text</CampaignToolLabel>
                    <CampaignToolInput />
                </CampaignToolWrapper>
                <CampaignToolWrapper>
                    <CampaignToolLabel>+Amount</CampaignToolLabel>
                    <CampaignToolInput />
                </CampaignToolWrapper>
                <CampaignToolWrapper>
                    <CampaignToolLabel>+Start Date</CampaignToolLabel>
                    <CampaignToolInput />
                </CampaignToolWrapper>
                <CampaignToolWrapper>
                    <CampaignToolLabel>+End Date</CampaignToolLabel>
                    <CampaignToolInput />
                </CampaignToolWrapper>
            </CampaignToolContainer>
        </CampaignContainer>
    )
}

export default CampaignCreatePage;