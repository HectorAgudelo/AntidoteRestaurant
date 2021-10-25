import { NavigationBar } from './components/NavBar/NavigationBar';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
        <NavigationBar />
      </>
    </Router>
  );
}

export default App;
