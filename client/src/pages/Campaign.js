import React, { Fragment } from "react";
import NavbarSection from "../components/CampaignPage/NavbarSection";
import CampaignTopicSection from "../components/CampaignPage/TopicSection";
import CampaignHeroSection from "../components/CampaignPage/HeroSection";
import CampaignInfoSection from "../components/CampaignPage/InfoSection";
import FooterSection from "../components/Homepage/FooterSection";
import ScrollToTop from "../components/ScrollToTop";

const Campaign = () => {
    return (
        <Fragment>
            <ScrollToTop />
            <NavbarSection />
            <CampaignTopicSection />
            <CampaignHeroSection />
            <CampaignInfoSection />
            <FooterSection />
        </Fragment>
    )
}

export default Campaign;