import { useState } from 'react';
import './SearchBar.scss';

// interface ISearchBar {
//   onSearch(searchValue: string): void;
// }

export const SearchBar: React.FC<any> = () => {
  const [value, setValue] = useState<string>('');
  // const [booksList, setBooksList] = useState<IBookCard[]>([]);
  // const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSearch = async (searchValue: string) => {
    // setBooksList([]);
    // setIsLoading(true);
    // const data:IBooksData = await OpenLibraryService.searchBooks(searchValue);
    // console.log(data);
    // data.docs.forEach((item: IBookCard) => {
    //   item.id = item.key.split("/").pop();
    // });
    // setBooksList(data.docs);
    // setIsLoading(false);
    // console.log(data.docs);
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSearch(value);
      console.log(value);
    }
  };

  const handleSubmit = () => {
    onSearch(value);
    console.log(value);
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
