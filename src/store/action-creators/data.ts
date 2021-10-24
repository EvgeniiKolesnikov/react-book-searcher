import axios from 'axios';
import { Dispatch } from 'redux';
import { IBooksData } from '../../interfaces/interfaces';
import { DataAction, DataActionTypes } from '../types/data';

export const fetchData = () => {
  const url = 'https://openlibrary.org';
  const querry = 'к';
  const page = '1';

  return async (dispatch: Dispatch<DataAction>) => {
    try {
      dispatch({ type: DataActionTypes.FETCH_DATA_LOADING });
      const response = await axios.get<IBooksData>(`${url}/search.json?q=${querry}&page=${page}`);
      dispatch({
        type: DataActionTypes.FETCH_DATA_SUCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: DataActionTypes.FETCH_DATA_ERROR,
        payload: `Ошибка загрузки данных: ${error}`,
      });
    }
  };
};
