import { useState } from 'react';
import { BooksList, Preloader, SearchBar } from '../../components';
import { IBookCard, IBooksData } from '../../interfaces/interfaces';
import { OpenLibraryService } from '../../services/OpenLibraryService';
import './Main.scss';

export const Main: React.FC = ({children}) => {
  // const [booksList, setBooksList] = useState<IBookCard[]>([]);
  // const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSearch = async (searchValue: string) => {
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
  return (
    <main className='main'>
      <div className='main__container'>
        {/* <SearchBar onSearch={handleSearch} /> */}
        {children}
        {/* {booksList.length > 0 && <BooksList booksList={booksList} />} */}
      </div> 
      
    </main>
  );
};
