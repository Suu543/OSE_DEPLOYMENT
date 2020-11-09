import React, { Fragment, useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { isAuth } from "../../../actions/authHelpers";
import { 
    CampaignNavbarContainer, 
    CampaignNavWrapper, 
    CampaignNavbarLogo, 
    CampaignNavbarTitle, 
    CampaignNavbarRightLink,
    CampaignNavSidebar,
    CampaignNavSidebarList,
    CampaignNavSidebarLink
} from "./NavbarElements"

const NavbarSection = () => {

    const [auth, setAuth] = useState({
        check: false,
        role: '',
        name: '',
    });

    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
    };

    const { check, role, name } = auth;

    useEffect(() => {
        const checkAuth = isAuth();
        if (checkAuth)
            setAuth({ check: true, role: checkAuth.role, name: checkAuth.name });
    }, []);


    return (
        <Fragment>  
            <CampaignNavbarContainer>
                <CampaignNavWrapper>
                    <CampaignNavbarLogo open={open} onClick={toggle}>
                        {!open && <FaBars /> }
                        {open && <FiX /> }
                    </CampaignNavbarLogo>
                    <CampaignNavbarTitle to="/">
                        OSE
                    </CampaignNavbarTitle>
                    { !check && <CampaignNavbarRightLink to="/signin">Sign in</CampaignNavbarRightLink>}
                    { check && role === "admin" && <CampaignNavbarRightLink to="/admin">{name}</CampaignNavbarRightLink>}
                    { check && role === "user" && <CampaignNavbarRightLink to="/private">{name}</CampaignNavbarRightLink> }
                </CampaignNavWrapper>
                <CampaignNavSidebar open={open}>
                    <CampaignNavSidebarList>
                        <CampaignNavSidebarLink to="/">Home</CampaignNavSidebarLink>
                    </CampaignNavSidebarList>
                    <CampaignNavSidebarList>
                        <CampaignNavSidebarLink to="/blogs">Blogs</CampaignNavSidebarLink>
                    </CampaignNavSidebarList>
                    <CampaignNavSidebarList>
                        <CampaignNavSidebarLink to="/topics">Topics</CampaignNavSidebarLink>
                    </CampaignNavSidebarList>
                    <CampaignNavSidebarList>
                        <CampaignNavSidebarLink to="/donation">Donation</CampaignNavSidebarLink>
                    </CampaignNavSidebarList>
                </CampaignNavSidebar>
            </CampaignNavbarContainer>
        </Fragment>
    )
}

export default NavbarSection;