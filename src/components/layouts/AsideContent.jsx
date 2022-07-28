import React from 'react';

// react-bootstrap
import Button from 'react-bootstrap/Button';

// components
import SuggestionAccount from '../suggestionList/SuggestionAccount';
import Footer from './Footer';
import SuggestionList from '../suggestionList/SuggestionList';

// assets
import UserProfile01 from '../../assets/user-1.jpg';

const AsideContent = () => {
  return (
    <aside>
      <SuggestionAccount
        link="/"
        imgProfile={UserProfile01}
        username="myOwnprofile"
        details="Lutfi Khoir | Des & Dev"
        size={50}
        action="Switch"
      />
      <div className="d-flex justify-content-between">
        <span className="text-secondary fw-semibold">Suggestions For You</span>
        <Button
          variant="link"
          className="text-decoration-none text-dark p-0 mx-1 fs-8"
        >
          See All
        </Button>
      </div>
      <SuggestionList />
      <Footer />
    </aside>
  );
};

export default AsideContent;
