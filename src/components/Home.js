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
    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400){
        setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400){
        setShowScroll(false)
        }
    };

    const scrollTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };
    window.addEventListener('scroll', checkScrollTop);

    return (
        <div className="flex flex-col overscroll-y-none overflow-hidden">
            <Header aboutRef={props.aboutRef} sponsorsRef={props.sponsorsRef} faqRef={props.faqRef} page={props.page} executeScroll={(ref) => {props.executeScroll(ref)}}/>
            <div className="flex items-center justify-center bg-topic_primary overscroll-y-none pt-20 flex-col">
                <Landing/>
                <About aboutRef={props.aboutRef}/>
                <Current/>
                <FAQ faqRef={props.faqRef}/>
                <Sponsors sponsorsRef={props.sponsorsRef}/>
            </div>
            <div className="flex fixed items-center justify-end w-full h-24 bottom-8 z-50">
                <button className="rounded-full h-full flex items-center justify-center px-4 py-8 mr-6 ml-auto shadow-2xl bg-topic_dark focus:outline-none hover:bg-topic_secondary active:bg-topic_dark transition duration-200 ease-in-out" onClick={scrollTop} style={{height: 40, display: showScroll ? 'flex' : 'none'}}>
                    <img className="flex w-8 h-8 transform rotate-180" alt="down" src={downImage}></img>
                </button>
            </div>
            <Footer/>
        </div>
    );
}