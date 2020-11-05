import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
    BlogReadContainer, 
    BlogInfoContainer, 
    BlogInfoH1,
    BlogReadWrapper,
    BlogTableH1,
    BlogTable,
    BlogTableRow,
    BlogTableHeader
} from "./BlogReadElements"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { getCookie } from "../../../../actions/authHelpers";
import { readAllBlogs } from "../../../../actions/blog";

const BlogReadPage = () => {
    const [blogs, setBlogs] = useState([]);
    const token = getCookie("token");

    const loadBlogs = async () => {
        try {
            const response = await readAllBlogs();
            console.log("response", response);
            setBlogs([...response])
        } catch (error) {
            console.log("error", error);
        }
    }

    const deleteBlogAndUpdateBlog = async (slug, token) => {
        
    }

    useEffect(() => {
        loadBlogs();
    }, [])
    
    return (
        <Fragment>
        <BlogReadContainer>
            <ToastContainer
            position="top-center"
            autoClose={3000}
            pauseOnFocusLoss
            pauseOnHover
            style={{ fontSize: '1.5rem' }}
            />
            <BlogInfoContainer>
                <BlogInfoH1>
                    Admin Blogs
                </BlogInfoH1>
            </BlogInfoContainer>
            <BlogReadWrapper>
                    <BlogTableH1>
                        <Link to="/admin/Blog/create">Create Blog</Link>
                    </BlogTableH1>
                    <BlogTable>
                        <BlogTableRow>
                            <BlogTableHeader>Name</BlogTableHeader>
                            <BlogTableHeader>Description</BlogTableHeader>
                            <BlogTableHeader>Update</BlogTableHeader>
                            <BlogTableHeader>Delete</BlogTableHeader>
                        </BlogTableRow>
                    </BlogTable>
                </BlogReadWrapper>
        </BlogReadContainer>
    </Fragment>
    )
}

export default BlogReadPage;