import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import BrandLogo from '../img/logoLimpio.png';
import data from '../Data';
import LinkItem from './LinkItem';

export default class Navbar2 extends Component {
    
    render() {
        const Links = data.dataLink.map((item) => {
            return (
                <LinkItem 
                    id={item.id}
                    item={item}
                />
            )
        })

        return (
            <Navbar collapseOnSelect fixed="top" expand="lg" style={navbarStyle} variant="dark">
                <Navbar.Brand href="#home">
                    <img src={BrandLogo} width="200" alt="Logo HaceTeatro"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        {Links}
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