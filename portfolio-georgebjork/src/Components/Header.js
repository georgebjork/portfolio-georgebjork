import React from 'react';

import { Navbar, Container, Nav } from 'react-bootstrap';


function Header() {

    return (
        <>
            <Navbar expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/" >George Bjork</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
                        <Nav>
                            <Nav.Link href='#projects'>Projects</Nav.Link>
                            <Nav.Link href="#about-me">About Me</Nav.Link>
                            <Nav.Link>Resume</Nav.Link>
                            <Nav.Link>Golf Stats</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;