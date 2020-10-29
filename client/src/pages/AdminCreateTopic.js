import React, { Fragment } from "react";
import NavbarSection from "../components/AdminPage/Navbar"
import TopicCreatePage from "../components/AdminPage/TopicPage/CreateTopicPage"

const AdminCreateTopic = () => {
    return (
        <Fragment>
            <NavbarSection />
            <TopicCreatePage />
        </Fragment>
    )
}

export default AdminCreateTopic;