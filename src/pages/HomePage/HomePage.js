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
                    <div className="position-relative mb-3">
                        <Image alt="gear" className="position-relative gear rotate-gears" src={gear} />
                        <Image alt="head" className="position-absolute head" src={head} />
                    </div>
                    <div className="mt-2">
                        <h1>Innovating Well-Being For Us All</h1>
                        <h5>21 hour long Hackathon ● April 9th - 10th, 2022</h5>
                        <a href="https://forms.gle/mR8YVdkxNTmkgcts8">
                            <Button variant="primary" className="register mt-3" size="lg">Register</Button>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
export default HomePage;