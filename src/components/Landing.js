import { phrases } from '../text.json';
import "./Current.css";
import bigLogo from '../assets/landing/bigLogo.png';
import Countdown from 'react-countdown';
import {isMobile} from 'react-device-detect';
import ScrollAnimation from 'react-animate-on-scroll';

export default function Landing() {
    const renderer = ({ days, hours, minutes, seconds }) => {
        return (
            <div className="flex justify-center items-start h-full m-auto">
                <div className="flex flex-col justify-center items-center mt-0 mb-auto px-4 sm:px-4 md:px-6">
                    <text className="text-xl md:text-4xl text-text_light lightText py-2 animate-pulse">Days</text>
                    <text className="text-xl md:text-4xl text-text_light lightText py-2 animate-pulse">{days}</text>
                </div>
                <div className="flex flex-col justify-center items-center mt-0 mb-auto px-4 sm:px-4 md:px-6">
                    <text className="text-xl md:text-4xl text-text_light lightText py-2 animate-pulse">Hours</text>
                    <text className="text-xl md:text-4xl text-text_light lightText py-2 animate-pulse">{hours}</text>
                </div>
                <div className="flex flex-col justify-center items-center mt-0 mb-auto px-4 sm:px-4 md:px-6">
                    <text className="text-xl md:text-4xl text-text_light lightText py-2 animate-pulse">Minutes</text>
                    <text className="text-xl md:text-4xl text-text_light lightText py-2 animate-pulse">{minutes}</text>
                </div>
                <div className="flex flex-col justify-center items-center mt-0 mb-auto px-4 sm:px-4 md:px-6">
                    <text className="text-xl md:text-4xl text-text_light lightText py-2 animate-pulse">Seconds</text>
                    <text className="text-xl md:text-4xl text-text_light lightText py-2 animate-pulse">{seconds}</text>
                </div>
            </div>
        );
    };
    
    if (isMobile) {
        return (
            <div className="flex flex-col w-full bg-topic_dark">
                <div className="flex flex-col w-full h-landingHeight bg-topic_dark">
                    <div className="flex w-4/5 h-3/5 m-auto">
                        <div className="flex justify-center items-center h-full m-auto">
                            <img alt="bigLogo" src={bigLogo} className="max-h-full"></img>
                        </div>
                    </div>
                    <div className="flex w-4/5 h-1/5 m-auto">
                        <div className="flex justify-center items-center mb-8 m-auto">
                            <text className="text-4xl sm:text-4xl md:text-6xl text-text_light font-primary text-center">{phrases.landing.title}:</text>
                        </div>
                    </div>
                    <div className="flex w-full h-1/5">
                        <Countdown date={new Date("March 13 2021 11:00")} renderer={renderer}/>
                    </div>
                </div>
                <div className="flex w-full h-12 mt-12 bg-gradient-to-b from-topic_dark to-topic_primary"></div>
            </div>
        );
    }
      

    return (
        <div className="flex flex-col w-full bg-topic_dark">
            <div className="flex flex-col w-full h-landingHeight bg-topic_dark">
                <div className="flex w-full h-4/6">
                    <ScrollAnimation animateOnce={true} animateIn="rollIn" animateOut="rollOut" className="flex justify-center items-center h-landingLogoHeight m-auto">
                        <img alt="bigLogo" src={bigLogo} className="max-h-full"></img>
                    </ScrollAnimation>
                </div>
                <div className="flex w-full h-1/6">
                    <div className="flex justify-center items-center m-auto">
                        <text className="text-6xl text-text_light font-primary text-center">{phrases.landing.title}</text>
                    </div>
                </div>
                <div className="flex w-full h-1/5">
                    <Countdown date={new Date("March 13 2021 11:00")} renderer={renderer}/>
                </div>
            </div>
            <div className="flex w-full h-12 mt-12 bg-gradient-to-b from-topic_dark to-topic_primary"></div>
        </div>
    );
}