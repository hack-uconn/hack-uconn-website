import React from "react";
import Image from 'react-bootstrap/Image';
import gear from '../../assets/images/HomePage/gear.png';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import Card from 'react-bootstrap/Card';
import "./MentorPage.css";

class MentorPage extends React.Component {
    render() {
        return(
            <div className="pt-5">
                <Container>
                    <Row>
                        <h1 className="aboutHeader">Meet The Mentors!</h1>
                        <Col sm={4}><Image alt="gear" className="position-relative gear rotate-gears" src={gear} /></Col>
                        <Col sm={4}><Image alt="gear" className="position-relative gear rotate-gears" src={gear} /></Col>
                        <Col sm={4}><Image alt="gear" className="position-relative gear rotate-gears" src={gear} /></Col>
                    </Row>
                </Container>
            </div>
        ) 
    }
}
export default MentorPage;