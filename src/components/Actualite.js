import React from 'react';
import "../style/Actualite.scss";

export default function Actualite() {
  return (
    <div className="actualite">
        <div className="title-container">
          <h1 className="title blue-title">Notre <br/><span>actualité</span></h1>
        </div>

        <div className="actu-container">
          {/*Les liens*/}
          <div className="nav-actu-container">
            <h1>Dernier poste</h1>
            <ul className="nav-actu">
              <li><a className="nav-actu-link active">2021</a></li>
              <li><a className="nav-actu-link">2020</a></li>
              <li><a className="nav-actu-link">Press</a></li>
            </ul>
          </div>

          {/* Les publications selon les dates */}
          <div className="publication">

            {/* Un article de presse */}
            <div className="singlePublication">
              <img src="\article1.jpg" alt="description"/>
              <p> 
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod 
                <a href="/"> Lire plus</a>
              </p>
            </div>

            {/* Un article de presse*/}
            <div className="singlePublication">
              <img src="\article2.jpg" alt="description"/>
              <p> 
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod 
                <a href=""> Lire plus</a>
              </p>
            </div>

            {/* Un article de presse*/}
            <div className="singlePublication">
              <img src="\article3.jpg" alt="description"/>
              <p> 
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod 
                <a href=""> Lire plus</a>
              </p>
            </div>


          </div>  

        </div>

    </div>
  )
}
