import React, {Component} from 'react';
import ReactCardCarousel from "react-card-carousel";
import pic1 from '../../assets/images/AboutPage/temp1.jpg';
import pic2 from '../../assets/images/AboutPage/temp2.jpg';
import pic3 from  '../../assets/images/AboutPage/temp3.jpg';
const images=[pic1,pic2,pic3];
class TestimonialsPage extends Component{

    

    static get CONTAINER_STYLE() {
        return {
          position: "relative",
          height: "100vh",
          width: "100%",
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "middle"
        };
      }
      
      static get CARD_STYLE() {
        return {
          height: "200px",
          width: "400px",
          paddingTop: "80px",
          textAlign: "center",
          background: "#52C0F5",
          color: "#FFF",
          fontFamily: "sans-serif",
          fontSize: "12px",
          textTransform: "uppercase",
          borderRadius: "10px",
          boxSizing: "border-box"
        };
      }

      render() {
        return (
          <div style={TestimonialsPage.CONTAINER_STYLE}>
            <ReactCardCarousel
              autoplay={true}
              alignment="vertical"
              autoplay_speed={2500}
            >
            {images.map((img, idx)=>(
                <div style={TestimonialsPage.CARD_STYLE}>
                <img src={img}/>
                
                </div>
            ))}
            </ReactCardCarousel>
          </div>
        );
      }
    }


export default TestimonialsPage;