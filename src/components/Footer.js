import instaLogo from '../assets/instagramLogo.png';
import facebookLogo from '../assets/facebookLogo.png';

export default function Footer() {
    return (
        <footer className="flex items-center justify-center bg-gradient-to-b from-topic_primary to-topic_secondary pt-32 pb-12">
            <div className="flex w-max-full m-auto items-center justify-center flex-col">
                <div className="flex items-center justify-center flex-row">
                    <div className="flex w-20 h-20 m-auto px-4 pb-20 md:transition md:duration-500 md:ease-in-out md:transform md:hover:-translate-y-1 md:hover:scale-110">
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/hackuconn/">
                            <img alt="instaLogo" src={instaLogo} className="w-42 m-auto"></img>
                        </a>
                    </div>
                    <div className="flex w-20 h-20 m-auto px-4 pb-20 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/hackuconn/">
                            <img alt="facebookLogo" src={facebookLogo} className="w-42 m-auto"></img>
                        </a>
                    </div>
                </div>
                <div className="flex items-center justify-center pb-2">
                    <text className="text-2xl text-text_light font-primary">University of Connecticut</text>
                </div>
                <div className="flex items-center justify-center">
                    <text className="text-2xl text-text_light font-primary">Contact us at</text>
                    &nbsp;
                    <a className="text-2xl text-text_light font-primary hover:text-topic_dark transition duration-200 ease-in-out lg:z-50" href = "mailto: hackuconn@gmail.com">hackuconn@gmail.com</a>
                </div>
            </div>
        </footer>
    );
}