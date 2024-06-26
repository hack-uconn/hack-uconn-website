import React from "react";
import Container from "react-bootstrap/Container";
import Accordion from 'react-bootstrap/Accordion';
import './FAQPage.css';

class FAQPage extends React.Component {
    render() {
        return(
            <div id="faq" className="faqComponent">
                <h1 className="headers pt-2 pb-5">FAQ</h1>
                <Container fluid="sm pb-5">
                    <Accordion className="custom-accordion">
                        <Accordion.Item className="custom-accordion-item" eventKey="0">
                            <Accordion.Header className="custom-accordion-header">
                                What is a hackathon?
                            </Accordion.Header>
                            <Accordion.Body className="custom-accordion-body">
                                A hackathon is a multi-day event where students from all over the world can come together to build projects that have the potential to change the world. The great thing about hackathons is that they teach students about software and hardware development while also allowing them to explore their creativity and ideas with no limits. By the end, students will learn new skills and make valuable connections for the future.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                When and where is it?
                            </Accordion.Header>
                            <Accordion.Body>
                                HackUConn will be taking place in Werth Tower at UConn Storrs starting March 3rd at 4:00pm until 12:00pm on March 4th, 2023.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>
                                Who can participate?
                            </Accordion.Header>
                            <Accordion.Body>
                                Students of all majors at UConn are welcome to participate! Even if you don’t have any coding experience, there will still be plenty of opportunities for you to make a contribution and have a chance to win!
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>
                                What is the theme of this year's HackUConn?
                            </Accordion.Header>
                            <Accordion.Body>
                                This year's competition completely revolves around the duality of Art and Technology.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>
                                Will there be prizes?
                            </Accordion.Header>
                            <Accordion.Body>
                                Yep! Each team will have a chance to compete for cash prizes!
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>
                                Will food be provided?
                            </Accordion.Header>
                            <Accordion.Body>
                                Yes! Breakfast and dinner will be provided in addition to snacks throughout the event.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6">
                            <Accordion.Header>
                                How do I register?
                            </Accordion.Header>
                            <Accordion.Body>
                                There is a button at the top of the page that will take you to our registration form.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="7">
                            <Accordion.Header>
                                How do I go about creating/finding a team?
                            </Accordion.Header>
                            <Accordion.Body>
                                Overall team size is limited to 5 people max. If you are coming with a team, a team registration form will be distributed at the beginning of the event. If you don’t have a team, that’s no problem! We will have team forming events before we kickoff!
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="8">
                            <Accordion.Header>
                                How much does it cost?
                            </Accordion.Header>
                            <Accordion.Body>
                                HackUConn is completely free! Not only is the event costless, but you will also receive some cool swag if you participate!
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="9">
                            <Accordion.Header>
                                When can I start hacking?
                            </Accordion.Header>
                            <Accordion.Body>
                                Hacking can only be done during the annouced hacking period. Also note that no prior work/projects can be brought in.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Container>
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#FFFDFA" fill-opacity="10" d="M0,128L60,144C120,160,240,192,360,186.7C480,181,600,139,720,117.3C840,96,960,96,1080,101.3C1200,107,1320,117,1380,122.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                </svg> */}
            </div>
        );
    }
}
export default FAQPage;