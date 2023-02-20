import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import navbarLogo from "../../assets/images/NavbarPage/navbarHackUConn.png"
import "./NavbarPage.css"
import {Link} from "react-router-dom"

class NavbarPage extends React.Component {
    render() {
        return (
            <Navbar variant="dark" className="navbar" expand="md">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img
                            src={navbarLogo}
                            height="100rem"
                            className="d-inline-block align-top"
                            alt="HackUConn Navbar Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav>
                            <Nav.Link className="navText" as={Link} to="https://forms.gle/kG1QMxK4j1xSG8Nk7"><b>Register</b></Nav.Link>
                            <Nav.Link className="navText" as = {Link} to="/about"><b>About</b></Nav.Link>
                            <Nav.Link className="navText" as = {Link} to="/faq"><b>FAQ</b></Nav.Link>
                            <Nav.Link className="navText" as = {Link} to= "/mentor"><b>Mentors</b></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}
export default NavbarPage;