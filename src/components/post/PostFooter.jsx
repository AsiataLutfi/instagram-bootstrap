import React from 'react';

// react-bootstrap
import Card from 'react-bootstrap/Card';

// components
import PostAction from './PostAction';

const PostFooter = () => {
  return (
    <Card.Footer className="bg-transparent">
      <PostAction />
    </Card.Footer>
  );
};

export default PostFooter;
