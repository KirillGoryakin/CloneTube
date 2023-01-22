import style from './style.module.scss';
import { TfiSearch } from 'react-icons/tfi';

type SendFormEvent = {
  target: {
    s: { value: string; };
  };
};

const SearchBar = () => {

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();

    const
      { target } = e as typeof e & SendFormEvent,
      s = target.s.value.trim();

    // Search...
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