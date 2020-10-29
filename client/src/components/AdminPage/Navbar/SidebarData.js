import React from "react";
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"

const SidebarData = [
    {
        title: 'Home',
        path: '/admin',
        icon: <AiIcons.AiFillHome />,
    },
    {
        title: 'Blogs',
        path: '/admin/blogs',
        icon: <IoIcons.IoIosPaper />,
    },
    {
        title: 'Campaigns',
        path: '/admin/campaigns',
        icon: <FaIcons.FaCartPlus />,
    },
    {
        title: 'Topics',
        path: '/admin/topics',
        icon: <IoIcons.IoMdPeople />,
    },
    {
        title: 'Community',
        path: '/admin/community',
        icon: <FaIcons.FaEnvelopeOpenText />,
    }
];

export default SidebarData;