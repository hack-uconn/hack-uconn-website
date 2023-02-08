import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import "src/pages/HomePage/components/DesktopHomePage.css";
import head from 'src/assets/images/HomePage/hackuconnHead.png';
import gear from 'src/assets/images/HomePage/gear.png';
import NavbarPage from 'src/pages/NavbarPage';
import Container from 'react-bootstrap/Container';

class HomePage extends React.Component {
    render() {
        return (
            <div className='main'>
                <NavbarPage />
                <div className='landing'>
                    <div className="position-relative mb-3">
                        <Image alt="gear" className="position-absolute gear rotate-gears" src={gear} />
                        <Image alt="head" className="position-relative head" src={head} />
                    </div>
                    <div className="mt-2">
                        <h1>20 hour long Hackathon ● March 3rd - 4th, 2023</h1>
                        <a href="https://forms.gle/kG1QMxK4j1xSG8Nk7">
                            <Button variant="primary" className="register mt-3" size="lg">Register</Button>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
export default HomePage;