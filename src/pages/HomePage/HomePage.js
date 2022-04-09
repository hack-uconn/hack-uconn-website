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
                        <h5>20 hour long Hackathon ● April 9th - 10th, 2022</h5>
                        <a href="https://forms.gle/mR8YVdkxNTmkgcts8">
                            <Button variant="primary" className="register mt-3" size="lg">Register</Button>
                        </a>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#FFFDFA" fill-opacity="10" d="M0,128L60,144C120,160,240,192,360,186.7C480,181,600,139,720,117.3C840,96,960,96,1080,101.3C1200,107,1320,117,1380,122.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
    </svg>
            </div>
        )
    }
}
export default HomePage;