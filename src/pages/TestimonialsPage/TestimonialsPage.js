import React, {Component} from 'react';
import ReactCardCarousel from "react-card-carousel";
import pic1 from '../../assets/images/AboutPage/temp1.jpg';
import pic2 from '../../assets/images/AboutPage/temp2.jpg';
import pic3 from  '../../assets/images/AboutPage/temp3.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TestimonialsPage.css';
const images=[pic1,pic2,pic3];

const testimonials = [
    {
      imageSrc:
        pic1,
      title: 'HackUConn 2019',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',
      link: 'https://google.com'
      
    },
    {
      imageSrc:
        pic2,
      title: 'HackUConn 2020',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',
      link:'https://facebook.com'
     
    },
    {
      imageSrc:
        pic3,
      title: 'HackUConn 2021',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',
      link:'https://twitter.com'
      
    },
  
  ]

class TestimonialsPage extends Component{

    

    static get CONTAINER_STYLE() {
        return {
          position: "relative",
          height: "100vh",
          width: "100%",
          
          flex: 1,
          justifyContent: "center",
          alignItems: "left"
        };
      }
      
      static get CARD_STYLE() {
        return {
          height: "200px",
          width: "400px",
          
          textAlign: "center",
          background: "#52C0F5",
          color: "#FFF",
          textTransform: "uppercase",
          borderRadius: "10px",
          boxSizing: "border-box"
        };
      }

      render() {
        return (
            
          <div style={TestimonialsPage.CONTAINER_STYLE}>
          <h1 style={{fontFamily: "Avenir Next Condensed",
          color: "white",
          fontSize: "3.5rem",textAlign:"center", lineHeight:"200px",verticalAlign:"middle"}}> Testimonials </h1>
            <ReactCardCarousel
              autoplay={true}
              alignment="vertical"
              autoplay_speed={2500}
            >
            
            {testimonials.map((t, idx)=>(
                <div>
                <img  style={TestimonialsPage.CARD_STYLE} src={t.imageSrc}/>
                <p>{t.description}</p>
                </div>
                
            ))}
            
            </ReactCardCarousel>
          </div>
        );
      }
    }


export default TestimonialsPage;