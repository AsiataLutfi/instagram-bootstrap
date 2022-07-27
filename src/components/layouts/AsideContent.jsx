import React from 'react';

// react-bootstrap
import Button from 'react-bootstrap/Button';

// components
import Footer from './Footer';

const AsideContent = () => {
  return (
    <aside>
      <div className="d-flex justify-content-between mb-2">
        <span className="text-secondary fw-semibold">Suggestions For You</span>
        <Button variant="link" className="text-decoration-none p-0 mx-1 fs-8">
          See All
        </Button>
      </div>

      <Footer />
    </aside>
  );
};

export default AsideContent;
