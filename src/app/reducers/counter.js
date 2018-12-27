import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions';

const initialState = {
  value: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        value: ++state.value
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        value: state.value ? --state.value : 0
      };
    default:
      return state;
  }
};
