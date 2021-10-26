import { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { BookCard, Error, Preloader, Scroll } from '..';

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
      <div className='books-list__spacer' />
        <div className='books-list__container'>
          {loading && <Preloader />}
          {error && <Error error={error} />}
          {data?.docs.map((book) => (
            <BookCard {...book} />
          ))}
        </div>
      </div>
    </Scroll>
  );
};
