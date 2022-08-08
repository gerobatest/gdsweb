import React from 'react';
import { Parallax } from 'react-scroll-parallax';
//import {AnimatedOnScroll} from "react-animated-css-onscroll";
import '../style/Innovation.scss';
//import "animate.css/animate.min.css";
import {BsArrowRightCircle} from "react-icons/bs";

export default function Innovation(props) {

  return (
    <div className="innovation" id="innovation">
        <div className="sectionTexte">
            <h1 className="title orange-title">Notre<br/><strong>innovation</strong></h1>
            <h1 className="secondTitle">Maitrise d'oeuvre</h1>

            {/* Logos geroba image à remplacer*/}
            <div className="image-innovation">
                <img src="/favicon.ico" alt="Geroba"></img>
                <img src="/logo-geroba.avif" alt="Geroba"></img>
            </div>

            <p>
                Une solution fullweb, bâtie autour de deux modules, terrain et bureau
                de façon d’avoir une gestion dynamique du patrimoine, suivant une
                approche mutithématique et multiutilisateurs.
            </p>
            <br/>
            <p>
                GEROBA permet aux maître d’ouvrage et entreprise de suivre les
                travaux en temps réels et de gèrer les événements au fil de l’eau;
                La solution permet de gèrer les équipements dans ces différentes
                étapes de vie: l’existant, les études, les stock, les travaux de
                remplacement et la Gestion du patrimoine dans les temps.
            </p>
            <br/>
            <a href="#" className="geroba-link"><BsArrowRightCircle className="arrow-right"/> En savoir plus</a>
        </div>
        

        {/* Image avec effet parallaxe */}
        <div className="sectionImage">
          <Parallax translateX={['-90px', '-400px']}> 
              <img src="/tablette.png" alt="Tablette Geroba"/>
          </Parallax> 
        </div>

    </div>
  )
}
