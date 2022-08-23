import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import LandingPage from "./Components/Pages/LandingPage";
import HomePage from './Components/Pages/HomePage';
import Signup from './Components/Pages/Signup';
import Signin from './Components/Pages/Signin';
import Dashboard from './Components/Pages/Dashboard';

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route path='/home' element={<HomePage />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/signin' element={<Signin />}/>
          <Route path='/signup' element={<Signup />}/>
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
