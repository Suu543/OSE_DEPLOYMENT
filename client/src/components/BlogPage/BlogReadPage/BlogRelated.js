import React, { Fragment, useState, useEffect } from "react";
import { readAllBlogs } from "../../../actions/blog";
import { useParams } from 'react-router';
import { Link } from "react-router-dom";
import { 
    BlogRelatedConatiner, 
    BlogRelatedTitle,
    BlogRelatedRow, 
    BlogRelatedColumn, 
    BlogRelatedImageWrapper,
    BlogRelatedHeader,
    BlogRelatedParagraph
} from "./BlogRelatedElements";

const BlogRelated = () => {
    const { slug } = useParams();

    const [param, setParam] = useState("");
    const [related, setRelated] = useState([]);
    
    const loadBlogs = async () => {
        const response = await readAllBlogs();
        const filteredRelated = response.filter((f, i) => f.slug !== slug);
        setRelated([...filteredRelated]);
    }

    const paramChange = (changedParam) => () => {
        if(slug !== changedParam) {
            setTimeout(() => {
                window.location.reload(false)            
            }, 0)    
        }
    }
    
    useEffect(() => {
        loadBlogs();
    }, [param]);

    return (
        <Fragment>
            <BlogRelatedConatiner>
                <BlogRelatedTitle>관련 글</BlogRelatedTitle>
                <BlogRelatedRow>
                    {related && related.map((r, i) => (
                        <BlogRelatedColumn>
                            <BlogRelatedImageWrapper imgUrl={r.image.url} />
                            <BlogRelatedHeader>
                                <Link onClick={paramChange(r.slug)} to={`/blog/${r.slug}`}>{r.title}</Link>
                            </BlogRelatedHeader>
                            <BlogRelatedParagraph>{r.excerpt}</BlogRelatedParagraph>
                        </BlogRelatedColumn>
                    ))}
                </BlogRelatedRow>
            </BlogRelatedConatiner>
        </Fragment>
    )
}

export default BlogRelated;