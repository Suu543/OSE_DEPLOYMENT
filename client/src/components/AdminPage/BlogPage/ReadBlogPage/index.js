import React, { Fragment } from "react";
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

const BlogReadPage = () => (
    <Fragment>
        <BlogReadContainer>
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

export default BlogReadPage;