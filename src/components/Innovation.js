import React from 'react';
import '../style/Innovation.scss';
import {BsArrowRightCircle} from "react-icons/bs";

export default function Innovation() {
  return (
    <div className="innovation">
        <div className="sectionTexte">
            <h1 className="title orange-title">Notre<br/><span>innovation</span></h1>
            <h1 className="secondTitle">Maitrise d'oeuvre</h1>
            {/* Logos geroba */}
            <img src="https://www.gerobamaster.fr/resources/images/icones/logos/geroba.png" alt="Geroba"></img>
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
            <a href="#" className="geroba-link orange"><BsArrowRightCircle className="arrow-right"/> En savoir plus</a>
        </div>
        {/* Image avec effet parallaxe */}
        <div className="sectionImage">
            <img src="" alt="Tablette Geroba"/>
        </div>
    </div>
  )
}
