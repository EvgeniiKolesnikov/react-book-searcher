import './BookModal.scss';
import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import { BookDetails } from '..';

export const BookModal: React.FC = (): JSX.Element => {
  const { deselectBook } = useActions();
  const { selectedBook, isSelected } = useTypedSelector((state) => state.book);

  const clickHandler = () => {
    deselectBook();
    console.log('deselectBook, close modal');
  };

  console.log('render BookModal');

  return (
    <aside
      className={`book-modal ${isSelected ? '' : 'hidden'}`}
      onClick={clickHandler}
    >
      <div className='book-modal__container'>
        <div className='book-modal__close'>
          <div className='book-modal__close-img' />
        </div>
        {selectedBook && <BookDetails book={selectedBook} />}
      </div>
    </aside>
  );
};
