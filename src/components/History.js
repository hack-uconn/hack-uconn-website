import ScrollAnimation from 'react-animate-on-scroll';

export default function History() {
    return (
        <div className="flex w-full h-landingHeight mx-app flex-col pt-12">
            <ScrollAnimation animateIn="fadeInDown" className="flex w-full items-center justify-center flex-col pb-8">
                <div className="flex justify-center pb-4">
                    <text className="text-5xl text-text_dark">HackUConn 2021</text>
                </div>
                <div className="flex justify-center">
                    <text className="text-xl text-text_dark">March 13th - March 14th</text>
                </div>
            </ScrollAnimation>
            <div className="flex w-full items-center justify-center flex-row">
                <ScrollAnimation animateIn="fadeInLeft" className="flex justify-center items-center flex-col w-96 m-auto">
                    <div className="flex justify-center items-center w-full">
                        <div className="flex justify-center items-center m-auto">
                            <text className="text-4xl text-text_dark text-center">Schedule</text>
                        </div>
                    </div>
                    <div className="flex flex-col w-full h-96 m-auto items-center justify-center bg-topic_secondary rounded-lg shadow-2xl py-20 px-20 my-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                        <div className="flex justify-center items-center w-full">
                            <text className="text-xl text-text_dark">Schedule Here</text>
                        </div>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInRight" className="flex justify-center items-center flex-col w-96 m-auto">
                    <div className="flex justify-center items-center w-full">
                        <text className="text-4xl text-text_dark">2021 Title</text>
                    </div>
                    <div className="flex justify-center items-center w-full py-12">
                        <text className="text-xl text-text_dark">2021 Descrition...</text>
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    );
}