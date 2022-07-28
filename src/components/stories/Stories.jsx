import React from 'react';

// react-bootstrap
import Card from 'react-bootstrap/Card';

// components
import UserStoryBtn from './UserStoryBtn';

// assets
import UserProfile02 from '../../assets/user-2.jpg';
import UserProfile03 from '../../assets/user-3.jpg';
import UserProfile04 from '../../assets/user-4.jpg';
import UserProfile05 from '../../assets/user-5.jpg';

const Stories = () => {
  return (
    <Card className="mb-3 p-3 flex-row">
      <UserStoryBtn
        link="/"
        imgProfile={UserProfile02}
        username="user_2"
        isSeen={true}
      />
      <UserStoryBtn
        link="/"
        imgProfile={UserProfile03}
        username="user_3"
        isSeen={true}
      />
      <UserStoryBtn
        link="/"
        imgProfile={UserProfile04}
        username="user_4"
        isSeen={false}
      />
      <UserStoryBtn
        link="/"
        imgProfile={UserProfile05}
        username="user_5"
        isSeen={false}
      />
    </Card>
  );
};

export default Stories;
