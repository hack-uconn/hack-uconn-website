import React from "react";
import Image from 'react-bootstrap/Image';
import m1 from '../../assets/images/MentorPage/KS.jpg';
import m2 from '../../assets/images/MentorPage/DS.PNG';
import m3 from '../../assets/images/MentorPage/Karen.png';
import m4 from '../../assets/images/MentorPage/DC.jpg';
import m5 from '../../assets/images/MentorPage/NS.png';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import Card from 'react-bootstrap/Card';
import "./MentorPage.css";
const mentors=[
{
    imageSrc:m1,
    name:"Kristina Stephens",
    role:"Student Health And Wellness"
},
{
    imageSrc:m2,
    name:"Daniel Sandberg",
    role:"Student Health And Wellness"
},
{
    imageSrc:m3,
    name:"Karen McComb",
    role:"Director of Health Promotion and Community Impact for Student Health And Wellness at UConn"
},

{
    imageSrc:m4,
    name:"David Coles",
    role:"Entrepreneur, Wealth Advisor, and CEO of Human Wealth"

},
{
    imageSrc:m5,
    name:"Nick Satta",
    role:"Lab Manager, OPIM Innovate"
}
]
class MentorPage extends React.Component {
    render() {
        return(
            <div className="pt-5">
                <Container>
                    <Row className="mt-5">
                        <h1 className="aboutHeader">Meet The Mentors!</h1>
                        <Col sm={4}>
                            <Col><Image alt="KS" className="mentor-image" src={m1} /></Col>
                            <Col><h1 className="name-text">Kristina Stephens</h1></Col>
                            <Col><p className="role-text">Director of Mental Health at University of Connecticut</p></Col>
                        </Col>
                        <Col sm={4}>
                            <Col><Image alt="DS" className="mentor-image" src={m2} /></Col>
                            <Col><h1 className="name-text">Daniel Sandberg</h1></Col>
                            <Col><p className="role-text">Senior Director, Quantitative Research at S&P Global Market Intelligence</p></Col>
                        </Col>
                        <Col sm={4}>
                            <Col><Image alt="KS" className="mentor-image" src={m3} /></Col>
                            <Col><h1 className="name-text">Karen McComb</h1></Col>
                            <Col><p className="role-text">Director of Health Promotion and Community Impact for Student Health And Wellness at UConn</p></Col>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                    <Col sm={4}>
                            <Col><Image alt="KS" className="mentor-image" src={m4} /></Col>
                            <Col><h1 className="name-text">David Coles</h1></Col>
                            <Col><p className="role-text">Entrepreneur, Wealth Advisor, and CEO of Human Wealth</p></Col>
                        </Col>
                        <Col sm={4}>
                            <Col><Image alt="KS" className="mentor-image" src={m5} /></Col>
                            <Col><h1 className="name-text">Nick Satta</h1></Col>
                            <Col><p className="role-text">Lab Manager, OPIM Innovate</p></Col>
                        </Col>
                        
                    </Row>
                    
                </Container>
            </div>
        ) 
    }
}
export default MentorPage;