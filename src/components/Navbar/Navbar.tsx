import style from './style.module.scss';
import logo from 'assets/images/logo.png';
import { SearchBar } from './SearchBar';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className={style.header}>
      <nav>
        <Link to='/' className={style.logo}>
          <img src={logo} alt='CloneTube' />
        </Link>

        <SearchBar />
      </nav>
    </header>
  );
}

export { Navbar };