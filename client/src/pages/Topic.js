import React, { Fragment, useState } from "react";

import Navbar from '../components/TopicPage/NavbarSection';
import Sidebar from '../components/TopicPage/SidebarSection';
import HeaderSection from "../components/TopicPage/HeaderSection";
import InfoSection from "../components/TopicPage/InfoSection";
import FooterSection from "../components/Homepage/FooterSection";

const Topic = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <Fragment>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar isOpen={isOpen} toggle={toggle} />
            <HeaderSection />
            <InfoSection /> 
            <FooterSection />
        </Fragment>
    )
}

export default Topic;