import React from "react";
import instagramLogo from '../../assets/images/FooterPage/instagramLogo.png';
import './FooterPage.css'

class FooterPage extends React.Component {
    render() {
        return (
            <div className="footerComponent pt-5">
                <a href="https://www.instagram.com/hackuconn/">
                    <img className="instagram mb-4 mt-5"  src={instagramLogo} alt="Instagram Logo"></img>
                </a>
                <p className="footerHeaders">University of Connecticut</p>
                <p className="footerHeaders">Contact us at hackuconn@gmail.com</p>
            </div>
        );
    }
}
export default FooterPage;