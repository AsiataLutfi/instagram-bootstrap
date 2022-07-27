import React from 'react';
import Post from '../components/post/Post';
import Stories from '../components/stories/Stories';

const Home = () => {
  return (
    <React.Fragment>
      <Stories />
      <Post />
    </React.Fragment>
  );
};

export default Home;
