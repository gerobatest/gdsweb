import React, {useState, useRef} from 'react';
import '../style/Footer.scss';
import {FiSend} from 'react-icons/fi';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import {contactLigneSens, contactGuadeloupe, contactMartinique, contactGuyane, contactReunion, contactMauritius} from './data/Contact';

import Map from "./Map/Map";
import Layers from "./Map/Layers";
import TileLayer from "./Map/TileLayer";
import VectorLayer from "./Map/VectorLayer";
import osm from "./Map/osm";
import vector from "./Map/vector";
import Controls from "./Map/Controls";
import FullScreenControl from "./Map/FullScreenControl";
import { Circle as CircleStyle, Style } from 'ol/style';
import { fromLonLat, get } from 'ol/proj';
import GeoJSON from 'ol/format/GeoJSON';
import mapConfig from "../config.json";
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import {Icon} from 'ol/style';


/*const iconFeature = new Feature({
    geometry: new Point([1.253639, 44.414870]),
    name: '81 rue du Moulin, 46140 SAUZET, France'
});*/

  //La marqueur orange (location)
  const iconStyle = new Style({
    image: new Icon({
      anchor: [0.5, 46],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      src: '/location.avif',
      scale: 1.5
    }),
  });

  /*iconFeature.setStyle(iconStyle);*/

  //Ce paragraphe récupère les données géographique de chaque location depuis config.json
  const geojsonObject1 = mapConfig.geojsonObject1;//France sauzet
  const geojsonObject2 = mapConfig.geojsonObject2; //Guadeloupe
  const geojsonObject3 = mapConfig.geojsonObject3; //Martinique
  const geojsonObject4 = mapConfig.geojsonObject4;  //Guyane
  const geojsonObject5 = mapConfig.geojsonObject5; //Réunion
  const geojsonObject6 = mapConfig.geojsonObject6; //Maurice

function Footer() {

    const [center, setCenter] = useState([1.253327, 44.414888]); //le centre de la carte après chargement
    const [zoom, setZoom] = useState(18)

    const [showLayer1, setShowLayer1] = useState(true); //Sauzet
    const [showLayer2, setShowLayer2] = useState(true); //Guadeloupe
    const [showLayer3, setShowLayer3] = useState(true); //Martinique
    const [showLayer4, setShowLayer4] = useState(true); //Guyane
    const [showLayer5, setShowLayer5] = useState(true); //Réunion
    const [showLayer6, setShowLayer6] = useState(true); //Maurice

    const [ showContactSauzet, setShowContactSauzet] = useState(true); //l'adresse montrée est initialement celle en France
    const [ showContactGuadeloupe, setShowContactGuadeloupe] = useState(false);
    const [ showContactMartinique, setShowContactMartinique] = useState(false);
    const [ showContactGuyane, setShowContactGuyane] = useState(false);
    const [ showContactReunion, setShowContactReunion] = useState(false);
    const [ showContactMauritius, setShowContactMauritius] = useState(false);

    const [showCancelButton, setShowCancelButton] = useState(false); //Bouton annuler
    const [showSendButton, setShowSendButton] = useState(false);  //Bouton envoyer 

    //fait référence à la textarea 
    const scrollable = useRef(null); 
  
    //const scrollHeight = scrollable.current?.clientHeight / 2;
    const scrollHeight = 10;
  
    //Scoll les textes dans le textarea
    const scrollUp = (e) => {
      e.preventDefault();
      const scrollLength = -scrollHeight; //calcul moitié de la div final
      scrollable.current.scrollBy({top: scrollLength, behavior: "smooth"});
    }
  
    const scrollDown = (e) => {
      e.preventDefault();
      const scrollLength = scrollHeight; //calcul moitié de la div final
      scrollable.current.scrollBy({top: scrollLength, behavior: "smooth"})
    }

    //Les valeurs depuis la forme
    const [formVal, setFormVal] = useState({
        name:'',
        phone:'',
        email:'',
        message:'',
        error: null
    });

    //Montre et/ou cache les boutons envoyer et/ou annuler
    const handleChange = (e) => {
        const {name,value} = e.target
        setFormVal(prevState=>{
            setShowCancelButton(true)
            if (value === '')
                setShowSendButton(false)
            return {
            ...prevState,[name]:value
        }})
        let all_filled = true
        Object.values(formVal).forEach((item)=>{
        if (item === '')
        {
            all_filled = false
        }
        })
        if (all_filled)
        {
        setShowSendButton(true)
        }
    }

    //Efface tous les champs 
    const cancelForm = () => {
        setShowCancelButton(false)
        setShowSendButton(false)
        setFormVal({
        name:'',
        phone:'',
        email:'',
        message:''
        })
        document.getElementById("contact-form").reset();
    };

    //Doit rediriger la carte en France (Sauzet) 
    const showSauzet = () => {
      setShowContactSauzet(true);
      setShowContactGuadeloupe(false);
      setShowContactGuyane(false);
      setShowContactMartinique(false);
      setShowContactReunion(false);
      setShowContactMauritius(false);
      setCenter([ 1.253639, 44.414870]);
      setZoom(18);
    }

    //Doit rediriger la carte à Guadeloupe 
    const showGuadeloupe = () => {
      setShowContactSauzet(false);
      setShowContactMartinique(false);
      setShowContactGuyane(false);
      setShowContactReunion(false);
      setShowContactMauritius(false);
      setShowContactGuadeloupe(true);
      setCenter([-61.46677890245789, 16.205681152216087]);
      setZoom(18);
    }

    //Doit rediriger la carte en Martinique
    const showMartinique = () => {
      setShowContactSauzet(false);
      setShowContactGuadeloupe(false);
      setShowContactGuyane(false);
      setShowContactReunion(false);
      setShowContactMauritius(false);
      setShowContactMartinique(true);
      setCenter([-60.971897, 14.574446]);
      setZoom(18);
    }

    //Doit rediriger la carte à la Réunion 
    const showReunion = () => {
      setShowContactSauzet(false);
      setShowContactGuadeloupe(false);
      setShowContactGuyane(false);
      setShowContactMartinique(false);
      setShowContactMauritius(false);
      setShowContactReunion(true);
      setCenter([55.317608, -20.950888]);
      setZoom(18);
    }

    //Doit rediriger la carte au Guyane
    const showGuyane = () => {
      setShowContactSauzet(false);
      setShowContactGuadeloupe(false);
      setShowContactMartinique(false);
      setShowContactReunion(false);
      setShowContactMauritius(false);
      setShowContactGuyane(true);
      setCenter([-52.2678864630662, 4.907547165591122]);
      setZoom(18);
    }


    //Doit rediriger la carte à Maurice
    const showMauritius = () => {
      setShowContactSauzet(false);
      setShowContactGuadeloupe(false);
      setShowContactGuyane(false);
      setShowContactMartinique(false);
      setShowContactReunion(false);
      setShowContactMauritius(true);
      setCenter([57.507731726107316, -20.16361347403224]);
      setZoom(18);
    }

    //mois actuel
    const MONTHS = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Decembre'];
    const currentMonthNum = new Date().getMonth();
    const currentMonth = MONTHS[currentMonthNum];

    //année actuelle 
    const currentYear =  new Date().getUTCFullYear();

    return (
        <div id="contact">
          
            {/* La carte */}
            <div className="map">
              <Map center={fromLonLat(center)} zoom={zoom}>
                <Layers>
                  <TileLayer
                    source={osm()}
                    zIndex={0}
                  />
                  {showLayer1 && (
                    <VectorLayer
                      source={vector({ features: new GeoJSON().readFeatures(geojsonObject1, { featureProjection: get('EPSG:3857') }) })}
                      style={iconStyle}
                    />
                  )}
                  {showLayer2 && (
                    <VectorLayer
                      source={vector({ features: new GeoJSON().readFeatures(geojsonObject2, { featureProjection: get('EPSG:3857') }) })}
                      style={iconStyle}
                    />
                  )}
                  {showLayer3 && (
                    <VectorLayer
                      source={vector({ features: new GeoJSON().readFeatures(geojsonObject3, { featureProjection: get('EPSG:3857') }) })}
                      style={iconStyle}
                    />
                  )}
                  {showLayer4 && (
                    <VectorLayer
                      source={vector({ features: new GeoJSON().readFeatures(geojsonObject4, { featureProjection: get('EPSG:3857') }) })}
                      style={iconStyle}
                    />
                  )}
                  {showLayer5 && (
                    <VectorLayer
                      source={vector({ features: new GeoJSON().readFeatures(geojsonObject5, { featureProjection: get('EPSG:3857') }) })}
                      style={iconStyle}
                    />
                  )}
                  {showLayer6 && (
                    <VectorLayer
                      source={vector({ features: new GeoJSON().readFeatures(geojsonObject6, { featureProjection: get('EPSG:3857') }) })}
                      style={iconStyle}
                    />
                  )}
                </Layers>
                <Controls>
                  <FullScreenControl />
                </Controls>
              </Map>
            </div>

            <div className="contact-container">
                <div className="form">
                    <h1 className="footer-title">Contactez-nous</h1>
                    <form id="contact-form">
                        {/* Nom */}
                        <div className="nameField">
                            <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            defaultValue={formVal.name} 
                            onChange={handleChange} 
                            required="required"
                            />
                            <span className="floating-label">Votre nom<span className="star">*</span></span> 
                        </div>
                        {/*Téléphone*/}
                        <div>
                            <input 
                            type="text" 
                            id="phone" 
                            name="phone" 
                            defaultValue={formVal.fname} 
                            onChange={handleChange} 
                            required="required"
                            />
                            <span className="floating-label">Votre téléphone<span className="star">*</span></span> 
                        </div>
                        {/* Email */}
                        <div>
                            <input 
                            type="email" 
                            id="email" 
                            name="email"
                            defaultValue={formVal.email} 
                            onChange= {handleChange} 
                            required="required"
                            />
                            <span className="floating-label">Votre émail<span className="star">*</span></span> 
                        </div>
                        {/* Message */}

                        <div>
                            <textarea 
                              ref={scrollable}
                              name='message' 
                              id="message"
                              placeholder=" " 
                              onChange={handleChange} 
                              required="required"
                            />
                            <span className="floating-label message" >Votre message</span> 

                            {/* Boutons qui remplacent le scrollbar */}
                            <button className="scroll-up" onClick={scrollUp}><IoIosArrowUp/></button>
                            <button className="scroll-down" onClick={scrollDown}><IoIosArrowDown/></button>
                        </div>


                        <div className="form-btn">
                            {showCancelButton && ( 
                              <button 
                                onClick={cancelForm} 
                                type="button">
                                ANNULER
                              </button> 
                             )} 
                            {showSendButton && ( 
                              <button
                                type="submit">
                                <FiSend/> ENVOYER
                              </button>
                           )} 
                        </div>
                    </form>
                </div>   

                <div className="details-addresse">
                    <h1 className="footer-title">Nous rencontrer</h1>
                    
                    <div className="places-list">

                        <div className="single-place" onClick={showSauzet}>
                            <img className="placeBW" src="/ligneSensBW.png" alt=""/>
                            <img className="place-hover" src="/ligneSensCol.png" alt=""/>
                        </div>

                        <div className="single-place" onClick={showGuadeloupe}>
                          <img className="placeBW" src="/GuadeloupeBW.png" alt=""/>
                          <img className="place-hover" src="/GuadeloupeCol.png" alt=""/>
                        </div>

                        <div className="single-place" onClick={showMartinique}>
                            <img className="placeBW" src="/MartiniqueBW.png" alt=""/>
                            <img className="place-hover" src="/MartiniqueCol.png" alt=""/>
                        </div>

                        <div className="single-place" onClick={showGuyane}>
                            <img  className="placeBW"src="GuyaneBW.png" alt=""/>
                            <img className="place-hover" src="GuyaneCol.png" alt=""/>
                        </div>

                        <div className="single-place" onClick={showReunion}>
                            <img  className="placeBW"src="ReunionBW.png" alt=""/>  
                            <img className="place-hover" src="ReunionCol.png" alt=""/>
                        </div>

                     
                        <div className="single-place" onClick={showMauritius}>
                            <img className="placeBW" src="MauritiusBW.png" alt=""/>
                            <img className="place-hover" src="MauritiusCol.png" alt=""/>
                        </div> 
                        
                    </div>


                    {/* Adresse et contact de chaque branche */}
                    { showContactSauzet && (
                    <> 
                      <table className="branch-details">
                        <tbody>
                          <tr>
                            <td className="col1">Adresse</td>
                            <td className="col2">81 rue du Moulin, 46140 SAUZET, <strong>France</strong></td>
                          </tr>
                          <tr>
                            <td className="col1"></td>
                            <td className="col2"></td>
                          </tr>
                          <tr>
                            <td className="col1">Téléphone</td>
                            <td className="col2">+33 (0) 6 31 89 80 34</td>
                          </tr>
                          <tr>
                            <td className="col1">mail</td>
                            <td className="col2">contact@groupe-gds.eu</td>
                          </tr>
                        </tbody>
                    </table>
                    </>
                    )}

                    { showContactGuadeloupe && (
                    <> 
                      <table className="branch-details">
                        <tbody>
                          <tr>
                            <td className="col1">Adresse</td>
                            <td className="col2">171 rue Wiliam Youyoute Dunnoyer 97190 GOSIER, <strong>Guadeloupe</strong></td>
                          </tr>
                          <tr>
                            <td className="col1"></td>
                            <td className="col2"></td>
                          </tr>
                          <tr>
                            <td className="col1">Téléphone</td>
                            <td className="col2">+33 (0) 6 31 89 80 34</td>
                          </tr>
                          <tr>
                            <td className="col1">mail</td>
                            <td className="col2">contact@groupe-gds.eu</td>
                          </tr>
                          </tbody>
                      </table>
                    </>
                    )}

                    { showContactMartinique && (
                    <> 
                      <table className="branch-details">
                        <tbody>
                          <tr>
                            <td className="col1">Adresse</td>
                            <td className="col2">24 rue Raymond Berger ZAC La Marie 97224 DUCOS, <strong>Martinique</strong></td>
                          </tr>
                          <tr>
                            <td className="col1"></td>
                            <td className="col2"></td>
                          </tr>
                          <tr>
                            <td className="col1">Téléphone</td>
                            <td className="col2">+33 (0) 5 96 42 31 67</td>
                          </tr>
                          <tr>
                            <td className="col1">mail</td>
                            <td className="col2">contact@groupe-gds.eu</td>
                          </tr>
                        </tbody>
                      </table>
                    </>
                    )}

                    { showContactGuyane && (
                    <> 
                      <table className="branch-details">
                        <tbody>
                          <tr>
                            <td className="col1">Adresse</td>
                            <td className="col2">607 route des Plages 97354 Rémire-Montjoly, <strong>Guyane</strong></td>
                          </tr>
                          <tr>
                            <td className="col1"></td>
                            <td className="col2"></td>
                          </tr>
                          <tr>
                            <td className="col1">Téléphone</td>
                            <td className="col2">+33 (0) 6 31 89 80 34</td>
                          </tr>
                          <tr>
                            <td className="col1">mail</td>
                            <td className="col2">contact@groupe-gds.eu</td>
                          </tr>
                        </tbody>
                      </table>
                    </>
                    )}

                    { showContactReunion && (
                    <> 
                      <table className="branch-details">
                        <tbody>
                          <tr>
                            <td className="col1">Adresse</td>
                            <td className="col2">16 rue Claude Chappe CS 71151 97829 LE PORT CEDEX, <strong>La Réunion</strong></td>
                          </tr>
                          <tr>
                            <td className="col1"></td>
                            <td className="col2"></td>
                          </tr>
                          <tr>
                            <td className="col1">Téléphone</td>
                            <td className="col2">+33 (0) 6 31 89 80 34</td>
                          </tr>
                          <tr>
                            <td className="col1">mail</td>
                            <td className="col2">contact@groupe-gds.eu</td>
                          </tr>
                        </tbody>
                      </table>
                    </>
                    )}
                    
                    { showContactMauritius && (
                    <> 
                      <table className="branch-details">
                        <tbody>
                          <tr>
                            <td className="col1">Adresse</td>
                            <td className="col2">19, Church Street PORT LOUIS, <strong>Mauritius</strong></td>
                          </tr>
                          <tr>
                            <td className="col1"></td>
                            <td className="col2"></td>
                          </tr>
                          <tr>
                            <td className="col1">Téléphone</td>
                            <td className="col2">+33 (0) 6 31 89 80 34</td>
                          </tr>
                          <tr>
                            <td className="col1">mail</td>
                            <td className="col2">contact@groupe-gds.eu</td>
                          </tr>
                        </tbody>
                      </table>
                    </>
                    )}

                </div>
                <div className="copyright">
                    <img src="/gds-footer.png" alt="groupe gds logo"/> 
                    <p>Tous les droits sont réservés Groupe Gds {currentMonth} {currentYear}.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer