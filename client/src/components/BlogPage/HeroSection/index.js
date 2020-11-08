import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useReactRouter from 'use-react-router';
import { getTopics } from '../../../actions/topic';
import moment from "moment";
import { readAllBlogs } from '../../../actions/blog';
import smartTrim from '../../../helpers/smartTrim';

import {
  HeroContainer,
  HeroTopicWrapper,
  HeroTopicSelectWrapper,
  HeroTopic,
  HeroSelect,
  HeroEntryRow,
  HeroEntryRowColumn1,
  HeroEntryRowColumn2,
  HeroPostsRow,
  HeroPostsColumn,
  HeroPostCard,
  HeroPostCardWrapper,
  HeroPostCardImage,
  HeroPostCardContent,
  HeroPostCardTopic
} from './HeroElements';

const HeroSection = () => {
  const { history, location, match } = useReactRouter();
  const [topics, setTopics] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [single, setSingle] = useState({
    image: {},
    title: '',
    excerpt: '',
    topics: {},
    updatedAt: '',
    slug: ""
  });

  useEffect(() => {
    loadTopics();
    loadBlogs();
  }, []);

  const loadTopics = async () => {
    try {
      let response = await getTopics();
      setTopics([...response]);
    } catch (error) {
      console.log('Error', error);
    }
  };

  const loadBlogs = async () => {
    try {
      let blogs = await readAllBlogs();
      console.log('blogs', blogs);
      console.log(blogs[0]);
      setSingle({
        image: blogs[0].image,
        title: blogs[0].title,
        excerpt: blogs[0].excerpt,
        topics: blogs[0].topics[0],
        updatedAt: blogs[0].updatedAt,
        slug: blogs[0].slug
      });
      setBlogs([...blogs]);
    } catch (error) {
      console.log('error', error);
    }
  };

  const changeTopic = (e) => {
    e.preventDefault();
    const topicLink = e.target.value;
    history.push(`${topicLink}`)
  }



  return (
    <HeroContainer>
      <HeroTopicWrapper>
        <HeroTopic>Filter By Topcis</HeroTopic>
        {topics.map((t, i) => (
          <HeroTopic>
            <Link to={`/topic/${t.slug}`}>{t.name}</Link>
          </HeroTopic>
        ))}
      </HeroTopicWrapper>
      <HeroTopicSelectWrapper>
        <HeroSelect onChange={changeTopic}>
          <option selected disabled>Filter By Topcis</option>
          {topics.map((t, i) => (
            <option value={`/topic/${t.slug}`}>{t.name}</option>
          ))}
        </HeroSelect>
      </HeroTopicSelectWrapper>
      <HeroEntryRow>
        <HeroEntryRowColumn1>
          <img src={single.image.url} alt="HeroFirstImage" />
        </HeroEntryRowColumn1>
        <HeroEntryRowColumn2> 
          <Link to={`/topic/${single.topics.slug}`}>{single.topics.name}</Link>
          <h1><Link to={`/blog/${single.slug}`}>{single.title}</Link></h1>
          <p>{single.excerpt}</p>
          <div>
            <span>{moment(single.createdAt).format('YYYY-MM-DD')}</span>
          </div>
        </HeroEntryRowColumn2>
      </HeroEntryRow>
      <HeroPostsRow>
        <HeroPostsColumn>
          {blogs.map((b, i) => (
            <HeroPostCard>
              <HeroPostCardWrapper>
                <HeroPostCardImage>
                  <img src={b.image.url} alt="blog" />
                </HeroPostCardImage>
                <HeroPostCardContent>
                  <HeroPostCardTopic>
                  {
                    b.topics.map((t, i) => (
                      <Link to={`/topic/${t.slug}`}>{t.name}</Link>
                    ))
                  }
                  </HeroPostCardTopic>
                  <h1>
                    <Link to={`/blog/${b.slug}`}>
                    {b.title}
                    </Link>
                  </h1>
                  <p>{smartTrim(b.excerpt, 70, ' ', '...')}</p>
                  <div>
                    <span>{moment(b.createdAt).format('YYYY-MM-DD')}</span>
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
