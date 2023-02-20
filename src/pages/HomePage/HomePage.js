import React from "react";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import "./HomePage.css";
import head from "../../assets/images/HomePage/hackuconnHead.png";
import gear from "../../assets/images/HomePage/gear.png";
import text from "../../assets/images/HomePage/hackuconnText.png";
import NavbarPage from "../NavbarPage/NavbarPage";
import Container from "react-bootstrap/Container";
import AppRouter from "../../routes";

class HomePage extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="landing">
          <div className="position-relative mb-3">
            <Image
              alt="gear"
              className="position-absolute gear rotate-gears"
              src={gear}
            />
            <Image alt="head" className="position-relative head" src={head} />
          </div>
          <div className="mt-2">
            <h1>20 hour long Hackathon ● March 3rd - 4th, 2023</h1>
            <a href="https://forms.gle/kG1QMxK4j1xSG8Nk7" target="_blank">
              <Button variant="primary" className="register mt-3" size="lg">
                Register
              </Button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default HomePage;
