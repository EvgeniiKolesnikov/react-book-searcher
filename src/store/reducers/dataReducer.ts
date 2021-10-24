import { DataAction, DataActionTypes, IDataState } from '../types/data';

const initialState: IDataState = {
  data: null,
  loading: false,
  error: null,
  page: 1,
  querry: 'к'
};

export const DataReducer = (
  state = initialState,
  action: DataAction
): IDataState => {
  switch (action.type) {
    case DataActionTypes.FETCH_DATA_LOADING:
      return {...state, loading: true, error: null, data: null };
    case DataActionTypes.FETCH_DATA_SUCESS:
      return {...state,  loading: false, error: null, data: action.payload };
    case DataActionTypes.FETCH_DATA_ERROR:
      return {...state,  loading: false, error: action.payload, data: null };
    default:
      return state;
  }
};
