import React, {Component} from 'react';
import ReactCardCarousel from "react-card-carousel";
import pic1 from '../../assets/images/TestimonialsPage/Aditya.jpg';
import pic2 from '../../assets/images/TestimonialsPage/Brandon.jpg';


import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card,Avatar, CardContent } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import './TestimonialsPage.css';
import { Typography } from '@mui/material';



const PreviousBtn = (props) => {
  
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};



const testimonials = [
    {
      imageSrc:
        pic1,
      title: 'Aditya Dube',
      year:"HackUConn 2021 Winner",
      description: 'HackUConn is a great event where students from all backgrounds can put their creativity and innovative thinking to the test. For me, HackUConn gave me the chance to learn new skills and take on new experiences that helped me in my college and professional journey. Plus, the free food and swag is cool!',
      
      
    },
    {
      imageSrc:
        pic2,
      title: 'Brandon Mino',
      year:"HackUConn 2020",
      description: 'Lorem ipsum dolor sit amet, consectur dolori',
      
     
    },
   
  
  ]

  const TestimonialCard = ({ img, testimonial, year, name }) => {
    return (
      <div className='testimonial-card'
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          color: "blue",
          border:"1px solid white",
          backgroundColor:"white",
          paddingBottom:"50px",
          margin:"20px",
          
        }}
      >
        <Avatar
          imgProps={{ style: { borderRadius: "50%" } }}
          src={img}
          style={{
            width: 120,
            height: 120,
            
            padding: 10,
            marginBottom: 20,
          }}
        />
        
        <p style={{fontFamily: "monospace", fontWeight: "100"}}>
        “{testimonial}”
        </p>
        
        
        <p style={{ fontStyle: "italic", marginTop: 10 }}>
          <span style={{ fontWeight: 500, color: "black" }}>{name}</span> 
        </p>
        <p>{year}</p>
      </div>
    );
  };
  
class TestimonialsPage extends Component{

      render() {
        return (
          <div style={{ backgroundColor:"#815AE0"}}>
          <h1 className="aboutHeader" style={{color:"white", fontFamily:"Avenir Next Condensed", backgroundColor:"#815AE0", textAlign:"center"}}>Testimonials</h1>
          <div
          className="testimonial"
          style={{ backgroundColor:"#815AE0", fontFamily:"Avenir Next Condensed",  display: "flex", justifyContent: "center", marginTop: 50 }}
          >
          <div style={{ width: "50%", textAlign: "center" }}>
            
            <Slider
                prevArrow={<PreviousBtn />} nextArrow={<NextBtn />}  autoplay pauseOnHover="false"
                >
                {testimonials.map((t, idx)=>(
                  <TestimonialCard img={t.imageSrc} testimonial={t.description} year={t.year} name={t.title}/>
                  
              ))}
                
                </Slider>
          </div>
        </div>  
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="white" fill-opacity="1" d="M0,128L60,144C120,160,240,192,360,186.7C480,181,600,139,720,117.3C840,96,960,96,1080,101.3C1200,107,1320,117,1380,122.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
    </svg>
          </div>
         




         
        );
      }
    }


export default TestimonialsPage;