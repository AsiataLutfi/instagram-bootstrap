import React from 'react';

// components
import ProfileButton from '../ui/ProfileButton/ProfileButton';

const UserStoryBtn = (props) => {
  return (
    <div className="d-flex flex-column align-items-center mx-3">
      <ProfileButton
        link={props.link}
        image={props.imgProfile}
        username={props.username}
        size={50}
        isStory={props.isSeen}
      />
      <a href="/" className="mt-1 text-decoration-none text-dark fs-7">
        {props.username}
      </a>
    </div>
  );
};

export default UserStoryBtn;
