import React from "react";
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"

const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
    },
    {
        title: 'Blogs',
        path: '/admin/blog',
        icon: <IoIcons.IoIosPaper />,
    },
    {
        title: 'Campaigns',
        path: '/admin/campaign',
        icon: <FaIcons.FaCartPlus />,
    },
    {
        title: 'Topics',
        path: '/admin/topic',
        icon: <IoIcons.IoMdPeople />,
    },
    {
        title: 'Community',
        path: '/admin/community',
        icon: <FaIcons.FaEnvelopeOpenText />,
    }
];

export default SidebarData;