import React from "react";
import MobileHomePage from './components/MobileHomePage';
import DesktopHomePage from './components/DesktopHomePage';
import "./HomePage.css";

function isMobile() {
    if (window.innerWidth <= 576) {
        return true;
    }
    else {
        return false;
    }
}

function HomePage() {
    return isMobile() ? ( <MobileHomePage /> ) : ( <DesktopHomePage /> )

}
export default HomePage;
