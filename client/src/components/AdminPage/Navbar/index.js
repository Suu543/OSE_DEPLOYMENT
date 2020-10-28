import React, { useState } from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { Link } from "react-router-dom";
import SidebarData from "./SidebarData";
import { IconContext } from "react-icons";
import { NavbarContainer, Navbar, MenuBars, Sidebar, SidebarMenuItems, SidebarToggle, SidebarBars, SidebarText } from "./NavbarElements";

const NavbarSection = () => {    
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <NavbarContainer>  
            <IconContext.Provider value={{ color: "#385FCC"}}>
                <Navbar>
                    <MenuBars>
                        <FaIcons.FaBars onClick={showSidebar} />
                        <h1><Link to="/">OSE</Link></h1>
                    </MenuBars>
                </Navbar>
            {   
            <Sidebar sidebar={sidebar}>
                <SidebarMenuItems onClick={showSidebar}>
                    <SidebarToggle>
                        <SidebarBars>
                            <AiIcons.AiOutlineClose />
                        </SidebarBars>
                    </SidebarToggle>
                    {
                    SidebarData.map((item, index) => (
                        <SidebarText>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </SidebarText>))
                    }
                </SidebarMenuItems>
            </Sidebar>
            }
            </IconContext.Provider>
        </NavbarContainer>
    )
    
};

export default NavbarSection;