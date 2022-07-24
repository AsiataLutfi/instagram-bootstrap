import React from 'react';

// components
import NavbarComp from './NavbarComp';

// react-bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AsideContent from './AsideContent';

const Layout = (props) => {
  return (
    <React.Fragment>
      <NavbarComp />
      <Container className="my-3 px-10">
        <Row>
          <Col md="7">{props.children}</Col>
          <Col md="5">
            <AsideContent />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Layout;
