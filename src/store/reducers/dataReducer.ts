import { DataAction, DataActionTypes, IDataState } from '../types/data';

const initialState: IDataState = {
  data: null,
  loading: false,
  error: null,
  page: 1,
  query: '',
};

export const DataReducer = (
  state = initialState,
  action: DataAction
): IDataState => {
  switch (action.type) {
    case DataActionTypes.FETCH_DATA_LOADING:
      return { ...state, loading: true, error: null, data: null };
    case DataActionTypes.FETCH_DATA_SUCESS:
      return { ...state, loading: false, error: null, data: action.payload };
    case DataActionTypes.FETCH_DATA_ERROR:
      return { ...state, loading: false, error: action.payload, data: null };
    case DataActionTypes.SET_DATA_QUERY:
      return { ...state, query: action.payload };
    case DataActionTypes.SET_DATA_PAGE:
      return { ...state, page: action.payload };
    default:
      return state;
  }
};
