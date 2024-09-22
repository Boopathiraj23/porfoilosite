
import './App.css';
import Aboutpage from './components/Aboutpage';
import Contact from './components/Contact';
// import { BeakerIcon } from '@heroicons/react/24/solid'
import Header from './components/Header';
import Homepage from './components/Homepage';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Footer from './components/Footer';
  
function App() {
  return (
    <>
    <Header/>
    <Homepage/>
    <Aboutpage/>
    <Projects/>
    <Resume/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
