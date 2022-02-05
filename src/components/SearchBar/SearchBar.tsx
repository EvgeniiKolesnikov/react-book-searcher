import React from 'react';
import { useEffect, useState } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './SearchBar.scss';

export const SearchBar: React.FC = () => {
  const [value, setValue] = useState('');
  const { fetchData, setDataQuery, setDataPage } = useActions();
  const { query, page, data, loading } = useTypedSelector(
    (state) => state.data
  );
  // console.log('render BAR', value, query, page, loading);

  // load/add new page
  useEffect(() => {
    // console.log('ef(query, page)', loading);
    if (page >= 1) fetchData(query, page);
    console.log(`query = ${query}, page = ${page}, load new page, ${loading}`);
    // console.log(data);
  }, [query, page]);

  // debouce. Autoload the first page after 1 sec.
  useEffect(() => {
    // console.log('ef(timer)', loading);
    const timer = setTimeout(() => {
      // console.log('ef(updateQuery timer on)', loading);
      updateQuery();
      // console.log('ef(updateQuery timer off)', loading);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    // console.log('onKeyDown');
    if (e.key === 'Enter') {
      // console.log('updateQuery onKeyDown', loading);
      updateQuery();
    }
  };

  const updateQuery = () => {
    // console.log('updateQuery in', loading);
    !value && document.getElementById('searchInput')?.focus();
    if (value !== query) {
      setDataPage(1);
      setDataQuery(value);
    }
  };

  return (
    <div className='input'>
      <div className='input__box'>
        <input
          className='input__control'
          id='searchInput'
          placeholder='. . .'
          type='search'
          name='search'
          title='Введите запрос'
          value={value}
          onKeyDown={onKeyDown}
          onChange={(e) => setValue(e.target.value)}
        />
        <div
          className='input__clear'
          id='searchClear'
          unselectable='on'
          onClick={() => setValue('')}
          style={value ? { display: 'block' } : { display: 'none' }}
        />
        <button
          className='input__button'
          id='searchButton'
          onClick={() => updateQuery()}
        />
      </div>
    </div>
  );
};
