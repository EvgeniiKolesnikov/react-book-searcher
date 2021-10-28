import { IBooksData } from '../../interfaces/interfaces';

export interface IDataState {
  data: IBooksData | null;
  loading: boolean;
  error: string | null;
  page: number;
  query: string;
}

export enum DataActionTypes {
  FETCH_DATA_LOADING = 'FETCH_DATA_LOADING',
  FETCH_DATA_SUCESS = 'FETCH_DATA_SUCESS',
  FETCH_DATA_ERROR = 'FETCH_DATA_ERROR',
  SET_DATA_QUERY = 'SET_DATA_QUERY',
  SET_DATA_PAGE = 'SET_DATA_PAGE',
}

interface FetchDataLoadingAction {
  type: DataActionTypes.FETCH_DATA_LOADING;
}
interface FetchDataSucessAction {
  type: DataActionTypes.FETCH_DATA_SUCESS;
  payload: IBooksData;
}
interface FetchDataErrorAction {
  type: DataActionTypes.FETCH_DATA_ERROR;
  payload: string;
}
interface SetDataQueryAction {
  type: DataActionTypes.SET_DATA_QUERY;
  payload: string;
}
interface SetDataPageAction {
  type: DataActionTypes.SET_DATA_PAGE;
  payload: number;
}

export type DataAction =
  | FetchDataLoadingAction
  | FetchDataSucessAction
  | FetchDataErrorAction
  | SetDataQueryAction
  | SetDataPageAction;
