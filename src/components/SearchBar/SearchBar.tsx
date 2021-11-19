import { useEffect, useState } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './SearchBar.scss';

export const SearchBar: React.FC = () => {
  const [value, setValue] = useState('');
  const { fetchData, setDataQuery, setDataPage } = useActions();
  const { query, page } = useTypedSelector((state) => state.data);

  useEffect(() => {
    // setDataPage(1);
    if (page === 1) fetchData(query, page);
    console.log('SBQuer q =', query, 'p =', page);
  }, [query]);

  useEffect(() => {
    if (page > 1) fetchData(query, page);
    console.log('SBPage q =', query, 'p =', page);
  }, [page]);

  useEffect(() => {
    let timer = setTimeout(() => {
      if (value !== query) {
        newQuery();
        // console.log('timer');
      }
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      newQuery();
    }
  };

  const newQuery = () => {
    setDataPage(1);
    setDataQuery(value);
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
        onClick={() => newQuery()}
      >
        Search
      </button>
    </div>
  );
};
