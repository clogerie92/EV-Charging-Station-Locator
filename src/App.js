import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import LandingPage from "./Components/Pages/LandingPage";
import HomePage from './Components/Pages/HomePage';

function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
