import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as DataActionCreactors from '../store/action-creators/data';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(DataActionCreactors, dispatch);
};
