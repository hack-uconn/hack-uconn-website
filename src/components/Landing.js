import { phrases } from '../text.json';
import "./Current.css";
import gearPic from '../assets/landing/gearPic.png';
import earthPic from '../assets/landing/earthPic.png';
import textPic from '../assets/landing/textPic.png';
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
                            <div className="relative">
                                <ScrollAnimation animateIn={"slideInLeft"} animateOnce={true} className="relative w-full h-full z-0">
                                    <img alt="gear" src={gearPic} className="relative max-h-landingLogoHeight rotate-gears z-0"></img>
                                </ScrollAnimation>
                                <ScrollAnimation delay={"200"} animateIn={"slideInRight"} animateOnce={true} className="absolute top-0 w-full h-full z-1">
                                    <img alt="earth" src={earthPic} className="absolute top-0 max-h-full rotate-earth z-1"></img>
                                </ScrollAnimation>
                                <ScrollAnimation delay={"500"} animateIn={"bounceInDown"} animateOnce={true} className="absolute top-0 w-full h-full z-2 text-logo-background">
                                    <img alt="text" src={textPic} className="absolute top-0 max-h-full z-2 text-logo"></img>
                                </ScrollAnimation>
                            </div>
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
                    <div className="flex justify-center items-center h-landingLogoHeight m-auto">
                        <div className="relative">
                            <ScrollAnimation animateIn={"slideInLeft"} animateOnce={true} className="relative w-full h-landingLogoHeight z-0">
                                <img alt="gear" src={gearPic} className="relative max-h-landingLogoHeight rotate-gears z-0"></img>
                            </ScrollAnimation>
                            <ScrollAnimation delay={"200"} animateIn={"slideInRight"} animateOnce={true} className="absolute top-0 w-full h-full z-1">
                                <img alt="earth" src={earthPic} className="absolute top-0 max-h-full rotate-earth z-1"></img>
                            </ScrollAnimation>
                            <ScrollAnimation delay={"500"} animateIn={"bounceInDown"} animateOnce={true} className="absolute top-0 w-full h-full z-2 text-logo-background">
                                <img alt="text" src={textPic} className="absolute top-0 max-h-full z-2 text-logo"></img>
                            </ScrollAnimation>
                        </div>
                    </div>
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