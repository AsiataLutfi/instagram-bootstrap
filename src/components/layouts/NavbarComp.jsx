import React from 'react';

// react-bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

// components
import ButtonIcon from '../ui/ButtonIcon';
import ProfileButton from '../ui/ProfileButton/ProfileButton';

// assets
import LogoIg from '../../assets/logo.png';
import ProfileImg from '../../assets/user-1.jpg';

const NavbarComp = () => {
  return (
    <Navbar bg="white" expand="lg" className=" border-bottom" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={LogoIg}
            width="125"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Form className="mx-auto bg-secondary bg-opacity-10 d-none d-lg-block">
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
        <Nav className="w-auto align-items-center flex-row">
          <ButtonIcon>
            <i className="bi bi-house-door-fill"></i>
          </ButtonIcon>
          <ButtonIcon>
            <i className="bi bi-messenger"></i>
          </ButtonIcon>
          <ButtonIcon className="d-none d-lg-block">
            <i className="bi bi-plus-square-fill"></i>
          </ButtonIcon>
          <ButtonIcon className="d-none d-lg-block">
            <i className="bi bi-compass-fill"></i>
          </ButtonIcon>
          <ButtonIcon>
            <i className="bi bi-heart-fill"></i>
          </ButtonIcon>
          <ProfileButton
            link="/profile"
            size={32}
            image={ProfileImg}
            username="my_username"
            className="px-2"
          />
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
