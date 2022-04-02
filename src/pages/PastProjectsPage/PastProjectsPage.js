import Carousel from 'react-bootstrap/Carousel';
import React, {useState, Component} from 'react';
import './PastProjectsPage.css';
import Slider from 'react-slick';
import pic1 from '../../assets/images/AboutPage/temp1.jpg';
import pic2 from '../../assets/images/AboutPage/temp2.jpg';
import pic3 from  '../../assets/images/AboutPage/temp3.jpg';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


function PastProjectsPage() {
    
  const projectCards = [
    {
      imageSrc:
        pic1,
      title: 'HackUConn 2019',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',
      
    },
    {
      imageSrc:
        pic2,
      title: 'HackUConn 2020',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',
     
    },
    {
      imageSrc:
        pic3,
      title: 'HackUConn 2021',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',
      
    },
  
  ]
        const images = [pic1, pic2, pic3];
        const [imgIndex,setImgIndex] = useState(0);
        const settings = {
           
          centerMode:true,
          centerPadding: "30px",
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 3,
            autoplay: true,
            speed: 3500,
            autoplaySpeed: 3500,
            
            cssEase: "linear",
            
            beforeChange: (current, next) => setImgIndex(next), 
            
          };

        return (
            <div className='content'>
      <h3 align="center">Past Projects</h3>
      <Slider {...settings}>
        {projectCards.map((card, index) => (
     
          <div key={index} className='card'>
            <h4 className='card-header'>{card.title}</h4>
            <img src={card.imageSrc} alt={card.title} className='card-image' width="100" height="100"/>
            <p> {card.description}</p>
          </div>
        ))}
      </Slider>
    </div>
        );
    };

export default PastProjectsPage;