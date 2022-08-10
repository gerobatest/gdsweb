import React, {useEffect, useState} from 'react';
import { Parallax } from 'react-scroll-parallax';
import '../style/Innovation.scss';
import {BsArrowRightCircle} from "react-icons/bs";

export default function Innovation(props) {

  const Record = (props) => {
    <div className="sectionImage">
      <Parallax translateX={['-90px', '-400px']}> 
          <img src={props.record.imgPath} alt={props.record.imgAlt}/>
      </Parallax> 
    </div>
  }

  const [records, setRecords] = useState([]);

  // This method fetches the records from the database.
  /*useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:4000/innovation/`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setRecords(records);
    }

    getRecords();

    return;
  }, [records.length]);*/

  // This method will map out the records on the page
  function recordList() {
    return records.map((record) => {
      return (
        <Record
          record={record}
          key={record._id}
        />
      );
    });
  }



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
            <a href="https://gerotest.herokuapp.com" target="_blank" rel="noreferrer" className="geroba-link"><BsArrowRightCircle className="arrow-right"/> En savoir plus</a>
        </div>
        
        {/* L'image avec parralaxe */}
        {recordList()}


        {/* <div className="sectionImage">
          <Parallax translateX={['-90px', '-400px']}> 
              <img src="/tablette.png" alt="Tablette Geroba"/>
          </Parallax> 
        </div>
 */}
    </div>
  )
}










/*return (
  <div className="innovation" id="innovation">
      <div className="sectionTexte">
          <h1 className="title orange-title">Notre<br/><strong>innovation</strong></h1>
          <h1 className="secondTitle">Maitrise d'oeuvre</h1>

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
          <a href="https://gerotest.herokuapp.com" target="_blank" rel="noreferrer" className="geroba-link"><BsArrowRightCircle className="arrow-right"/> En savoir plus</a>
      </div>
      
      <div className="sectionImage">
        <Parallax translateX={['-90px', '-400px']}> 
            <img src="/tablette.png" alt="Tablette Geroba"/>
        </Parallax> 
      </div>

  </div>
)*/
