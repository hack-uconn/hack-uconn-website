import { phrases } from '../text.json';
import { useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import aboutPic from '../assets/current/about.png';
import schedulePic from '../assets/current/schedule.png';
import prizesPic from '../assets/current/prizes.png';
import day1Pic from '../assets/current/day1.png';
import day2Pic from '../assets/current/day2.png';
import './Current.css';
import ReactCardFlip from 'react-card-flip';
import { isMobile } from 'react-device-detect';

export default function Current() {
    const [selected, setSelected] = useState(null);
    const [selectDay, setSelectDay] = useState("day1");
    
    const updateSelected = (val) => {
        setSelected(val);
    }

    const cardZIndex = () => {
        if (selected) {
            return (
                "w-full h-full back"
            );
        }
        else {
            return (
                "w-full h-full"
            );
        }
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
                    "lightTextSelected text-xl md:text-3xl lg:text-4xl text-center"
                );
            }
            else {
                return (
                    "lightText text-xl md:text-3xl lg:text-4xl text-center"
                );
            }
        }
        
    }

    const setDescription = (val) => {
        if (selected === "about") {
            if (val === "schedule") {
                return (
                    <div className="flex w-full lg:w-currentCardWidth h-currentMobileHeight md:h-currentHeight items-center justify-center flex-col m-auto lg:-ml-40 bg-topic_current_about_card rounded-lg shadow-2xl border-8 border-black">
                        <div className="flex w-full h-full justify-center items-center">
                            <div className="flex w-11/12 h-11/12 m-auto justify-center items-center">
                                <text className="lightTextAbout text-xs md:text-lg lg:text-xl text-end">{phrases.current.aboutdescription1}</text>
                            </div>
                        </div>
                    </div>
                );
            }
            else if (val === "prizes") {
                return (
                    <div className="flex w-full lg:w-currentCardWidth h-96 md:h-currentHeight items-center justify-center flex-col m-auto lg:-ml-40 bg-topic_current_about_card rounded-lg shadow-2xl border-8 border-black">
                        <div className="flex flex-col w-11/12 h-11/12 m-auto justify-center items-center">
                            <div className="flex flex-col justify-center items-center">
                                <div className="flex justify-center items-center">
                                    <text className="lightText md:text-3xl text-center text-center">Date</text>
                                </div>
                                <div className="flex justify-center items-center pt-4">
                                    <text className="lightText md:text-xl text-center text-center">{phrases.current.aboutdescription2.date}</text>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-center py-12">
                                <div className="flex justify-center items-center">
                                    <text className="lightText md:text-3xl text-center text-center">Time</text>
                                </div>
                                <div className="flex justify-center items-center pt-4">
                                    <text className="lightText md:text-xl text-center text-center">{phrases.current.aboutdescription2.time}</text>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <div className="flex justify-center items-center">
                                    <text className="lightText md:text-3xl text-center text-center">Location</text>
                                </div>
                                <div className="flex justify-center items-center pt-4">
                                    <text className="lightText md:text-xl text-center text-center">{phrases.current.aboutdescription2.location}</text>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }
        }
        else if (selected === "schedule") {
            if (val === "about") {
                return (
                    <div className="flex w-full lg:w-currentCardWidth h-96 md:h-currentHeight items-center justify-center flex-col m-auto bg-topic_current_schedule_card rounded-lg shadow-2xl border-8 border-black">
                        <div className="flex flex-col w-full h-full justify-center items-center">
                            <div className="flex w-full h-20 justify-center items-center">
                                <text className="lightText text-2xl lg:text-3xl text-center text-center">Day 1</text>
                            </div>
                            <div className="flex w-full h-currentScheduleDay1Height object-contain justify-center items-center mb-20">
                                <a target="_blank" rel="noreferrer" href="https://docs.google.com/spreadsheets/d/1QaNaEVKOf0APBYGvIoox8LD89SVpqr6aVeA-1YHOCgo/edit?usp=sharing">
                                    <text className="lightText text-xl lg:text-32xl text-center text-center">Itinerary</text>
                                </a>
                            </div>
                        </div>
                    </div>
                );
            }
            else if (val === "prizes") {
                return (
                    <div className="flex w-full lg:w-currentCardWidth h-96 md:h-currentHeight items-center justify-center flex-col m-auto lg:-ml-40 bg-topic_current_schedule_card rounded-lg shadow-2xl border-8 border-black">
                        <div className="flex flex-col w-full h-full justify-center items-center">
                            <div className="flex w-full h-20 justify-center items-center">
                                <text className="lightText text-2xl lg:text-3xl text-center text-center">Day 2</text>
                            </div>
                            <div className="flex w-full h-currentScheduleDay1Height object-contain justify-center items-center mb-20">
                                <a target="_blank" rel="noreferrer" href="https://docs.google.com/spreadsheets/d/1QaNaEVKOf0APBYGvIoox8LD89SVpqr6aVeA-1YHOCgo/edit?usp=sharing">
                                    <text className="lightText text-xl lg:text-32xl text-center text-center">Itinerary</text>
                                </a>
                            </div>
                        </div>
                    </div>
                );
            }
        }
        else if (selected === "prizes") {
            if (val === "about") {
                return (
                    <div className="flex w-32 md:w-full lg:w-currentCardWidth h-96 md:h-currentHeight items-center justify-center flex-col m-auto bg-topic_current_prizes_card rounded-lg shadow-2xl border-8 border-black">
                        <div className="flex w-full md:w-64 h-full justify-center items-center">
                            <div className="flex flex-col w-full h-full justify-start items-center">
                                <div className="flex h-12 mt-6 justify-center items-center">
                                    <text className="lightText text-sm md:text-3xl lg:text-4xl text-center text-center">Grand Prizes</text>
                                </div>
                                <div className="flex flex-col justify-center items-center md:pt-12">
                                    <div className="flex justify-center items-center pb-2">
                                        <text className="lightText underline text-sm md:text-2xl lg:text-3xl text-center text-center">{phrases.current.prizesdescription1.first.title}</text>
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <text className="lightText text-xs md:text-xl lg:text-xl text-center text-center">{phrases.current.prizesdescription1.first.description}</text>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center items-center py-6">
                                    <div className="flex justify-center items-center pb-2">
                                        <text className="lightText underline text-sm md:text-2xl lg:text-3xl text-center text-center">{phrases.current.prizesdescription1.second.title}</text>
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <text className="lightText text-xs md:text-xl lg:text-xl text-center text-center">{phrases.current.prizesdescription1.second.description}</text>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <div className="flex justify-center items-center pb-2">
                                        <text className="lightText underline text-sm md:text-2xl lg:text-3xl text-center text-center">{phrases.current.prizesdescription1.third.title}</text>
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <text className="lightText text-xs md:text-xl lg:text-xl text-center text-center">{phrases.current.prizesdescription1.third.description}</text>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }
            else if (val === "schedule") { 
                return (
                    <div className="flex w-32 md:w-full lg:w-currentCardWidth h-96 md:h-currentHeight items-center justify-center flex-col m-auto bg-topic_current_prizes_card rounded-lg shadow-2xl border-8 border-black">
                        <div className="flex w-full md:w-80 lg:w-96 h-full justify-center items-center">
                            <div className="flex flex-col w-full h-full justify-start items-center">
                                <div className="flex h-4 mt-8 mx-auto justify-center items-center">
                                    <text className="lightText italic text-xs md:text-sm text-center">If the exact prize is not available, a suitable replacement will be provided.</text>
                                </div>
                                <div className="flex h-20 mt-6 justify-center items-center">
                                    <text className="lightText text-sm md:text-3xl lg:text-4xl text-center text-center">Category Prizes</text>
                                </div>
                                <div className="flex flex-col justify-center items-center md:pt-12">
                                    <div className="flex justify-center items-center md:pb-2">
                                        <text className="lightText text-sm underline md:text-xl lg:text-2xl text-center text-center">{phrases.current.prizesdescription2.crowdFavorite.title}</text>
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <text className="lightText text-xs md:text-lg text-center text-center">{phrases.current.prizesdescription2.crowdFavorite.description}</text>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center items-center md:py-6">
                                    <div className="flex justify-center items-center md:pb-2">
                                        <text className="lightText underline text-sm md:text-xl lg:text-2xl text-center text-center">{phrases.current.prizesdescription2.fourth.title}</text>
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <text className="lightText text-xs md:text-xl text-center text-center">{phrases.current.prizesdescription2.fourth.description}</text>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <div className="flex justify-center items-center md:pb-2">
                                        <text className="lightText underline text-sm md:text-xl lg:text-2xl text-center text-center">{phrases.current.prizesdescription2.fifth.title}</text>
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <text className="lightText text-xs md:text-xl text-center text-center">{phrases.current.prizesdescription2.fifth.description}</text>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <div className="flex justify-center items-center md:pb-2">
                                        <text className="lightText underline text-sm md:text-xl lg:text-2xl text-center text-center">{phrases.current.prizesdescription2.sixth.title}</text>
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <text className="lightText text-xs md:text-xl text-center text-center">{phrases.current.prizesdescription2.sixth.description}</text>
                                    </div>
                                </div>
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
    
    const returnHeight = () => {
        if (isMobile) {
            return ({width: "100%"});
        }
        else {
            return ({width: "100%", height: "100"});
        }
    }

    const returnDayStyle = (day) => {
        if (day === selectDay) {
            return (
                "lightTextAbout text-xl text-justify transition duration-500 ease-in-out transform -translate-y-1 scale-110"
            );
        }
        else {
            return (
                "lightTextAbout text-xl text-justify transition duration-500 ease-in-out transform translate-y-0 hover:scale-100"
            );
        }
    }

    if (isMobile) {
        let body = null;
        if (selected === "about") {
            body = (
                <div className="flex flex-row justify-center items-center mt-0 mb-auto md:my-auto md:w-full h-full md:h-currentHeight">
                    <div className="flex flex-col justify-center w-28 md:w-80 h-full m-auto">
                        <div className="flex w-full h-full justify-center items-center">
                            <div animateOnce={true} className="flex w-full h-48 md:h-96 items-center justify-center flex-col m-auto">
                                <div className="flex w-full h-full justify-center items-center">
                                    <img alt="about" src={aboutPic} className="w-full h-full"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-64 h-currentMobileHeight md:h-currentHeight items-center justify-center flex-col m-auto bg-topic_current_about_card rounded-lg shadow-lg border-8 border-black">
                        <div className="flex w-full h-full justify-center items-center">
                            <div className="flex flex-col w-11/12 h-11/12 m-auto justify-center items-center">
                                <div className="flex flex-row justify-center items-start pt-2">
                                    <div className="flex h-full flex-col justify-center items-center">
                                        <div className="flex justify-center items-center">
                                            <text className="lightText text-base md:text-3xl text-center text-center">Date</text>
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <text className="lightText text-sm md:text-xl text-center text-center">{phrases.current.aboutdescription2.date}</text>
                                        </div>
                                    </div>
                                    <div className="flex h-full flex-col justify-center items-center">
                                        <div className="flex justify-center items-center">
                                            <text className="lightText text-base md:text-3xl text-center text-center">Time</text>
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <text className="lightText text-sm md:text-xl text-center text-center">{phrases.current.aboutdescription2.time}</text>
                                        </div>
                                    </div>
                                    <div className="flex h-full flex-col justify-center items-center">
                                        <div className="flex justify-center items-center">
                                            <text className="lightText text-base md:text-3xl text-center text-center">Location</text>
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <text className="lightText text-sm md:text-xl text-center text-center">{phrases.current.aboutdescription2.location}</text>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <text className="lightTextAboutMobile md:lightTextAbout text-aboutDescriptionMobile md:text-lg lg:text-xl text-justify">{phrases.current.aboutdescription1}</text>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        else if (selected === "schedule") {
            body = (
                <div className="flex flex-row justify-center items-center mt-0 mb-auto md:my-auto md:w-full h-full md:h-currentHeight">
                    <div className="flex flex-col justify-center w-28 md:w-80 h-full m-auto">
                        <div className="flex w-full h-full justify-center items-center">
                            <div animateOnce={true} className="flex w-full h-48 md:h-96 items-center justify-center flex-col m-auto">
                                <div className="flex w-full h-full justify-center items-center">
                                    <img alt="about" src={schedulePic} className="w-full h-full"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-64 h-currentMobileHeight md:h-currentHeight items-center justify-center flex-col m-auto bg-topic_current_schedule_card rounded-lg shadow-lg border-8 border-black">
                        <div className="flex w-full h-full justify-center items-center">
                            <div className="flex flex-col w-full h-full m-auto justify-center items-center">
                                <div className="flex flex-row w-full h-20 bg-topic_current_schedule_card_header">
                                    <div className="flex w-full h-20 justify-center items-center">
                                        <text onClick={() => {setSelectDay("day1")}} className={returnDayStyle("day1")}>Day 1</text>
                                    </div>
                                    <div className="flex w-full h-20 justify-center items-center">
                                        <text onClick={() => {setSelectDay("day2")}} className={returnDayStyle("day2")}>Day 2</text>
                                    </div>
                                </div>
                                <div className="flex flex-col max-w-full max-h-full m-auto justify-center items-center">
                                    <div className="flex w-full h-full object-contain justify-center items-center">
                                        <a target="_blank" rel="noreferrer" href="https://docs.google.com/spreadsheets/d/1QaNaEVKOf0APBYGvIoox8LD89SVpqr6aVeA-1YHOCgo/edit?usp=sharing">
                                            <text className="lightText text-xl lg:text-32xl text-center text-center">Itinerary</text>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        else if (selected === "prizes") {
            body = (
                <div className="flex flex-row justify-center items-center mt-0 mb-auto md:my-auto md:w-full h-full md:h-currentHeight">
                    <div className="flex flex-col justify-center w-28 md:w-80 h-full m-auto">
                        <div className="flex w-full h-full justify-center items-center">
                            <div animateOnce={true} className="flex w-full h-48 md:h-96 items-center justify-center flex-col m-auto">
                                <div className="flex w-full h-full justify-center items-center">
                                    <img alt="about" src={prizesPic} className="w-full h-full"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-64 h-currentMobileHeight md:h-currentHeight items-center justify-center flex-col m-auto bg-topic_current_prizes_card rounded-lg shadow-lg border-8 border-black">
                        <div className="flex w-full h-full justify-center items-center">
                            <div className="flex flex-col w-11/12 h-full m-auto justify-center items-center">
                                <div className="flex flex-col w-full justify-center items-center">
                                    <div className="flex h-12 mt-0 mx-auto justify-center items-center">
                                        <text className="lightText text-2xl text-center text-center">Grand Prizes</text>
                                    </div>
                                    <div className="flex flex-row w-full h-full justify-center items-center">
                                        <div className="flex flex-col m-auto justify-center items-center">
                                            <div className="flex justify-center items-center pb-2">
                                                <text className="lightText underline text-sm text-center text-center">{phrases.current.prizesdescription1.first.title}</text>
                                            </div>
                                            <div className="flex justify-center items-center">
                                                <text className="lightText text-xs text-center text-center">{phrases.current.prizesdescription1.first.description}</text>
                                            </div>
                                        </div>
                                        <div className="flex flex-col m-auto justify-center items-center">
                                            <div className="flex justify-center items-center pb-2">
                                                <text className="lightText underline text-sm  text-center text-center">{phrases.current.prizesdescription1.second.title}</text>
                                            </div>
                                            <div className="flex justify-center items-center">
                                                <text className="lightText text-xs text-center text-center">{phrases.current.prizesdescription1.second.description}</text>
                                            </div>
                                        </div>
                                        <div className="flex flex-col m-auto justify-center items-center">
                                            <div className="flex justify-center items-center pb-2">
                                                <text className="lightText underline text-sm  text-center text-center">{phrases.current.prizesdescription1.third.title}</text>
                                            </div>
                                            <div className="flex justify-center items-center">
                                                <text className="lightText text-xs text-center text-center">{phrases.current.prizesdescription1.third.description}</text>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col w-full h-3/5 justify-center items-center">
                                    <div className="flex h-4 mt-0 mx-auto justify-center items-center">
                                        <text className="lightText italic text-xs text-center">If the exact prize is not available, a suitable replacement will be provided.</text>
                                    </div>
                                    <div className="flex h-12 justify-center items-center">
                                        <text className="lightText text-2xl text-center">Category Prizes</text>
                                    </div>
                                    <div className="flex h-12 m-auto justify-center items-center">
                                        <text className="lightText underline text-sm text-center text-center">{phrases.current.prizesdescription2.crowdFavorite.title}</text>
                                    </div>
                                    <div className="flex flex-row w-full h-full justify-center items-center">
                                        <div className="flex flex-col m-auto justify-center items-center">
                                            <div className="flex justify-center items-center pb-2">
                                                <text className="lightText text-xs text-center text-center">{phrases.current.prizesdescription2.crowdFavorite.description}</text>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex h-12 m-auto justify-center items-center">
                                        <text className="lightText underline text-sm text-center text-center">{phrases.current.prizesdescription2.fourth.title}</text>
                                    </div>
                                    <div className="flex flex-row w-full h-full justify-center items-center">
                                        <div className="flex flex-col m-auto justify-center items-center">
                                            <div className="flex justify-center items-center pb-2">
                                                <text className="lightText text-xs text-center text-center">{phrases.current.prizesdescription2.fourth.description}</text>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex h-12 m-auto justify-center items-center">
                                        <text className="lightText underline text-sm text-center text-center">{phrases.current.prizesdescription2.fifth.title}</text>
                                    </div>
                                    <div className="flex flex-row w-full h-full justify-center items-center">
                                        <div className="flex flex-col m-auto justify-center items-center">
                                            <div className="flex justify-center items-center pb-2">
                                                <text className="lightText text-xs text-center text-center">{phrases.current.prizesdescription2.fifth.description}</text>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex h-12 m-auto justify-center items-center">
                                        <text className="lightText underline text-sm text-center text-center">{phrases.current.prizesdescription2.sixth.title}</text>
                                    </div>
                                    <div className="flex flex-row w-full h-full justify-center items-center">
                                        <div className="flex flex-col m-auto justify-center items-center">
                                            <div className="flex justify-center items-center pb-2">
                                                <text className="lightText text-xs text-center text-center">{phrases.current.prizesdescription2.sixth.description}</text>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            body = (
                <div className="flex flex-row justify-center items-center mt-0 mb-auto md:my-auto md:w-full h-full md:h-currentHeight">
                    <div className="flex flex-col justify-center w-28 md:w-80 h-full m-auto">
                        <div className="flex w-full h-full justify-center items-center">
                            <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} className="flex w-full h-48 md:h-96 items-center justify-center flex-col m-auto">
                                <div className="flex w-full h-full justify-center items-center">
                                    <img alt="about" src={aboutPic} className="w-full h-full"></img>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center w-28 md:w-80 h-full m-auto">
                        <div className="flex w-full h-full justify-center items-center">
                            <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} className="flex w-full h-48 md:h-96 items-center justify-center flex-col m-auto">
                                <div className="flex w-full h-full justify-center items-center">
                                    <img alt="schedule" src={schedulePic} className="w-full h-full"></img>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center w-28 md:w-80 h-full m-auto">
                        <div className="flex w-full h-full justify-center items-center">
                            <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} className="flex w-full h-48 md:h-96 items-center justify-center flex-col m-auto">
                                <div className="flex w-full h-full justify-center items-center">
                                    <img alt="prizes" src={prizesPic} className="w-full h-full"></img>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            );
        }
        return (
            <div className="flex w-full mx-app flex-col">
                <div className="flex flex-col justify-center h-full">
                    <ScrollAnimation animateIn="fadeInDown" animateOnce={true} className="flex w-full items-center justify-center flex-col">
                        <div className="flex justify-center pb-4">
                            <text className="text-5xl md:text-6xl lg:text-7xl text-text_dark font-primary">{"HackUConn " + phrases.general.year}</text>
                        </div>
                        <div className="flex justify-center">
                            <text className="text-2xl md:text-3xl text-text_dark font-primary">{phrases.general.startDay + " - " + phrases.general.endDay}</text>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInDown" animateOnce={true} className="flex flex-row w-full md:w-aboutTabsWidth h-24 md:h-auto mt-12 mb-0 md:m-auto p-0 md:p-6 justify-center items-center bg-topic_secondary opacity-90 rounded-lg shadow-2xl bg-topic_current_header border-8 border-black">
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
                    <div className="flex flex-row justify-center items-center mt-0 mb-auto md:my-auto md:w-full h-currentBodyMobileHeight">
                        {body}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex w-full h-landingHeight mx-app flex-col">
            <div className="flex flex-col justify-center h-full">
                <ScrollAnimation animateIn="fadeInDown" animateOnce={true} className="flex w-full items-center justify-center flex-col">
                    <div className="flex justify-center pb-4">
                        <text className="text-5xl md:text-6xl lg:text-7xl text-text_dark font-primary">{"HackUConn " + phrases.general.year}</text>
                    </div>
                    <div className="flex justify-center">
                        <text className="text-2xl md:text-3xl text-text_dark font-primary">{phrases.general.startDay + " - " + phrases.general.endDay}</text>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInDown" animateOnce={true} className="flex flex-row w-full md:w-aboutTabsWidth h-24 md:h-auto mt-12 mb-20 md:m-auto p-0 md:p-6 justify-center items-center bg-topic_secondary opacity-90 rounded-lg shadow-2xl bg-topic_current_header border-8 border-black">
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
                <div className="flex flex-row justify-center items-center mt-0 mb-auto md:my-auto md:w-full h-full md:h-currentHeight">
                    <div className="flex flex-col justify-center w-28 md:w-80 h-full m-auto">
                        <div className="flex w-full h-full justify-center items-center">
                            <ReactCardFlip isFlipped={selected === "schedule" || selected === "prizes"} flipDirection="horizontal" containerStyle={returnHeight()}>
                                <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} className="flex w-full h-48 md:h-96 items-center justify-center flex-col m-auto">
                                    <div className="flex w-full h-full justify-center items-center">
                                        <img alt="about" src={aboutPic} className={cardZIndex()}></img>
                                    </div>
                                </ScrollAnimation>
                                {setDescription("about")}
                            </ReactCardFlip>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center w-28 md:w-80 h-full m-auto">
                        <div className="flex w-full h-full justify-center items-center">
                            <ReactCardFlip isFlipped={selected === "about" || selected === "prizes"} flipDirection="horizontal" containerStyle={returnHeight()}>
                                <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} className="flex w-full h-48 md:h-96 items-center justify-center flex-col m-auto">
                                    <div className="flex w-full h-full justify-center items-center">
                                        <img alt="schedule" src={schedulePic} className={cardZIndex()}></img>
                                    </div>
                                </ScrollAnimation>
                                {setDescription("schedule")}
                            </ReactCardFlip>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center w-28 md:w-80 h-full m-auto">
                        <div className="flex w-full h-full justify-center items-center">
                            <ReactCardFlip isFlipped={selected === "about" || selected === "schedule"} flipDirection="horizontal" containerStyle={returnHeight()}>
                                <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} className="flex w-full h-48 md:h-96 items-center justify-center flex-col m-auto">
                                    <div className="flex w-full h-full justify-center items-center">
                                        <img alt="prizes" src={prizesPic} className={cardZIndex()}></img>
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