import React, {useState} from 'react';
import AliceCarousel from 'react-alice-carousel';
import {IoMdAddCircleOutline} from 'react-icons/io';
import {FaAngleDoubleUp} from "react-icons/fa";
import EmployeeMauritius from "./data/EmployeeMauritius";
import DetailsMauritius from "./data/DetailsMauritius";
import 'react-alice-carousel/lib/alice-carousel.css';
import '../style/APropos.scss';

export default function APropos() {

    const [showContent, setShowContent] = useState(false);

    const [showInfo, setShowInfo] = useState(null);

    const handleClick = () => {
        setShowContent(true);
    }

    const hideClick = () => {
        setShowContent(false);
    }

    const showDetails = (e) => {
        console.log(e);
        setShowInfo(!showInfo);

        /*if(showInfo === index){
            setShowInfo(!showInfo);
        } else {
            setShowInfo(true);
        }*/
            
    }

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        993: { items: 3 },
        1281: { items: 5},
        2560: { items: 6}
    };


    const items = EmployeeMauritius.map( (item, index) => {
        return (
            <div key={index}  className="item" data-value="1">
                <img src={item.imgPath} alt=""/>
                <button onClick={() => showDetails(item)} className="emp-btn" id="emp-btn"><IoMdAddCircleOutline className="plus-info"/></button>

                {showInfo &&
                    <div className="employeeInfo">
                        <h3 className="name"><b>{item.nom}</b></h3>
                        <p className="function">{item.position}</p>
                        <p ><a className="email" style={{color: item.couleurMail}} href={'mailto: ' + item.mail + ''}>{item.mail}</a></p>
                    </div>
                } 

            </div>
        );
    });



    return (
    <div className="about">
        <div className="about-visible">
            <div className="title-container">
                <h1 className="title blue-title">À notre<br/><span>propos</span></h1>
            </div>

            <div className="sectionText"> 
                <h1>GROUPE GDS</h1>
                <p>
                    L’activité de Groupe GDS nous conduit à accompagner les collectivités dans la gestion de sujets complexes sur les espaces de
                    déplacement. Cette organisation permet à Groupe GDS d’affecter aux projets, des équipes opérationnelles à la fois spécialisées et
                    pluridisciplinaires.
                </p>

                <br/>

                Nous sommes ainsi un partenaire pour :
                <ul>
                    <li>
                        les projet de signalisation pour un hramonieux développement économique des territoires,
                    </li>
                    <li>
                        l’amélioration de la sécurité et le confort des déplacements,
                    </li>
                    <li>
                        la maîtrise intelligente de la mobilité pour une meilleure qualité de vie.
                    </li>
                </ul>

                <br/>

                <p>
                    Pour ce qui est de l’activité plus opérationnelle, Groupe GDS a développé une solution numérique de gestion du patrimoine qui
                    permet d’assurer un lien fort entre ses études et la réalité du terrain. Cette solution est mise à disposition des collectivités lors des
                    phases d’études, de travaux mais également, ensuite, en gestion du patrimoine.
                </p>

                <p>
                Aujourd’hui, Groupe GDS fédère Ligne &amp; Sens en métropole, mais aussi, plusieurs filiales en outre-mer.
                </p>

                {/* Les différentes branches */}
                <div className="places-list">
                    <div className="single-place">
                        <img className="placeBW" src="/ligneSensBW.png" alt=""/>
                        <a>
                            <img className="place-hover" src="/ligneSensCol.png" alt=""/>
                        </a>
                    </div>
                    <div className="single-place">
                        <img className="placeBW" src="/GuadeloupeBW.png" alt=""/>
                        <a>
                            <img className="place-hover" src="/GuadeloupeCol.png" alt=""/>
                        </a>
                    </div>
                    <div className="single-place">
                        <img className="placeBW" src="/MartiniqueBW.png" alt=""/>
                        <a >
                            <img className="place-hover" src="/MartiniqueCol.png" alt=""/>
                        </a>
                    </div>
                    <div className="single-place">
                        <img  className="placeBW"src="GuyaneBW.png" alt=""/>
                        <a>
                            <img className="place-hover" src="GuyaneCol.png" alt=""/>
                        </a>
                    </div>
                    <div className="single-place">
                        <img  className="placeBW"src="ReunionBW.png" alt=""/>
                        <a>
                            <img className="place-hover" src="ReunionCol.png" alt=""/>
                        </a>
                    </div>
                    <button type="button" onClick={handleClick}>
                        <div className="single-place">
                            <img className="placeBW" src="MauritiusBW.png" alt=""/>
                            <img className="place-hover" src="MauritiusCol.png" alt=""/>
                        </div> 
                    </button>
                </div>
                {/* Les différentes branches */}
            </div>
        </div>

        {showContent && 
            // Texte et titre
            <div className="about-invisible">
                <div className="about-branch">
                    <div className="fill"></div>

                    {DetailsMauritius.map((item, index) => (
                        <div className="branch-details" key={index}>
                            <h1 style={{color: item.couleurTitre}}>{item.titre}</h1>
                            <p>
                                {item.description}
                            </p>
                        </div>
                    ))}

                </div>
            
                {/* Slider pour les employés */}
                <AliceCarousel
                    infinite
                    mouseTracking
                    disableDotsControls 
                    items={items}
                    responsive={responsive}
                    controlsStrategy="alternate"
                /> 

                <button  className="btn-up" onClick={hideClick}><FaAngleDoubleUp className="arrowUp"/></button>
            </div> 
        }


    </div>
  )
}
