import React from "react";
import styled from "styled-components";

const Card = styled.a`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 12px;
  background: #1a1a1a;
  color: #ffffff;
  text-decoration: none;
  width: 100%;  /* fills the grid cell */
  max-width: 400px; /* ensures cards don’t get too wide */
  box-shadow: 0 2px 6px rgba(0,0,0,0.3);

  &:hover {
    transform: translateY(-5px);
    transition: all 0.3s ease-in-out;
    background: #222;
  }
`;


const BlogTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const BlogDate = styled.span`
  font-size: 14px;
  color: #b3b3b3;
  margin-bottom: 15px;
`;

const BlogDesc = styled.p`
  font-size: 14px;
  color: #cccccc;
`;

const BlogCard = ({ post }) => {
  return (
    <Card href={post.link} target="_blank" rel="noopener noreferrer">
      <BlogTitle>{post.title}</BlogTitle>
      <BlogDate>Published Date : {new Date(post.pubDate).toDateString()}</BlogDate>
      <BlogDesc>
        {post.description.replace(/<[^>]+>/g, "").substring(0, 200)}...
      </BlogDesc>
    </Card>
  );
};

export default BlogCard;
