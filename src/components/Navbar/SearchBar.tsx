import style from './style.module.scss';
import { useContext, createRef } from 'react';
import { TfiSearch } from 'react-icons/tfi';
import { useNavigate } from 'react-router';
import { searchContext } from './Navbar';
import ClickAwayListener from 'react-click-away-listener';

type SendFormEvent = {
  target: {
    s: { value: string; };
  };
};

const SearchBar = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useContext(searchContext);
  const formRef = createRef<HTMLFormElement>();
  const inputRef = createRef<HTMLInputElement>();
  const mobile = window.innerWidth <= 600;

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();

    const
      { target } = e as typeof e & SendFormEvent,
      s = target.s.value.trim();

    if (!s) return;
      
    navigate(`/search?s=${s}`);
  }

  const handleMobileButtonClick = () => {
    setSearch(true);
    formRef.current?.classList.add(style.show);
    inputRef.current?.focus();
  }

  const handleClickAway = () => {
    if (!mobile) return;

    formRef.current?.classList.remove(style.show);
    setSearch(false);
  }
  
  return (
    <>
      <ClickAwayListener onClickAway={handleClickAway}>
        <form
          className={style.searchBar}
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <label className={style.inputWrap}>
            <input
              name='s'
              placeholder='Search...'
              ref={inputRef}
            />
          </label>
          <button type='submit' className={style.submit}><TfiSearch /></button>
        </form>
      </ClickAwayListener>

      {mobile && !search && (
        <button
          className={style.mobileSearchButton}
          onClick={handleMobileButtonClick}
        >
          <TfiSearch />
        </button>
      )}
    </>
  );
}

export { SearchBar };