import { Outlet } from 'react-router';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

const Layout = () => {
  return (
    <div>
      <Navbar />
      
      <div className='main-container'>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export { Layout };