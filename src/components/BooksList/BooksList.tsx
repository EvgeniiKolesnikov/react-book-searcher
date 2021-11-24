import { useTypedSelector } from '../../hooks/useTypedSelector';
import {
  BookCard,
  BooksListInfo,
  Error,
  Preloader,
  PreloaderMini,
  ZeroBook,
} from '..';

import './BooksList.scss';
import { useEffect } from 'react';

export const BooksList: React.FC = () => {
  const { data, loading, error, query, page } = useTypedSelector(
    (state) => state.data
  );

  useEffect(() => {
    if (!loading && data) {
      data.docs.forEach((item) => {
        item.id = item.key.split('/').pop();
      });
      data.totalPages = data.num_found
        ? Math.floor(data.num_found / 100) + 1
        : 0;
      console.log('query:', query, ',page:', page);
      console.log('data: ', data);
    }
  }, [loading, data]);

  return (
    <div className='books-list'>
      {loading && page === 1 && <Preloader />}
      {loading && page > 1 && <PreloaderMini />}
      {error && <Error />}
      {data?.docs.length === 0 && query && !loading && <ZeroBook />}

      {(!loading || page > 1) && (
        <>
          <div className='books-list__container'>
            {data?.docs.map((book) => (
              <BookCard {...book} />
            ))}
          </div>
          {query && <BooksListInfo />}
        </>
      )}
    </div>
  );
};
