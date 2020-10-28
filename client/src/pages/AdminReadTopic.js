import React, { Fragment } from "react";
import NavbarSection from "../components/AdminPage/Navbar";
import TopicReadPage from '../components/AdminPage/Topic/ReadTopicPage';
import ScrollToTop from "../components/ScrollToTop";

const AdminReadTopic = () => {
    return (
        <Fragment>
            <ScrollToTop />  
            <NavbarSection />
            <TopicReadPage />
        </Fragment>
    )
}

export default AdminReadTopic;