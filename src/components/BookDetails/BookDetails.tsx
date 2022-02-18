import { IBookCard } from '../../interfaces/interfaces';
import bookCover from '../../images/book_cover.png';
import './BookDetails.scss';
import React from 'react';

export const BookDetails: React.FC<IBookCard> = ({ book }): JSX.Element => {
  const { author_name, cover_i, isbn, title, first_publish_year, publisher } =
    book;

  return (
    <article className='book-details' onClick={(e) => e.stopPropagation()}>
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
        {title && <div className='book-details__title'>{title}</div>}
        {author_name && (
          <div className='book-details__author'>{author_name.join(', ')}</div>
        )}
        {first_publish_year && (
          <div className='book-details__other'>
            Первая публикация: {first_publish_year} г.
          </div>
        )}
        {publisher && (
          <div className='book-details__other'>
            Издатель: {publisher.join(', ')}
          </div>
        )}
        {isbn && (
          <div className='book-details__other'>ISBN: {isbn.join(', ')}</div>
        )}
      </div>
    </article>
  );
};
