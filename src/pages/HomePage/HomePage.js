import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import "./HomePage.css";
import head from '../../assets/images/HomePage/headTemp.png';
import gear from '../../assets/images/HomePage/gear.png';
import text from '../../assets/images/HomePage/hackuconnText.png';
import NavbarPage from '../NavbarPage/NavbarPage';
import Container from 'react-bootstrap/Container';

class HomePage extends React.Component {
    render() {
        return (
            <div className='main'>
                <NavbarPage />
                <div className='landing'>
                    <div className="position-relative mb-3">
                        <Image alt="gear" className="position-relative gear rotate-gears" src={gear} />
                        <Image alt="head" className="position-absolute head" src={head} />
                    </div>
                    <div className="mt-2">
                        <h1>Innovating Well-being For Us All</h1>
                        <h5>20 hour long Hackathon ● March 3rd - 4th, 2023</h5>
                        <a href="https://forms.gle/vJTya4M7EZzTDD2C9">
                            <Button variant="primary" className="register mt-3" size="lg">Register</Button>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
export default HomePage;