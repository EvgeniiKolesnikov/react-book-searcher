import { useEffect } from 'react';
import { BookCard, Preloader, Scroll } from '..';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Error } from '../Error/Error';
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
    <div className='books-list'>
      <Scroll>
        <div className='books-list__container'>
          {loading && <Preloader />}
          {error && <Error error={error} />}
          {data?.docs.map((book) => (
            <BookCard {...book} />
          ))}
        </div>
      </Scroll>
    </div>
  );
};
