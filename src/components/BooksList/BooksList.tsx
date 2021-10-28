import { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { BookCard, Error, Preloader, Scroll, ZeroBook } from '..';

import './BooksList.scss';

export const BooksList: React.FC = () => {
  const { data, loading, error } = useTypedSelector((state) => state.data);
  const { fetchData } = useActions();

  console.log('data: ', data);
  console.log('loading: ', loading);
  console.log('error: ', error);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Scroll>
      <div className='books-list'>
        {loading && <Preloader />}
        {error && <Error error={error} />}
        {data?.docs.length === 0 && <ZeroBook />}
        <div className='books-list__container'>
          {data?.docs.map((book) => (
            <BookCard {...book} />
          ))}
        </div>
      </div>
    </Scroll>
  );
};
