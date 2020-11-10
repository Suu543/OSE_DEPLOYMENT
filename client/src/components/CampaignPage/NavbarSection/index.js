import React, { Fragment, useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { isAuth, signout } from "../../../actions/authHelpers";
import { 
    CampaignNavbarContainer, 
    CampaignNavWrapper, 
    CampaignNavbarLogo, 
    CampaignNavbarTitle, 
    CampaignNavbarRightWrapper,
    CampaignNavbarRightLink,
    CampaignNavbarDropdown,
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

    const [dropdown, setDropdown] = useState(false);

    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
    };

    const { check, role, name } = auth;

    const setDropdownToggle = () => {
        setDropdown(!dropdown);
    }

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
                    { 
                    check && role === "admin" && 
                    <CampaignNavbarRightWrapper dropdown={dropdown}>
                        <h1 onClick={setDropdownToggle}>{name}</h1>
                        <CampaignNavbarDropdown dropdown={dropdown}>
                            <li onClick={() => signout(() => window.location.reload(false))}>Sign Out</li>
                            <CampaignNavbarRightLink to="/private">{name}</CampaignNavbarRightLink>
                        </CampaignNavbarDropdown>
                    </CampaignNavbarRightWrapper>
                    }
                    { 
                    check && role === "user" && 
                    <CampaignNavbarRightWrapper dropdown={dropdown}>
                        <h1 onClick={setDropdownToggle}>{name}</h1>
                        <CampaignNavbarDropdown dropdown={dropdown}>
                           <li onClick={() => signout(() => window.location.reload(false))}>Sign Out</li>       
                           <CampaignNavbarRightLink to="/private">{name}</CampaignNavbarRightLink>
                        </CampaignNavbarDropdown>
                    </CampaignNavbarRightWrapper>
                    }
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