import React, { Fragment } from "react";
import NavbarSection from "../components/AdminPage/Navbar";
import AdminInfoSection from "../components/AdminPage/InfoSection"

const Admin = () => {
    return (
        <Fragment>
            <NavbarSection />
            <AdminInfoSection />
        </Fragment>
    )
}

export default Admin;