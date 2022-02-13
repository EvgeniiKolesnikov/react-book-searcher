import { IBook } from '../../interfaces/interfaces';
import { BookAction, BookActionTypes } from '../types/book';

export const selectBook = (selectedBook: IBook): BookAction => {
  return { type: BookActionTypes.SELECT_BOOK, payload: selectedBook };
};

export const deselectBook = (): BookAction => {
  return { type: BookActionTypes.DESELECT_BOOK };
};
