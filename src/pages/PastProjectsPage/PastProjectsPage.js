import Carousel from 'react-bootstrap/Carousel';
import React, {useState, Component} from 'react';
import './PastProjectsPage.css';
import Slider from "react-slick";
import pic1 from '../../assets/images/AboutPage/temp1.jpg';
import pic2 from '../../assets/images/AboutPage/temp2.jpg';
import pic3 from  '../../assets/images/AboutPage/temp3.jpg';


function PastProjectsPage() {
    
    
        const images = [pic1, pic2, pic3];
        const [imgIndex,setImgIndex] = useState(0);
        const settings = {
           
          centerMode:true,
          centerPadding: "60px",
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 3,
            autoplay: true,
            speed: 3000,
            autoplaySpeed: 3000,
            cssEase: "linear",
            
            beforeChange: (current, next) => setImgIndex(next), 
            
          };

        return (
            <div className='container'>
      <h3 align="center">Past Projects</h3>
      <Slider {...settings}>
        {images.map((img, idx) => (
     
          <div className={idx === imgIndex ? "slide activeSlide" : "slide"}>
                 
            <img src={img} alt={idx} />
          </div>
        ))}
      </Slider>
    </div>
        );
    };

export default PastProjectsPage;