import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import image from '../../assest/logo-small.png';
import { AiFillFacebook,AiFillTwitterSquare } from "react-icons/ai";

const Banner = () => {
    return (
        <div className="Header_component">
            <Navbar bg="dark"  expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Navbar.Brand href="#home">
                            <Image fluid  src={image} />
                            </Navbar.Brand>
                        </Nav>
                        <Nav className="mr-auto">
                            <Nav.Link className="text-white ps-3">Home</Nav.Link>
                            <Nav.Link className="text-white pr-3">Api</Nav.Link>
                            <Nav.Link className="text-white pr-3">Forum</Nav.Link>
                            <Nav.Link className="text-info pr-3"><AiFillFacebook/></Nav.Link>
                            <Nav.Link className="text-white pr-3"><AiFillTwitterSquare/></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Banner;