import { Footer } from '../Footer/Footer';
import { NavigationBar} from '../NavBar/NavigationBar';

export default function Layout({ children }) {
  return (
    <div>
      <NavigationBar />
      {children}
      <Footer />
    </div>
  );
}
