import React, { Fragment, useState,} from "react";
import Button from "../Button";
import Dropdown from "../Dropdown";
import {
    NavbarContainer,
    NavbarLogo,
    NavbarMenu,
    NavbarItem
} from "./NavbarElements"

const Navbar = () => {
    return (
        <Fragment>
            <NavbarContainer>
                <NavbarLogo>OSE</NavbarLogo>
                <NavbarMenu>
                    <NavbarItem>Home</NavbarItem>
                    <NavbarItem>Service</NavbarItem>
                </NavbarMenu>
            </NavbarContainer>
        </Fragment>
    )
}

export default Navbar;