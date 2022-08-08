import React, {useState, useRef} from 'react';
import '../style/Expertise.scss';
import GalleryPictures from "./data/GalleryPictures";
import {BsArrowRightCircle} from "react-icons/bs";
import {BiLink} from "react-icons/bi";
import {FaAngleDoubleUp} from "react-icons/fa";



export default function Expertise() {

    //states pouchaque menu
    const [showRoute, setShowRoute] = useState(false); //Route et équipements de la route
    const [showSignaletique, setShowSignaletique] = useState(false); //signalétique
    const [showDesign, setShowDesign] = useState(false); //Design
    const [showDeplacement, setShowDeplacement] = useState(false); //Deplacement
    const [showIngenierie, setShowIngenierie] = useState(false); //Ingenierie
    const [showProduction, setShowProduction] = useState(false); //Production
    const [showAide, setShowAide] = useState(false); //Aide

    //Reference pour chaque section, là où le window scroll
    const routeContent = useRef();
    const signaletiqueContent = useRef();
    const designContent = useRef();
    const deplacementContent = useRef();
    const ingenierieContent = useRef();
    const productionContent = useRef();
    const aideContent = useRef();
    const expertiseSection = useRef();

    //Route et équipements de la route
    //Montre les sections
    const showRouteInfo= () => {
      setShowRoute(true);
      setShowSignaletique(false);
      setShowDesign(false);
      setShowDeplacement(false);
      setShowIngenierie(false);
      setShowProduction(false);
      setShowAide(false);
      
      /*window.scrollTo({
        behavior: "smooth",
        top: routeContent.current.offsetTop
      });*/

      routeContent.current.scrollIntoView({ behavior: 'smooth', block: 'start' }); //marche avec deux clicks
    }

    //Cache la section Route
    const hideDivSection = () => {
      setShowRoute(false);

      window.scrollTo({
        behavior: "smooth",
        top: expertiseSection.current.offsetTop
      });
    }

    //Signalétique
    const showSignaletiqueInfo = () => { //Signalétique
      setShowSignaletique(true);
      setShowDesign(false);
      setShowDeplacement(false);
      setShowIngenierie(false);
      setShowProduction(false);
      setShowRoute(false);
      setShowAide(false);

      signaletiqueContent.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    
    const hideSignaletiqueDetails = () => {
      setShowSignaletique(false);

      window.scrollTo({
        behavior: "smooth",
        top: expertiseSection.current.offsetTop
      });
    }

    //Design
    const showDesignInfo = () => { //Signalétique
      setShowDesign(true);
      setShowSignaletique(false);
      setShowDeplacement(false);
      setShowIngenierie(false);
      setShowProduction(false);
      setShowRoute(false);
      setShowAide(false);

      designContent.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    
    const hideDesignDetails = () => {
      setShowDesign(false);

      window.scrollTo({
        behavior: "smooth",
        top: expertiseSection.current.offsetTop
      });
    }

    //Deplacement
    const showDeplacementInfo = () => { //Signalétique
      setShowDeplacement(true);
      setShowSignaletique(false);
      setShowDesign(false);
      setShowIngenierie(false);
      setShowProduction(false);
      setShowRoute(false);
      setShowAide(false);

      deplacementContent.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    
    const hideDeplacementDetails = () => {
      setShowDeplacement(false);

      window.scrollTo({
        behavior: "smooth",
        top: expertiseSection.current.offsetTop
      });
    }

    //Ingenierie
    const showIngenierieInfo = () => { //Signalétique
      setShowIngenierie(true);
      setShowProduction(false);
      setShowSignaletique(false);
      setShowDesign(false);
      setShowDeplacement(false);
      setShowRoute(false);
      setShowAide(false);

      ingenierieContent.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    
    const hideIngenierieDetails = () => {
      setShowIngenierie(false);

      window.scrollTo({
        behavior: "smooth",
        top: expertiseSection.current.offsetTop
      });
    }

    //Production
    const showProductionInfo = () => { //Signalétique
      setShowProduction(true);
      setShowSignaletique(false);
      setShowDesign(false);
      setShowDeplacement(false);
      setShowIngenierie(false);
      setShowRoute(false);
      setShowAide(false);

      productionContent.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    
    const hideProductionDetails = () => {
      setShowProduction(false);

      window.scrollTo({
        behavior: "smooth",
        top: expertiseSection.current.offsetTop
      });
    }

    //Aide
    const showAideInfo = () => { //Signalétique
      setShowAide(true);
      setShowSignaletique(false);
      setShowDesign(false);
      setShowDeplacement(false);
      setShowIngenierie(false);
      setShowProduction(false);
      setShowRoute(false);

      aideContent.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    
    const hideAideDetails = () => {
      setShowAide(false);

      window.scrollTo({
        behavior: "smooth",
        top: expertiseSection.current.offsetTop
      });
    }
  
  return (
    <div className="expertise" id="expertise" ref={expertiseSection}>

        {/* Ligne de séparation bleue */}
        <hr className="separator"/>

        <div className="top-section">
          <h1 className="title blue-title">Notre<br/>
            <strong>expertise</strong>
          </h1>
        
          <div>
              <p>
                  L’activité d’études de Groupe GDS est organisée en huit domaines afin de répondre aux problématiques complexes des espaces
                  de déplacement. Cette organisation permet à Groupe GDS d’affecter aux projets, des équipes opérationnelles à la fois spécialisées
                  et pluridisciplinaires.
              </p>
              <p>Groupe GDS est ainsi un partenaire pour :</p>
              <ul>
                  <li>
                  l’amélioration de la sécurité et le confort des déplacements,
                  </li>
                  <li>
                  la maîtrise intelligente de la mobilité pour une meilleure qualité de vie. 
                  </li>
              </ul>
          </div>
        </div>

        <ul className="nav-expertise">
          <li><button onClick={showRouteInfo}> Route et équipements de la route</button></li>
          <li><button onClick={showSignaletiqueInfo}>Signalétique</button></li>
          <li><button onClick={showDesignInfo}>Design et graphisme</button></li>
          <li><button onClick={showDeplacementInfo}>Déplacements et Aménagements</button></li>
          <li><button onClick={showIngenierieInfo}>Ingénierie du trafic</button></li>
          <li><button onClick={showProductionInfo}>Production et expertise de données territoriales</button></li>
          <li><button onClick={showAideInfo}>Aide à la gestion des Collectivités</button></li>
        </ul>

        <hr/>

        {/* La gallerie menue  */}
        <div className="nav-gallery">

          <div className="single-gallery">
                <img src="/gallery1.jpg" alt=""></img>
                <h3>Route et équipements de la route</h3>
                <button onClick={showRouteInfo} className="btn-gallery"><BsArrowRightCircle/> En savoir plus</button>
          </div>

          <div className="single-gallery">
                <img src="/gallery2.jpg" alt=""></img>
                <h3>Signalétique</h3>
                <button onClick={showSignaletiqueInfo} className="btn-gallery"><BsArrowRightCircle/> En savoir plus</button>
          </div>

          <div className="single-gallery">
                <img src="/gallery3.jpg" alt=""></img>
                <h3>Design et graphisme</h3>
                <button onClick={showDesignInfo} className="btn-gallery"><BsArrowRightCircle/> En savoir plus</button>
          </div>

          <div className="single-gallery">
                <img src="/gallery4.jpg" alt=""></img>
                <h3>Déplacements et Aménagements</h3>
                <button onClick={showDeplacementInfo} className="btn-gallery"><BsArrowRightCircle/> En savoir plus</button>
          </div>

          <div className="single-gallery">
                <img src="/gallery5.jpg" alt=""></img>
                <h3>Ingénierie du trafic</h3>
                <button onClick={showIngenierieInfo} className="btn-gallery"><BsArrowRightCircle/> En savoir plus</button>
          </div>

          <div className="single-gallery">
                <img src="/gallery6.jpg" alt=""></img>
                <h3>Production et expertise de données territoriales</h3>
                <button onClick={showProductionInfo} className="btn-gallery"><BsArrowRightCircle/> En savoir plus</button>
          </div>

          <div className="single-gallery">
                <img src="/gallery7.jpg" alt=""></img>
                <h3>Aide à la gestion des Collectivités</h3>
                <button onClick={showAideInfo} className="btn-gallery"><BsArrowRightCircle/> En savoir plus</button>
          </div>

          <div className="single-gallery">
                <img src="/gallery8.jpg" alt=""></img>
                <h3> </h3>
                {/* <button onClick={showDivSection} className="btn-gallery"><BsArrowRightCircle/> En savoir plus</button> */}
          </div>

          {/* {GalleryPictures.map((item, index) => (
            <div className="single-gallery" key={index}>
              <img src={item.imgPath} alt=""></img>
              <h3>{item.titre}</h3>
              <button onClick={showDivSection} className="btn-gallery"><BsArrowRightCircle/> En savoir plus</button>
            </div>
          ))} */}

        </div>

        {/* Route et équipements de la route */}
        {showRoute &&
          <div className="gallery-content" ref={routeContent}>
            <div className="sectionText">
              <div className="text-content">
                <h1>Route et équipements de la route</h1>
                <p>Notre savoir-faire intègre la signalisation au sens large, les dispositifs de mise en sécurité d’un itinéraire ou de
                  points particuliers liés à son utilisation (points d’arrêts ou abris bus, chantier, etc.), mais aussi les dispositifs
                  d’exploitation du réseau.</p>

                <br/>

                <p>Cela concerne les sous-domaines suivants :</p>
                <ul>
                  <li>Signalisation de jalonnement (diagnostic, schéma directeur, projet de définition, …).</li>
                  <li>Signalisation de police (diagnostic, plan de signalisation, rédaction des arrêtés, …).</li>
                  <li>Signalisation horizontale (diagnostic, plan de marquage, récolement, …).</li> 
                  <li>Autres équipements de la route : signalisation lumineuse tricolore (SLT), dispositifs de retenue (DR).</li>
                </ul>

                <br/>

                <p>Nos interventions portent sur tous types de projets :</p>
                <ul>
                  <li>Gestion au quotidien du domaine public et de ses équipements.</li>
                  <li>Expertise et définition de l’amélioration de la situation existante.</li>
                  <li>Étude sur des opérations de travaux neufs.</li> 
                </ul>

                <br/>

                <p>
                  Nous garantissons à la fois notre capacité à réaliser les études attendues ainsi que l’utilisation de logiciels
                  métiers dédiés pour assurer la cohérence du traitement.
                </p>

                <br/>

                <p>Il peut s’agir également d’études de sécurité routière.</p>
                <ul>
                  <li>
                    Nous réalisons une étude détaillée de la zone à sécuriser (observations, comptages, relevés, analyse de
                    l’accidentologie, interviews).
                  </li>
                  <li>
                    Après validation du diagnostic par le maître d’ouvrage, nous proposons des scénarios de mise en sécurité,
                    accompagnés d’une estimation sommaire du coût des travaux.
                  </li>
                  <li>
                    Enfin, nous développons le projet de la solution retenue par le maître d’ouvrage.
                  </li>
                </ul>

                <br/>

                <p>
                  Dans tous les cas, la concertation avec les utilisateurs et, éventuellement, les différents gestionnaires de voirie,
                  est obligatoire pour la bonne compréhension du projet.
                </p>
              </div>

              <br/>

              <button className="btn-reference"><BiLink/> Voir nos références</button>

              <button  className="btn-up" onClick={hideDivSection}><FaAngleDoubleUp className="arrowUp"/></button>

            </div>

            {/* Image descriptif */}
            <img src="/test.jpg" alt=""/>

          </div>
        }


        {/* Signalétique*/}
        {showSignaletique &&
          <div className="gallery-content" ref={signaletiqueContent}>
            <div className="sectionText">
              <div className="text-content">
                <h1>Signalétique</h1>
                <p>Notre savoir-faire intègre la signalisation au sens large, les dispositifs de mise en sécurité d’un itinéraire ou de
                  points particuliers liés à son utilisation (points d’arrêts ou abris bus, chantier, etc.), mais aussi les dispositifs
                  d’exploitation du réseau.</p>

                <br/>
                
                <p>
                  Nous garantissons à la fois notre capacité à réaliser les études attendues ainsi que l’utilisation de logiciels
                  métiers dédiés pour assurer la cohérence du traitement.
                </p>

                <br/>

                <p>
                  Dans tous les cas, la concertation avec les utilisateurs et, éventuellement, les différents gestionnaires de voirie,
                  est obligatoire pour la bonne compréhension du projet.
                </p>
              </div>

              <br/>

              <button className="btn-reference"><BiLink/> Voir nos références</button>

              {/* Remonte la section */}
              <button  className="btn-up" onClick={hideSignaletiqueDetails}><FaAngleDoubleUp className="arrowUp"/></button>
            </div>

            {/* Image descriptif */}
            <img src="/test.jpg" alt=""/>

          </div>
        }


        {/* Design*/}
        {showDesign &&
          <div className="gallery-content" ref={designContent}>
            <div className="sectionText">
              <div className="text-content">
                <h1>Design et graphisme</h1>
                <p>Notre savoir-faire intègre la signalisation au sens large, les dispositifs de mise en sécurité d’un itinéraire ou de
                  points particuliers liés à son utilisation (points d’arrêts ou abris bus, chantier, etc.), mais aussi les dispositifs
                  d’exploitation du réseau.</p>

                <br/>
                
                <p>
                  Nous garantissons à la fois notre capacité à réaliser les études attendues ainsi que l’utilisation de logiciels
                  métiers dédiés pour assurer la cohérence du traitement.
                </p>

                <br/>

                <p>
                  Dans tous les cas, la concertation avec les utilisateurs et, éventuellement, les différents gestionnaires de voirie,
                  est obligatoire pour la bonne compréhension du projet.
                </p>
              </div>

              <br/>

              <button className="btn-reference"><BiLink/> Voir nos références</button>

              {/* Remonte la section */}
              <button  className="btn-up" onClick={hideDesignDetails}><FaAngleDoubleUp className="arrowUp"/></button>

            </div>

            {/* Image descriptif */}
            <img src="/test.jpg" alt=""/>

          </div>
        }

        {/*Deplacement*/}
        {showDeplacement &&
          <div className="gallery-content" ref={deplacementContent}>
            <div className="sectionText">
              <div className="text-content">
                <h1>Déplacements et Aménagements</h1>
                <p>Notre savoir-faire intègre la signalisation au sens large, les dispositifs de mise en sécurité d’un itinéraire ou de
                  points particuliers liés à son utilisation (points d’arrêts ou abris bus, chantier, etc.), mais aussi les dispositifs
                  d’exploitation du réseau.</p>
                <br/>
                
                <p>
                  Nous garantissons à la fois notre capacité à réaliser les études attendues ainsi que l’utilisation de logiciels
                  métiers dédiés pour assurer la cohérence du traitement.
                </p>

                <br/>

                <p>
                  Dans tous les cas, la concertation avec les utilisateurs et, éventuellement, les différents gestionnaires de voirie,
                  est obligatoire pour la bonne compréhension du projet.
                </p>
              </div>

              <br/>

              <button className="btn-reference"><BiLink/> Voir nos références</button>

              {/* Remonte la section */}
              <button  className="btn-up" onClick={hideDeplacementDetails}><FaAngleDoubleUp className="arrowUp"/></button>

            </div>

            {/* Image descriptif */}
            <img src="/test.jpg" alt=""/>

          </div>
        }

        {/*Ingenierie*/}
        {showIngenierie &&
          <div className="gallery-content" ref={ingenierieContent}>
            <div className="sectionText">
              <div className="text-content">
                <h1>Ingénierie du trafic</h1>
                <p>Notre savoir-faire intègre la signalisation au sens large, les dispositifs de mise en sécurité d’un itinéraire ou de
                  points particuliers liés à son utilisation (points d’arrêts ou abris bus, chantier, etc.), mais aussi les dispositifs
                  d’exploitation du réseau.</p>

                <br/>
                
                <p>
                  Nous garantissons à la fois notre capacité à réaliser les études attendues ainsi que l’utilisation de logiciels
                  métiers dédiés pour assurer la cohérence du traitement.
                </p>

                <br/>

                <p>
                  Dans tous les cas, la concertation avec les utilisateurs et, éventuellement, les différents gestionnaires de voirie,
                  est obligatoire pour la bonne compréhension du projet.
                </p>
              </div>

              <br/>

              <button className="btn-reference"><BiLink/> Voir nos références</button>

              {/* Remonte la section */}
              <button  className="btn-up" onClick={hideIngenierieDetails}><FaAngleDoubleUp className="arrowUp"/></button>

            </div>

            {/* Image descriptif */}
            <img src="/test.jpg" alt=""/>

          </div>
        }

        {/*Production*/}
        {showProduction&&
          <div className="gallery-content" ref={productionContent}>
            <div className="sectionText">
              <div className="text-content">
                <h1>Production et expertise de données territoriales</h1>
                <p>Notre savoir-faire intègre la signalisation au sens large, les dispositifs de mise en sécurité d’un itinéraire ou de
                  points particuliers liés à son utilisation (points d’arrêts ou abris bus, chantier, etc.), mais aussi les dispositifs
                  d’exploitation du réseau.</p>

                <br/>
                
                <p>
                  Nous garantissons à la fois notre capacité à réaliser les études attendues ainsi que l’utilisation de logiciels
                  métiers dédiés pour assurer la cohérence du traitement.
                </p>

                <br/>

                <p>
                  Dans tous les cas, la concertation avec les utilisateurs et, éventuellement, les différents gestionnaires de voirie,
                  est obligatoire pour la bonne compréhension du projet.
                </p>
              </div>

              <br/>

              <button className="btn-reference"><BiLink/> Voir nos références</button>

              {/* Remonte la section */}
              <button  className="btn-up" onClick={hideProductionDetails}><FaAngleDoubleUp className="arrowUp"/></button>

            </div>

            {/* Image descriptif */}
            <img src="/test.jpg" alt=""/>

          </div>
        }

        {/*Aide*/}
        {showAide &&
          <div className="gallery-content" ref={aideContent}>
            <div className="sectionText">
              <div className="text-content">
                <h1>Aide à la gestion des Collectivités</h1>
                <p>Notre savoir-faire intègre la signalisation au sens large, les dispositifs de mise en sécurité d’un itinéraire ou de
                  points particuliers liés à son utilisation (points d’arrêts ou abris bus, chantier, etc.), mais aussi les dispositifs
                  d’exploitation du réseau.</p>

                <br/>
                
                <p>
                  Nous garantissons à la fois notre capacité à réaliser les études attendues ainsi que l’utilisation de logiciels
                  métiers dédiés pour assurer la cohérence du traitement.
                </p>

                <br/>

                <p>
                  Dans tous les cas, la concertation avec les utilisateurs et, éventuellement, les différents gestionnaires de voirie,
                  est obligatoire pour la bonne compréhension du projet.
                </p>
              </div>

              <br/>

              <button className="btn-reference"><BiLink/> Voir nos références</button>

              {/* Remonte la section */}
              <button  className="btn-up" onClick={hideAideDetails}><FaAngleDoubleUp className="arrowUp"/></button>

            </div>

            {/* Image descriptif */}
            <img src="/test.jpg" alt=""/>

          </div>
        }

    </div>
  )
}
