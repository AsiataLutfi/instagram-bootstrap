import React from 'react';

// react-bootstrap
import Button from 'react-bootstrap/Button';

const Footer = () => {
  return (
    <footer className=" text-secondary mt-3">
      <div className="d-flex flex-wrap align-items-center mb-3">
        <Button
          variant="link"
          className="text-decoration-none text-secondary p-0 mx-1 fs-8"
        >
          Lorem
        </Button>
        •
        <Button
          variant="link"
          className="text-decoration-none text-secondary p-0 mx-1 fs-8"
        >
          Dolor
        </Button>
        •
        <Button
          variant="link"
          className="text-decoration-none text-secondary p-0 mx-1 fs-8"
        >
          Adipisicing
        </Button>
        •
        <Button
          variant="link"
          className="text-decoration-none text-secondary p-0 mx-1 fs-8"
        >
          Alit
        </Button>
        •
        <Button
          variant="link"
          className="text-decoration-none text-secondary p-0 mx-1 fs-8"
        >
          Eos
        </Button>
        •
        <Button
          variant="link"
          className="text-decoration-none text-secondary p-0 mx-1 fs-8"
        >
          Amet
        </Button>
        •
        <Button
          variant="link"
          className="text-decoration-none text-secondary p-0 mx-1 fs-8"
        >
          Consectetur
        </Button>
        •
        <Button
          variant="link"
          className="text-decoration-none text-secondary p-0 mx-1 fs-8"
        >
          Ipsum
        </Button>
        •
        <Button
          variant="link"
          className="text-decoration-none text-secondary p-0 mx-1 fs-8"
        >
          Sit
        </Button>
      </div>
      <span className="text-uppercase fs-8">
        &copy; 2022 Custom Instagram React-Bootstrap from Lutfi Khoir
      </span>
    </footer>
  );
};

export default Footer;
