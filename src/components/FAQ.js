import { phrases } from '../text.json';
import "./Current.css";
import { useState } from 'react';
import downImage from '../assets/down.png';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import ScrollAnimation from 'react-animate-on-scroll';
import { isMobile } from 'react-device-detect';

export default function FAQ(props) {
    const [currentSelect, setCurrentSelect] = useState(null);

    const returnArrowStyle = (year) => {
        if (currentSelect === null) {
            return "w-2 md:w-4 h-2 md:h-4"
        }
        return `w-2 md:w-4 h-2 md:h-4 ${currentSelect.includes(year) ? " transition duration-500 transform -rotate-180" : " transition duration-500 transform rotate-0"}`;
    }

    const setAnswerHeight = (ans) => {
        if (isMobile) {
            if (ans.length > 275) {
                return (
                    "text-mobileSmallFAQText lightTextFAQAnswer text-center"
                );
            } 
            else {
                return (
                    "text-mobileMediumFAQText lightTextFAQAnswer text-center"
                );
            }
        }
        else {
            if (ans.length > 275) {
                return (
                    "text-sm md:text-base lightTextFAQAnswer text-center"
                );
            } 
            else {
                return (
                    "text-sm md:text-lg lightTextFAQAnswer text-center"
                );
            }
        }
    }

    const questions = phrases.faq.questions.map((obj) => {
        return (
            <ScrollAnimation animateIn="fadeInDown" animateOnce={true} delay={obj.index * 100} className="flex w-full items-center justify-center flex-col">
                <AccordionItem uuid={obj.index} className="flex justify-center flex-col border-b-2 border-topic_dark w-full">
                    <AccordionItemHeading className="flex justify-center w-full">
                        <AccordionItemButton className="flex justify-center items-center flex-row w-full h-16 focus:outline-none">
                            <div className="flex w-1/12 justify-left align-middle my-auto pl-4">
                                <button className="focus:outline-none">
                                    <img className={returnArrowStyle(obj.index)} alt="down" src={downImage}></img>
                                </button>
                            </div>
                            <div className="flex w-10/12 h-6 m-auto justify-center items-center">
                                <text className="text-sm md:text-xl lightText text-center">{obj.question}</text>
                            </div>
                            <div className="flex w-1/12">
                                <text>{null}</text>
                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="bg-topic_secondary border-b-none h-16 md:h-24">
                        <div className="flex justify-center items-center flex-row w-full h-full bg-topic_secondary">
                            <text className={setAnswerHeight(obj.answer)}>{obj.answer}</text>
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
            </ScrollAnimation>
        );
    });

    return (
        <div ref={props.faqRef} className="flex w-full mx-app flex-col">
            <ScrollAnimation animateIn="fadeInTop" animateOnce={true} className="flex justify-center items-center flex-col w-full h-24 m-auto">
                <div className="flex justify-center items-center m-auto">
                    <text className="text-6xl lg:text-7xl text-center text-text_dark font-primary">FAQ</text>
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true} className="flex lg:w-faq w-full mt-0 mx-auto mb-auto items-center justify-center flex-col">
                <div className="flex justify-center flex-col w-full m-auto bg-topic_secondary rounded-lg shadow-2xl border-8 border-black">
                    <div className="flex justify-center flex-col w-full">
                        <Accordion allowZeroExpanded allowMultipleExpanded={false} onChange={(vals) => {setCurrentSelect(vals)}} className="flex justify-center flex-col">
                            {questions}
                        </Accordion>
                    </div>
                </div>
            </ScrollAnimation>
        </div>        
    );
}