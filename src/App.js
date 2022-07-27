import Carousel from "./components/Carousel";
import APropos from "./components/APropos";
import Expertise from "./components/Expertise";
import Innovation from "./components/Innovation";
import Actualite from "./components/Actualite";
import Collaborations from "./components/Collaborations";
import Footer from "./components/Footer";
import { ParallaxProvider } from 'react-scroll-parallax';


function App() {
  return (
    <>
      {/**/}
      <Carousel/>
      <APropos/>
      <Expertise/>
      <ParallaxProvider> 
        <Innovation/> 
      </ParallaxProvider>
      {/**/}<Actualite/>
      <Collaborations/> 
      <Footer/>
      
    </>
  );
}

export default App;
