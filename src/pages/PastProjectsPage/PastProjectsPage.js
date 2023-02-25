//import Carousel from 'react-bootstrap/Carousel';
import React, {useState, Component} from 'react';
import './PastProjectsPage.css';
import Slider from 'react-slick';
import pic1 from '../../assets/images/AboutPage/temp1.jpg';
import pic2 from '../../assets/images/AboutPage/temp2.jpg';
import pic3 from  '../../assets/images/AboutPage/temp3.jpg';

import winner22_1 from '../../assets/images/PastProjectsPage/reallifesit_winners.png';
import winner22_2 from '../../assets/images/PastProjectsPage/surround_winners.png';
import winner22_3 from '../../assets/images/PastProjectsPage/thrive_winners.png';
import winner21_1 from '../../assets/images/PastProjectsPage/ecocrib_winners.png';
import winner21_2 from '../../assets/images/PastProjectsPage/thermo_winners.png';
import winner21_3 from '../../assets/images/PastProjectsPage/huskypow_winners.png';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from 'react-bootstrap/Button';
function PastProjectsPage() {
    
  const projectCards = [
    {
      //2022 Winners
      imageSrc:
      winner22_1,
      title: 'Real Life Situations Without Real Life Consequences',
      description: 'Ibrahima Capo-Chichi, Adira Behmlander, Michael Galan, Justin Leung, Ian Givens', 
      link: 'https://docs.google.com/presentation/d/15ziuqrBn33-OUFJ2JVx7CLmu4AOTdZs9Va_0LQ6xXoY/edit?usp=sharing'
      
    },
    {
      imageSrc:
        winner22_2,
      title: 'Sense of Belonging',
      description: 'Rashmi Pai, Peter Alonzo, Ross Relator, and Bryan Lojano',
      link: 'https://docs.google.com/presentation/d/1CbXjH7Xz4BZK5THNlHe1GmHyWtKh_U6nnK8m2aSPw4c/edit?usp=sharing'
    },
    {
      imageSrc:
        winner22_3,
      title: 'Thrive',
      description: 'Aditya Dubey, Amisha Paul, and Mansi Dhond',
      link: 'https://thrive-wellness-app.netlify.app/'
    },

    //2021 Winners
    {
      imageSrc:
        winner21_1,
      title: 'EcoCrib',
      description: 'Rohan Parikh, Aditya Dubey, Akash Binoj, Sushant Raj, and Sunny Sarker',
      link: 'https://ecocrib.netlify.app/'
    },
    {
      imageSrc:
        winner21_2,
      title: 'Thermoelectric Floor',
      description: 'Kiera Burns and Megan Walsh',
      link: 'https://docs.google.com/presentation/d/1Uh6N9RQ-1fnNWmLa34_8HrpQ3_Xfdxqjz--C8jEK52o/edit?usp=sharing'
    },
    {
      imageSrc:
        winner21_3,
      title: 'Husky Power',
      description: 'Adelle Biondi, Ben Gladstone, Charlotte Chen, and Sebastian De Los Santos',
      link: 'https://docs.google.com/presentation/d/1zD35h0_IuYZo08mlhdEabHGTnFNEGWKwHynKCRWGIuA/edit?usp=sharing'
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#815AE0" fill-opacity="1" d="M0,128L60,144C120,160,240,192,360,186.7C480,181,600,139,720,117.3C840,96,960,96,1080,101.3C1200,107,1320,117,1380,122.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                </svg>
    </div>
        );
    };


export default PastProjectsPage;