import React, { useState } from 'react';

// react-bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const PostComment = () => {
  const [comment, setComment] = useState('');

  const formChangeHandler = (event) => {
    setComment(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <InputGroup className="p-2 border-top">
        <Button variant="light" id="button-addon1">
          <i className="bi bi-emoji-smile"></i>
        </Button>
        <Form.Control
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          className="border-0"
          placeholder="Add a comment..."
          value={comment}
          onChange={formChangeHandler}
        />
        <Button
          variant="light"
          type="submit"
          id="button-addon2"
          className="text-primary fs-7 fw-semibold"
          disabled={!comment}
        >
          Post
        </Button>
      </InputGroup>
    </form>
  );
};

export default PostComment;
