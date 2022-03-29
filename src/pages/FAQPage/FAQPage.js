import React from "react";
import Container from "react-bootstrap/Container";
import Accordion from 'react-bootstrap/Accordion';
import './FAQPage.css';

class FAQPage extends React.Component {
    render() {
        return(
            <div>
                <h1 className="headers pt-5 pb-2">FAQ</h1>
                <Container fluid="sm">
                    <Accordion className="custom-accordion">
                        <Accordion.Item className="custom-accordion-item" eventKey="0">
                            <Accordion.Header className="custom-accordion-header">
                                Question 1
                            </Accordion.Header>
                            <Accordion.Body className="custom-accordion-body">
                                Answer!
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                Question 2
                            </Accordion.Header>
                            <Accordion.Body>
                                Answer!
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>
                                Question 3
                            </Accordion.Header>
                            <Accordion.Body>
                                Answer!
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>
                                Question 4
                            </Accordion.Header>
                            <Accordion.Body>
                                Answer!
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Question 5</Accordion.Header>
                            <Accordion.Body>
                                Answer!
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Container>
            </div>
        );
    }
}
export default FAQPage;