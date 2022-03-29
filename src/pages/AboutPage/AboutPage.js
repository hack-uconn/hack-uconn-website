import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card'
import temp1 from "../../assets/images/AboutPage/temp1.jpg";
import temp2 from "../../assets/images/AboutPage/temp2.jpg";
import temp3 from "../../assets/images/AboutPage/temp3.jpg";

class AboutPage extends React.Component {
    render() {
        return(
            <Container>
                <h1>WHAT MAKES US UNIQUE</h1>
                <Row>
                    <Col>
                        <Card>
                            <Card.Img src = {temp1}></Card.Img>
                        </Card>
                    </Col>
                    <Col><p>Caption 1: We're diverse</p></Col>
                </Row>
                <Row>
                    <Col><p>Caption 2: We build stuff</p></Col>
                    <Col>
                        <Card>
                            <Card.Img src = {temp2}></Card.Img>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Img src = {temp3}></Card.Img>
                        </Card>
                    </Col>
                    <Col><p>Caption 3: We have prizes: cash prize</p></Col>
                </Row>
            </Container>
        ) 
    }
}
export default AboutPage;