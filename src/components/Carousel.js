import {useState, useEffect} from 'react';
import {sliderData} from "./data/DataSlider";
import {BsArrowDownCircle} from "react-icons/bs";
import '../style/Carousel.scss';


function Slider() {

  const [currentSlide, setCurrentSlide] = useState(0);
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
    <div className='slider'>

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
                        <a className='nav-link'>ACCUEIL</a>
                    </li>
                    <li className='link' >
                        <a className='nav-link'>A NOTRE PROPOS</a>
                    </li>
                    <li className='link'>
                        <a className='nav-link'>NOTRE EXPERTISE</a>
                    </li>
                    <li className='link'>
                        <a className='nav-link'>INNOVATION</a>
                    </li>
                    <li className='link'>
                        <a className='nav-link'>ACTUALITÉ</a>
                    </li>
                    <li className='link'>
                        <a className='nav-link'>CONTACTEZ-NOUS</a>
                    </li>
                </ul>
            </nav>
        </div>

        {/* Flèche pointé au bas  */}
        <div className = "arrowDown">
            <BsArrowDownCircle className = "arrowDownIcon"/>
        </div>

    </div>   
  )
}

export default Slider;