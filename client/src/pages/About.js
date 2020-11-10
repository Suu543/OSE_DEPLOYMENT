import React, { Fragment, useState } from "react";
import DonationSection from "../components/Homepage/DonationSection";
import FooterSection from "../components/Homepage/FooterSection";
import Navbar from "../components/AboutPage/Navbar";
import Sidebar from "../components/Homepage/Sidebar";
import About from "../components/AboutPage"

const AboutPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
      setIsOpen(!isOpen);
    };

    return (
        <Fragment>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar isOpen={isOpen} toggle={toggle} about="true" />
            <About />
            <DonationSection imgUrl="https://images.unsplash.com/photo-1483639092905-bad36a65abfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
            <FooterSection />
        </Fragment>
    )
}

export default AboutPage;