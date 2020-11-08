import React, { Fragment, useState } from "react";

import Navbar from '../components/TopicPage/NavbarSection';
import Sidebar from '../components/TopicPage/SidebarSection';

const Topic = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <Fragment>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar isOpen={isOpen} toggle={toggle} />
        </Fragment>
    )
}

export default Topic;