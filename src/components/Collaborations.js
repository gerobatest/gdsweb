import React from 'react'
import ArrayCollaborations from "./data/DataCollaborations";
import Slider from "react-slick";
import '../style/Collaborations.scss'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Collaborations() {

   //Slider clients
   const settings = {
    autoplay: true,
    infinite: true,
    arrows: false,
    pauseOnHover: true,
    dots: true,
    speed: 700,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 5,
    responsive: [
      {
        breakpoint: 1281,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  };

  return (
    <div className="collaboration">
        <hr/>
        {/* Titre */}
        <h1 className="title blue-title">Ils nous ont<br/><strong>fait confiance</strong></h1>

        <Slider {...settings}>
              {ArrayCollaborations.map((item, index) => (
              <div key="item" className="card"> 
                
                <img className="clientLogo" style={{top: item.style}} id={index} src={item.imgPath} alt={item.title} title={item.title}/>
              </div>
              ))}
        </Slider>     
    </div>
  )
}
