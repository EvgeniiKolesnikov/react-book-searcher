import axios, { CancelTokenSource } from 'axios';
import { Dispatch } from 'redux';
import { IBooksData } from '../../interfaces/interfaces';
import { DataAction, DataActionTypes } from '../types/data';

// declare an ajax request's cancelToken (globally)
let ajaxRequest: CancelTokenSource | null = null;

export const fetchData = (query = '', page = 0) => {
  const url = 'https://openlibrary.org/search.json';
  return async (dispatch: Dispatch<DataAction>) => {
    try {
      // cancel  previous ajax if exists
      if (ajaxRequest) {
        ajaxRequest.cancel();
      }
      // creates a new token for upcomming ajax (overwrite the previous one)
      ajaxRequest = axios.CancelToken.source();

      dispatch({ type: DataActionTypes.FETCH_DATA_LOADING });
      const response = await axios.get<IBooksData>(url, {
        params: { q: query, page: page },
        cancelToken: ajaxRequest.token,
      });
      dispatch({
        type: DataActionTypes.FETCH_DATA_SUCESS,
        payload: response.data,
      });
    } catch (error) {
      if (axios.isCancel(error)) {
        // console.log(`Previous request canceled, new request is send`);
      } else {
        dispatch({
          type: DataActionTypes.FETCH_DATA_ERROR,
          payload: `${error}`,
        });
      }
    }
  };
};

export function setDataQuery(query: string): DataAction {
  return { type: DataActionTypes.SET_DATA_QUERY, payload: query };
}

export function setDataPage(page: number): DataAction {
  return { type: DataActionTypes.SET_DATA_PAGE, payload: page };
}
