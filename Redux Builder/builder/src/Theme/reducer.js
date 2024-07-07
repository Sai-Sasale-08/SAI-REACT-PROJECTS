import { SWITCH_THEME } from "../actionType";


const initialState = 'light';

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_THEME:
      return action.payload;
    default:
      return state;
  }
};