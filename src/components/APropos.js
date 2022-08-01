import React, {useState} from 'react';
import AliceCarousel from 'react-alice-carousel';
import {IoMdAddCircleOutline, IoIosCloseCircleOutline} from 'react-icons/io';
import {FaAngleDoubleUp} from "react-icons/fa";

import EmployeeLigne from "./data/EmployeeLigne";
import EmployeeGuadeloupe from "./data/EmployeeGuadeloupe";
import EmployeeMartinique from "./data/EmployeeMartinique";
import EmployeeGuyane from "./data/EmployeeGuyane";
import EmployeeReunion from "./data/EmployeeReunion";
import EmployeeMauritius from "./data/EmployeeMauritius";

import DetailsLigne  from "./data/DetailsLigne";
import DetailsGuadeloupe from "./data/DetailsGuadeloupe";
import DetailsMartinique from "./data/DetailsMartinique";
import DetailsGuyane from "./data/DetailsGuyane";
import DetailsReunion from "./data/DetailsReunion";
import DetailsMauritius from "./data/DetailsMauritius";

import 'react-alice-carousel/lib/alice-carousel.css';
import '../style/APropos.scss';

export default function APropos() {

    const [editIndex, setEditIndex] = useState(null);

    /*fonction clique Ligne&Sens*/
    const [showContentLigne, setShowContentLigne] = useState(false);
    const [showInfoLigne, setShowInfoLigne] = useState(false);
    const handleClickLigne = () => {
        setShowContentLigne(true);
        setShowContentGuadeloupe(false);
        setShowContentMartinique(false);
        setShowContentGuyane(false);
        setShowContentRe(false);
        setShowContent(false);
    }

    const hideClickLigne = () => {
        setShowContentLigne(false);
    }
    const showDetailsLigne = () => {
        setShowInfoLigne(!showInfoLigne);
    } 
    /*fonction clique Ligne*/


    //fonction clique Guadeloupe
    const [showContentGuadeloupe, setShowContentGuadeloupe] = useState(false);
    const [showInfoGuadeloupe, setShowInfoGuadeloupe] = useState(false);
    const handleClickGuadeloupe = () => {
        setShowContentGuadeloupe(true);
        setShowContentLigne(false);
        setShowContentMartinique(false);
        setShowContentGuyane(false);
        setShowContentRe(false);
        setShowContent(false);
    }
    const hideClickGuadeloupe = () => {
        setShowContentGuadeloupe(false);
    }
    const showDetailsGuadeloupe = () => {
        setShowInfoGuadeloupe(!showInfoGuadeloupe);
    } 
    /*fonction clique Guadeloupe*/


    /*fonction clique Martinique*/
    const [showContentMartinique, setShowContentMartinique] = useState(false);
    const [showInfoMartinique, setShowInfoMartinique] = useState(false);
    const handleClickMartinique = () => {
        setShowContentMartinique(false);
        setShowContentLigne(true);
        setShowContentGuadeloupe(false);
        setShowContentGuyane(false);
        setShowContentRe(false);
        setShowContent(false);
    }
    const hideClickMartinique = () => {
        setShowContentMartinique (false);
    }
    const showDetailsMartinique = () => {
        setShowInfoMartinique (!showInfoMartinique);
    } 
    /*fonction clique Martinique*/


    /*fonction clique Guyane*/
    const [showContentGuyane, setShowContentGuyane] = useState(false);
    const [showInfoGuyane, setShowInfoGuyane] = useState(false);
    const handleClickGuyane = () => {
        setShowContentGuyane(true);
        setShowContentLigne(false);
        setShowContentGuadeloupe(false);
        setShowContentMartinique(false);
        setShowContentRe(false);
        setShowContent(false);
    }
    const hideClickGuyane = () => {
        setShowContentGuyane(false);
    }
    const showDetailsGuyane = () => {
        setShowInfoGuyane(!showInfoGuyane);
    } 
    /*fonction clique Guyane*/


    /*fonction clique Reunions*/
      const [showContentRe, setShowContentRe] = useState(false);
      const [showInfoRe, setShowInfoRe] = useState(false);
      const handleClickRe = () => {
          setShowContentRe(true);
          setShowContentLigne(false);
        setShowContentGuadeloupe(false);
        setShowContentMartinique(false);
        setShowContentGuyane(false);
        setShowContent(false);
      }
      const hideClickRe = () => {
          setShowContentRe(false);
      }
      const showDetailsRe = () => {
          setShowInfoRe(!showInfoRe);
      }
    /*fin fonction clique Reunion*/



    /*fonction clique Mauritius*/
    const [showContent, setShowContent] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const handleClick = () => {
        setShowContent(true);
        setShowContentLigne(false);
        setShowContentGuadeloupe(false);
        setShowContentMartinique(false);
        setShowContentGuyane(false);
        setShowContentRe(false);
    }
    const hideClick = () => {
        setShowContent(false);
    }
    const showDetails = () => {
        setShowInfo(!showInfo);
    } 
    /*fonction clique Mauritius*/



    //Dimension résponsive pour chaque carousel aaaaaaaaaaaaaa
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        993: { items: 3 },
        1281: { items: 5},
        2560: { items: 6}
    };

    //pour les données Ligne 
    const itemsLigne = EmployeeLigne.map( (item, index) => {
        return (
            <div key={index} className="item">
                <img src={item.imgPath} alt={item.nom}/>
                <div onClick={ ()=> {showDetailsLigne(!showInfoLigne); setEditIndex(index);}} className="emp-btn" id="emp-btn">
                    {showInfoLigne ? <IoIosCloseCircleOutline className="plus-info"/>:<IoMdAddCircleOutline className="plus-info"/>}
                </div>
                {showInfoLigne && editIndex === index &&
                    <div className="employeeInfo">
                        <h3 className="name"><b>{item.nom}</b></h3>
                        <p className="function">{item.position}</p>
                        <p ><a className="email" style={{color: item.couleurMail}} href={'mailto: ' + item.mail + ''}>{item.mail}</a></p>
                    </div>
                }
            </div>
        );
    });
    //fin pour le donnée Ligne 

    //pour le données Guadeloupe
    const itemsGuadeloupe= EmployeeGuadeloupe.map( (item, index) => {
        return (
            <div key={index} className="item">
                <img src={item.imgPath} alt=""/>
                <div onClick={ ()=> {showDetailsGuadeloupe(!showInfoGuadeloupe); setEditIndex(index);}} className="emp-btn" id="emp-btn">
                    {showInfoGuadeloupe ? <IoIosCloseCircleOutline className="plus-info"/>:<IoMdAddCircleOutline className="plus-info"/>}
                </div>
                {showInfoGuadeloupe && editIndex === index && 
                    <div className="employeeInfo">
                        <h3 className="name"><b>{item.nom}</b></h3>
                        <p className="function">{item.position}</p>
                        <p ><a className="email" style={{color: item.couleurMail}} href={'mailto: ' + item.mail + ''}>{item.mail}</a></p>
                    </div>
                }
            </div>
        );
    });
    //fin pour le donnée Guadeloupe

    //pour le données Martinique
    const itemsMartinique = EmployeeMartinique.map( (item, index) => {
        return (
            <div key={index} className="item">
                <img src={item.imgPath} alt=""/>
                <div onClick={ ()=> {showDetailsMartinique(!showInfoMartinique); setEditIndex(index);}} className="emp-btn" id="emp-btn">
                    {showInfoMartinique? <IoIosCloseCircleOutline className="plus-info"/>:<IoMdAddCircleOutline className="plus-info"/>}
                </div>
                {showInfoMartinique && editIndex === index &&
                    <div className="employeeInfo">
                        <h3 className="name"><b>{item.nom}</b></h3>
                        <p className="function">{item.position}</p>
                        <p ><a className="email" style={{color: item.couleurMail}} href={'mailto: ' + item.mail + ''}>{item.mail}</a></p>
                    </div>
                }
            </div>
        );
    });
    //fin pour le donnée Martinique

    //pour le données Guyane
    const itemsGuyane = EmployeeGuyane.map( (item, index) => {
        return (
            <div key={index} className="item">
                <img src={item.imgPath} alt=""/>
                <div onClick={ ()=> {showDetailsGuyane(!showInfoGuyane); setEditIndex(index);}} className="emp-btn" id="emp-btn">
                    {showInfoGuyane? <IoIosCloseCircleOutline className="plus-info"/>:<IoMdAddCircleOutline className="plus-info"/>}
                </div>
                {showInfoGuyane && editIndex === index &&
                    <div className="employeeInfo">
                        <h3 className="name"><b>{item.nom}</b></h3>
                        <p className="function">{item.position}</p>
                        <p ><a className="email" style={{color: item.couleurMail}} href={'mailto: ' + item.mail + ''}>{item.mail}</a></p>
                    </div>
                }
            </div>
        );
    });
    //fin pour le donnée Guyane


    //pour le données Reunion
    const itemsre = EmployeeReunion.map( (item, index) => {
        return (
            <div key={index} className="item">
                <img src={item.imgPath} alt=""/>
                <div onClick={ ()=> {showDetailsRe(!showInfoRe); setEditIndex(index);}} className="emp-btn" id="emp-btn">
                    {showInfoRe? <IoIosCloseCircleOutline className="plus-info"/>:<IoMdAddCircleOutline className="plus-info"/>}
                </div>
                {showInfoRe && editIndex === index &&
                    <div className="employeeInfo">
                        <h3 className="name"><b>{item.nom}</b></h3>
                        <p className="function">{item.position}</p>
                        <p ><a className="email" style={{color: item.couleurMail}} href={'mailto: ' + item.mail + ''}>{item.mail}</a></p>
                    </div>
                }
            </div>
        );
    });
    //fin pour le donnée Reunion

    //le showDetails affiche tout les données, vous devez recuperer l'index de l'élément 
    //que vous voulez afficher et puis appeler un div juste pour afficher l'index que vous voulez

    //pour le données Maurices 
    //le hook aubas, servira à récuperer et stocker l'index, en d'autre mot, la position de l'élément sélectionner.
    //const [editIndex, setEditIndex] = useState(null);
    const items = EmployeeMauritius.map( (item, index) => {
        return (
            <div key={index} className="item">
                <img src={item.imgPath} alt={item.nom}/>
                {/* Au bas, le onClick appelle 2 fonctions, il faut imperativement mettre les 2 fonctions entre des {} et puis mettre un ; à la fin de chaque fonction.
                    on sauvegarde l'index dans le hook en utilisant le setEditIndex.
                */}
                <div onClick={ ()=> {showDetails(!showInfo); setEditIndex(index);}} className="emp-btn" id="emp-btn">
                    {showInfo ? <IoIosCloseCircleOutline className="plus-info"/>:<IoMdAddCircleOutline className="plus-info"/>}
                    {/*<IoMdAddCircleOutline className="plus-info"/>*/}
                    </div>
                    {/* Pour afficher le div, avant, vous verifiez juste une condition, c'est à dire, si showInfo est vrai, et si c'est le cas vous affichez toutes les 
                        données de chaque images. Pour afficher les données d'une seule image, on doit ajouter une nouvelle condition. Quand la fonction .map(ligne 77)
                        va charger une à une les images sur le site et leur données, on verifie si editIndex(la valeur de index qu'on a récuperer sur ligne 84) correspond 
                        actuellement à l'index que la fonction .map est en train de charger. Si c'est le cas, on affiche que c'est données la.
                    */}
                {showInfo && editIndex === index &&
                    <div key={index} className="employeeInfo">
                        <h3 className="name"><b>{item.nom}</b></h3>
                        <p className="function">{item.position}</p>
                        <p ><a className="email" style={{color: item.couleurMail}} href={'mailto: ' + item.mail + ''}>{item.mail}</a></p>
                    </div>
                }
            </div>
        );
    });
    //fin pour le données Maurices

    return (
    <div className="about">
       <div className="about-visible">
            <div className="title-container">
                <h1 className="title blue-title">À notre<br/><span>propos</span></h1>
            </div>
            <div className="sectionText"> 
            <div className='ligne'></div>
                <h1 className='titre'>GROUPE GDS</h1>
                <p className='presentation'>
                    L’activité de Groupe GDS nous conduit à accompagner les collectivités dans la gestion de sujets complexes sur les espaces de
                    déplacement. Cette organisation permet à Groupe GDS d’affecter aux projets, des équipes opérationnelles à la fois spécialisées et
                    pluridisciplinaires.
                </p>
                <br/>
               <p className='nouss'> Nous sommes ainsi un partenaire pour :</p> 
                <ul>
                    <li className='li'>
                        les projet de signalisation pour un hramonieux développement économique des territoires,
                    </li>
                    <li className='li'>
                        l’amélioration de la sécurité et le confort des déplacements,
                    </li>
                    <li className='li'>
                        la maîtrise intelligente de la mobilité pour une meilleure qualité de vie.
                    </li>
                </ul>
                <br/>
                <p className='pour'>
                    Pour ce qui est de l’activité plus opérationnelle, Groupe GDS a développé une solution numérique de gestion du patrimoine qui
                    permet d’assurer un lien fort entre ses études et la réalité du terrain. Cette solution est mise à disposition des collectivités lors des
                    phases d’études, de travaux mais également, ensuite, en gestion du patrimoine.
                </p>
                <p className='hui'>
                    Aujourd’hui, Groupe GDS fédère Ligne &amp; Sens en métropole, mais aussi, plusieurs filiales en outre-mer.
                </p>


                {/* Les différentes branches */}
                <div className="places-list">

                    <div onClick={handleClickLigne}>
                        <div className="single-place">
                            <img className="placeBW" src="/ligneSensBW.png" alt=""/>
                            <img className="place-hover" src="/ligneSensCol.png" alt=""/>
                        </div>
                    </div>
                    
                    <div onClick={handleClickGuadeloupe}>
                        <div className="single-place">
                            <img className="placeBW" src="/GuadeloupeBW.png" alt=""/>
                            <img className="place-hover" src="/GuadeloupeCol.png" alt=""/>
                        </div>
                    </div>

                    <div onClick={handleClickMartinique}>
                        <div className="single-place">
                            <img className="placeBW" src="/MartiniqueBW.png" alt=""/>
                            <img className="place-hover" src="/MartiniqueCol.png" alt=""/>
                        </div>
                    </div>

                    <div onClick={handleClickGuyane}>
                        <div className="single-place">
                            <img  className="placeBW"src="GuyaneBW.png" alt=""/>
                            <img className="place-hover" src="GuyaneCol.png" alt=""/>
                        </div>
                    </div>


                    {/* pour onclick de Reunion  */}
                    <div onClick={handleClickRe}>
                        <div className="single-place">
                            <img  className="placeBW"src="ReunionBW.png" alt=""/>
                            <img className="place-hover" src="ReunionCol.png" alt=""/>
                        </div>
                    </div>
                    {/* fin onclick de Reunion  */}
                    
                    {/* pour onclick de Mauritius  */}
                    <div onClick={handleClick}>
                        <div className="single-place">
                            <img className="placeBW" src="MauritiusBW.png" alt=""/>
                            <img className="place-hover" src="MauritiusCol.png" alt=""/>
                        </div> 
                    </div>
                    {/* fin onclick de Mauritius  */}
                </div>
                 {/* Les différentes branches */}
            </div>
        </div>


        {/*pour appeler le contenu de chaque branche, ici c'est pour Ligne*/}
        {showContentLigne && 
            <div className="about-invisible">
                <div className="about-branch">
                    <div className="fill"></div>
                    {DetailsLigne.map((item, index) => (
                        <div className="branch-details" key={index}>
                            <h1 style={{color: item.couleurTitre}}>{item.titre}</h1>
                            <p>
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
                {/* Slider pour les employés à Ligne*/}
                <AliceCarousel
                    infinite
                    mouseTracking
                    disableDotsControls 
                    items={itemsLigne}
                    responsive={responsive}
                    controlsStrategy="alternate"
                /> 
                <button  className="btnUp" onClick={hideClickLigne}><FaAngleDoubleUp className="arrowUp"/></button>
            </div> 
        }
        {/*fin contenu de  branche Ligne */}


        {/*pour appeler le contenu de chaque branche, ici c'est pour Guadeloupe */}
        {showContentGuadeloupe && 
            <div className="about-invisible">
                <div className="about-branch">
                    <div className="fill"></div>
                    {DetailsGuadeloupe.map((item, index) => (
                        <div className="branch-details" key={index}>
                            <h1 style={{color: item.couleurTitre}}>{item.titre}</h1>
                            <p>
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
                {/* Slider pour les employés à Réunion*/}
                <AliceCarousel
                    infinite
                    mouseTracking
                    disableDotsControls 
                    items={itemsGuadeloupe}
                    responsive={responsive}
                    controlsStrategy="alternate"
                /> 
                <button  className="btnUp" onClick={hideClickGuadeloupe}><FaAngleDoubleUp className="arrowUp"/></button>
            </div> 
        }
        {/*fin contenu de  branche Martinique */}
        {/*pour appeler le contenu de chaque branche, ici c'est pour Reunion */}
        {showContentMartinique  && 
            <div className="about-invisible">
                <div className="about-branch">
                    <div className="fill"></div>
                    {DetailsMartinique.map((item, index) => (
                        <div className="branch-details" key={index}>
                            <h1 style={{color: item.couleurTitre}}>{item.titre}</h1>
                            <p>
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
                {/* Slider pour les employés à Martinique */}
                <AliceCarousel
                    infinite
                    mouseTracking
                    disableDotsControls 
                    items={itemsMartinique }
                    responsive={responsive}
                    controlsStrategy="alternate"
                /> 
                <button  className="btnUp" onClick={hideClickMartinique }><FaAngleDoubleUp className="arrowUp"/></button>
            </div> 
        }
        {/*fin contenu de  branche Martinique  */}

        {/*pour appeler le contenu de chaque branche, ici c'est pour Reunion */}
        {showContentGuyane && 
            <div className="about-invisible">
                <div className="about-branch">
                    <div className="fill"></div>
                    {DetailsGuyane.map((item, index) => (
                        <div className="branch-details" key={index}>
                            <h1 style={{color: item.couleurTitre}}>{item.titre}</h1>
                            <p>
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
                {/* Slider pour les employés à Réunion*/}
                <AliceCarousel
                    infinite
                    mouseTracking
                    disableDotsControls 
                    items={itemsGuyane}
                    responsive={responsive}
                    controlsStrategy="alternate"
                /> 
                <button  className="btnUp" onClick={hideClickGuyane}><FaAngleDoubleUp className="arrowUp"/></button>
            </div> 
        }
        {/*fin contenu de  branche Reunion */}

        {/*pour appeler le contenu de chaque branche, ici c'est pour Reunion */}
        {showContentRe && 
            <div className="about-invisible">
                <div className="about-branch">
                    <div className="fill"></div>
                    {DetailsReunion.map((item, index) => (
                        <div className="branch-details" key={index}>
                            <h1 style={{color: item.couleurTitre}}>{item.titre}</h1>
                            <p>
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
                {/* Slider pour les employés à Réunion*/}
                <AliceCarousel
                    infinite
                    mouseTracking
                    disableDotsControls 
                    items={itemsre}
                    responsive={responsive}
                    controlsStrategy="alternate"
                /> 
                <button  className="btnUp" onClick={hideClickRe}><FaAngleDoubleUp className="arrowUp"/></button>
            </div> 
        }
        {/*fin contenu de  branche Reunion */}

        {/*pour appler le contenu de chaque branche, ici c'est pour le Mauritius */}
        {showContent && 
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

                {/* Slider pour les employés à Maurice*/}
                <AliceCarousel
                    infinite
                    mouseTracking
                    disableDotsControls 
                    items={items}
                    responsive={responsive}
                    controlsStrategy="alternate"
                /> 

                <button  className="btnUp" onClick={hideClick}><FaAngleDoubleUp className="arrowUp"/></button>
                
            </div> 
        }
        {/*fin contenu de branche Muritius */}

    </div>
  )
}
