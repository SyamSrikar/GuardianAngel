import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';
import Schedule from './Components/Schedule';
import Speciality from './Components/Speciality';
import Contact from './Components/Contact';
import Faq from './Components/Faq';
import Work from './Components/Work';
import {useEffect,useState} from 'react'
import Treatment from './Components/Treatment';


const App=()=> {

  const [click,setClick]=useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);
const [isMobile,setIsMobile]=useState(false)
useEffect(() => {
  setIsMobile(width<=1000);
}, [width])


  return (
    <>
      <Nav val={isMobile}/>
      <Home val={isMobile}/>
      <About val={isMobile}/>
      <Treatment val={isMobile} />
      <Schedule val={isMobile}/>
      <Work val={isMobile}/>
      <Faq val={isMobile} />
      <Speciality val={isMobile}/>
      <Contact val={isMobile}/>
      
      
    </>
  );
}

export default App;
