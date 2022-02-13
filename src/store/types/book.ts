import { IBook } from '../../interfaces/interfaces';

export interface IBookState {
  selectedBook: IBook | null;
  isSelected: boolean;
}

export enum BookActionTypes {
  SELECT_BOOK = 'SELECT_BOOK',
  DESELECT_BOOK = 'DESELECT_BOOK',
}

interface SelectBook {
  type: BookActionTypes.SELECT_BOOK;
  payload: IBook;
}
interface DeselectBook {
  type: BookActionTypes.DESELECT_BOOK;
}

export type BookAction = SelectBook | DeselectBook;
