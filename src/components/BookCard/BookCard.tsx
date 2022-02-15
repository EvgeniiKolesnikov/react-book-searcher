import { IBookCard } from '../../interfaces/interfaces';
import bookCover from '../../images/book_cover.png';
import './BookCard.scss';
import React from 'react';
import { useActions } from '../../hooks/useActions';

export const BookCard: React.FC<IBookCard> = React.memo(
  ({ book }): JSX.Element => {
    const { author_name, cover_i, isbn, title } = book;
    const { selectBook } = useActions();

    const clickHandler = () => {
      selectBook(book);
    };

    return (
      <div className='book-card' onClick={clickHandler}>
        <div className='book-card__img-container'>
          <img
            className='book-card__img'
            alt='book cover'
            src={
              cover_i
                ? `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg?default=false`
                : isbn
                ? `https://covers.openlibrary.org/b/isbn/${isbn[0]}-M.jpg?default=false`
                : bookCover
            }
            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = bookCover;
            }}
          />
        </div>
        <div className='book-card__description'>
          <div className='book-card__title'>{title}</div>
          {author_name && (
            <div className='book-card__author'>{author_name.join(', ')}</div>
          )}
        </div>
      </div>
    );
  }
);
