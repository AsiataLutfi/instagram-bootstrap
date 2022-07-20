import React from 'react';
import NavbarComp from './NavbarComp';

// React-Bootstrap
import Container from 'react-bootstrap/Container';

const Layout = (props) => {
  return (
    <React.Fragment>
      <NavbarComp />
      <Container className="mt-3">{props.children}</Container>
    </React.Fragment>
  );
};

export default Layout;
