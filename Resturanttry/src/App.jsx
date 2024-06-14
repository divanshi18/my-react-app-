
import './App.css'
import {BrowserRouter as Router, Routes , Route} from "react-router-dom" ;
import Header from "./Components/Header.jsx";
import Home from "./Components/Home.jsx";
import Footer from "./Components/Footer.jsx"
// import Servicecard from './Components/Servicecard';
import "./Home.css"
import './styles/Contact.css'; 
import Contact from "./Components/Contact.jsx";
import Services from './Components/Services.jsx';
import "./styles/Mediaquery.css"
function App() {
  

  return (
    <>
      <Router>
       <Header/>
       <Routes>
       <Route path= "/" element={<Home/>} />
       <Route path="/contact" element={<Contact/>}/>
       <Route path="/Services" element={<Services/>}/>
       {/* <Route path="/services" element={<Servicecard />} /> */}
       </Routes>
       <Footer />
      </Router>

    </>
  )
}

export default App
