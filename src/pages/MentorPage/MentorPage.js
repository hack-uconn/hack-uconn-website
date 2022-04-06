import React from "react";
import Image from 'react-bootstrap/Image';
import KS from '../../assets/images/MentorPage/KS.jpg'
import DS from '../../assets/images/MentorPage/DS.PNG'
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
                    <Row className="mt-5">
                        <h1 className="aboutHeader">Meet The Mentors!</h1>
                        <Col sm={4}>
                            <Col><Image alt="KS" className="mentor-image" src={KS} /></Col>
                            <Col><h1 className="name-text">Kristina Stephens</h1></Col>
                            <Col><p className="role-text">Student Health And Wellness</p></Col>
                        </Col>
                        <Col sm={4}>
                            <Col><Image alt="DS" className="mentor-image" src={DS} /></Col>
                            <Col><h1 className="name-text">Daniel Sandberg</h1></Col>
                            <Col><p className="role-text">Student Health And Wellness</p></Col>
                        </Col>
                        <Col sm={4}>
                            <Col><Image alt="KS" className="mentor-image" src={KS} /></Col>
                            <Col><h1 className="name-text">Kristina Stephens</h1></Col>
                            <Col><p className="role-text">Student Health And Wellness</p></Col>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                    <Col sm={4}>
                            <Col><Image alt="KS" className="mentor-image" src={KS} /></Col>
                            <Col><h1 className="name-text">Kristina Stephens</h1></Col>
                            <Col><p className="role-text">Student Health And Wellness</p></Col>
                        </Col>
                        <Col sm={4}>
                            <Col><Image alt="KS" className="mentor-image" src={KS} /></Col>
                            <Col><h1 className="name-text">Kristina Stephens</h1></Col>
                            <Col><p className="role-text">Student Health And Wellness</p></Col>
                        </Col>
                        <Col sm={4}>
                            <Col><Image alt="KS" className="mentor-image" src={KS} /></Col>
                            <Col><h1 className="name-text">Kristina Stephens</h1></Col>
                            <Col><p className="role-text">Student Health And Wellness</p></Col>
                        </Col>
                    </Row>
                    <Row className="mb-5 mt-5">
                        <Col sm={4}>
                            <Col><Image alt="KS" className="mentor-image" src={KS} /></Col>
                            <Col><h1 className="name-text">Kristina Stephens</h1></Col>
                            <Col><p className="role-text">Student Health And Wellness</p></Col>
                        </Col>
                        <Col sm={4}>
                            <Col><Image alt="KS" className="mentor-image" src={KS} /></Col>
                            <Col><h1 className="name-text">Kristina Stephens</h1></Col>
                            <Col><p className="role-text">Student Health And Wellness</p></Col>
                        </Col>
                        <Col sm={4}>
                            <Col><Image alt="KS" className="mentor-image" src={KS} /></Col>
                            <Col><h1 className="name-text">Kristina Stephens</h1></Col>
                            <Col><p className="role-text">Student Health And Wellness</p></Col>
                        </Col>
                    </Row>
                </Container>
            </div>
        ) 
    }
}
export default MentorPage;