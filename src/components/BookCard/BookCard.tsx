import { IBookCard } from '../../interfaces/interfaces';
import skin from '../../images/skin.png';
import './BookCard.scss';
import React from 'react';

export const BookCard: React.FC<IBookCard> = ({
  id,
  author_name,
  cover_i,
  isbn,
  title,
}) => {
  console.log(id);

  return (
    <div className='book-card' id={id}>
      <div className='book-card__img-container'>
        <img
          className='book-card__img'
          alt='book cover'
          src={
            cover_i
              ? `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg?default=false`
              : isbn
              ? `https://covers.openlibrary.org/b/isbn/${isbn[0]}-M.jpg?default=false`
              : skin
          }
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = skin;
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
};
