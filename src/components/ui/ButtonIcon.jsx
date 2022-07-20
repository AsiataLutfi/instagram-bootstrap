import React from 'react';

// React-Bootstrap
import Button from 'react-bootstrap/Button';

const ButtonIcon = (props) => {
  return (
    <Button variant="light" className="bg-transparent text-dark fs-4">
      {props.children}
    </Button>
  );
};

export default ButtonIcon;
