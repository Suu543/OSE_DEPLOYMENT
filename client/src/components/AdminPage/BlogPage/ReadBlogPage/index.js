import React, { Fragment } from "react";
import { BlogReadContainer, BlogInfoContainer, BlogInfoH1 } from "./BlogReadElements"

const BlogReadPage = () => (
    <Fragment>
        <BlogReadContainer>
            <BlogInfoContainer>
                <BlogInfoH1>
                    Admin Blogs
                </BlogInfoH1>
            </BlogInfoContainer>
        </BlogReadContainer>
    </Fragment>
)

export default BlogReadPage;