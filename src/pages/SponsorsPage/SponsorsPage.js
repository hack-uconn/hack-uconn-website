import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import bronzeGear from '../../assets/images/SponsorsPage/bronzeGear.png'
import silverGear from '../../assets/images/SponsorsPage/silverGear.png'
import goldGear from '../../assets/images/SponsorsPage/goldGear.png'
import platinumGear from '../../assets/images/SponsorsPage/platinumGear.png'
import './SponsorsPage.css'

class SponsorsPage extends React.Component {
    render() {
        return(
            <div className="pt-5">
                <Container className="sponsors">
                    <h1 className="aboutHeader">Meet Our Sponsors!</h1>
                    <Row id="platinum" className="mt-4">
                        <Col><img className="platinumGear" src={goldGear}></img></Col>
                    </Row>
                    {/* <Row id="gold">
                        <Col><img className="goldGear" src={goldGear}></img></Col>
                    </Row> */}
                    <Row id="silver" className="mt-3">
                        <Col><img className="silverGear" src={silverGear}></img></Col>
                        <Col><img className="silverGear" src={silverGear}></img></Col>
                        <Col><img className="silverGear" src={silverGear}></img></Col>
                        <Col><img className="silverGear" src={silverGear}></img></Col>
                    </Row>
                    <Row id="bronze" className="mt-5 mb-5">
                        <Col><img className="bronzeGear" src={bronzeGear}></img></Col>
                        <Col><img className="bronzeGear" src={bronzeGear}></img></Col>
                        <Col><img className="bronzeGear" src={bronzeGear}></img></Col>
                        <Col><img className="bronzeGear" src={bronzeGear}></img></Col>
                        <Col><img className="bronzeGear" src={bronzeGear}></img></Col>
                        <Col><img className="bronzeGear" src={bronzeGear}></img></Col>
                        <Col><img className="bronzeGear" src={bronzeGear}></img></Col>
                        <Col><img className="bronzeGear" src={bronzeGear}></img></Col>
                        <Col><img className="bronzeGear" src={bronzeGear}></img></Col>
                    </Row>
                </Container>
            </div>
        ) 
    }
}
export default SponsorsPage;