import { IBooksData } from '../../interfaces/interfaces';

export interface IDataState {
  data: IBooksData | null;
  loading: boolean;
  error: string | null;
  page: number;
  querry: string;
}

export enum DataActionTypes {
  FETCH_DATA_LOADING = 'FETCH_DATA_LOADING',
  FETCH_DATA_SUCESS = 'FETCH_DATA_SUCESS',
  FETCH_DATA_ERROR = 'FETCH_DATA_ERROR',
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

export type DataAction =
  | FetchDataLoadingAction
  | FetchDataSucessAction
  | FetchDataErrorAction;
