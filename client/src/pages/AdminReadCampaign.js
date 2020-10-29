import React, { Fragment } from "react";
import ScrollToTop from "../components/ScrollToTop";
import NavbarSection from "../components/AdminPage/Navbar";
import CampaignReadPage from "../components/AdminPage/CampaignPage/ReadCampaignPage";

const AdminReadCampaign = () => {
    return (
        <Fragment>
            <ScrollToTop />
            <NavbarSection />
            <CampaignReadPage />
        </Fragment>
    )
}

export default AdminReadCampaign;