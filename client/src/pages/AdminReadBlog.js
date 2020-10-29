import React, { Fragment } from "react";
import NavbarSection from "../components/AdminPage/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import BlogReadPage from "../components/AdminPage/BlogPage/ReadBlogPage"


const AdminReadBlog = () => {
    return (
        <Fragment>
            <ScrollToTop />
            <NavbarSection />
            <BlogReadPage />
        </Fragment>
    )
}

export default AdminReadBlog;