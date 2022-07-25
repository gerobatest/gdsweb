import React from 'react';
import '../style/Expertise.scss';
import {BsArrowRightCircle} from "react-icons/bs";

export default function Expertise() {
  return (
    <div className="expertise" id="expertise">

        <div className="top-section">
          <h1 className="title blue-title">Notre<br/>
          <span>expertise</span>
          </h1>
        
          <div>
              <p>
                  L’activité d’études de Groupe GDS est organisée en huit domaines afin de répondre aux problématiques complexes des espaces
                  de déplacement. Cette organisation permet à Groupe GDS d’affecter aux projets, des équipes opérationnelles à la fois spécialisées
                  et pluridisciplinaires.
              </p>
              Groupe GDS est ainsi un partenaire pour :
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
          <li><a href="">Route et équipements de la route</a></li>
          <li><a href="">Signalétique</a></li>
          <li><a href="">Design et graphisme</a></li>
          <li><a href="">Déplacements et Aménagements</a></li>
          <li><a href="">Ingénierie du trafic</a></li>
          <li><a href="">Production et expertise de données territoriales</a></li>
          <li><a href="">Aide à la gestion des Collectivités</a></li>
        </ul>

        <hr/>

        <div className="nav-gallery">

          <div className="single-gallery">
            <img src="/gallery1.jpg" alt=""></img>
            <h3>Route et équipements de la route</h3>
            <button className="btn-gallery"><BsArrowRightCircle/> En savoir plus</button>
          </div>

          <div className="single-gallery">
            <img src="/gallery1.jpg" alt=""></img>
            <h3>Route et équipements de la route</h3>
            <button className="btn-gallery"><BsArrowRightCircle/> En savoir plus</button>
          </div>

          <div className="single-gallery">
            <img src="/gallery1.jpg" alt=""></img>
            <h3>Route et équipements de la route</h3>
            <button className="btn-gallery"><BsArrowRightCircle/> En savoir plus</button>
          </div>

          <div className="single-gallery">
            <img src="/gallery1.jpg" alt=""></img>
            <h3>Route et équipements de la route</h3>
            <button className="btn-gallery"><BsArrowRightCircle/> En savoir plus</button>
          </div>

          <div className="single-gallery">
            <img src="/gallery1.jpg" alt=""></img>
            <h3>Route et équipements de la route</h3>
            <button className="btn-gallery"><BsArrowRightCircle/> En savoir plus</button>
          </div>

          <div className="single-gallery">
            <img src="/gallery1.jpg" alt=""></img>
            <h3>Route et équipements de la route</h3>
            <button className="btn-gallery"><BsArrowRightCircle/> En savoir plus</button>
          </div>

          <div className="single-gallery">
            <img src="/gallery1.jpg" alt=""></img>
            <h3>Route et équipements de la route</h3>
            <button className="btn-gallery"><BsArrowRightCircle/> En savoir plus</button>
          </div>

          <div className="single-gallery">
            <img src="/gallery1.jpg" alt=""></img>
            <h3>Route et équipements de la route</h3>
            <button className="btn-gallery"><BsArrowRightCircle/> En savoir plus</button> 
          </div> 
        </div>


        <div className="gallery-content">
          <div className="sectionTexte">
            <div>
              <h1>Route et équipements de la route</h1>
              <p>Notre savoir-faire intègre la signalisation au sens large, les dispositifs de mise en sécurité d’un itinéraire ou de
                points particuliers liés à son utilisation (points d’arrêts ou abris bus, chantier, etc.), mais aussi les dispositifs
                d’exploitation du réseau.</p>

              Cela concerne les sous-domaines suivants :
              <ul>
                <li>Signalisation de jalonnement (diagnostic, schéma directeur, projet de définition, …).</li>
                <li>Signalisation de police (diagnostic, plan de signalisation, rédaction des arrêtés, …).</li>
                <li>Signalisation horizontale (diagnostic, plan de marquage, récolement, …).</li> 
                <li>Autres équipements de la route : signalisation lumineuse tricolore (SLT), dispositifs de retenue (DR).</li>
              </ul>

              Nos interventions portent sur tous types de projets :
              <ul>
                <li>Gestion au quotidien du domaine public et de ses équipements.</li>
                <li>Expertise et définition de l’amélioration de la situation existante.</li>
                <li>Étude sur des opérations de travaux neufs.</li> 
              </ul>

              <p>
                Nous garantissons à la fois notre capacité à réaliser les études attendues ainsi que l’utilisation de logiciels
                métiers dédiés pour assurer la cohérence du traitement.
              </p>

              Il peut s’agir également d’études de sécurité routière.
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

              <p>
                Dans tous les cas, la concertation avec les utilisateurs et, éventuellement, les différents gestionnaires de voirie,
                est obligatoire pour la bonne compréhension du projet.
              </p>
            </div>
            <div>
              <button>Voir nos références</button>
            </div>
          </div>

          <img src="" alt=""/>


        </div>



    </div>
  )
}
