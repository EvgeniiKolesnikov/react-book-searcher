import { DataAction, DataActionTypes, IDataState } from '../types/data';
import _ from 'lodash';

const initialState: IDataState = {
  data: null,
  loading: false,
  error: null,
  page: 0,
  query: '',
};

export const DataReducer = (
  state = initialState,
  action: DataAction
): IDataState => {
  const customizer = (obj1: IDataState, obj2: IDataState) => {
    if (_.isArray(obj1)) return _.concat(obj1, obj2);
  };

  switch (action.type) {
    case DataActionTypes.FETCH_DATA_LOADING:
      return { ...state, loading: true, error: null };
    case DataActionTypes.FETCH_DATA_SUCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data:
          state.page === 1
            ? action.payload
            : _.mergeWith(state.data, action.payload, customizer),
      };
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
