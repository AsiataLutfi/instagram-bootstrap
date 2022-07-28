import React from 'react';

// react-bootstrap
import Button from 'react-bootstrap/Button';

// components
import ProfileButton from '../ui/ProfileButton/ProfileButton';

const SuggestionAccount = (props) => {
  return (
    <div className="d-flex justify-content-between align-items-center my-2">
      <ProfileButton
        link={props.link}
        image={props.imgProfile}
        username={props.username}
        size={props.size}
      />
      <div className="d-flex flex-column flex-grow-1 mx-3 align-items-start">
        <Button
          variant="link"
          href="/"
          className="fw-semibold fs-7 text-dark text-decoration-none p-0"
        >
          {props.username}
        </Button>
        <span className="fs-7 text-secondary">{props.details}</span>
      </div>
      <Button variant="link" href="/" className="fs-7 text-decoration-none">
        {props.action}
      </Button>
    </div>
  );
};

export default SuggestionAccount;
