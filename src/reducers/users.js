import { LOAD_USER_SUCCESS } from "../actions/constants";

const initialState = {
  purchaser: null,
};

function users(state = initialState, action) {
  if (action.type === LOAD_USER_SUCCESS) {
    return {
      ...state,
      purchaser: action.payload,
    }
  }

  return state;
}

export default users;
