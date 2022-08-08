import {useState, useEffect} from 'react';
import {sliderData} from "./data/DataSlider";
import {Link} from 'react-scroll';
import {BsArrowDownCircle, BsArrowUpCircleFill} from "react-icons/bs";
import '../style/Carousel.scss';


function Slider() {

    const [currentSlide, setCurrentSlide] = useState(0);
    //montre ou cache bouton haut de page 
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
        });
    }, []);


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    };

    const slideLength = sliderData.length;
    const autoScroll = true;
    let slideInterval;
    let intervalTime = 5000;

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    };

    function auto () {
        slideInterval = setInterval(nextSlide, intervalTime)
    }

    useEffect(() =>{
        setCurrentSlide(0)
    }, [])

    useEffect(() =>{
        if (autoScroll){
            auto();
        }
        return () => clearInterval(slideInterval);
        }, [currentSlide]);
        const moveDot = index => {
        setCurrentSlide(index)
    }

    return (
    <div className='slider' id="accueil">

        {sliderData.map((slide, index) =>{
            return(     
                <div className={index === currentSlide ?
                  "slide current" : "slide"} key = {index}>
                      {index === currentSlide && (
                          <>
                              <img src={slide.image} alt="slide"/>
                          </>          
                      )}
                </div>         
            ) 
        })}
        
        <div className='container-dots'> 
            {Array.from({length: 3}).map((item, index,) => (
                <div key={index}
                onClick={() => moveDot(index + 0)}
                className={currentSlide === index + 0? "dot active" : "dot"}></div>
            ))}
        </div>

       {/* Barre de navigation */}
        <div className='navbar'>
            <nav className='header'>
                <ul className='navlinks'>
                    <li className='link'>
                        <Link className='nav-link' to="accueil" spy={true} smooth={true} duration={1000} offset={0}>ACCUEIL</Link>  
                    </li>
                    <li className='link' >
                        <Link className='nav-link' to="about" spy={true} smooth={true} duration={1000} offset={0}>A NOTRE PROPOS</Link>  
                    </li>
                    <li className='link'>
                        <Link className='nav-link' to="expertise" spy={true} smooth={true} duration={1000} offset={0}>NOTRE EXPERTISE</Link>  
                    </li>
                    <li className='link'>
                        <Link className='nav-link' to="innovation" spy={true} smooth={true} duration={1000} offset={0}>INNOVATION</Link> 
                    </li>
                    <li className='link'>
                        <Link className='nav-link' to="actualite" spy={true} smooth={true} duration={1000} offset={0}>ACTUALITÉ</Link> 
                    </li>
                    <li className='link'>
                        <Link className='nav-link' to="contact" spy={true} smooth={true} duration={1000} offset={0}>CONTACTEZ-NOUS</Link> 
                    </li>
                </ul>
            </nav>
        </div>

        {/* Flèche pointé au bas  */}
        <div className = "arrowDown">
            <BsArrowDownCircle className = "arrowDownIcon"/>
        </div>

        {/* Flèche qui remonte la page */}
        {showButton && (
            <Link to="/" onClick={scrollToTop} className="btn-top">
                <BsArrowUpCircleFill size="32px" color="$grey-footer"/>
            </Link>
        )}

    </div>   
  )
}

export default Slider;