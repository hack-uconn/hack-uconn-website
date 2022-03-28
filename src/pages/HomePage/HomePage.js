import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import "./HomePage.css";
import head from '../../assets/images/HomePage/head.png';
import gear from '../../assets/images/HomePage/gear.png';
import NavbarPage from '../NavbarPage/NavbarPage';

class HomePage extends React.Component {
    render() {
        return (
            <div className='main'>
                <NavbarPage />
                <div className='landing'>
                    <div className="position-relative">
                        <Image alt="gear" className="position-relative gear mt-5 rotate-gears" src={gear} />
                        <Image alt="head" className="position-absolute head mt-5" src={head} />
                    </div>
                    <h1>Innovating Well-Being For Us All</h1>
                    <p>21 hour long Hackathon ● April 9th - 10th, 2022</p>
                    <a href="https://forms.gle/mR8YVdkxNTmkgcts8">
                        <Button variant="primary" className="register" size="lg">Register</Button>
                    </a>
                </div>
            </div>
        )
    }
}
export default HomePage;