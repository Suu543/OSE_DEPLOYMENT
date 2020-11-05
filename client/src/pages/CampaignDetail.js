import React, { Fragment } from 'react';
import NavbarSection from "../components/CampaignPage/NavbarSection";
import CampaignHeroSection from "../components/CampaignPage/CampaignReadPage/HeroSection";
import RelatedCampaignSection from '../components/CampaignPage/CampaignReadPage/RelatedCampaignSection';
import ScrollToTop from '../components/ScrollToTop';

const CampaignDetail = () => (
        <Fragment>
            <ScrollToTop />
            <NavbarSection />
            <CampaignHeroSection />
            <RelatedCampaignSection />
        </Fragment>
);

export default CampaignDetail;