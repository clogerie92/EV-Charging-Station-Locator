import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import LandingPage from "./Components/Pages/LandingPage";
import HomePage from './Components/Pages/HomePage';
import Signup from './Components/Pages/Signup';
import Signin from './Components/Pages/Signin';
import Dashboard from './Components/Pages/Dashboard';

function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <HomePage />
      <Signup />
      <Signin />
      <Dashboard />
      <Footer />
    </>
  );
}

export default App;
