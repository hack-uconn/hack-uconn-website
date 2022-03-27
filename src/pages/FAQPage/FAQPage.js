import React from "react";
import Container from "react-bootstrap/Container";
import Accordion from 'react-bootstrap/Accordion';

class FAQPage extends React.Component {
    render() {
        return(
            <Container fluid="sm">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Question 1</Accordion.Header>
                        <Accordion.Body>
                            Answer!
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Question 2</Accordion.Header>
                        <Accordion.Body>
                            Answer!
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        );
    }
}
export default FAQPage;