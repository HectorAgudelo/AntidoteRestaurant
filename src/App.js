import { NavigationBar } from './components/NavBar/NavigationBar';
import { OnlineOrder } from './components/OnlineOrder/OnlineOrder';
import { Gallery } from './components/Gallery/Gallery';
import { LandingPage } from './components/LandingPage/LandingPage';
import { Reservation } from './components/Reservation/Reservation';
import { Footer } from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './style.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavigationBar />
        <Switch>
          <Route exact path='/' component={LandingPage} />

          <Route path='/gallery' component={Gallery} />

          <Route path='/order-online' component={OnlineOrder} />

          <Route path='/reservations' component={Reservation} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
