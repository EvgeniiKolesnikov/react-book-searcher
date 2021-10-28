import axios from 'axios';
import { Dispatch } from 'redux';
import { IBooksData } from '../../interfaces/interfaces';
import { DataAction, DataActionTypes } from '../types/data';

export const fetchData = (query = '', page = 1) => {
  const url = 'https://openlibrary.org/search.json';

  return async (dispatch: Dispatch<DataAction>) => {
    try {
      dispatch({ type: DataActionTypes.FETCH_DATA_LOADING });
      const response = await axios.get<IBooksData>(url, {
        params: { q: query, page: page },
      });
      dispatch({
        type: DataActionTypes.FETCH_DATA_SUCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: DataActionTypes.FETCH_DATA_ERROR,
        payload: `${error}`,
      });
    }
  };
};

export function setDataQuery(query: string): DataAction {
  return { type: DataActionTypes.SET_DATA_QUERY, payload: query}
}

export function setDataPage(page: number): DataAction {
  return { type: DataActionTypes.SET_DATA_PAGE, payload: page}
}
