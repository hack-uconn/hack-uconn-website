import { phrases } from '../text.json';
import "./Current.css";
import ScrollAnimation from 'react-animate-on-scroll';
import { isMobile } from 'react-device-detect';

export default function Sponsors(props) {
    function importAll(r) {
        return r.keys().map(r);
    }

    const highest = importAll(require.context('../assets/sponsors/highest/', false, /\.(png|jpg|jpeg)$/));
    const middle = importAll(require.context('../assets/sponsors/middle/', false, /\.(png|jpg|jpeg)$/));
    const lowest = importAll(require.context('../assets/sponsors/lowest/', false, /\.(png|jpg|jpeg)$/));
    const partners = importAll(require.context('../assets/sponsors/partners/', false, /\.(png|jpg)$/));
    const supporters = importAll(require.context('../assets/sponsors/supporters/', false, /\.(png|jpg|jpeg)$/));

    const highestImages = highest.map((image, index) => {
        let tempName = image.default.split("/")[3];
        let imageName = tempName.split(".")[0];
        return (
            <div className="flex justify-center items-center w-20 lg:w-28 h-20 lg:h-28">
                <a target="_blank" rel="noreferrer" href={phrases.sponsors.links[imageName]}>
                    <img alt={index} src={image.default} className="max-w-full max-h-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"></img>
                </a>
            </div>
        );
    });
    const middleImages = middle.map((image, index) => {
        let tempName = image.default.split("/")[3];
        let imageName = tempName.split(".")[0];
        return (
            <div className="flex justify-center items-center w-20 lg:w-28 h-20 lg:h-28">
                <a target="_blank" rel="noreferrer" href={phrases.sponsors.links[imageName]}>
                    <img alt={index} src={image.default} className="max-w-full max-h-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"></img>
                </a>
            </div>
        );
    });
    const lowestImages = lowest.map((image, index) => {
        let tempName = image.default.split("/")[3];
        let imageName = tempName.split(".")[0];
        console.log(image)
        return (
            <div className="flex justify-center items-center w-16 md:w-20 lg:w-22 h-16 md:h-20 lg:h-22">
                <a target="_blank" rel="noreferrer" href={phrases.sponsors.links[imageName]}>
                    <img alt={index} src={image.default} className="max-w-full max-h-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"></img>
                </a>
            </div>
        );
    });
    const partnersImages = partners.map((image, index) => {
        let tempName = image.default.split("/")[3];
        let imageName = tempName.split(".")[0];
        return (
            <div className="flex justify-center items-center w-20 lg:w-28 h-20 lg:h-28">
                <a target="_blank" rel="noreferrer" href={phrases.sponsors.links[imageName]}>
                    <img alt={index} src={image.default} className="max-w-full max-h-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"></img>
                </a>
            </div>
        );
    });
    const supportersImages = supporters.map((image, index) => {
        let tempName = image.default.split("/")[3];
        let imageName = tempName.split(".")[0];
        return (
            <div className="flex justify-center items-center w-20 lg:w-28 h-20 lg:h-28">
                <a target="_blank" rel="noreferrer" href={phrases.sponsors.links[imageName]}>
                    <img alt={index} src={image.default} className="max-w-full max-h-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"></img>
                </a>
            </div>
        );
    });

    const lowSponsors = () => {
        if (lowest.length > 4) {
            if (isMobile) {
                return (
                    <div className="flex flex-row w-full pt-4 pb-12">
                        <ScrollAnimation animateIn="flipInX" animateOnce={true} className="flex flex-col w-full h-full">
                            <div className="flex flex-col justify-center w-full h-24">
                                <div className="flex justify-center h-full">
                                    <text className="text-base md:text-xl lg:text-2xl text-center darkText font-semibold">{phrases.sponsors.lowestLevelTitle}</text>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center w-full h-48 -mt-12">
                                <div className="flex flex-col w-full h-full items-center justify-center flex-row bg-topic_sponsor_middle shadow-2xl border-8 border-black">
                                    <div className="flex flex-row justify-evenly items-center w-full h-full">
                                        {lowestImages.splice(0,Math.floor(lowestImages.length / 2))}
                                    </div>
                                    <div className="flex flex-row justify-evenly items-center w-full h-full">
                                        {lowestImages.splice(0,lowestImages.length)}
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                );
            }
            return (
                <div className="flex flex-row w-64 h-sponsorHeight">
                    <ScrollAnimation animateIn="flipInX" animateOnce={true} className="flex flex-col w-full h-full">
                        <div className="flex flex-col justify-center pb-6 w-full h-24">
                            <div className="flex justify-center h-full">
                                <text className="text-base md:text-xl lg:text-2xl text-center darkText font-semibold">{phrases.sponsors.lowestLevelTitle}</text>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center w-full h-sponsorHeight">
                            <div className="flex w-full h-full items-center justify-center flex-row bg-topic_sponsor_middle shadow-2xl border-8 border-black">
                                <div className="flex flex-col justify-evenly items-center w-full h-full">
                                    {lowestImages.splice(0,Math.floor(lowestImages.length / 2))}
                                </div>
                                <div className="flex flex-col justify-evenly items-center w-full h-full">
                                    {lowestImages.splice(0,lowestImages.length)}
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            );
        }
        if (isMobile) {
            return (
                <div className="flex flex-row w-full">
                    <ScrollAnimation animateIn="flipInX" animateOnce={true} className="flex flex-col w-full h-full">
                        <div className="flex flex-col justify-center w-full h-24">
                            <div className="flex justify-center h-full">
                                <text className="text-base md:text-xl lg:text-2xl text-center darkText font-semibold">{phrases.sponsors.lowestLevelTitle}</text>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center w-full">
                            <div className="flex w-full h-full items-center justify-center flex-col bg-topic_sponsor_middle shadow-2xl border-8 border-black">
                                <div className="flex flex-row justify-evenly items-center w-full h-full">
                                    {lowestImages}
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            );
        }
        return (
            <div className="flex flex-row w-64 h-sponsorHeight">
                <ScrollAnimation animateIn="flipInX" animateOnce={true} className="flex flex-col w-full h-full">
                    <div className="flex flex-col justify-center pb-6 w-full h-24">
                        <div className="flex justify-center h-full">
                            <text className="text-base md:text-xl lg:text-2xl text-center darkText font-semibold">{phrases.sponsors.lowestLevelTitle}</text>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center w-full h-sponsorHeight">
                        <div className="flex w-full h-full items-center justify-center flex-col bg-topic_sponsor_middle shadow-2xl border-8 border-black">
                            <div className="flex flex-col justify-evenly items-center w-full h-full">
                                {lowestImages}
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        );
    }

    if (isMobile) {
        return (
            <div ref={props.sponsorsRef} className="flex w-full flex-col">
                <div className="flex flex-col justify-center w-full h-full lg:m-auto">
                    <div className="flex flex-col justify-center w-full lg:mx-auto h-full">
                        <ScrollAnimation animateIn="fadeInTop" animateOnce={true} className="flex justify-center items-center flex-col w-full h-32 md:h-full">
                            <div className="flex justify-center items-center m-auto">
                                <text className="text-6xl md:text-7xl text-center text-text_dark font-primary">Sponsors</text>
                            </div>
                        </ScrollAnimation>
                        <div className="flex flex-col w-full m-auto pt-16 justify-center items-center">
                            <div className="flex flex-col w-full pb-12">
                                <ScrollAnimation animateIn="flipInX" animateOnce={true} className="flex flex-col w-full h-full">
                                    <div className="flex flex-col justify-center w-full h-12">
                                        <div className="flex justify-center w-full h-full">
                                            <text className="text-base md:text-xl lg:text-2xl text-center darkText font-semibold">{phrases.sponsors.highestLevelTitle}</text>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-center w-full h-24">
                                        <div className="flex w-full h-full items-center justify-center flex-col bg-topic_secondary md:rounded-l-lg shadow-2xl border-8 border-black">
                                            <div className="flex flex-row justify-evenly items-center w-full h-full">
                                                {highestImages}
                                            </div>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            </div>
                            
                            <div className="flex flex-col w-full pb-12">
                                <ScrollAnimation animateIn="flipInX" animateOnce={true} className="flex flex-col w-full h-full">
                                    <div className="flex flex-col justify-center w-full h-12">
                                        <div className="flex justify-center w-full h-full">
                                            <text className="text-base md:text-xl lg:text-2xl text-center darkText font-semibold">{phrases.sponsors.middleLevelTitle}</text>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-center w-full h-24">
                                        <div className="flex w-full h-full items-center justify-center flex-col bg-topic_sponsor_lighter shadow-2xl border-8 border-black">
                                            <div className="flex flex-row justify-evenly items-center w-full h-full">
                                                {middleImages}
                                            </div>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            </div>
                            
                            {lowSponsors()}

                            <div className="flex flex-row w-full pb-12">
                                <ScrollAnimation animateIn="flipInX" animateOnce={true} className="flex flex-col w-full h-full">
                                    <div className="flex flex-col justify-center w-full h-12">
                                        <div className="flex justify-center w-full h-full">
                                            <text className="text-base md:text-xl lg:text-2xl text-center darkText font-semibold">{phrases.sponsors.partnersTitle}</text>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-center w-full h-24">
                                        <div className="flex w-full h-full items-center justify-center flex-col bg-topic_sponsor_dark shadow-2xl border-8 border-black">
                                            <div className="flex flex-row justify-evenly items-center w-full h-full">
                                                {partnersImages}
                                            </div>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            </div>

                            <div className="flex flex-row w-full">
                                <ScrollAnimation animateIn="flipInX" animateOnce={true} className="flex flex-col w-full h-full">
                                    <div className="flex flex-col justify-center w-full h-12">
                                        <div className="flex justify-center w-full h-full">
                                            <text className="text-base md:text-xl lg:text-2xl text-center darkText font-semibold">{phrases.sponsors.supportersTitle}</text>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-center w-full h-24">
                                        <div className="flex w-full h-full items-center justify-center flex-col bg-topic_sponsor_darker md:rounded-r-lg shadow-2xl border-8 border-black">
                                            <div className="flex flex-row justify-evenly items-center w-full h-full">
                                                {supportersImages}
                                            </div>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div ref={props.sponsorsRef} className="flex w-full flex-col">
            <div className="flex flex-col justify-center w-full h-full lg:m-auto">
                <div className="flex flex-col justify-center w-full lg:mx-auto h-full">
                    <ScrollAnimation animateIn="fadeInTop" animateOnce={true} className="flex justify-center items-center flex-col w-full h-32 md:h-full">
                        <div className="flex justify-center items-center m-auto">
                            <text className="text-6xl md:text-7xl text-center text-text_dark font-primary">Sponsors</text>
                        </div>
                    </ScrollAnimation>
                    <div className="flex flex-row w-full m-auto pt-16 justify-center items-center">
                        <div className="flex flex-row w-64 h-sponsorHeight">
                            <ScrollAnimation animateIn="flipInX" animateOnce={true} className="flex flex-col w-full h-full">
                                <div className="flex flex-col justify-center pb-6 w-full h-24">
                                    <div className="flex justify-center w-full h-full">
                                        <text className="text-base md:text-xl lg:text-2xl text-center darkText font-semibold">{phrases.sponsors.highestLevelTitle}</text>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center w-full h-sponsorHeight">
                                    <div className="flex w-full h-full items-center justify-center flex-col bg-topic_secondary md:rounded-l-lg shadow-2xl border-8 border-black">
                                        <div className="flex flex-col justify-evenly items-center w-full h-full">
                                            {highestImages}
                                        </div>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>
                        
                        <div className="flex flex-row w-64 h-sponsorHeight">
                            <ScrollAnimation animateIn="flipInX" animateOnce={true} className="flex flex-col w-full h-full">
                                <div className="flex flex-col justify-center pb-6 w-full h-24">
                                    <div className="flex justify-center w-full h-full">
                                        <text className="text-base md:text-xl lg:text-2xl text-center darkText font-semibold">{phrases.sponsors.middleLevelTitle}</text>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center w-full h-sponsorHeight">
                                    <div className="flex w-full h-full items-center justify-center flex-col bg-topic_sponsor_lighter shadow-2xl border-8 border-black">
                                        <div className="flex flex-col justify-evenly items-center w-full h-full">
                                            {middleImages}
                                        </div>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>
                        
                        {lowSponsors()}

                        <div className="flex flex-row w-64 h-sponsorHeight">
                            <ScrollAnimation animateIn="flipInX" animateOnce={true} className="flex flex-col w-full h-full">
                                <div className="flex flex-col justify-center pb-6 w-full h-24">
                                    <div className="flex justify-center w-full h-full">
                                        <text className="text-base md:text-xl lg:text-2xl text-center darkText font-semibold">{phrases.sponsors.partnersTitle}</text>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center w-full h-sponsorHeight">
                                    <div className="flex w-full h-full items-center justify-center flex-col bg-topic_sponsor_dark shadow-2xl border-8 border-black">
                                        <div className="flex flex-col justify-evenly items-center w-full h-full">
                                            {partnersImages}
                                        </div>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="flex flex-row w-64 h-sponsorHeight">
                            <ScrollAnimation animateIn="flipInX" animateOnce={true} className="flex flex-col w-full h-full">
                                <div className="flex flex-col justify-center pb-6 w-full h-24">
                                    <div className="flex justify-center w-full h-full">
                                        <text className="text-base md:text-xl lg:text-2xl text-center darkText font-semibold">{phrases.sponsors.supportersTitle}</text>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center w-full h-sponsorHeight">
                                    <div className="flex w-full h-full items-center justify-center flex-col bg-topic_sponsor_darker md:rounded-r-lg shadow-2xl border-8 border-black">
                                        <div className="flex flex-col justify-evenly items-center w-full h-full">
                                            {supportersImages}
                                        </div>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}