import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import BlogCard from '../Cards/BlogCard'; // create this like CertificationCard

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 0px 80px 0px;
    background-color: #0d0d0d; /* dark background */
    @media (max-width: 960px) {
        padding: 20px 0;
    }
`;


const Title = styled.div`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: #ffffff; /* white text */
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: #b3b3b3; /* soft gray */
    font-weight: bold;
    margin-bottom: 20px;
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 900px; /* Adjust container width */
  justify-items: center; /* centers odd items */

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Force single column on mobile */
  }
`;


const Blogs = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchMediumFeed() {
            try {
                const mediumRssFeed = "https://medium.com/feed/@rathishkumar022_3872";
                const rssToJsonApi = "https://api.rss2json.com/v1/api.json";
                const { data } = await axios.get(rssToJsonApi, {
                    params: { rss_url: mediumRssFeed },
                });
                setPosts(data.items || []);
            } catch (error) {
                console.error("Error fetching Medium feed:", error);
            }
        }
        fetchMediumFeed();
    }, []);

    return (
        <Container id="blogs">
            <Title>Blogs</Title>
            <Desc>
                Sharing thoughts, tutorials, and experiences on Medium
            </Desc>
            <CardsWrapper>
                {posts.map((post, index) => (
                    <BlogCard 
                        key={index} 
                        post={post} 
                        style={{ width: '100%' }} /* uniform width */
                    />
                ))}
            </CardsWrapper>
        </Container>
    );
};

export default Blogs;
