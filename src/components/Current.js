import { phrases } from '../text.json';
import { useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import aboutPic from '../assets/tree.png';
import schedulePic from '../assets/water.png';
import prizesPic from '../assets/sun.png';
import './Current.css';
import ReactCardFlip from 'react-card-flip';

export default function Current() {
    const [selected, setSelected] = useState(null);
    
    const updateSelected = (val) => {
        setSelected(val);
    }

    const setCurrentHeader = (val, type) => {
        if (type === "scale") {
            if (selected === val) {
                return (
                    "flex justify-center items-center m-auto transition duration-300 ease-in-out transform scale-125 focus:outline-none"
                );
            }
            else {
                return (
                    "flex justify-center items-center m-auto transition duration-300 ease-in-out transform hover:scale-110 focus:outline-none"
                );
            }
        }
        else if (type === "text") {
            if (selected === val) {
                return (
                    "aboutTextSelected text-xl md:text-3xl lg:text-4xl text-center"
                );
            }
            else {
                return (
                    "aboutText text-xl md:text-3xl lg:text-4xl text-center"
                );
            }
        }
        
    }

    const setDescription = (val) => {
        if (selected === "about") {
            if (val === "schedule") {
                return (
                    <div className="flex w-full h-full items-center justify-center flex-col m-auto bg-topic_current_about_card rounded-lg shadow-2xl border-8 border-black">
                        <div className="flex w-full h-full justify-center items-center">
                            <div className="flex w-full h-full justify-center items-center">
                                <text className="aboutText text-lg lg:text-2xl text-text_dark text-center">{phrases.current.aboutdescription1}</text>
                            </div>
                        </div>
                    </div>
                );
            }
            else if (val === "prizes") {
                return (
                    <div className="flex w-full h-full items-center justify-center flex-col m-auto bg-topic_current_about_card rounded-lg shadow-2xl border-8 border-black">
                        <div className="flex w-full h-full justify-center items-center">
                            <div className="flex w-full h-full justify-center items-center">
                                <text className="aboutText text-lg lg:text-2xl text-text_dark text-center">{phrases.current.aboutdescription2}</text>
                            </div>
                        </div>
                    </div>
                );
            }
        }
        else if (selected === "schedule") {
            if (val === "about") {
                return (
                    <div className="flex w-full h-full items-center justify-center flex-col m-auto bg-topic_current_schedule_card rounded-lg shadow-2xl border-8 border-black">
                        <div className="flex w-full h-full justify-center items-center">
                            <div className="flex w-full h-full justify-center items-center">
                                <text className="aboutText text-lg lg:text-2xl text-text_dark text-center">{phrases.current.scheduledescription1}</text>
                            </div>
                        </div>
                    </div>
                );
            }
            else if (val === "prizes") {
                return (
                    <div className="flex w-full h-full items-center justify-center flex-col m-auto bg-topic_current_schedule_card rounded-lg shadow-2xl border-8 border-black">
                        <div className="flex w-full h-full justify-center items-center">
                            <div className="flex w-full h-full justify-center items-center">
                                <text className="aboutText text-lg lg:text-2xl text-text_dark text-center">{phrases.current.scheduledescription2}</text>
                            </div>
                        </div>
                    </div>
                );
            }
        }
        else if (selected === "prizes") {
            if (val === "about") {
                return (
                    <div className="flex w-full h-full items-center justify-center flex-col m-auto bg-topic_current_prizes_card rounded-lg shadow-2xl border-8 border-black">
                        <div className="flex w-full h-full justify-center items-center">
                            <div className="flex w-full h-full justify-center items-center">
                                <text className="aboutText text-lg lg:text-2xl text-text_dark text-center">{phrases.current.prizesdescription1}</text>
                            </div>
                        </div>
                    </div>
                );
            }
            else if (val === "schedule") {
                return (
                    <div className="flex w-full h-full items-center justify-center flex-col m-auto bg-topic_current_prizes_card rounded-lg shadow-2xl border-8 border-black">
                        <div className="flex w-full h-full justify-center items-center">
                            <div className="flex w-full h-full justify-center items-center">
                                <text className="aboutText text-lg lg:text-2xl text-text_dark text-center">{phrases.current.prizesdescription2}</text>
                            </div>
                        </div>
                    </div>
                );
            }
        }
        else {
            return (null);
        }
    }


    return (
        <div className="flex w-full h-landingHeight mx-app flex-col pt-12">
            <div className="flex flex-col justify-center h-full">
                <ScrollAnimation animateIn="fadeInDown" className="flex w-full items-center justify-center flex-col">
                    <div className="flex justify-center pb-4">
                        <text className="text-5xl md:text-6xl lg:text-7xl text-text_dark font-primary">{"HackUConn " + phrases.general.year}</text>
                    </div>
                    <div className="flex justify-center">
                        <text className="text-2xl md:text-3xl text-text_dark font-primary">{phrases.general.startDay + " - " + phrases.general.endDay}</text>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInDown" className="flex flex-row w-full md:w-aboutTabsWidth h-24 md:h-auto mt-12 mb-20 md:m-auto p-0 md:p-6 justify-center items-center bg-topic_secondary opacity-90 rounded-lg shadow-2xl bg-topic_current_header border-8 border-black">
                    <button onClick={() => {selected === "about" ? updateSelected(null) : updateSelected("about")}} className={setCurrentHeader("about", "scale")}>
                        <text className={setCurrentHeader("about", "text")}>About</text>
                    </button>
                    <button onClick={() => {selected === "schedule" ? updateSelected(null) : updateSelected("schedule")}} className={setCurrentHeader("schedule", "scale")}>
                        <text className={setCurrentHeader("schedule", "text")}>Schedule</text>
                    </button>
                    <button onClick={() => {selected === "prizes" ? updateSelected(null) : updateSelected("prizes")}} className={setCurrentHeader("prizes", "scale")}>
                        <text className={setCurrentHeader("prizes", "text")}>Prizes</text>
                    </button>
                </ScrollAnimation>
                <div className="flex flex-row justify-center items-center mt-0 mb-auto md:my-auto md:w-full lg:w-aboutWidth lg:m-auto">
                    <div className="flex flex-col justify-center w-28 md:w-64 h-48 md:h-96 m-auto">
                        <div className="flex w-full h-full">
                            <ReactCardFlip isFlipped={selected === "schedule" || selected === "prizes"} flipDirection="horizontal" containerStyle={{width: "100%"}}>
                                <ScrollAnimation animateIn="fadeInLeft" className="flex w-full h-full items-center justify-center flex-col m-auto">
                                    <div className="flex w-full h-full justify-center items-center">
                                        <img alt="about" src={aboutPic} className="w-full h-full"></img>
                                    </div>
                                </ScrollAnimation>
                                {setDescription("about")}
                            </ReactCardFlip>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center w-28 md:w-64 h-48 md:h-96 m-auto">
                        <div className="flex w-full h-full">
                            <ReactCardFlip isFlipped={selected === "about" || selected === "prizes"} flipDirection="horizontal" containerStyle={{width: "100%"}}>
                                <ScrollAnimation animateIn="fadeInLeft" className="flex w-full h-full items-center justify-center flex-col m-auto">
                                    <div className="flex w-full h-full justify-center items-center">
                                        <img alt="schedule" src={schedulePic} className="w-full h-full"></img>
                                    </div>
                                </ScrollAnimation>
                                {setDescription("schedule")}
                            </ReactCardFlip>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center w-28 md:w-64 h-48 md:h-96 m-auto">
                        <div className="flex w-full h-full">
                            <ReactCardFlip isFlipped={selected === "about" || selected === "schedule"} flipDirection="horizontal" containerStyle={{width: "100%"}}>
                                <ScrollAnimation animateIn="fadeInLeft" className="flex w-full h-full items-center justify-center flex-col m-auto">
                                    <div className="flex w-full h-full justify-center items-center">
                                        <img alt="prizes" src={prizesPic} className="w-full h-full"></img>
                                    </div>
                                </ScrollAnimation>
                                {setDescription("prizes")}
                            </ReactCardFlip>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}