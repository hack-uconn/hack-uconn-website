import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import head from '../../../assets/images/HomePage/hackuconnHead.png';
import gear from '../../../assets/images/HomePage/gear.png';
import NavbarPage from '../../NavbarPage/NavbarPage';
import Container from 'react-bootstrap/Container';
import Video from '../../../assets/images/HomePage/LandingVideo.mp4'
import AboutPage from '../../../pages/AboutPage/AboutPage';
import FAQPage from '../../../pages/FAQPage/FAQPage';
import FooterPage from '../../../pages/FooterPage/FooterPage';
import "./MobileHomePage.css";
import SponsorsPage from '../../SponsorsPage/SponsorsPage';


class HomePage extends React.Component {
    render() {
        return (
            <div className='main'>
                {/* <NavbarPage /> */}
                <div className='landing'>
                    {/* <video src = {Video} autoPlay loop muted /> */}
                    <div className="position-relative mb-3">
                        <Image alt="gear" className="position-absolute gear rotate-gears" src={gear} />
                        <Image alt="head" className="position-relative head" src={head} />
                    </div>
                    <div className="mt-2">
                        <h1 className=''>20 hour long Hackathon ● March 3rd - 4th, 2023</h1>
                        <a href="https://forms.gle/kG1QMxK4j1xSG8Nk7">
                            <Button variant="primary" className="register mt-3" size="lg">Register</Button>
                        </a>
                    </div>
                </div>
                <div className='gradient'>
                    <AboutPage />     
                    <FAQPage />
                    <SponsorsPage />
                    <FooterPage />
                </div>
            </div>
        )
    }
}
export default HomePage;