import React, { useCallback, useRef } from 'react';
import { useEffect, useState } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './SearchBar.scss';

export const SearchBar: React.FC = () => {
  // const [value, setValue] = useState('');
  const { fetchData, setDataQuery, setDataPage } = useActions();
  const { query, page, loading } = useTypedSelector((state) => state.data);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  console.log(`render BAR , p=${page}, l=${loading}, q=${query}, v=${inputRef?.current?.value}`);

  // load/add new page
  useEffect(() => {
    // console.log('ef(query, page)', loading);
    if (page >= 1) fetchData(query, page);
    console.log(`load page p=${page}, l=${loading}, q=${query}, v=${inputRef?.current?.value}`);
  }, [query, page]);

  // debouce. Autoload the first page after 1 sec.
  // useEffect(() => {
  //   console.log('ef(timer)', loading);
  //   const timer = setTimeout(() => {
  //     updateQuery();
  //   }, 1000);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [value]);

  const updateQuery = () => {
    console.log('updateQuery in', loading);
    console.log('=== updateQuery ===', loading);
    console.log('v =', inputRef.current?.value);
    console.log('q = ', query);
    if (inputRef?.current?.value !== query) {
      console.log('=== updateQuery work ===', loading);
      setDataPage(1);
      setDataQuery(inputRef.current!.value);
    }
  };

  const handleClickButton = () => {
    inputRef.current?.focus();
    updateQuery();
  };

  const handleClearButton = () => {
    inputRef.current!.value = ''
    updateQuery();
  };

    // debouce function. Autoload the first page after 1 sec.
  const handleChangeInput = useCallback(() => {
    console.log('clearTimeout');
    clearTimeout(timerRef.current as NodeJS.Timeout);
    timerRef.current = setTimeout(() => {
      console.log('Timeout(1000)', 'q = ', query, inputRef.current!.value, loading);
      updateQuery();
    }, 1000);
  }, [query]);

  return (
    <div className='input'>
      <div className='input__box'>
        <input
          className='input__control'
          id='searchInput'
          ref={inputRef}
          placeholder='. . .'
          type='search'
          name='search'
          title='Введите запрос'
          // value={value}
          onKeyDown={(e) => e.key === 'Enter' && updateQuery()}
          // onChange={(e) => setValue(e.target.value)}
          onChange={handleChangeInput}
        />
        <div
          className='input__clear'
          id='searchClear'
          unselectable='on'
          // onClick={() => setValue('')}
          onClick={handleClearButton}
          style={inputRef.current?.value ? { display: 'block' } : { display: 'none' }}
        />
        <div
          className='input__button'
          id='searchButton'
          onClick={handleClickButton}
        />
      </div>
    </div>
  );
};
