import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { readTopic } from '../../../actions/topic';
import { Link } from 'react-router-dom';
import { readBlogsByTopic } from '../../../actions/blog';
import {
  SingleTopicContainer,
  SingleTopicHeaderContainer,
  SingleTopicHeaderLeft,
  SingleTopicHeaderRight,
  SingleTopicLatestContainer,
  SingleTopicLatestWrapper,
  SingleTopicLatestFirstCard,
  SingleTopicLatestFirstCardContent,
  SingleTopicLatestFirstCardImage,
  SingleTopicLatestSecondCard,
  SingleTopicLatestThirdCard,
  SingleTopicBlogsContainer,
  SingleTopicBlogsTitle,
  SingleTopicBlogWrapper,
  SingleTopicBlogCard,
} from './SingleTopicPage';

const SingleTopicPage = () => {
  const { slug } = useParams();
  const [topic, setTopic] = useState({
    image: {},
    name: '',
    description: '',
  });
  const [blogs, setBlogs] = useState([]);
  const [latests, setLatests] = useState([]);

  useEffect(() => {
    loadCurrentTopic();
  }, []);

  const loadCurrentTopic = async () => {
    let response = await readTopic(slug);
    let { image, name, description } = response;
    setTopic({ image, name, description });

    await loadBlogsByTopic();
  };

  const loadBlogsByTopic = async () => {
    try {
      let blogs = await readBlogsByTopic(slug);
      let latestBlogs = [];

      if (blogs.length > 0) {
        setBlogs([...blogs]);
      }

      if (blogs.length > 0) {
        let length = blogs.length;
        if (blogs.length > 3) length = 3;

        for (let i = 0; i < length; i++) {
          latestBlogs.push(blogs[i]);
        }

        setLatests([...latestBlogs]);
      }
    } catch (error) {
      console.log('error');
      return error;
    }
  };

  return (
    <SingleTopicContainer>
      <SingleTopicHeaderContainer>
        <SingleTopicHeaderLeft>
          <h1>{topic.name}</h1>
          <p>{topic.description}</p>
          <section>
            <input placeholder="Enter Your Email" />
            <button>Subscribe</button>
          </section>
        </SingleTopicHeaderLeft>
        <SingleTopicHeaderRight imgUrl={topic.image.url} />
      </SingleTopicHeaderContainer>
      <SingleTopicLatestContainer>
        <h1>Latest Articles</h1>
        <SingleTopicLatestWrapper>
          {latests.length > 0 &&
            latests.map((b, i) => {
              if (i === 0) {
                return (
                  <SingleTopicLatestFirstCard key={b._id}>
                    <SingleTopicLatestFirstCardContent>
                      <h6>{b.tags[0].name}</h6>
                      <Link to={`/blog/${b.slug}`}>
                        <h1>{b.title}</h1>
                      </Link>
                      <p>{b.excerpt}</p>
                    </SingleTopicLatestFirstCardContent>
                    <SingleTopicLatestFirstCardImage>
                      <img src={`${b.image.url}`} alt="topic" />
                    </SingleTopicLatestFirstCardImage>
                  </SingleTopicLatestFirstCard>
                );
              }

              if (i === 1) {
                return (
                  <SingleTopicLatestSecondCard key={b._id}>
                    <img src={`${b.image.url}`} alt="topic" />
                    <Link to={`/blog/${b.slug}`}>
                      <h1>{b.title}</h1>
                    </Link>
                    <p>{b.excerpt}</p>
                  </SingleTopicLatestSecondCard>
                );
              }

              if (i === 2) {
                return (
                  <SingleTopicLatestThirdCard key={b._id}>
                    <img src={`${b.image.url}`} alt="topic" />
                    <Link to={`/blog/${b.slug}`}>
                      <h1>{b.title}</h1>
                    </Link>
                    <p>{b.excerpt}</p>
                  </SingleTopicLatestThirdCard>
                );
              }
            })}
        </SingleTopicLatestWrapper>
      </SingleTopicLatestContainer>
      <hr />
      <SingleTopicBlogsContainer>
        <SingleTopicBlogsTitle>{topic.name}</SingleTopicBlogsTitle>
        <SingleTopicBlogWrapper>
          {blogs.length > 0 &&
            blogs.map((b, i) => (
              <SingleTopicBlogCard key={b._id}>
                <img src={`${b.image.url}`} alt="topic" />
                <Link to={`/blog/${b.slug}`}>
                  <h1>{b.title}</h1>
                </Link>
                <p>{b.excerpt}</p>
              </SingleTopicBlogCard>
            ))}
        </SingleTopicBlogWrapper>
      </SingleTopicBlogsContainer>
    </SingleTopicContainer>
  );
};

export default SingleTopicPage;
