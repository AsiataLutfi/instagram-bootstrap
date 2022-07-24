import React from 'react';

// react-bootstrap
import Button from 'react-bootstrap/Button';

// css
import classes from './ProfileButton.module.scss';

const ProfileButton = (props) => {
  return (
    <Button
      href={props.link}
      className={`p-0 rounded-circle bg-transparent border-0 position-relative ${props.className}`}
      variant="light"
    >
      {props.isStory && (
        <span
          className={`position-absolute border border-2 border-primary rounded-circle ${classes['story-border']}`}
          style={{ width: props.size + 10, height: props.size + 10 }}
        ></span>
      )}
      <img
        src={props.image}
        alt={props.username}
        width={props.size}
        height={props.size}
        className="rounded-circle"
      />
    </Button>
  );
};

export default ProfileButton;
