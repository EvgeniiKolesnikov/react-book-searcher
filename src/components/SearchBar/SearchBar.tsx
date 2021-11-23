import { useEffect, useState } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './SearchBar.scss';

export const SearchBar: React.FC = () => {
  const [value, setValue] = useState('');
  const { fetchData, setDataQuery, setDataPage } = useActions();
  const { query, page } = useTypedSelector((state) => state.data);

  useEffect(() => {
    if (page >= 1) fetchData(query, page);
    // console.log('SB q =', query, 'p =', page);
  }, [query, page]);

  useEffect(() => {
    let timer = setTimeout(() => {
      if (value !== query) {
        newQuery();
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
          placeholder='Search books...'
          type='search'
          name='search'
          title='Enter a search query'
          value={value}
          onKeyDown={onKeyDown}
          onChange={(e) => setValue(e.target.value)}
        />
        <div
          className='input__clear'
          id='searchClear'
          unselectable='on'
          title='Clear'
          onClick={() => setValue('')}
          style={value ? { display: 'block' } : { display: 'none' }}
        ></div>
      </div>
      <button
        className='input__button'
        id='searchButton'
        title='Start the search'
        onClick={() => newQuery()}
      ></button>
    </div>
  );
};
