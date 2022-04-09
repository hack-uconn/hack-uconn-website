import React from "react";
import MobileMentorPage from './components/MobileMentorPage';
import DesktopMentorPage from './components/DesktopMentorPage';
import "./MentorPage.css";

function isMobile() {
    if (window.innerWidth <= 576) {
        return true;
    }
    else {
        return false;
    }
}


class MentorPage extends React.Component {
    render() {
        return isMobile() ? ( <MobileMentorPage /> ) : ( <DesktopMentorPage /> )
    }
}
export default MentorPage;