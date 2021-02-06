import { phrases } from '../text.json';
import "./Current.css";
import ScrollAnimation from 'react-animate-on-scroll';

export default function Sponsors(props) {
    function importAll(r) {
        return r.keys().map(r);
    }

    const highest = importAll(require.context('../assets/sponsors/highest/', false, /\.(png|jpg)$/));
    const middle = importAll(require.context('../assets/sponsors/middle/', false, /\.(png|jpg)$/));
    const lowest = importAll(require.context('../assets/sponsors/lowest/', false, /\.(png|jpg)$/));

    const highestImages = highest.map((image, index) => {
        return (
            <div className="flex justify-center items-center w-20 h-20">
                <img alt={index} src={image.default} className="max-w-full max-h-full"></img>
            </div>
        );
    });
    const middleImages = middle.map((image, index) => {
        return (
            <div className="flex justify-center items-center w-20 h-20">
                <img alt={index} src={image.default} className="max-w-full max-h-full"></img>
            </div>
        );
    });
    const lowestImages = lowest.map((image, index) => {
        return (
            <div className="flex justify-center items-center w-20 h-20">
                <img alt={index} src={image.default} className="max-w-full max-h-full"></img>
            </div>
        );
    });

    return (
        <div ref={props.sponsorsRef} className="flex w-full h-landingHeight flex-col">
            <div className="flex flex-col justify-center w-full lg:w-sponsorWidth h-full lg:m-auto">
                <div className="flex flex-col justify-center w-full lg:mx-auto h-full">
                    <ScrollAnimation animateIn="fadeInTop" animateOnce={true} className="flex justify-center items-center flex-col w-full h-32 md:h-full">
                        <div className="flex justify-center items-center m-auto">
                            <text className="text-6xl md:text-7xl text-center text-text_dark font-primary">Sponsors</text>
                        </div>
                    </ScrollAnimation>
                    <div className="flex flex-col w-full m-auto">
                        <ScrollAnimation animateIn="slideInDown" animateOnce={true}>
                            <div className="flex flex-col justify-center mx-auto">
                                <div className="flex justify-center mb-4 md:mb-0">
                                    <text className="text-3xl text-center darkText font-semibold">{phrases.sponsors.highestLevelTitle}</text>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center w-full md:mx-auto py-6 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                                <div className="flex w-full h-32 md:h-32 items-center justify-center flex-col bg-topic_secondary md:rounded-lg shadow-2xl border-8 border-black">
                                    <div className="flex justify-evenly items-center w-full h-full">
                                        {highestImages}
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                        
                        <ScrollAnimation animateIn="slideInLeft" animateOnce={true}>
                            <div className="flex flex-col justify-center mx-auto">
                                <div className="flex justify-center mb-4 md:mb-0">
                                    <text className="text-3xl text-center darkText font-semibold">{phrases.sponsors.middleLevelTitle}</text>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center w-full md:mx-auto py-6 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                                <div className="flex w-full h-32 md:h-32 items-center justify-center flex-col bg-topic_sponsor_middle md:rounded-lg shadow-2xl border-8 border-black">
                                    <div className="flex justify-evenly items-center w-full h-full">
                                        {middleImages}
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                        
                        <ScrollAnimation animateIn="slideInRight" animateOnce={true}>
                            <div className="flex flex-col justify-center mx-auto">
                                <div className="flex justify-center mb-4 md:mb-0">
                                    <text className="text-3xl text-center darkText font-semibold">{phrases.sponsors.lowestLevelTitle}</text>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center w-full md:mx-auto py-6 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                                <div className="flex w-full h-32 md:h-32 items-center justify-center flex-col bg-topic_sponsor_dark md:rounded-lg shadow-2xl border-8 border-black">
                                    <div className="flex justify-evenly items-center w-full h-full">
                                        {lowestImages}
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </div>
    );
}