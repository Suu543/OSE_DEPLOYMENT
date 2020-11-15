import React, { Fragment, useState, useEffect, useRef } from "react";
import { readAllBlogs } from "../../../actions/blog";
import { Link } from "react-router-dom";
import smartTrim from "../../../helpers/smartTrim";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import {
    BlogContainer,
    BlogHeader,
    BlogArrow,
    BlogArrowLeft,
    BlogArrowRight,
    BlogSlider,
    BlogSliderWrapper,
    BlogCard,
    BlogCardImageWrapper,
    BlogCardInfoWrapper,
    BlogCardName,
    BlogCardExcerpt
} from "./BlogSectionElements";

const BlogSection = () => {
    const [blogs, setBlogs] = useState([]);
    const [blog, setBlog] = useState("");

    const loadBlogs = async () => {
        const response = await readAllBlogs();
        const indexedResponse = response.map((blog, idx) => {
            return { ...blog, index: idx}
        });
        setBlogs([...indexedResponse]);
        setBlog(indexedResponse[3] ? indexedResponse[3] : indexedResponse[0]);
    }

    const prevProperty = () => {
        let newIndex = blog.index - 1;
        if (newIndex < 0) {
            newIndex = blogs.length - 1;
            setBlog(blogs[newIndex]);
        } else {
            setBlog(blogs[newIndex]);
        }
    }

    const nextProperty = () => {
        let newIndex = blog.index + 1;
        if (newIndex > blogs.length - 1) {
            newIndex = 0;
            setBlog(blogs[newIndex]);
        } else {
            setBlog(blogs[newIndex]);
        }
    };

    useEffect(() => {
        loadBlogs();
    }, []);


    return (
        <BlogContainer>
            <BlogHeader>OSE 블로그</BlogHeader>
            <BlogArrow>
                <BlogArrowLeft>
                    <FaAngleLeft onClick={() => prevProperty()} />
                </BlogArrowLeft>
                <BlogArrowRight>
                    <FaAngleRight onClick={() => nextProperty()} />    
                </BlogArrowRight>
            </BlogArrow>
            <BlogSlider>
                <BlogSliderWrapper
                    idx={blogs.length > 0 && blog.index}
                    dividedBy={blogs.length * 100}
                    length={blogs.length}
                >
                    {blogs && blogs.map((b, i) => (
                        <BlogCard key={b._id} blogIdx={blog.index} idx={b.index} index={i} >
                            <BlogCardImageWrapper imgUrl={b.image.url} />
                            <BlogCardInfoWrapper>
                                <BlogCardName>
                                    <Link to={`/blog/${b.slug}`}>{b.title}</Link>
                                </BlogCardName>
                            </BlogCardInfoWrapper>
                        </BlogCard> 
                    ))}
                </BlogSliderWrapper>
            </BlogSlider>
        </BlogContainer>
      )

}

export default BlogSection;