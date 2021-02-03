import { phrases } from '../text.json';
import ScrollAnimation from 'react-animate-on-scroll';
import Carousel from 'react-spring-3d-carousel';
import { config } from "react-spring";
import { useState } from 'react';


export default function About(props) {
    const [currentSlide, setCurrentSlide] = useState(0);

    function importAll(r) {
        return r.keys().map(r);
    }

    const images = importAll(require.context('../assets/about/', false, /\.(png|jpg)$/));

    const slides = images.map((image, index) => {
        return (
            {
                key: index, 
                content: <img alt={index} src={image.default}></img>
            }
        );
    });
    
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
                    <text className="text-6xl lg:text-7xl text-center text-text_dark font-primary">{phrases.about.title}</text>
                </div>
                <div className="flex justify-center items-center m-auto py-12">
                    <text className="text-2xl lg:text-4xl text-text_dark font-primary">{phrases.about.description}</text>
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