import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import {GrAddCircle} from 'react-icons/gr';
//import EmployeeMauritius from "./DataMauritius";
import 'react-alice-carousel/lib/alice-carousel.css';
import '../style/APropos.scss';

export default function APropos() {

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        993: { items: 3 },
        1281: { items: 5},
        2560: { items: 6}
    };

    const EmployeeMauritius = [
        {
            nom: 'Jimmy Mayotte', 
            position: 'Directeur Exécutif', 
            mail: 'lj.mayotte@groupe-gds.eu',
            couleurMail: '#82368C',
            imgPath: '/woman.png'
        },
        {
            nom: 'Deborah Noirette', 
            position: 'Responsable Entreprise', 
            mail: 'd.noirette@groupe-gds.eu ',
            couleurMail: '#82368C',
            imgPath: '/woman.png'
        },
        {
            nom: 'José Rakotondrazafy', 
            position: 'Déveoppeur Team Lead', 
            mail: 'jt.rakotondrazafy@groupe-gds.eu',
            couleurMail: '#82368C',
            imgPath: '/woman.png'
        }
    ];
    
    const items = [  
        EmployeeMauritius.map((item, index) => (    
            <div key="item" className="item" data-value="1">
                <img src={item.imgPath} alt=""/>
                <p className="emp-btn"><GrAddCircle className="plus-info"/></p>
                <div className="employeeInfo">
                    <h3 className="name"><b>{item.nom}</b></h3>
                    <p className="function">{item.position}</p>
                    <p ><a className="email" style={{color: item.couleurMail}} href={'mailto: ' + item.mail + ''}>{item.mail}</a></p>
                </div>
            </div>,
        ))
    ];


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
                    <button type="button">
                        <div className="single-place">
                            <img className="placeBW" src="MauritiusBW.png" alt=""/>
                            <img className="place-hover" src="MauritiusCol.png" alt=""/>
                        </div> 
                    </button>
                </div>
                 {/* Les différentes branches */}
            </div>
        </div>

        <div className="about-invisible">
            <div className="about-branch">
                <div className="fill"></div>
                <div className="branch-details">
                    <h1>GDS Mauritius</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                        aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
                        commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu
                        feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te
                        feugait nulla facilisi.
                        Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                    </p>
                </div>
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

            {/* <div className="employee-slider">
            </div> */}

        </div> 
    </div>
  )
}
