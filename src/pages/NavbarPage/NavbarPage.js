import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import navbarLogo from "../../assets/images/NavbarPage/navbarHackUConn.png"
import "./NavbarPage.css"
import { blue } from "@material-ui/core/colors";

// class NavbarPage extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {hitThresh: false};
//     }
    
//     render() {
        
//         function updateBar(){
//             if (window.scrollY >= 947){
//                 this.setState({hitThresh: true})
//                 console.log('gg')
//             }else{
//                 this.setState({hitThresh: false})
//             }
//         } 
//         window.addEventListener("scroll", updateBar.bind(this));
//         return (
//             <Navbar variant="dark" className={!this.state.hitThresh ? 'navbar' : 'test'} sticky='top' expand="md">
//                 <Container>
//                     <Navbar.Brand href="#home">
//                         <img 
//                             src={navbarLogo}
//                             height="100rem"
//                             className="d-inline-block align-top"
//                             alt="HackUConn Navbar Logo"
//                         />
//                     </Navbar.Brand>
//                     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                     <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
//                         <Nav>
//                             <Nav.Link className="navText" href="https://forms.gle/kG1QMxK4j1xSG8Nk7"><b>Register</b></Nav.Link>
//                             <Nav.Link className="navText" href="#about"><b>About</b></Nav.Link>
//                             <Nav.Link className="navText" href="#faq"><b>FAQ</b></Nav.Link>
//                             <Nav.Link className="navText" href="#mentor"><b>Mentors (TBA)</b></Nav.Link>
//                         </Nav>
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>
//         )
//     }
// }

function NavbarPage(){

    const [hitThresh, setHitThresh] = useState(false);
    
    function updateBar(){
        if (window.scrollY >= 947){
            setHitThresh(true)
            console.log('gg')
        }else{
            setHitThresh(false)
        }
    } 
    window.addEventListener("scroll", updateBar);

    return(
        <Navbar variant="dark" className={!hitThresh ? 'navbar' : 'test'} sticky='top' expand="md">
            <Container>
                <Navbar.Brand href="#home">
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
                        <Nav.Link className="navText" href="https://forms.gle/kG1QMxK4j1xSG8Nk7"><b>Register</b></Nav.Link>
                        <Nav.Link className="navText" href="#about"><b>About</b></Nav.Link>
                        <Nav.Link className="navText" href="#faq"><b>FAQ</b></Nav.Link>
                        <Nav.Link className="navText" href="#mentor"><b>Mentors (TBA)</b></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavbarPage;