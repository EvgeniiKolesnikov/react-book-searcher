import React, { useRef } from 'react';
import { useEffect, useState } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './SearchBar.scss';

export const SearchBar: React.FC = () => {
  const [value, setValue] = useState('');
  const { fetchData, setDataQuery, setDataPage } = useActions();
  const { query, page } = useTypedSelector((state) => state.data);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // load/add new page
  useEffect(() => {
    if (page >= 1) fetchData(query, page);
    // console.log(`load page p=${page}, l=${loading}, q=${query}, v=${value}`);
  }, [query, page]);

  // debouce. Autoload the first page after 1 sec.
  useEffect(() => {
    const timer = setTimeout(() => {
      updateQuery();
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  const updateQuery = () => {
    if (value !== query) {
      setDataPage(1);
      setDataQuery(value);
    }
  };

  const handleClickButton = () => {
    updateQuery();
    inputRef.current?.focus();
  };

  const handleClearButton = () => {
    setValue('');
    inputRef.current?.focus();
  };

  // console.log(`render BAR > p=${page}, l=${loading}, q=${query}, v=${value}`);

  return (
    <div className='input'>
      <div className='input__box'>
        <input
          className='input__control '
          ref={inputRef}
          placeholder='. . .'
          type='search'
          name='search'
          title='Введите запрос'
          value={value}
          onKeyDown={(e) => e.key === 'Enter' && updateQuery()}
          onChange={(e) => setValue(e.target.value)}
        />
        <div
          className='input__clear'
          onClick={handleClearButton}
          style={value ? { display: 'block' } : { display: 'none' }}
        />
        <button
          className='input__button'
          onClick={handleClickButton}
        />
      </div>
    </div>
  );
};
