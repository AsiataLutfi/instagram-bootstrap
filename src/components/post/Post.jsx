import React from 'react';
import Card from 'react-bootstrap/Card';

import PostImg from '../../assets/post.jpg';
import ProfileButton from '../ui/ProfileButton/ProfileButton';
import ButtonIcon from '../ui/ButtonIcon';
import Button from 'react-bootstrap/Button';

import imgProfile from '../../assets/user-1.jpg';

const Post = () => {
  return (
    <Card>
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
          <i class="bi bi-three-dots"></i>
        </ButtonIcon>
      </Card.Header>
      <Card.Body className="p-0">
        <img src={PostImg} alt="" width="100%" height="500" />
      </Card.Body>
      <Card.Footer className="bg-transparent">2 days ago</Card.Footer>
    </Card>
  );
};

export default Post;
