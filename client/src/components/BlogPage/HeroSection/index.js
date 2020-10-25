import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTopics } from '../../../actions/topic';
import { readBlogsByTopic } from '../../../actions/blog';
import smartTrim from '../../../helpers/smartTrim';

import {
  HeroContainer,
  HeroTopicWrapper,
  HeroTopic,
  HeroEntryRow,
  HeroEntryRowColumn1,
  HeroEntryRowColumn2,
  HeroPostsRow,
  HeroPostsColumn,
  HeroPostCard,
  HeroPostCardWrapper,
  HeroPostCardImage,
  HeroPostCardContent,
} from './HeroElements';

const HeroSection = () => {
  const [topics, setTopics] = useState([]);
  const [blog, setBlog] = useState([]);
  const [single, setSingle] = useState({
    image: {},
    title: '',
    excerpt: '',
    topics: {},
    updatedAt: '',
  });

  useEffect(() => {
    loadTopics();
    loadBlogs();
  }, []);

  const loadTopics = async () => {
    try {
      let response = await getTopics();
      setTopics([...topics, ...response]);
    } catch (error) {
      console.log('Error', error);
    }
  };

  const loadBlogs = async () => {
    try {
      let blogs = await readBlogsByTopic('air-pollution');
      console.log('blogs', blogs);
      console.log(blogs[0]);
      setSingle({
        image: blogs[0].image,
        title: blogs[0].title,
        excerpt: blogs[0].excerpt,
        topics: blogs[0].topics[0],
        updatedAt: blogs[0].updatedAt,
      });
      setBlog([...blog, ...blogs]);
    } catch (error) {
      console.log('error', error);
    }
  };

  // {topics.map((t, i) => (
  //   <HeroTopic>
  //     <Link to={`/topic/${t.slug}`}>{t.name}</Link>
  //   </HeroTopic>
  // ))}


  return (
    <HeroContainer>
      <HeroTopicWrapper>
        <HeroTopic>Topics</HeroTopic>
        <select>
          {topics.map((t, i) => (
            <option>{t.name}</option>
          ))}
        </select>
      </HeroTopicWrapper>
      <HeroEntryRow>
        <HeroEntryRowColumn1>
          <img src={single.image.url} alt="HeroFirstImage" />
        </HeroEntryRowColumn1>
        <HeroEntryRowColumn2>
          <span>{single.topics.name}</span>
          <h1>{single.title}</h1>
          <p>{single.excerpt}</p>
          <div>
            <span>{single.updatedAt}</span>
          </div>
        </HeroEntryRowColumn2>
      </HeroEntryRow>
      <HeroPostsRow>
        <HeroPostsColumn>
          {blog.map((b, i) => (
            <HeroPostCard>
              <HeroPostCardWrapper>
                <HeroPostCardImage>
                  <img src={b.image.url} alt="blog" />
                </HeroPostCardImage>
                <HeroPostCardContent>
                  <span>{b.topics[0].name}</span>
                  <h1>{b.title}</h1>
                  <p>{smartTrim(b.excerpt, 70, ' ', '...')}</p>
                  <div>
                    <span>{b.createdAt}</span>
                  </div>
                </HeroPostCardContent>
              </HeroPostCardWrapper>
            </HeroPostCard>
          ))}
        </HeroPostsColumn>
      </HeroPostsRow>
    </HeroContainer>
  );
};

export default HeroSection;
