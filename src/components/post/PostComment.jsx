import React from 'react';

// react-bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const PostComment = () => {
  return (
    <InputGroup className="p-2 border-top">
      <Button variant="light" id="button-addon1">
        <i className="bi bi-emoji-smile"></i>
      </Button>
      <Form.Control
        aria-label="Example text with button addon"
        aria-describedby="basic-addon1"
        className="border-0"
        placeholder="Add a comment..."
      />
      <Button
        variant="light"
        id="button-addon2"
        className="text-primary fs-7 fw-semibold"
        disabled
      >
        Post
      </Button>
    </InputGroup>
  );
};

export default PostComment;
