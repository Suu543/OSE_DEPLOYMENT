import React, { Fragment, useState, useEffect } from "react";
import { readAllBlogs } from "../../../actions/blog";

const BlogSection = () => {
    
    const [blogs, setBlogs] = useState([]);

    const loadBlogs = async () => {
        const response = await readAllBlogs();
        setBlogs([...response]);
    }

    useEffect(() => {
        loadBlogs();
    }, []);


    return (
        <Fragment>
            <h1>Blog Section</h1>
        </Fragment>
    )

}

export default BlogSection;