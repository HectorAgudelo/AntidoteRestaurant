import { NavigationBar } from './components/NavBar/NavigationBar';
import { Gallery } from './components/Gallery/Gallery';
import { LandingPage } from './components/LandingPage/LandingPage';
import {BasicContact} from './components/BasicContact/BasicContact';
import { BrowserRouter as Router } from 'react-router-dom';
import './style.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavigationBar />
        <LandingPage/>
        <BasicContact />
      </div>
    </Router>
  );
}

export default App;
