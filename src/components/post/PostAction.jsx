import React from 'react';

// react-bootstrap
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

// components
import ButtonIcon from '../ui/ButtonIcon';

const PostAction = () => {
  return (
    <ButtonToolbar
      className="justify-content-between mb-3"
      aria-label="Toolbar with Button groups"
    >
      <ButtonGroup aria-label="First group">
        <ButtonIcon>
          <i className="bi bi-heart"></i>
        </ButtonIcon>
        <ButtonIcon>
          <i className="bi bi-chat"></i>
        </ButtonIcon>
        <ButtonIcon>
          <i className="bi bi-send"></i>
        </ButtonIcon>
      </ButtonGroup>
      <ButtonIcon>
        <i className="bi bi-bookmark"></i>
      </ButtonIcon>
    </ButtonToolbar>
  );
};

export default PostAction;
