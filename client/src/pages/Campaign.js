import React, { Fragment } from "react";
import NavbarSection from "../components/CampaignPage/NavbarSection";
import CampaignTopicSection from "../components/CampaignPage/TopicSection";
import CampaignHeroSection from "../components/CampaignPage/HeroSection";
import CampaignInfoSection from "../components/CampaignPage/InfoSection";
import FooterSection from "../components/Homepage/FooterSection";
import ScrollToTop from "../components/ScrollToTop";
import DonationSection from "../components/Homepage/DonationSection";

const Campaign = () => {
    return (
        <Fragment>
            <ScrollToTop />
            <NavbarSection />
            <CampaignTopicSection />
            <CampaignHeroSection />
            <CampaignInfoSection />
            <DonationSection imgUrl="https://images.unsplash.com/photo-1581059765118-a5959fba53bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80" />
            <FooterSection />
        </Fragment>
    )
}

export default Campaign;