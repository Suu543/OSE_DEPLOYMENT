import React, { Fragment } from "react";
import NavbarSection from "../components/CampaignPage/NavbarSection";
import CampaignTopicSection from "../components/CampaignPage/TopicSection";
import CampaignHeroSection from "../components/CampaignPage/HeroSection";

const Campaign = () => {
    return (
        <Fragment>
            <NavbarSection />
            <CampaignTopicSection />
            <CampaignHeroSection />
        </Fragment>
    )
}

export default Campaign;