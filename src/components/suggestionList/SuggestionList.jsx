import React from 'react';

// react-bootstrap
import ListGroup from 'react-bootstrap/ListGroup';

// components
import SuggestionAccount from '../suggestionList/SuggestionAccount';

// assets
import UserProfile02 from '../../assets/user-2.jpg';
import UserProfile03 from '../../assets/user-3.jpg';
import UserProfile04 from '../../assets/user-4.jpg';
import UserProfile05 from '../../assets/user-5.jpg';

const SuggestionList = () => {
  return (
    <ListGroup>
      <ListGroup.Item className="p-0 border-0">
        <SuggestionAccount
          link="/"
          imgProfile={UserProfile02}
          username="variousJames"
          details="Keith Wilkins"
          size={40}
          action="Follow"
        />
      </ListGroup.Item>
      <ListGroup.Item className="p-0 border-0">
        <SuggestionAccount
          link="/"
          imgProfile={UserProfile03}
          username="educationMyra"
          details="Roger Johnson"
          size={40}
          action="Follow"
        />
      </ListGroup.Item>
      <ListGroup.Item className="p-0 border-0">
        <SuggestionAccount
          link="/"
          imgProfile={UserProfile04}
          username="stoppedRuby"
          details="Luke Castro"
          size={40}
          action="Follow"
        />
      </ListGroup.Item>
      <ListGroup.Item className="p-0 border-0">
        <SuggestionAccount
          link="/"
          imgProfile={UserProfile05}
          username="effortMamie"
          details="Ernest Brooks"
          size={40}
          action="Follow"
        />
      </ListGroup.Item>
    </ListGroup>
  );
};

export default SuggestionList;
