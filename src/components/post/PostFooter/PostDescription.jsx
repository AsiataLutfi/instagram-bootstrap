import React, { useState } from 'react';

// react-bootstrap
import Button from 'react-bootstrap/Button';

const description =
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro modi odit corporis in labore, ducimus accusamus adipisci velit numquam fugiat animi dolores soluta quo magnam?';

const PostDescription = () => {
  const [showFull, setShowFull] = useState(false);

  let descPost;
  if (!showFull) {
    descPost = description.slice(0, 30);
    descPost = descPost + '...';
  } else {
    descPost = description;
  }

  const showDescHandler = () => {
    setShowFull(true);
  };

  return (
    <div className="py-3">
      <Button
        variant="link"
        href="/"
        className="fw-semibold text-dark p-0 me-2 align-text-bottom"
      >
        Link
      </Button>
      <p className="d-inline mb-0">{descPost}</p>
      {!showFull && (
        <Button
          variant="link"
          className="text-decoration-none text-secondary fw-semibold p-0 ms-1 align-text-bottom"
          onClick={showDescHandler}
        >
          more
        </Button>
      )}
    </div>
  );
};

export default PostDescription;
