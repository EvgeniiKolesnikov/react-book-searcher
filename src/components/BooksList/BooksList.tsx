import { useTypedSelector } from '../../hooks/useTypedSelector';
import { BookCard, Error, Preloader, Scroll, ZeroBook } from '..';

import './BooksList.scss';
import { useEffect } from 'react';

export const BooksList: React.FC = () => {
  const { data, loading, error, query, page } = useTypedSelector(
    (state) => state.data
  );

  useEffect(() => {
    if (!loading) {
      console.log('data: ', data);
      console.log('query:', query, 'page:', page);
      data?.docs.forEach((item) => {
        item.id = item.key.split('/').pop();
      });
    }
  }, [loading]);

  return (
    <Scroll>
      <div className='books-list'>
        {loading && <Preloader />}
        {error && <Error error={error} />}
        {data?.docs.length === 0 && query && <ZeroBook />}
        <div className='books-list__container'>
          {data?.docs.map((book) => (
            <BookCard {...book} />
          ))}
        </div>
      </div>
    </Scroll>
  );
};
