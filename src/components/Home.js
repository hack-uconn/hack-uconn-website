import About from "./About";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Header from "./Header";
import Current from "./Current";
import Landing from "./Landing";
import { useState } from "react";
import downImage from '../assets/down.png';
import Sponsors from "./Sponsors";

export default function Home(props) {
    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400){
            setShowScroll(true);
        } 
        else if (showScroll && window.pageYOffset <= 400){
            setShowScroll(false);
        }
    };

    const scrollTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };
    window.addEventListener('scroll', checkScrollTop);

    return (
        <div>
            <Header aboutRef={props.aboutRef} sponsorsRef={props.sponsorsRef} faqRef={props.faqRef} page={props.page} executeScroll={(ref) => {props.executeScroll(ref)}}/>
            <div className="flex flex-col overflow-hidden">
                <div className="flex items-center justify-center bg-topic_primary overscroll-y-none flex-col">
                    <Landing/>
                    <div className="bg-topic_primary w-full h-20"></div>
                    <About aboutRef={props.aboutRef}/>
                    <div className="bg-topic_primary w-full h-32"></div>
                    <Current/>
                    <div className="bg-topic_primary w-full h-20"></div>
                    <FAQ faqRef={props.faqRef}/>
                    <div className="bg-topic_primary w-full h-20"></div>
                    <Sponsors sponsorsRef={props.sponsorsRef}/>
                    <div className="bg-topic_primary w-full h-20"></div>
                </div>
                <div className="fixed w-16 h-16 bottom-4 md:bottom-8 lg:bottom-14 right-4 md:right-8 lg:right-14 z-50">
                    <div className="flex w-full h-full justify-center items-center">
                        <button className="rounded-full w-8 h-16 px-8 py-8 shadow-2xl bg-topic_dark focus:outline-none hover:bg-topic_secondary active:bg-topic_dark transition duration-200 ease-in-out" onClick={scrollTop} style={{display: showScroll ? 'flex' : 'none'}}>
                            <img className="absolute top-0 bottom-0 left-0 right-0 m-auto w-8 h-8 transform rotate-180 z-50" alt="down" src={downImage}></img>
                        </button>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
        
    );
}