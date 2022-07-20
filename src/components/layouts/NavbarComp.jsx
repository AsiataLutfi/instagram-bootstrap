import React from 'react';

// React-Bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

// Assets
import LogoIg from '../../assets/logo.png';
import ButtonIcon from '../ui/ButtonIcon';

const NavbarComp = () => {
  return (
    <Navbar bg="light" expand="lg" className="bg-transparent border-bottom">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={LogoIg}
            width="125"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="mx-auto bg-secondary bg-opacity-10">
            <InputGroup>
              <InputGroup.Text
                id="basic-addon1"
                className="bg-transparent border-end-0"
              >
                <i className="bi bi-search"></i>
              </InputGroup.Text>
              <Form.Control
                type="search"
                placeholder="Search"
                className="border-start-0 bg-transparent"
                aria-label="Search"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Form>
          <Nav className="w-auto">
            <ButtonIcon>
              <i className="bi bi-house-door-fill"></i>
            </ButtonIcon>
            <ButtonIcon>
              <i className="bi bi-messenger"></i>
            </ButtonIcon>
            <ButtonIcon>
              <i className="bi bi-plus-square-fill"></i>
            </ButtonIcon>
            <ButtonIcon>
              <i className="bi bi-compass-fill"></i>
            </ButtonIcon>
            <ButtonIcon>
              <i className="bi bi-heart-fill"></i>
            </ButtonIcon>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
