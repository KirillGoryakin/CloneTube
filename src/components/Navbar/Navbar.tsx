import style from './style.module.scss';
import logo from 'assets/images/logo.png';
import { SearchBar } from './SearchBar';

const Navbar = () => {
  return (
    <header className={style.header}>
      <nav>
        <a href='/' className={style.logo}>
          <img src={logo} alt='CloneTube' />
        </a>

        <SearchBar />
      </nav>
    </header>
  );
}

export { Navbar };