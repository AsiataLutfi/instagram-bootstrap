import React from 'react';

// react-bootstrap
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

// components
import ButtonIcon from '../../ui/ButtonIcon';

const PostAction = () => {
  return (
    <ButtonToolbar
      className="justify-content-between"
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
