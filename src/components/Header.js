import smallLogo from '../assets/header/smallLogo.png';
import menuImage from '../assets/header/menu.png';
import exitImage from '../assets/header/exit.png';
import "./Current.css";
import {isMobile} from 'react-device-detect';
import { useState } from 'react';

export default function Header(props) {
    const [showMenu, setShowMenu] = useState(null);

    const setImageRotate = () => {
        if (showMenu === null) {
            return (
                "w-4 h-4"
            );
        }
        else if (showMenu) {
            return (
                "w-4 h-4 transition duration-300 ease-in-out transform -rotate-90"
            );
        }
        else {
            return (
                "w-4 h-4 transition duration-300 ease-in-out transform rotate-0"
            );
        }
    }

    const renderMenu = () => {
        if (showMenu) {
            return (
                <div className="absolute top-20 right-0 w-full h-56 bg-header_menu z-50 shadow-2xl">
                    <div className="flex flex-col w-full h-full m-auto">
                        <div className="flex m-auto bg-header_mobile_register">
                            <a target="_blank" rel="noreferrer" href="https://forms.gle/q3j7kLgcTwFMJozm6">
                                <button className="text-text_light text-2xl lightText focus:outline-none px-6 max-w-min h-full">Register</button>
                            </a>
                        </div>
                        <div className="flex m-auto">
                            <button onClick={() => {setShowMenu(false); props.executeScroll(props.aboutRef)}} className="text-text_light text-2xl lightText focus:outline-none px-6 max-w-min h-full">About</button>
                        </div>
                        <div className="flex m-auto">
                            <button onClick={() => {setShowMenu(false); props.executeScroll(props.faqRef)}} className="text-text_light text-2xl lightText focus:outline-none px-6 max-w-min h-full">FAQ</button>
                        </div>
                        <div className="flex m-auto">
                            <button onClick={() => {setShowMenu(false); props.executeScroll(props.sponsorsRef)}} className="text-text_light text-2xl lightText focus:outline-none px-6 max-w-min h-full">Sponsors</button>
                        </div>
                    </div>
                </div>
            );
        }
    }

    if (isMobile) {
        return (
            <div className="sticky top-0 w-full h-20 bg-uconn_primary shadow-2xl z-50">
                <div className="flex flex-row w-full h-full z-50">
                    <div className="flex h-full justify-center m-auto">
                        <div className="flex items-center w-52 max-h-full m-auto">
                            <img alt="smallLogo" src={smallLogo} className="max-h-full max-w-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"></img>
                        </div>
                    </div>
                    <div className="absolute right-6 top-8"> 
                        <button className="focus:outline-none">
                            <img onClick={() => {setShowMenu(!showMenu)}} className={setImageRotate()} alt="down" src={showMenu ? exitImage : menuImage}></img>
                        </button>
                    </div>
                    {renderMenu()}
                </div>
            </div>
        );
    }
    
    return (
        <div className="sticky top-0 w-full h-20 bg-uconn_primary shadow-2xl z-50">
            <div className="flex flex-row w-full h-full z-50">
                <div className="flex h-full justify-left mr-auto">
                    <div className="flex items-center w-64 max-h-full pl-8">
                        <img alt="smallLogo" src={smallLogo} className="max-h-full max-w-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"></img>
                    </div>
                </div>
                <div className="flex h-full flex-row"> 
                    <a target="_blank" rel="noreferrer" href="https://forms.gle/q3j7kLgcTwFMJozm6">
                        <button className="text-text_light text-xl lightText bg-uconn_register focus:outline-none hover:bg-topic_dark transition duration-200 ease-in-out px-6 max-w-min h-full active:bg-topic_dark">Register</button>
                    </a>
                    <button onClick={() => {props.executeScroll(props.aboutRef)}} className="text-text_light text-xl lightText hover:bg-topic_middle focus:outline-none transition duration-200 ease-in-out px-6 max-w-min h-full active:bg-topic_dark">About</button>
                    <button onClick={() => {props.executeScroll(props.faqRef)}} className="text-text_light text-xl lightText hover:bg-topic_middle focus:outline-none transition duration-200 ease-in-out px-6 max-w-min h-full active:bg-topic_dark">FAQ</button>
                    <button onClick={() => {props.executeScroll(props.sponsorsRef)}} className="text-text_light text-xl lightText hover:bg-topic_middle focus:outline-none transition duration-200 ease-in-out px-6 max-w-min h-full active:bg-topic_dark">Sponsors</button>
                </div>
            </div>
        </div>
        
    );
}