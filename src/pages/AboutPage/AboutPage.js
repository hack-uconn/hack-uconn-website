import React from "react";
import temp1 from "J:\\Downloads\\Code\\hack-uconn-website\\src\\assets\\images\\AboutPage\\temp1.jpg";
import temp2 from "J:\\Downloads\\Code\\hack-uconn-website\\src\\assets\\images\\AboutPage\\temp2.jpg";
import temp3 from "J:\\Downloads\\Code\\hack-uconn-website\\src\\assets\\images\\AboutPage\\temp3.jpg";

class AboutPage extends React.Component {
    render() {
        return(
            <div>
                <h1>WHAT MAKES US UNIQUE</h1>
                <div><img src = {temp1}></img><p>Caption 1: We're diverse</p></div>
                <div><img src = {temp2}></img><p>Caption 2: We build stuff</p></div>
                <div><img src = {temp3}></img><p>Caption 3: We have prizes: cash prize</p></div>
            </div>
        ) 
    }
}
export default AboutPage;