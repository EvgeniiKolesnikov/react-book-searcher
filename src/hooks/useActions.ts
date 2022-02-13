import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as DataActionCreactors from '../store/action-creators/data';
import * as BookActionCreactors from '../store/action-creators/book';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(
    { ...DataActionCreactors, ...BookActionCreactors },
    dispatch
  );
};
