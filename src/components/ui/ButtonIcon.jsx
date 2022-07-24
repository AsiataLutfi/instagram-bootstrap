import React from 'react';

// react-bootstrap
import Button from 'react-bootstrap/Button';

const ButtonIcon = (props) => {
  return (
    <Button
      variant="light"
      className={`bg-transparent text-dark fs-4 py-0 ${props.className}`}
    >
      {props.children}
    </Button>
  );
};

export default ButtonIcon;
