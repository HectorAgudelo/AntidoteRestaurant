import { NavigationBar } from './components/NavBar/NavigationBar';
import { OnlineOrder } from './components/OnlineOrder/OnlineOrder';
import { Gallery } from './components/Gallery/Gallery';
import { LandingPage } from './components/LandingPage/LandingPage';
import { Reservation } from './components/Reservation/Reservation';
import { Footer } from './components/Footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import './style.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavigationBar />
      {/* <Reservation /> */}
        {/* <OnlineOrder/> */}
        {/* <Gallery/> */}
        <LandingPage/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
