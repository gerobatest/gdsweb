import Navbar from "./components/Navbar";
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <>
      <div className="superContainer">
        <ParallaxProvider> 
          <Navbar/>
        </ParallaxProvider>
      </div>
    </>
  );
}
export default App;