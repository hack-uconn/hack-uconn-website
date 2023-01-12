import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import navbarLogo from "../../assets/images/NavbarPage/navbarLogo.png"
import "./NavbarPage.css"

class NavbarPage extends React.Component {
    render() {
        return (
            <Navbar variant="dark" className="navbar" expand="md">
                <Container>
                    <Navbar.Brand href="#home">
                        <img 
                            src={navbarLogo}
                            height="40rem"
                            className="d-inline-block align-top"
                            alt="HackUConn Navbar Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav>
                            <Nav.Link className="navText"><b>Register (Coming soon!)</b></Nav.Link>
                            <Nav.Link className="navText" href="#about"><b>About</b></Nav.Link>
                            <Nav.Link className="navText" href="#faq"><b>FAQ</b></Nav.Link>
                            <Nav.Link className="navText" href="#mentor"><b>Mentors</b></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}
export default NavbarPage;