import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import LandingPage from "./Components/Pages/LandingPage";
import HomePage from './Components/Pages/HomePage';
import Signup from './Components/Pages/Signup';

function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <HomePage />
      <Signup />
      <Footer />
    </>
  );
}

export default App;
