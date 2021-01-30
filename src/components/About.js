//import { phrases } from '../text.json';
import ScrollAnimation from 'react-animate-on-scroll';
import a1 from '../assets/a1.jpg';
import a2 from '../assets/a2.jpg';
import a3 from '../assets/a3.jpg';
import a4 from '../assets/a4.jpg';
import a5 from '../assets/a5.jpg';
import a6 from '../assets/a6.jpg';
import Carousel from 'react-spring-3d-carousel';
import { config } from "react-spring";
import { useState } from 'react';


export default function About(props) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {key: 1, content:<img alt="1" src={a1}></img>},
        {key: 2, content:<img alt="2" src={a2}></img>},
        {key: 3, content:<img alt="3" src={a3}></img>},
        {key: 4, content:<img alt="4" src={a4}></img>},
        {key: 5, content:<img alt="5" src={a5}></img>},
        {key: 6, content:<img alt="6" src={a6}></img>},
    ]
    
    setTimeout(() => {
        if (currentSlide + 1 === slides.length) {
            setCurrentSlide(0);
        }
        else {
            setCurrentSlide(currentSlide + 1)
        }
    }, 5000);

    return (
        <div ref={props.aboutRef} className="flex w-full h-landingHeight m-auto items-center justify-center flex-col pt-12">
            <ScrollAnimation animateIn="fadeInLeft" className="flex justify-center items-center flex-col w-full m-auto">
                <div className="flex justify-center items-center m-auto">
                    <text className="text-6xl lg:text-7xl text-center text-text_dark font-primary">What is HackUConn?</text>
                </div>
                <div className="flex justify-center items-center m-auto py-12">
                    <text className="text-2xl lg:text-4xl text-text_dark font-primary">HackUConn Description Here...</text>
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUpBig"className="flex flex-col justify-center items-center w-full h-64 lg:h-96 m-auto bg-topic_about_slider shadow-2xl border-t-8 border-b-8 border-black">
                <div className="flex justify-center items-center flex-col w-full h-full m-auto">
                    <div className="flex justify-center items-center flex-col w-full h-full lg:h-80 m-auto">
                        <Carousel slides={slides} showNavigation={false} goToSlide={currentSlide} offsetRadius={"4"} animationConfig={config.wobbly}/>
                    </div>
                </div>
            </ScrollAnimation> 
        </div>
    );
}