import React, {useState, useRef} from 'react';
import "../style/Actualite.scss";
import {BsArrowRightCircle} from "react-icons/bs";

import Slider from "react-slick";
import AliceCarousel from 'react-alice-carousel';

export default function Actualite() {

  const [showPost2020, setShowPost2020] = useState(false);
  const [showPost2021, setShowPost2021] = useState(true); //initialement, ce sont les postes de 2021 qui sont montrées
  const [showPress, setShowPress] = useState(false);

  const handlePost2021 = () => {
    setShowPost2021(true);
    setShowPost2020(false);
    setShowPress(false);
  }

  const handlePost2020 = () => {
    setShowPost2020(true);
    setShowPost2021(false);
    setShowPress(false);
  }

  const handlePressPost = () => {
    setShowPress(true);
    setShowPost2020(false);
    setShowPost2021(false);  
  }

  //Dimension résponsive pour chaque carousel 
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    993: { items: 3 },
    1281: { items: 5},
    2560: { items: 6}
};


  const items = [
    <div className="singlePublication">
      <img src="\article2.jpg" alt="description"/>
      <p> 
        2021 Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed  
        <a href="/"> <BsArrowRightCircle/> En savoir plus </a>
      </p>
    </div>,
    <div className="singlePublication">
      <img src="\test1.png" alt="description"/>
      <p> 
        2021 Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed  
        <a href=""> <BsArrowRightCircle/> En savoir plus</a>
      </p>
    </div>,
    <div className="singlePublication">
      <img src="\article1.jpg" alt="description"/>
      <p> 
        2021 Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed  
        <a href=""> <BsArrowRightCircle/> En savoir plus</a>
      </p>
    </div>
  ]



  return (

    <div className="actualite" id="actualite">
        <div className="title-container">
          <h1 className="title blue-title">Notre <br/><span>actualité</span></h1>
        </div>

        <div className="actu-container">
          {/*Les liens*/}
          <div className="nav-actu-container">
            <h1>Dernier poste</h1>
            <ul className="nav-actu">
              <li><button onClick={handlePost2021} className="nav-actu-link active">2021</button ></li>
              <li><button  onClick={handlePost2020} className="nav-actu-link">2020</button ></li>
              <li><button  onClick={handlePressPost} className="nav-actu-link">Press</button ></li>
            </ul>
          </div>

          {/* Les publications de 2021*/}
          {showPost2021 && 
            <div className="publication" id="post2021">

              <AliceCarousel
                    infinite
                    mouseTracking
                    disableDotsControls 
                    items={items}
                    responsive={responsive}
                    controlsStrategy="alternate"
                /> 
          
            </div> 
          }



          {/* Les publications de 2020*/}
          {showPost2020 && 
            <div className="publication" id="post2020">
              {/* Un article de presse */}
              <div className="singlePublication">
                <img src="\article3.jpg" alt="description"/>
                <p> 
                  2020 Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed  
                  <a href="/"> <BsArrowRightCircle/> En savoir plus</a>
                </p>
              </div>

              {/* Un article de presse*/}
              <div className="singlePublication">
                <img src="\test2.png" alt="description"/>
                <p> 
                  2020 Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed  
                  <a href=""> <BsArrowRightCircle/> En savoir plus</a>
                </p>
              </div>

              {/* Un article de presse*/}
              <div className="singlePublication">
                <img src="\article1.jpg" alt="description"/>
                <p> 
                  2020 Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed  
                  <a href=""> <BsArrowRightCircle/> En savoir plus</a>
                </p>
              </div>
            </div>
          }


          {/*Apparition presse*/}
          {showPress &&
            <div className="publication" id="postPress">
              {/* Un article de presse */}
              <div className="singlePublication">
                <img src="\article3.jpg" alt="description"/>
                <p> 
                  Press Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed  
                  <a href="/"> <BsArrowRightCircle/> En savoir plus</a>
                </p>
              </div>

              {/* Un article de presse*/}
              <div className="singlePublication">
                <img src="\test3.png" alt="description"/>
                <p> 
                  ¨Press Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed  
                  <a href=""> <BsArrowRightCircle/> En savoir plus</a>
                </p>
              </div>

              {/* Un article de presse*/}
              <div className="singlePublication">
                <img src="\article1.jpg" alt="description"/>
                <p> 
                  Press Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed  
                  <a href=""> <BsArrowRightCircle/> En savoir plus</a>
                </p>
              </div>
            </div>
          }

        </div>
    </div>
  )
}
