import { Outlet } from 'react-router';
import { Navbar } from './Navbar';

const Layout = () => {
  return (
    <div>
      <Navbar />
      
      <div className='main-container'>
        <Outlet />
      </div>
    </div>
  );
}

export { Layout };