import { phrases } from '../text.json';
import './Current.css';
import instaLogo from '../assets/footer/instagramLogo.png';
import facebookLogo from '../assets/footer/facebookLogo.png';

export default function Footer() {
    return (
        <footer className="flex items-center justify-center bg-gradient-to-b from-topic_primary to-topic_secondary pt-48 pb-12">
            <div className="flex w-max-full m-auto items-center justify-center flex-col">
                <div className="flex items-center justify-center flex-row">
                    <div className="flex w-20 h-20 m-auto px-4 pb-20 md:transition md:duration-500 md:ease-in-out md:transform md:hover:-translate-y-1 md:hover:scale-110">
                        <a target="_blank" rel="noreferrer" href={phrases.footer.instagramLink}>
                            <img alt="instaLogo" src={instaLogo} className="w-42 m-auto"></img>
                        </a>
                    </div>
                </div>
                <div className="flex items-center justify-center pb-2">
                    <text className="text-xl md:text-2xl lightText">University of Connecticut</text>
                </div>
                <div className="flex items-center justify-center">
                    <text className="text-xl md:text-2xl lightText">Contact us at</text>
                    &nbsp;
                    <a className="text-xl md:text-2xl lightTextFooter transition duration-200 ease-in-out lg:z-50" href={"mailto: " + phrases.general.email}>{phrases.general.email}</a>
                </div>
            </div>
        </footer>
    );
}