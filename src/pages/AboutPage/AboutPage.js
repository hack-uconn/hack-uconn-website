import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card'
import temp1 from "../../assets/images/AboutPage/temp1.jpg";
import temp2 from "../../assets/images/AboutPage/temp2.jpg";
import temp3 from "../../assets/images/AboutPage/temp3.jpg";
import "./AboutPage.css";

class AboutPage extends React.Component {
    render() {
        return(
            <div className="pt-5">
                <Container id="about">
                    <h1 className="aboutHeader">What is HackUConn?</h1>
                    <p className="aboutText">HackUConn is a 18-hour marathon event that brings together students of all disciplines in hopes of finding innovative solutions for today’s biggest problems. Students are provided mentoring and workshops from industry professionals and are tasked with bringing their solutions to life.</p>
                    <h1 className="aboutHeader pt-5">What Makes Us Unique?</h1>
                    <Row className="align-items-center pt-5">
                        <Col sm={4}>
                            <Card>
                                <Card.Img className = "imgLeft" src = {temp1}></Card.Img>
                            </Card>
                        </Col>
                        <Col sm={8}>
                            <h3 className="captionHeader pb-3">Targeted Theme</h3>
                            <p className = "captionText">HackUConn aims to tackle some of today's most prevalent issues. Having a themed event gives participants the opportunity to explore a topic they might not regularly think about while also building solutions to important problems.</p>
                        </Col>
                    </Row>
                    <Row className="align-items-center pt-5">
                        <Col sm={8}>
                            <h3 className="captionHeader pb-3">Unique Opportunities</h3>
                            <p className = "captionText" >While participants are developing their solutions, they are provided with unique resources and opportunities such as networking with companies, receiving mentorship from UConn faculty and industry experts, access to the UConn Innovation Zone, and much more. Additionally, participants will receive free food, swag, and will compete for cash prizes!</p>
                        </Col>
                        <Col sm={4}>
                            <Card>
                                <Card.Img className = "imgRight" src = {temp2}></Card.Img>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="align-items-center pt-5">
                        <Col sm={4}>
                            <Card>
                                <Card.Img className = "imgLeft" src = {temp3}></Card.Img>
                            </Card>
                        </Col>
                        <Col sm={8}>
                            <h3 className="captionHeader pb-3">Open to Everyone</h3>
                            <p className = "captionText">HackUConn thrives on the diverse backgrounds of our participants, and encourages students of all majors to register for the event! Check out some of the majors that have participated in the past:</p>
                            <p className="captionText">Applied Resource Economics, Biological Sciences, Business Analytics and Project Management, Chemical Engineering, Communication, Computer Science, Digital Media & Design, Economics, Electrical Engineering, Environmental Science, Finance, History, Human Development and Family Services, Illustration/Animation, Management Information System, Marketing, Physics, Physiology and Neurobiology, Political Science, Psychology, Sociology, Statistics, and many more!</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        ) 
    }
}
export default AboutPage;