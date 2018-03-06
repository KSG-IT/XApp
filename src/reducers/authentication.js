import {
  LOG_IN_SUCCESS, LOG_OUT_SUCCESS
} from '../actions/constants';

const initialState = {
  loggedIn: false,
  errorMessage: null,
  destination: "Home",
};

function authentication(state = initialState, action) {
  if (action.type === LOG_IN_SUCCESS) {
    return {
      ...state,
      loggedIn: true,
    }
  } else if (action.type === LOG_OUT_SUCCESS) {
    return {
      ...state,
      loggedIn: false,
    }
  }

  return state;
}

export default authentication;
