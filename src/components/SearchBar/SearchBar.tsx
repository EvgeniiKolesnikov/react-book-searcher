import { useEffect, useState } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './SearchBar.scss';

export const SearchBar: React.FC = () => {
  const [value, setValue] = useState('');
  const { fetchData, setDataQuery } = useActions();
  const { query, page } = useTypedSelector((state) => state.data);

  useEffect(() => {
    fetchData(query, page);
  }, [query]);

  useEffect(() => {
    let timer = setTimeout(() => {
      if (value !== query) {
        setDataQuery(value);
      }
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      setDataQuery(value);
    }
  };

  return (
    <div className='input'>
      <div className='input__box'>
        <input
          className='input__control'
          id='searchInput'
          placeholder='Search book...'
          type='search'
          name='search'
          title='Search books'
          value={value}
          onKeyDown={onKeyDown}
          onChange={(e) => setValue(e.target.value)}
        />
        <div
          className='input__clear'
          id='searchClear'
          unselectable='on'
          title='Clear'
        ></div>
      </div>
      <button
        className='input__button'
        id='searchButton'
        onClick={() => setDataQuery(value)}
      >
        Search
      </button>
    </div>
  );
};
