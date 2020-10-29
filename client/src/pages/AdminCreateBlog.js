import React, { Fragment } from "react";
import NavbarSection from "../components/AdminPage/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import CreateBlogPage from "../components/AdminPage/BlogPage/CreateBlogPage";

const AdminCreateBlog = () => {
    return (
        <Fragment>
            <ScrollToTop />
            <NavbarSection />
            <CreateBlogPage />
        </Fragment>
    )
}

export default AdminCreateBlog;
