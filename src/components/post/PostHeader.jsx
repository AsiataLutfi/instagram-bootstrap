import React from 'react';

// react-bootstrap
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// components
import ProfileButton from '../ui/ProfileButton/ProfileButton';
import ButtonIcon from '../ui/ButtonIcon';

// assets
import imgProfile from '../../assets/user-2.jpg';

const PostHeader = () => {
  return (
    <Card.Header className="bg-white d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center">
        <ProfileButton
          link="/"
          image={imgProfile}
          username="wow"
          size={32}
          isStory={true}
        />{' '}
        <Button
          variant="link"
          href="/"
          className="fw-semibold text-dark text-decoration-none ms-2 p-0"
        >
          Link
        </Button>
      </div>
      <ButtonIcon>
        <i className="bi bi-three-dots"></i>
      </ButtonIcon>
    </Card.Header>
  );
};

export default PostHeader;
