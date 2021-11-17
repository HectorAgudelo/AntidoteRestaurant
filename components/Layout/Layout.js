import { Footer } from '../Footer/Footer';
import { NavigationBar } from '../NavBar/NavigationBar';

const layoutStyle = {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
  position: 'absolute',
  top: '0px',
  right: '0px',
  bottom: '0px',
  left: '0px',
};

const contentStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
};

export default function Layout({ children }) {
  return (
    <div className='layout' style={layoutStyle}>
      <NavigationBar />
      <div className='content' style={contentStyle}>
        {children}
      </div>
      <Footer />
    </div>
  );
}
