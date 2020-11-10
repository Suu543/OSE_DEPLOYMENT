import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import moment from "moment";
import DisqusThread from "../../../helpers/Disqus";
import { readBlog } from '../../../actions/blog';
import {
  BlogContainer,
  BlogWrapper,
  BlogImage,
  Blog,
  BlogHeader,
  BlogTopicAndTagWrapper,
  BlogTopicSection,
  BlogTagSection,
  BlogTitleSection,
  BlogExcerptSection,
  BlogCreateDateSNSSection,
  BlogDateSection,
  BlogBodyWrapper,
  BlogBody,
  BlogCommentWrapper
} from './BlogReadElements';


const ReadBlog = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState({
    topics: [],
    image: {},
    title: '',
    excerpt: '',
    body: '',
    createdAt: '',
    tags: [],
  });

  const { topics, image, title, excerpt, body, tags, createdAt } = blog;

  useEffect(() => {
    loadBlog();
  }, []);

  const loadBlog = async () => {
    let response = await readBlog(slug);

    setBlog({
      topics: response.topics,
      image: response.image,
      title: response.title,
      excerpt: response.excerpt,
      body: response.body,
      tags: response.tags,
      createdAt: response.createdAt,
    });
  };

  const showComments = () => {
    return (
      <BlogCommentWrapper>
        <DisqusThread id={slug} title={slug} path={`/blog/${slug}`} />
      </BlogCommentWrapper>
    )
  }

  return (
    <BlogContainer key={slug}>
      <BlogWrapper>
        <BlogImage>
          <img src={`${blog.image.url}`} alt="image" />
        </BlogImage>
        <Blog>
          <BlogHeader>
            <BlogTopicAndTagWrapper>
              <BlogTopicSection>
                {topics.map((t, i) => (
                  <span key={t._id}>{t.name}</span>
                ))}
              </BlogTopicSection>
              <BlogTagSection>
                {tags.map((t, i) => (
                  <span key={t._id}>{t.name}</span>
                ))}
              </BlogTagSection>
            </BlogTopicAndTagWrapper>
            <BlogTitleSection>
              <h1>{title}</h1>
            </BlogTitleSection>
            <BlogExcerptSection>
              <h2>{excerpt}</h2>
            </BlogExcerptSection>
            <BlogCreateDateSNSSection>
              <BlogDateSection>
                <span>OSE</span>
                <span>{moment(createdAt).format('YYYY-MM-DD')}</span>
              </BlogDateSection>
            </BlogCreateDateSNSSection>
            <hr />
          </BlogHeader>
          <BlogBodyWrapper>
            <BlogBody dangerouslySetInnerHTML={{ __html: body }}></BlogBody>
          </BlogBodyWrapper>
        </Blog>
        {showComments()}
      </BlogWrapper>
      </BlogContainer>
  );
};

export default ReadBlog;
