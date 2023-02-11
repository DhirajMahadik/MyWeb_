import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Home from './Components/Home';
import Skilss from './Components/Skilss';
import { BrowserRouter , Route, Routes} from 'react-router-dom';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import LandingPagePlan from './Components/LandingPagePlan';
import PersonalPlan from './Components/PersonalPlan';
import ComercialPlan from './Components/ComercialPlan';
function App() {
  return (
     
      <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/skills" element={<Skilss />}/>
          <Route exact path="/contact" element={<Contact />}/>
          <Route exact path="/landingPage_plane" element={<LandingPagePlan />}/>  
          <Route exact path="/personal_plane" element={<PersonalPlan/>}/>
          <Route exact path="/comercial_plane" element={<ComercialPlan/>}/>
          
        </Routes>
        <Footer/>
      </BrowserRouter>
   
      
     
    
  );
}

export default App;
