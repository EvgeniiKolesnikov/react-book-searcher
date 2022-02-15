import { IBookCard } from '../../interfaces/interfaces';
import bookCover from '../../images/book_cover.png';
import './BookDetails.scss';
import React from 'react';

export const BookDetails: React.FC<IBookCard> = ({ book }): JSX.Element => {
  const { author_name, cover_i, isbn, title, first_publish_year } = book;

  console.log('render BookDetails');

  return (
    <div className='book-details' onClick={(e) => e.stopPropagation()}>
      <div
        className='book-details__img-container unselectable'
        unselectable='on'
      >
        <img
          className='book-details__img'
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
      <div className='book-details__description'>
        {/* <div className='book-details__name'>Название:</div>{' '} */}
        <div className='book-details__title'>{title}</div>
        {author_name && (
          <div className='book-details__author'>{author_name.join(', ')}</div>
        )}
        {first_publish_year && (
          <div className='book-details__publish_year'>
            Первая публикация: {first_publish_year} г.
          </div>
        )}
      </div>
    </div>
  );
};
