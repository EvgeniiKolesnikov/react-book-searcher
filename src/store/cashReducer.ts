// action = {type: '', payload: '?'}

const defaultState = {
  cash: 5
}

export const cashReducer = (
  state = defaultState,
  action: { type: string; payload: number }
) => {
  switch (action.type) {
    case 'ADD_CASH':
      return { ...state, cash: state.cash + action.payload };
    case 'GET_CASH':
      return { ...state, cash: state.cash - action.payload };
    default:
      return state;
  }
};