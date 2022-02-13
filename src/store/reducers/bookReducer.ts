import { BookAction, BookActionTypes, IBookState } from '../types/book';

const initialState: IBookState = {
  selectedBook: null,
  isSelected: false,
};

export const BookReducer = (
  state = initialState,
  action: BookAction
): IBookState => {
  switch (action.type) {
    case BookActionTypes.SELECT_BOOK:
      return { ...state, isSelected: true, selectedBook: action.payload };
    case BookActionTypes.DESELECT_BOOK:
      return { ...state, isSelected: false, selectedBook: null };
    default:
      return state;
  }
};
