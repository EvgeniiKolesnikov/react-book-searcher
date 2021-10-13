import { BookCard, Scroll } from '..';
import { IBooksList } from '../../interfaces/interfaces';
import styles from './BooksList.module.scss';

export const BooksList: React.FC<IBooksList> = ({ booksList }) => {
  return (
    <div className={styles['books-list']}>
      <Scroll>
        <div className={styles['books-list__container']}>
          {booksList.map((book) => (
            <BookCard {...book} />
          ))}
        </div>
      </Scroll>
    </div>
  );
};
