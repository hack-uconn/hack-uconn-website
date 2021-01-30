//import { phrases } from '../text.json';
import ScrollAnimation from 'react-animate-on-scroll';

export default function Sponsors(props) {
    return (
        <div ref={props.sponsorsRef} className="flex w-full h-landingHeight mx-app flex-col pt-12">
            <div className="flex flex-col justify-center sm:w-full md:w-full lg:w-auto h-full">
                <div className="flex flex-col justify-center sm:w-full md:w-full md:w-auto lg:mx-auto h-full">
                    <ScrollAnimation animateIn="fadeInTop" className="flex justify-center items-center flex-col w-full h-full">
                        <div className="flex justify-center items-center m-auto">
                            <text className="text-6xl md:text-7xl text-center text-text_dark font-primary">Sponsors</text>
                        </div>
                    </ScrollAnimation>
                    <div className="flex flex-col w-full lg:w-auto m-auto">
                        <ScrollAnimation animateIn="slideInDown" className="flex flex-col justify-center mx-auto">
                            <div className="flex justify-center">
                                <text className="text-2xl md:text-3xl text-text_dark text-center font-primary">Lead Sponsors</text>
                            </div>
                        </ScrollAnimation>
                        <div className="flex flex-col justify-center w-full md:w-1/2 lg:w-sponsorTop md:mx-auto py-6 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                            <ScrollAnimation animateIn="slideInDown" className="flex w-full h-24 md:h-32 items-center justify-center flex-col bg-topic_secondary md:rounded-lg shadow-2xl border-8 border-black">
                                <div className="flex justify-center">
                                    <text className="text-xl text-text_light text-center">Lead Sponsor Images Here...</text>
                                </div>
                            </ScrollAnimation>
                        </div>
                        <ScrollAnimation animateIn="slideInLeft" className="flex flex-col justify-center mx-auto">
                            <div className="flex justify-center">
                                <text className="text-2xl md:text-3xl text-text_dark text-center font-primary">Gold Sponsors</text>
                            </div>
                        </ScrollAnimation>
                        <div className="flex flex-col justify-center w-full md:w-3/4 lg:w-sponsorMiddle md:mx-auto py-6 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                            <ScrollAnimation animateIn="slideInLeft" className="flex w-full h-24 md:h-32 items-center justify-center flex-col bg-topic_sponsor_middle md:rounded-lg shadow-2xl border-8 border-black">
                                <div className="flex justify-center">
                                    <text className="text-xl text-text_light text-center">Gold Sponsor Images Here...</text>
                                </div>
                            </ScrollAnimation>
                        </div>
                        <ScrollAnimation animateIn="slideInRight" className="flex flex-col justify-center mx-auto">
                            <div className="flex justify-center">
                                <text className="text-2xl md:text-3xl text-text_dark text-center font-primary">Silver Sponsors</text>
                            </div>
                        </ScrollAnimation>
                        <div className="flex flex-col justify-center w-full md:w-full lg:w-sponsorBottom md:mx-auto py-6 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                            <ScrollAnimation animateIn="slideInRight" className="flex w-full h-24 md:h-32 items-center justify-center flex-col bg-topic_sponsor_dark md:rounded-lg shadow-2xl border-8 border-black">
                                <div className="flex justify-center">
                                    <text className="text-xl text-text_light text-center">Silver Sponsor Images Here...</text>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}