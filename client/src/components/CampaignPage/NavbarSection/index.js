import React, { Fragment } from "react";
import { FaBars } from "react-icons/fa" 
import { CampaignNavbarContainer, CampaignNavWrapper, CampaignNavbarLogo, CampaignNavbarTitle, CampaignNavbarSignin } from "./NavbarElements"

const NavbarSection = () => {
    return (
        <Fragment>  
            <CampaignNavbarContainer>
                <CampaignNavWrapper>
                    <CampaignNavbarLogo>
                        <FaBars />
                    </CampaignNavbarLogo>
                    <CampaignNavbarTitle>
                        OSE
                    </CampaignNavbarTitle>
                    <CampaignNavbarSignin>
                        Signin
                    </CampaignNavbarSignin>                    
                </CampaignNavWrapper>
            </CampaignNavbarContainer>
        </Fragment>
    )
}

export default NavbarSection;