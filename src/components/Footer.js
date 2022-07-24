import React, {useState} from 'react';
import '../style/Footer.scss';
import {FiSend} from 'react-icons/fi';

import Map from "./Map/Map";
import Layers from "./Map/Layers";
import TileLayer from "./Map/TileLayer";
import VectorLayer from "./Map/VectorLayer";
import osm from "./Map/osm";
import vector from "./Map/vector";
import Controls from "./Map/Controls";
import FullScreenControl from "./Map/FullScreenControl";
import { Circle as CircleStyle,Style } from 'ol/style';
import { fromLonLat, get } from 'ol/proj';
import GeoJSON from 'ol/format/GeoJSON';
import mapConfig from "../config.json";
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import {Icon} from 'ol/style';


const iconFeature = new Feature({
    geometry: new Point([1.253639, 44.414870]),
    name: '81 rue du Moulin, 46140 SAUZET, France'
});

const iconMauritius = new Feature({
    geometry: new Point([-20.16361347403224, 57.507731726107316]),
    name: '19, Church Street PORT LOUIS'
});
  
  const iconStyle = new Style({
    image: new Icon({
      anchor: [0.5, 46],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      src: '/location.avif',
      scale: 1.5
    }),
  });

  iconFeature.setStyle(iconStyle);
  iconMauritius.setStyle(iconStyle);

  
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

    const [showCancelButton, setShowCancelButton] = useState(false); //Bouton annuler
    const [showSendButton, setShowSendButton] = useState(false);  //Bouton envoyer 

     //Les valeurs depuis la forme
    const [formVal, setFormVal] = useState({
        name:'',
        phone:'',
        email:'',
        message:'',
        error: null
    });

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

    const handleLocation = () => {
        console.log("Find location");
        //setShowLayer6(!showLayer6);
        setCenter( 55.317608, -20.950888);
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
                <div>
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
                            name="fname" 
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
                            name='message' 
                            id="message"
                            placeholder=" " 
                            onChange={handleChange} 
                            required="required"
                            />
                            <span className="floating-label message" >Votre message</span> 
                        </div>
                        <div className="form-btn">
                            {/* {showCancelButton && ( */}
                            {/* <button onClick={cancelForm} type="button">
                                ANNULER
                            </button> */}
                            {/* )} */}
                            {/* {showSendButton && ( */}
                            <button
                            type="submit">
                            <FiSend/> ENVOYER
                            </button>
                            {/* )} */}
                        </div>
                    </form>
                </div>   
                <div className="details-addresse">
                    <h1 className="footer-title">Nous rencontrer</h1>
                    <div className="places-list">
                        <div className="single-place">
                            <img className="placeBW" src="/ligneSensBW.png" alt=""/>
                            <a >
                                <img className="place-hover" src="/ligneSensCol.png" alt=""/>
                            </a>
                        </div>
                        <div className="single-place">
                            <img className="placeBW" src="/GuadeloupeBW.png" alt=""/>
                            <a >
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
                            <a >
                                <img className="place-hover" src="GuyaneCol.png" alt=""/>
                            </a>
                        </div>
                        <div className="single-place">
                            <img  className="placeBW"src="ReunionBW.png" alt=""/>
                            <a >
                                <img className="place-hover" src="ReunionCol.png" alt=""/>
                            </a>
                        </div>

                        <button onClick={handleLocation} type="button">
                            <div className="single-place">
                                <img className="placeBW" src="MauritiusBW.png" alt=""/>
                                <img className="place-hover" src="MauritiusCol.png" alt=""/>
                            </div> 
                        </button>
                    </div>

                    {/* Test */}
                    <input
                        type="checkbox"
                        checked={showLayer5}
                        onChange={event => setShowLayer5(event.target.checked)}
                    /> Montre La réunion

                    <input
                        type="checkbox"
                        checked={showLayer6}
                        onChange={event => setShowLayer6(event.target.checked)}
                    /> Montre Maurice
                    {/* Fin test*/}

                    <p>Addresse <span className="footer-info">81 rue du Moulin, 46140 SAUZET, France</span></p>
                    <p>Téléphone <span className="footer-info">+33 (0) 6 31 89 80 34</span ></p>
                    <p>E-mail <span className="footer-info">contact@groupe-gds.eu</span></p>

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