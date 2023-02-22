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

class HomePage extends React.Component {
    render() {
        return isMobile() ? ( <MobileHomePage /> ) : ( <DesktopHomePage /> )
    }
}
export default HomePage;
