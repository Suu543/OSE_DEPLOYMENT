import React, { Fragment, useState } from "react";
import NavbarSection from "../components/CampaignPage/NavbarSection";
import Stripe_Donation from "../components/DonationPage";
import ScrollToTop from "../components/ScrollToTop";

const Donation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <Fragment>
            <ScrollToTop />
            <NavbarSection />
            <Stripe_Donation />
        </Fragment>
    )
};

export default Donation;