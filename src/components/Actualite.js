import React, {useState, useRef} from 'react';
import "../style/Actualite.scss";
import {BsArrowRightCircle} from "react-icons/bs";
import AliceCarousel from 'react-alice-carousel';

export default function Actualite() {

  // Pour montrer et cacher les publications par date
  const [showPost2020, setShowPost2020] = useState(false);
  const [showPost2021, setShowPost2021] = useState(true); //initialement, ce sont les postes de 2021 qui sont montrées
  const [showPress, setShowPress] = useState(false);

  //Pour gérer le menu active
  const [activeLink21, setActiveLink21] = useState(true);
  const [activeLink20, setActiveLink20] = useState(false);
  const [activeLinkPress, setActiveLinkPress] = useState(false);

  const handlePost2021 = () => {
    setShowPost2021(true);
    setShowPost2020(false);
    setShowPress(false);

    setActiveLink21(true);
    setActiveLink20(false);
    setActiveLinkPress(false);
  }

  const handlePost2020 = () => {
    setShowPost2020(true);
    setShowPost2021(false);
    setShowPress(false);

    setActiveLink21(false);
    setActiveLink20(true);
    setActiveLinkPress(false);
  }

  const handlePressPost = () => {
    setShowPress(true);
    setShowPost2020(false);
    setShowPost2021(false);  

    setActiveLink21(false);
    setActiveLink20(false);
    setActiveLinkPress(true);
  }

  //Dimension résponsive pour chaque carousel 
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    993: { items: 2 },
    1281: { items: 3},
    2560: { items: 3}
};


  // Les publications de 2021
  const items2021 = [
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

  // Les publications de 2020
  const items2020 = [
    <div className="singlePublication">
    <img src="\article3.jpg" alt="description"/>
    <p> 
      2020 Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed  
      <a href="/"> <BsArrowRightCircle/> En savoir plus</a>
    </p>
  </div>,

  <div className="singlePublication">
    <img src="\test2.png" alt="description"/>
    <p> 
      2020 Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed  
      <a href=""> <BsArrowRightCircle/> En savoir plus</a>
    </p>
  </div>,

  <div className="singlePublication">
    <img src="\article1.jpg" alt="description"/>
    <p> 
      2020 Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed  
      <a href=""> <BsArrowRightCircle/> En savoir plus</a>
    </p>
  </div>
  ]

  // Les publications presse
  const itemsPress = [
    <div className="singlePublication">
    <img src="\article3.jpg" alt="description"/>
    <p> 
      Press Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed  
      <a href="/"> <BsArrowRightCircle/> En savoir plus</a>
    </p>
  </div>,

  <div className="singlePublication">
    <img src="\test3.png" alt="description"/>
    <p> 
      ¨Press Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed  
      <a href="/"> <BsArrowRightCircle/> En savoir plus</a>
    </p>
  </div>,

  <div className="singlePublication">
    <img src="\article1.jpg" alt="description"/>
    <p> 
      Press Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed  
      <a href="/"> <BsArrowRightCircle/> En savoir plus</a>
    </p>
  </div>
  ]



  return (

    <div className="actualite" id="actualite">
        <div className="title-container">
          <h1 className="title blue-title">Notre <br/><strong>actualité</strong></h1>
        </div>

        <div className="actu-container">
          {/*Les liens*/}
          <div className="nav-actu-container">
            <h1>Dernier poste</h1>

            <ul className="nav-actu">
              <li><button onClick={handlePost2021} className={activeLink21? "nav-actu-link active" : "nav-actu-link"}>2021</button ></li>
              <li><button  onClick={handlePost2020} className={activeLink20? "nav-actu-link active" : "nav-actu-link"}>2020</button ></li>
              <li><button  onClick={handlePressPost} className={activeLinkPress? "nav-actu-link active" : "nav-actu-link"}>Press</button ></li>
            </ul>

          </div>

          {/* Les publications de 2021*/}
          {showPost2021 && 
            <div className="publication" id="post2021">

              <AliceCarousel
                    infinite
                    mouseTracking
                    disableDotsControls 
                    items={items2021}
                    responsive={responsive}
                    controlsStrategy="alternate"
                /> 
          
            </div> 
          }



          {/* Les publications de 2020*/}
          {showPost2020 && 

            <div className="publication" id="post2020">
              <AliceCarousel
                    infinite
                    mouseTracking
                    disableDotsControls 
                    items={items2020}
                    responsive={responsive}
                    controlsStrategy="alternate"
              /> 
            </div>
          }


          {/*Apparition presse*/}
          {showPress &&
            <div className="publication" id="postPress">
           
           <AliceCarousel
                infinite
                mouseTracking
                disableDotsControls 
                items={itemsPress}
                responsive={responsive}
                controlsStrategy="alternate"
            /> 

            </div>
          }

        </div>
    </div>
  )
}
