import { IBookCard } from '../../interfaces/interfaces';
import skin from '../../images/skin.png';
import styles from './BookCard.module.scss';
import React from 'react';

export const BookCard: React.FC<IBookCard> = ({
  id,
  author_name,
  cover_i,
  isbn,
  title,
}) => {
  return (
    <div className={styles['book-card']} id={id}>
      <div className={styles['book-card__container']}>
        <img
          className={styles['book-card__img']}
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
        <div className={styles['book-card__header']}>
          <span className={styles['book-card__title']}>{title}</span>
          {author_name && (
            <div className={styles['book-card__author']}>{author_name.join(", ")}</div>
          )}
        </div>
      </div>
    </div>
  );
};
