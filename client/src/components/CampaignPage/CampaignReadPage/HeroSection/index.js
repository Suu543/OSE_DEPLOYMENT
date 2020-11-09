import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router";
import moment from "moment";
import DisqusThread from "../../../../helpers/Disqus";
import { Link } from "react-router-dom";

import {
    CampaignDetailContainer,
    CampaignDetailHeroWrapper,
    CampaignDetailHeroH1,
    CampaignDetailParagraph,
    CampaignDetailHeroContentRow,
    CampaignDetailHeroContentColumn1,
    CampaignDetailHeroContentColumn2,
    CampaignDetailColumn2Amount,
    CampaignDetailColumn2Button,
    CampaignDetailColumn2StartDate,
    CampaignDetailColumn2SEndDate,
    CampaignBodyWrapper,
    CampaignBodyH1,
    CampaignBody,
    CampaignDisqusWrapper
} from "./CampaignHeroElements";

const CampaignHeroSection = () => {
    const { id } = useParams();
    const [campaign, setCampaign] = useState({
        title: "",
        description: "",
        image: "",
        buttonText: "",
        amount: "",
        body: "",
        startDate:"",
        endDate: "",
    });

    const { title, description, image, buttonText, amount, body, startDate, endDate } = campaign;

    useEffect(() => {
        loadCampaign();
    }, []);

    const loadCampaign = async () => {
        const response = await axios.get(`${process.env.REACT_APP_API}/campaign/${id}`);
        const { title, description, image, buttonText, amount, body, startDate, endDate} = response.data;
        setCampaign({
            title,
            description,
            image: response.data.image.url,
            buttonText,
            amount,
            body,
            startDate,
            endDate,
        });
    }

    return (
        <CampaignDetailContainer>
            <CampaignDetailHeroWrapper>
                <CampaignDetailHeroH1>{title}</CampaignDetailHeroH1>
                <CampaignDetailParagraph>{description}</CampaignDetailParagraph>
                <CampaignDetailHeroContentRow>
                    <CampaignDetailHeroContentColumn1 imgUrl={image}></CampaignDetailHeroContentColumn1>
                    <CampaignDetailHeroContentColumn2>
                        <CampaignDetailColumn2Amount>
                            목표: <img src="https://ose.s3.ap-northeast-2.amazonaws.com/static/won.png" /> {amount}
                        </CampaignDetailColumn2Amount>
                        <CampaignDetailColumn2StartDate>
                            캠페인 시작일:
                            <br />
                            {moment(startDate).format('YYYY-MM-DD')}
                        </CampaignDetailColumn2StartDate>
                        <CampaignDetailColumn2SEndDate>
                            캠페인 종료일:
                            <br />
                            {moment(endDate).format('YYYY-MM-DD')}
                        </CampaignDetailColumn2SEndDate>
                        <CampaignDetailColumn2Button>
                            <button>
                                <Link to="/donation">
                                {buttonText}
                                </Link>
                            </button>
                        </CampaignDetailColumn2Button>
                    </CampaignDetailHeroContentColumn2>
                </CampaignDetailHeroContentRow>
            </CampaignDetailHeroWrapper>
            <CampaignBodyWrapper>
                <CampaignBodyH1>{title}</CampaignBodyH1>
                <CampaignBody dangerouslySetInnerHTML={{ __html: body }}></CampaignBody>
            </CampaignBodyWrapper>  
            <CampaignDisqusWrapper>
                <DisqusThread />
            </CampaignDisqusWrapper>
        </CampaignDetailContainer>
    )
}

export default CampaignHeroSection;