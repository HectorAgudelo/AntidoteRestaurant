import { NavBar } from './components/NavBar';
import { NavItem } from './components/NavListItems';
import { NavListContainer } from './components/NavListContainer';
import { NavLink } from './components/NavLink';

function App() {
  return (
    <NavBar>
      <NavListContainer>
        <NavItem>
          <NavLink href={'https://emotion.sh/docs/style'}>About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href={'https://emotion.sh/docs/style'}>Menu</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href={'https://emotion.sh/docs/style'}>
            Hours and Location
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href={'https://emotion.sh/docs/style'}>Order Online</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href={'https://emotion.sh/docs/style'}>Reservation</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href={'https://emotion.sh/docs/style'}>Contact</NavLink>
        </NavItem>
      </NavListContainer>
    </NavBar>
  );
}

export default App;
