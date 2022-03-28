import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import navbarLogo from "../../assets/images/NavbarPage/navbarLogo.png"
import "./NavbarPage.css"

class NavbarPage extends React.Component {
    render() {
        return (
            <Navbar variant="dark" className="navbar" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img 
                            src={navbarLogo}
                            height="26rem"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="ms-auto">
                            <Nav.Link href="https://forms.gle/mR8YVdkxNTmkgcts8"><b>Register</b></Nav.Link>
                            <Nav.Link href="#home"><b>Home</b></Nav.Link>
                            <Nav.Link href="#about"><b>About</b></Nav.Link>
                            <Nav.Link href="FAQ"><b>FAQ</b></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}
export default NavbarPage;