import style from './style.module.scss';
import logo from 'assets/images/logo.png';
import { SearchBar } from './SearchBar';
import { Link } from 'react-router-dom';
import { createContext, useState } from 'react';

type SearchContext = [boolean, (value: boolean) => void];
export const searchContext = 
  createContext<SearchContext>([false, () => {}]);

const Navbar = () => {
  const mobile = window.innerWidth <= 600;
  const [search, setSearch] = useState(false);
  
  return (
    <header className={style.header}>
      <nav>
        {mobile && search ? null : (
          <Link to='/' className={style.logo}>
            <img src={logo} alt='CloneTube' />
          </Link>
        )}

        <searchContext.Provider value={[search, setSearch]}>
          <SearchBar />
        </searchContext.Provider>
      </nav>
    </header>
  );
}

export { Navbar };