import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import BrandLogo from '../img/logoLimpio.png';
import data from '../Data';
import LinkItem from './LinkItem';
import styled from 'styled-components';
import { StyledLinksIcon, } from './shared-components/StyledComponents';

export default class Navbar2 extends Component {
  render() {
    const Links = data.dataLink.map(item =>
      <LinkItem id={item.id} item={item} />)

    return (
      <Navbar collapseOnSelect fixed="top" expand="lg" style={navbarStyle} variant="dark">
        <Navbar.Brand href="#home">
          <img src={BrandLogo} width="200" alt="Logo HaceTeatro" />
        </Navbar.Brand>
        <NavToggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="ml-auto align-items-center justify-content-center">
            {Links}
            <StyledLinksIcon inputColor="black" href="https://www.facebook.com/TallerHaceTeatro/" >
            <i class="fab fa-facebook fa-2x mt-1"></i>
          </StyledLinksIcon>
          <StyledLinksIcon inputColor="black" href="https://wa.me/5493416835438">
            <i class="fab fa-whatsapp fa-2x mt-1"></i>
          </StyledLinksIcon>
          <StyledLinksIcon inputColor="black" href="https://www.instagram.com/taller_hace_teatro/">
            <i class="fab fa-instagram fa-2x mt-1"></i>
          </StyledLinksIcon>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

const navbarStyle = {
  background: "rgb(225, 111, 34)",
  boxShadow: "0 0 6px 0 black",
}

const NavToggle = styled(Navbar.Toggle)`
    :focus {
        outline: none !important;
    }
    :hover {
        border: 1px solid white !important;
    }
`

