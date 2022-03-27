import React from 'react';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import "./LandingPage.css";

class LandingPage extends React.Component {
    render() {
        return (
            <div className='landing'>
                <Stack>
                    <h1>Innovating Well-Being For Us All</h1>
                    <p>21 hour long Hackathon ● April 9th - 10th, 2022</p>
                    <Button variant="primary">Register</Button>
                </Stack>
            </div>
        )
    }
}
export default LandingPage;