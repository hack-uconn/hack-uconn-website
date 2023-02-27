import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import bronzeGear from '../../assets/images/SponsorsPage/bronzeGear.png'
import silverGear from '../../assets/images/SponsorsPage/silverGear.png'
import goldGear from '../../assets/images/SponsorsPage/goldGear.png'
import platinumGear from '../../assets/images/SponsorsPage/platinumGear.png'
import CCEI from '../../assets/images/SponsorsPage/CCEI.png'
import CCLogo from '../../assets/images/SponsorsPage/CocaColaLogo.png'
import global from '../../assets/images/SponsorsPage/uconnGlobal.png'
import journalism from '../../assets/images/SponsorsPage/uconnJournalism.png'
import philosophy from '../../assets/images/SponsorsPage/uconnPhilosophy.png'
import './SponsorsPage.css'

class SponsorsPage extends React.Component {
    render() {
        return(
            <div style={{backgroundColor:"#815AE0"}} className="pt-5">
                <Container className="sponsors">
                    <h1 className="headers pt-2 pb-5">HackUConn is brought to you by...</h1>
                    <Row id="gold" className="mt-3">
                        <h1 className="headers pt-2 pb-5">Meet our Gold Sponsors!</h1>
                        <Col><a href="https://global.uconn.edu/"><img className="platinumGear" src={global}></img></a></Col>
                    </Row>
                    <Row id="silver" className="mt-4">
                        <h1 className="headers pt-2 pb-5">Meet our Silver Sponsors!</h1>
                        <Col><a href="https://philosophy.uconn.edu/"><img className="platinumGear" src={philosophy}></img></a></Col>
                    </Row>
                    <Row id="bronze" className="mt-1">
                        <h1 className="headers pt-2 pb-5">Meet our Bronze Sponsors!</h1>
                        <Col><a href="https://journalism.uconn.edu/"><img className="platinumGear" src={journalism}></img></a></Col>
                    </Row>
                    <Row id="bronze" className="mt-1 mb-1">
                    </Row>
                    <h1 className="headers">HackUConn is Fueled by...</h1>
                    <a href="https://us.coca-cola.com/"><img className="platinumGear pt-2 pb-5" src={CCLogo}></img></a>
                </Container>
            </div>
        ) 
    }
}
export default SponsorsPage;