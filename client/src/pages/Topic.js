import React, { Fragment, useState } from "react";

import Navbar from '../components/TopicPage/NavbarSection';
import Sidebar from '../components/TopicPage/SidebarSection';
import HeaderSection from "../components/TopicPage/HeaderSection";
import InfoSection from "../components/TopicPage/InfoSection";
import FooterSection from "../components/Homepage/FooterSection";
import DonationSection from "../components/Homepage/DonationSection";
import ScrollToTop from "../components/ScrollToTop";

const Topic = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <Fragment>
            <ScrollToTop />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar isOpen={isOpen} toggle={toggle} />
            <HeaderSection />
            <InfoSection /> 
            <DonationSection imgUrl="https://images.unsplash.com/photo-1451847251646-8a6c0dd1510c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80" />
            <FooterSection />
        </Fragment>
    )
}

export default Topic;