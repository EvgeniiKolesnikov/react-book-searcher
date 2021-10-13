import { useState } from 'react';
import './SearchBar.scss';

interface ISearchBar {
  onSearch(searchValue: string): void;
}

export const SearchBar: React.FC<ISearchBar> = ({onSearch}) => {
  const [value, setValue] = useState<string>('');

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSearch(value);
      // console.log(value);
    }
  };

  const handleSubmit = () => {
    onSearch(value);
  };

  return (
    <div className='input'>
      <div className='input__box'>
        <input
          className='input__control'
          id='searchInput'
          placeholder='Search...'
          type='search'
          name='search'
          title='Search books'
          value={value}
          onKeyDown={handleKey}
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
        onClick={handleSubmit}
      >
        Search
      </button>
    </div>
  );
};
