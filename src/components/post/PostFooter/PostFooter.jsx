import React from 'react';

// react-bootstrap
import Card from 'react-bootstrap/Card';

// components
import PostAction from './PostAction';
import PostDescription from './PostDescription';

const PostFooter = () => {
  return (
    <Card.Footer className="bg-transparent">
      <PostAction />
      <PostDescription />
    </Card.Footer>
  );
};

export default PostFooter;
