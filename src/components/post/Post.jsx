import React from 'react';

// react-bootstrap
import Card from 'react-bootstrap/Card';

// components
import PostHeader from './PostHeader';
import PostFooter from './PostFooter/PostFooter';
import PostComment from './PostFooter/PostComment';

// assets
import PostImg from '../../assets/post.jpg';

const Post = () => {
  return (
    <Card>
      <PostHeader />
      <Card.Body className="p-0">
        <img src={PostImg} alt="" width="100%" height="500" />
      </Card.Body>
      <PostFooter />
      <PostComment />
    </Card>
  );
};

export default Post;
