import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import LandingPage from "./Components/Pages/LandingPage";
import HomePage from './Components/Pages/HomePage';
import Signup from './Components/Pages/Signup';
import Signin from './Components/Pages/Signin';

function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <HomePage />
      <Signin />
      <Signup />
      <Footer />
    </>
  );
}

export default App;
