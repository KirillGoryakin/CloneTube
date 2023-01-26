import style from './style.module.scss';
import { TfiSearch } from 'react-icons/tfi';
import { useNavigate } from 'react-router';

type SendFormEvent = {
  target: {
    s: { value: string; };
  };
};

const SearchBar = () => {
  const navigate = useNavigate();

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();

    const
      { target } = e as typeof e & SendFormEvent,
      s = target.s.value.trim();

    navigate(`/search?s=${s}`);
  }
  
  return (
    <form
      className={style.searchBar}
      onSubmit={handleSubmit}
    >
      <label className={style.inputWrap}>
        <input name='s' placeholder='Search...' />
      </label>
      <button type='submit'><TfiSearch /></button>
    </form>
  );
}

export { SearchBar };