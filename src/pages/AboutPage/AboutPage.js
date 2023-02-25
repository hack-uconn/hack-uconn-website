import React from "react";
import MobileAboutPage from './components/MobileAboutPage';
import DesktopAboutPage from './components/DesktopAboutPage';
import "./AboutPage.css";

function isMobile() {
    if (window.innerWidth <= 576) {
        return true;
    }
    else {
        return false;
    }
}

function AboutPage() {
    return isMobile() ? ( <MobileAboutPage /> ) : ( <DesktopAboutPage /> )

}
export default AboutPage;