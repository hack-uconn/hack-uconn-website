import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import bronzeGear from '../../assets/images/SponsorsPage/bronzeGear.png'
import silverGear from '../../assets/images/SponsorsPage/silverGear.png'
import goldGear from '../../assets/images/SponsorsPage/goldGear.png'
import platinumGear from '../../assets/images/SponsorsPage/platinumGear.png'
import CCEI from '../../assets/images/SponsorsPage/CCEI.png'
import './SponsorsPage.css'

class SponsorsPage extends React.Component {
    render() {
        return(
            <div style={{backgroundColor:"#815AE0"}} className="pt-5">
                <Container className="sponsors">
                    <h1 className="aboutHeader">Meet Our Sponsors!</h1>
                    <Row id="platinum" className="mt-3">
                        <Col><img className="platinumGear" src={platinumGear}></img></Col>
                        
                    </Row>
                    <Row id="gold" className="mt-2">
                        <Col><img className="goldGear" src={goldGear}></img></Col>
                    </Row> 
                    <Row id="silver" className="mt-1">
                        <Col><img className="silverGear" src={silverGear}></img></Col>
                        <Col><img className="silverGear" src={silverGear}></img></Col>
                        <Col><img className="silverGear" src={silverGear}></img></Col>
                        <Col><img className="silverGear" src={silverGear}></img></Col>
                    </Row>
                    <Row id="bronze" className="mt-1 mb-1">
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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#FFFDFA" fill-opacity="1" d="M0,128L60,144C120,160,240,192,360,186.7C480,181,600,139,720,117.3C840,96,960,96,1080,101.3C1200,107,1320,117,1380,122.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                </svg>
            </div>
        ) 
    }
}
export default SponsorsPage;