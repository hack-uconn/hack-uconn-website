import Carousel from 'react-bootstrap/Carousel';
import React, {useState, Component} from 'react';
import './PastProjectsPage.css';
import Slider from 'react-slick';
import pic1 from '../../assets/images/AboutPage/temp1.jpg';
import pic2 from '../../assets/images/AboutPage/temp2.jpg';
import pic3 from  '../../assets/images/AboutPage/temp3.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from 'react-bootstrap/Button';


function PastProjectsPage() {
    
  const projectCards = [
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
        
        const settings = {
           
            
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            speed: 5000,
            autoplaySpeed: 5000,
            
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                },
              },
              {
                breakpoint: 800,
                settings: {
                  slidesToShow: 1,
                },
              },
            ],
            cssEase: "linear",
            
            pauseOnHover:false,
            
            
            
          };

        return (
          <div>
          <h1 className="aboutHeader">Past Projects</h1>
            <div className='content'>
              
      <Slider {...settings}>
        {projectCards.map((card, index) => (
     
          <div key={index} className='card'>
            <h4 className='card card-header'>{card.title}</h4>
            <img src={card.imageSrc} alt={card.title} className='card card-image' width="100" height="100"/>
            <p className='card-description'> {card.description}  </p>
            <Button className='card-button' href={card.link}> Project Link</Button>
          </div>
        ))}
      </Slider>
    </div>
    </div>
        );
    };

export default PastProjectsPage;