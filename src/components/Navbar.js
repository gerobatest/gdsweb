import React, {useState} from 'react';
import {Link} from 'react-scroll';
import * as IoIcons from 'react-icons/io';
import * as VscIcons from 'react-icons/vsc'
import '../style/Navbar.scss';
import Carousel from "./Carousel";
import APropos from "./APropos";
import Expertise from "./Expertise";
import Innovation from "./Innovation";
import Actualite from "./Actualite";
import Collaborations from "./Collaborations";
import Footer from "./Footer";
import Fill from "./Fill";



 function Navbar() {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
  return (
    <>
     <div>
        <section className='section' id='carousel'><Carousel /></section>

            <div className='Navbarfloat' id='Home'>

                <div to="#" className='menu-bars'>
                    <VscIcons.VscMenu onClick={showSidebar} />
                </div>  

                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='nav-item'>
                            <Link activeClass='actives' to='carousel' className='nav-links' smooth={true}>
                            ACCUEIL
                            </Link> 
                        </li>
                        <li className='nav-item'>
                            <Link spy={true} smooth={true} offset={-100} duration={1000} activeClass='actives' to='apropos' className='nav-links'  >
                            A NOTRE PROPOS
                            </Link> 
                        </li>
                        <li className='nav-item'>
                            <Link spy={true} smooth={true} offset={-50} duration={1000} activeClass='actives' to='expertise' className='nav-links' >
                            NOTRE EXPERTISE
                            </Link> 
                        </li>
                        <li className='nav-item'>
                            <Link spy={true} smooth={true} offset={-200} duration={1000} activeClass='actives' to='innovation' className='nav-links'>
                            INNOVATION
                            </Link> 
                        </li>
                        <li className='nav-item'>
                            <Link spy={true} smooth={true} offset={-200} duration={1000} activeClass='actives' to='actu' className='nav-links' >
                            ACTUALITÉ
                            </Link> 
                        </li>
                        <li className='nav-item'>
                            <Link spy={true} smooth={true} offset={-200} duration={1000} activeClass='actives' to='nous' className='nav-links' >
                            CONTACTEZ-NOUS
                            </Link> 
                        </li>
                        <li className='nav-item' style={{display: "none"}}>
                            <Link spy={true} smooth={true} offset={-200} duration={1000} activeClass='actives' to='nous' className='nav-links' >
                            Fill
                            </Link> 
                        </li>

                        <li className='navbar-toggle'>
                            <div to='#' className='menu-barss'>
                                <IoIcons.IoIosCloseCircleOutline/>
                            </div>
                        </li>

                    </ul>
                </nav>
            </div>   

           <section  id='apropos'>
                <APropos />
            </section> 
           <section  id='expertise'>
                <Expertise />
            </section> 
           <section  id='innovation'>
                <Innovation />
            </section> 
           <section  id='actu'>
                <Actualite/>
                <Collaborations/>
           </section> 
           <section  id='nous'>
                <Footer/>
            </section> 
            <section  id='nous'>
                <Fill/>
            </section> 
        </div>
    </>
  );
}
export default Navbar;