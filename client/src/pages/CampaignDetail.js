import React, { Fragment } from 'react';
import NavbarSection from "../components/CampaignPage/NavbarSection";
import CampaignHeroSection from "../components/CampaignPage/CampaignReadPage/HeroSection";
import RelatedCampaignSection from '../components/CampaignPage/CampaignReadPage/RelatedCampaignSection';
import ScrollToTop from '../components/ScrollToTop';
import FooterSection from '../components/Homepage/FooterSection';
import DonationSection from '../components/Homepage/DonationSection';

const CampaignDetail = () => (
        <Fragment>
            <ScrollToTop />
            <NavbarSection />
            <CampaignHeroSection />
            <RelatedCampaignSection />
            <DonationSection imgUrl="https://images.unsplash.com/photo-1487875961445-47a00398c267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
            <FooterSection />
        </Fragment>
);

export default CampaignDetail;