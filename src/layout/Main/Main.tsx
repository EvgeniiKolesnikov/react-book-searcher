import { useState } from 'react';
import { BooksList, Preloader, SearchBar } from '../../components';
import { IBookCard, IData } from '../../interfaces/interfaces';
import { OpenLibraryService } from '../../services/OpenLibraryService';
import styles from './Main.module.scss';

export const Main: React.FC = () => {
  const [booksList, setBooksList] = useState<IBookCard[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSearch = async (searchValue: string) => {
    setBooksList([]);
    setIsLoading(true);
    const data:IData = await OpenLibraryService.searchBooks(searchValue);
    console.log(data);
    data.docs.forEach((item: IBookCard) => {
      item.id = item.key.split("/").pop();
    });
    setBooksList(data.docs);
    setIsLoading(false);
    console.log(data.docs);
  };
  return (
    <main className={styles.main}>
      <div className={styles.main__container}>
        <SearchBar onSearch={handleSearch} />
        {isLoading && <Preloader />}
        {booksList.length > 0 && <BooksList booksList={booksList} />}
      </div>
    </main>
  );
};
