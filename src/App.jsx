import './App.scss'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header/Header'
import Home from './Pages/Home/Home'
import Packages from './Pages/Packages/Packages';
import Bike from './Pages/Bike/Bike';
import Carpool from './Pages/Carpool/Carpool';
import CarbonCal from './Pages/CarbonCal/CarbonCal';
import Footer from './components/Footer/Footer'
import SignUp from './Pages/SignUp/SignUp';
import SignIn from './Pages/SignIn/SignIn';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Packages" element={<Packages/>} />
          <Route path="/Bike-Sharing" element={<Bike/>} />
          <Route path="/Carpooling" element={<Carpool/>} />
          <Route path="/Carbon-Footprint-Calculator" element={<CarbonCal/>}/>
          <Route path="/SignIn" element={<SignIn/>} />
          <Route path="/SignUp" element={<SignUp/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
